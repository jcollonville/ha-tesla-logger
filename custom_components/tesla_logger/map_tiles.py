"""Same-origin basemap proxy for the Lovelace card.

The browser only requests ``/api/tesla_logger/map/…``. This view fetches
OpenFreeMap (Positron and Dark, the styles the Tesla Logger console uses),
caches the body under ``config/tesla_logger/map_cache``, and rewrites style
JSON so later tile, glyph, and sprite URLs stay on Home Assistant.

MapLibre loads those resources with ``fetch``. ``transformRequest`` in the card
adds ``Authorization: Bearer`` from ``hass.auth``. A signed ``auth/sign_path``
URL would have to be minted again for every ``{z}/{x}/{y}`` and would expire
while the map is open. ``requires_auth`` on this view accepts that bearer
header. The upstream request never receives it.

Paths outside the two styles are rejected, so this is not an open proxy.
Tile paths name a place and are not logged.
"""

from __future__ import annotations

import asyncio
import hashlib
import json
import logging
import re
import time
from collections.abc import Callable
from dataclasses import dataclass
from pathlib import Path

from aiohttp import ClientError, ClientSession, ClientTimeout, TCPConnector, web
from aiohttp.resolver import ThreadedResolver
from homeassistant.components.http import KEY_HASS, HomeAssistantView
from homeassistant.const import EVENT_HOMEASSISTANT_STARTED
from homeassistant.core import Event, HomeAssistant, callback
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from yarl import URL

from .const import CARD_VERSION, DOMAIN

_LOGGER = logging.getLogger(__name__)

UPSTREAM = "https://tiles.openfreemap.org"
LOCAL_PREFIX = "/api/tesla_logger/map/"
MAX_BYTES = 2 * 1024 * 1024
MEMORY_CAP = 128
DISK_CAP = 4_000
TILE_TTL = 7 * 24 * 3600
STYLE_TTL = 6 * 3600
MISS_TTL = 600
USER_AGENT = f"ha-tesla-logger/{CARD_VERSION} (+https://github.com/jcollonville/ha-tesla-logger)"
_JSON = "application/json"
_PNG = "image/png"
_PBF = "application/vnd.mapbox-vector-tile"
_KINDS = {_JSON, _PNG, _PBF}
_URL_HOST = re.compile(r"https?://")


class TileError(Exception):
    """The proxy will not serve this path."""

    def __init__(self, status: int) -> None:
        self.status = status
        super().__init__(status)


@dataclass(frozen=True, slots=True)
class Tile:
    """One cached basemap response."""

    body: bytes
    content_type: str
    etag: str | None
    cache_control: str


@dataclass(frozen=True, slots=True)
class _Stored:
    body: bytes
    content_type: str
    etag: str | None
    expires_at: float


def normalize_tile_path(raw: str) -> str | None:
    """Return a single relative path, or None when it could escape the allow-list."""
    if not isinstance(raw, str) or not raw or len(raw) > 240:
        return None
    if "\\" in raw or "\0" in raw or "?" in raw or "#" in raw or "://" in raw:
        return None
    if raw.startswith("/"):
        raw = raw[1:]
        if not raw or raw.startswith("/"):
            return None
    out: list[str] = []
    index = 0
    while index < len(raw):
        if raw[index] == "%":
            hex_part = raw[index + 1 : index + 3]
            if len(hex_part) != 2:
                return None
            try:
                byte = int(hex_part, 16)
            except ValueError:
                return None
            if byte < 0x20 or byte > 0x7E or byte in (ord("/"), ord("\\")):
                return None
            out.append(chr(byte))
            index += 3
            continue
        code = ord(raw[index])
        if code < 0x20 or code > 0x7E:
            return None
        out.append(raw[index])
        index += 1
    text = "".join(out)
    if any(part in {"", ".", ".."} for part in text.split("/")):
        return None
    return text


def tile_path_allowed(path: str) -> bool:
    """True for the Positron and Dark styles and the assets they reference."""
    parts = path.split("/")
    match parts:
        case ["styles", style]:
            return style in {"positron", "dark"}
        case ["planet"]:
            return True
        case ["fonts", stack, font_range]:
            return _font_stack(stack) and _font_range(font_range)
        case ["sprites", sprite, filename]:
            return _sprite_id(sprite) and filename in {
                "ofm.json",
                "ofm.png",
                "ofm@2x.json",
                "ofm@2x.png",
            }
        case ["planet", stamp, z, x, filename]:
            return _planet_stamp(stamp) and _tile_file(z, x, filename, 14, "pbf")
        case ["natural_earth", "ne2sr", z, x, filename]:
            return _tile_file(z, x, filename, 6, "png")
        case _:
            return False


def rewrite_style(body: bytes, base: str) -> bytes | None:
    """Point fetched style and TileJSON URLs at this proxy.

    Attribution links are left as text. A tile, glyph, sprite, or source URL
    that still names a host is rejected so the browser cannot be sent there.
    """
    try:
        data = json.loads(body)
    except (UnicodeError, json.JSONDecodeError):
        return None
    if not isinstance(data, dict):
        return None
    try:
        _rewrite_fetched_urls(data, base.rstrip("/"))
    except ValueError:
        return None
    return json.dumps(data, ensure_ascii=False, separators=(",", ":")).encode()


def _rewrite_one_url(value: str, origin: str) -> str:
    updated = value.replace(f"{origin}/", LOCAL_PREFIX)
    updated = updated.replace("https://tiles.openfreemap.org/", LOCAL_PREFIX)
    updated = updated.replace("http://tiles.openfreemap.org/", LOCAL_PREFIX)
    if _URL_HOST.search(updated):
        raise ValueError("tile url still has a host")
    return updated


def _rewrite_fetched_urls(data: dict[str, object], origin: str) -> None:
    tiles = data.get("tiles")
    if isinstance(tiles, list):
        rewritten: list[object] = []
        for item in tiles:
            if not isinstance(item, str):
                raise ValueError("tile url")
            rewritten.append(_rewrite_one_url(item, origin))
        data["tiles"] = rewritten
    for key in ("sprite", "glyphs", "url"):
        value = data.get(key)
        if isinstance(value, str):
            data[key] = _rewrite_one_url(value, origin)
    sources = data.get("sources")
    if isinstance(sources, dict):
        for source in sources.values():
            if isinstance(source, dict):
                _rewrite_fetched_urls(source, origin)


def _font_stack(value: str) -> bool:
    if not value or len(value) > 80:
        return False
    return all(char.isalnum() or char in " ,_-" for char in value)


def _font_range(value: str) -> bool:
    body = value.removesuffix(".pbf")
    if body == value or "-" not in body:
        return False
    start_text, end_text = body.split("-", 1)
    if not start_text.isdigit() or not end_text.isdigit():
        return False
    start = int(start_text)
    end = int(end_text)
    return start < end and end <= 65_536 and start % 256 == 0


def _sprite_id(value: str) -> bool:
    return bool(value) and len(value) <= 32 and all(char.isalnum() or char == "_" for char in value)


def _planet_stamp(value: str) -> bool:
    day, sep, rest = value.partition("_")
    clock, sep2, tag = rest.partition("_")
    return (
        bool(sep and sep2)
        and tag == "pt"
        and len(day) == 8
        and len(clock) == 6
        and day.isdigit()
        and clock.isdigit()
    )


def _tile_file(z: str, x: str, filename: str, max_z: int, extension: str) -> bool:
    suffix = f".{extension}"
    if not filename.endswith(suffix) or not z.isdigit() or not x.isdigit():
        return False
    y_text = filename[: -len(suffix)]
    if not y_text.isdigit():
        return False
    z_num = int(z)
    x_num = int(x)
    y_num = int(y_text)
    if z_num > max_z:
        return False
    span = 1 << z_num
    return x_num < span and y_num < span


def _kind(path: str) -> str:
    if path.endswith(".png"):
        return _PNG
    if path.endswith(".pbf"):
        return _PBF
    return _JSON


def _ttl(path: str) -> int:
    if path == "planet" or path.startswith("styles/"):
        return STYLE_TTL
    return TILE_TTL


def _cache_control(path: str) -> str:
    if path == "planet" or path.startswith("styles/"):
        return "private, max-age=3600"
    return "private, max-age=604800"


def _safe_etag(value: str | None) -> str | None:
    if value is None:
        return None
    cleaned = value.strip()
    if not cleaned or len(cleaned) > 256 or any(ord(char) < 32 for char in cleaned):
        return None
    return cleaned


def _upstream_url(base: str, path: str) -> URL | None:
    root = URL(base)
    if root.scheme not in {"http", "https"} or not root.host:
        return None
    url = root
    for part in path.split("/"):
        url = url / part
    if url.host != root.host:
        return None
    return url


def _body_ok(path: str, body: bytes, base: str) -> bytes | None:
    kind = _kind(path)
    if kind == _PNG:
        if body.startswith(b"\x89PNG\r\n\x1a\n"):
            return body
        return None
    if kind == _PBF:
        head = body.lstrip()[:1]
        if body and head not in {b"<", b"{", b"["}:
            return body
        return None
    return rewrite_style(body, base)


class MapTileCache:
    """Memory plus a bounded disk cache. The session must not follow redirects."""

    def __init__(
        self,
        directory: Path,
        base: str = UPSTREAM,
        *,
        session: ClientSession | None = None,
        now: Callable[[], float] | None = None,
        max_bytes: int = MAX_BYTES,
        max_files: int = DISK_CAP,
    ) -> None:
        self._directory = directory
        self._base = str(base).rstrip("/")
        self._session = session
        self._owned: ClientSession | None = None
        self._now = now or time.time
        self._max_bytes = max_bytes
        self._max_files = max_files
        self._memory: dict[str, _Stored] = {}
        self._order: list[str] = []
        self._missing_until: dict[str, float] = {}
        self._locks: dict[str, asyncio.Lock] = {}
        self._gate = asyncio.Semaphore(4)

    async def close(self) -> None:
        """Close a session this cache created. Home Assistant's session stays open."""
        if self._owned is not None:
            await self._owned.close()
            self._owned = None

    async def get(self, raw: str) -> Tile:
        """Return a tile, or raise TileError (404 denied/missing, 502 upstream)."""
        path = normalize_tile_path(raw)
        if path is None or not tile_path_allowed(path):
            raise TileError(404)
        async with self._lock(path):
            fresh = self._memory_fresh(path)
            if fresh is None:
                fresh = await asyncio.to_thread(self._read_fresh, path)
                if fresh is not None:
                    self._remember(path, fresh)
            if fresh is not None:
                return self._public(path, fresh)
            if self._missing_until.get(path, 0) > self._now():
                raise TileError(404)
            stale = self._memory.get(path)
            if stale is None:
                stale = await asyncio.to_thread(self._read_any, path)
            try:
                async with self._gate:
                    again = self._memory_fresh(path)
                    if again is not None:
                        return self._public(path, again)
                    stored = await self._fetch(path, stale)
            except TileError as err:
                if err.status == 404:
                    self._missing_until[path] = self._now() + MISS_TTL
                    raise
                if stale is not None:
                    return await self._refresh_stale(path, stale)
                raise
            except (ClientError, TimeoutError, OSError) as err:
                _LOGGER.debug("basemap upstream failed (%s)", type(err).__name__)
                if stale is not None:
                    return await self._refresh_stale(path, stale)
                raise TileError(502) from err
            self._missing_until.pop(path, None)
            self._remember(path, stored)
            await asyncio.to_thread(self._write, path, stored)
            return self._public(path, stored)

    def _lock(self, path: str) -> asyncio.Lock:
        lock = self._locks.get(path)
        if lock is None:
            lock = asyncio.Lock()
            self._locks[path] = lock
        return lock

    def _memory_fresh(self, path: str) -> _Stored | None:
        stored = self._memory.get(path)
        if stored is not None and stored.expires_at > self._now():
            return stored
        return None

    def _remember(self, path: str, stored: _Stored) -> None:
        if path in self._order:
            self._order.remove(path)
        elif len(self._memory) >= MEMORY_CAP and self._order:
            self._memory.pop(self._order.pop(0), None)
        self._order.append(path)
        self._memory[path] = stored

    async def _refresh_stale(self, path: str, stale: _Stored) -> Tile:
        """Upstream failed. Keep the previous bytes and do not retry until the TTL."""
        _LOGGER.debug("basemap served a cached copy after an upstream error")
        refreshed = _Stored(stale.body, stale.content_type, stale.etag, self._now() + _ttl(path))
        self._remember(path, refreshed)
        await asyncio.to_thread(self._write, path, refreshed)
        return self._public(path, refreshed)

    async def _fetch(self, path: str, stale: _Stored | None) -> _Stored:
        url = _upstream_url(self._base, path)
        if url is None:
            raise TileError(404)
        headers = {"User-Agent": USER_AGENT, "Accept": "*/*"}
        if stale is not None and stale.etag:
            headers["If-None-Match"] = stale.etag
        session = await self._client()
        timeout = ClientTimeout(total=12)
        async with session.get(
            url, headers=headers, allow_redirects=False, timeout=timeout
        ) as response:
            status = response.status
            etag = _safe_etag(response.headers.get("ETag"))
            if status in {301, 302, 303, 307, 308}:
                raise TileError(502)
            if status == 404:
                raise TileError(404)
            if status == 304 and stale is not None:
                return _Stored(stale.body, stale.content_type, stale.etag, self._now() + _ttl(path))
            if status != 200:
                raise TileError(502)
            announced = response.content_length
            if announced is not None and announced > self._max_bytes:
                raise TileError(502)
            body = await response.content.read(self._max_bytes + 1)
        if len(body) > self._max_bytes:
            raise TileError(502)
        checked = _body_ok(path, body, self._base)
        if checked is None:
            raise TileError(502)
        return _Stored(checked, _kind(path), etag, self._now() + _ttl(path))

    async def _client(self) -> ClientSession:
        if self._session is not None:
            return self._session
        if self._owned is None:
            # aiodns in the test env breaks hostname lookup. The threaded
            # resolver uses the system resolver. Home Assistant passes its own session.
            self._owned = ClientSession(connector=TCPConnector(resolver=ThreadedResolver()))
        return self._owned

    def _public(self, path: str, stored: _Stored) -> Tile:
        return Tile(stored.body, stored.content_type, stored.etag, _cache_control(path))

    def _file(self, path: str) -> tuple[Path, Path]:
        digest = hashlib.sha256(path.encode()).hexdigest()
        return self._directory / digest, self._directory / f"{digest}.meta"

    def _read_fresh(self, path: str) -> _Stored | None:
        stored = self._read_any(path)
        if stored is not None and stored.expires_at > self._now():
            return stored
        return None

    def _read_any(self, path: str) -> _Stored | None:
        body_path, meta_path = self._file(path)
        if not meta_path.is_file() or not body_path.is_file():
            return None
        try:
            meta = json.loads(meta_path.read_text(encoding="utf-8"))
            body = body_path.read_bytes()
        except (OSError, UnicodeError, json.JSONDecodeError, TypeError):
            return None
        if not isinstance(meta, dict) or len(body) > self._max_bytes:
            return None
        content_type = meta.get("content_type")
        expires_at = meta.get("expires_at")
        etag = meta.get("etag")
        if content_type not in _KINDS or not isinstance(expires_at, int | float):
            return None
        if etag is not None and not isinstance(etag, str):
            return None
        if _body_ok(path, body, self._base) is None:
            return None
        return _Stored(body, content_type, _safe_etag(etag), float(expires_at))

    def _write(self, path: str, stored: _Stored) -> None:
        self._directory.mkdir(parents=True, exist_ok=True)
        body_path, meta_path = self._file(path)
        temporary = body_path.with_suffix(".tmp")
        temporary.write_bytes(stored.body)
        temporary.replace(body_path)
        payload = {
            "content_type": stored.content_type,
            "etag": stored.etag,
            "expires_at": stored.expires_at,
        }
        temporary_meta = meta_path.with_suffix(".meta.tmp")
        temporary_meta.write_text(json.dumps(payload), encoding="utf-8")
        temporary_meta.replace(meta_path)
        self._trim()

    def _trim(self) -> None:
        if not self._directory.is_dir():
            return
        bodies = [
            path
            for path in self._directory.iterdir()
            if path.is_file() and not path.name.endswith((".meta", ".tmp"))
        ]
        if len(bodies) <= self._max_files:
            return
        bodies.sort(key=lambda path: path.stat().st_mtime)
        extra = len(bodies) - self._max_files
        for path in bodies[:extra]:
            path.unlink(missing_ok=True)
            Path(f"{path}.meta").unlink(missing_ok=True)


def async_register_map_view(hass: HomeAssistant) -> None:
    """Register the basemap view once the HTTP server exists."""
    data = hass.data.setdefault(DOMAIN, {})
    if data.get("map_view_registered"):
        return
    http = getattr(hass, "http", None)
    if http is None or getattr(http, "app", None) is None:
        if not data.get("map_view_listener"):
            data["map_view_listener"] = True

            @callback
            def _on_start(_event: Event) -> None:
                async_register_map_view(hass)

            hass.bus.async_listen_once(EVENT_HOMEASSISTANT_STARTED, _on_start)
        return
    if "map_cache" not in data:
        data["map_cache"] = MapTileCache(
            Path(hass.config.path("tesla_logger", "map_cache")),
            session=async_get_clientsession(hass),
        )
    http.register_view(TeslaLoggerMapView())
    data["map_view_registered"] = True


class TeslaLoggerMapView(HomeAssistantView):
    """Proxy one allow-listed basemap path. Home Assistant authenticates the caller."""

    url = "/api/tesla_logger/map/{path:.*}"
    name = "api:tesla_logger:map"
    requires_auth = True

    async def get(self, request: web.Request, path: str) -> web.Response:
        """Serve a cached style, tile, glyph, or sprite."""
        hass: HomeAssistant = request.app[KEY_HASS]
        cache = hass.data.get(DOMAIN, {}).get("map_cache")
        if not isinstance(cache, MapTileCache):
            return web.Response(status=404)
        try:
            tile = await cache.get(path)
        except TileError as err:
            if err.status == 404:
                return web.Response(status=404, headers={"Cache-Control": "private, max-age=600"})
            return web.Response(status=502, headers={"Cache-Control": "no-store"})
        headers = {
            "Cache-Control": tile.cache_control,
            "X-Content-Type-Options": "nosniff",
        }
        if tile.etag:
            headers["ETag"] = tile.etag
            if _if_none_match(request.headers.get("If-None-Match"), tile.etag):
                return web.Response(status=304, headers=headers)
        return web.Response(body=tile.body, content_type=tile.content_type, headers=headers)


def _if_none_match(header: str | None, etag: str) -> bool:
    if not header:
        return False
    if header.strip() == "*":
        return True
    return etag in {part.strip() for part in header.split(",")}
