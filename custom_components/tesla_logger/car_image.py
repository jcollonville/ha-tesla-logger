"""Cached official car render, served to the Lovelace card on a same-origin path."""

from __future__ import annotations

import asyncio
import hashlib
import json
import logging
import re
import time
from collections.abc import Awaitable, Callable
from dataclasses import dataclass
from pathlib import Path

from aiohttp import web
from homeassistant.components.http import KEY_HASS, HomeAssistantView
from homeassistant.const import EVENT_HOMEASSISTANT_STARTED
from homeassistant.core import Event, HomeAssistant, callback

from .api import CarImageUpstream, TeslaLoggerApiError, png_is_complete
from .const import DOMAIN

_LOGGER = logging.getLogger(__name__)

# A fresh PNG is revalidated with If-None-Match at most once a day.
REVALIDATE_SECONDS = 86_400
# A 404 is remembered for a shorter window so a newly generated render can appear.
NEGATIVE_SECONDS = 6 * 60 * 60
_ENTRY_ID = re.compile(r"[A-Za-z0-9_-]{1,128}")
_VEHICLE_ID = re.compile(r"[0-9]{1,12}")

FetchCarImage = Callable[[int, str | None], Awaitable[CarImageUpstream]]


@dataclass(frozen=True, slots=True)
class CachedCarImage:
    """Bytes the view can serve. `missing` tells the card to use the SVG."""

    content: bytes | None
    etag: str | None
    missing: bool
    fetched_at: float


@dataclass(frozen=True, slots=True)
class _Stored:
    content: bytes | None
    etag: str | None
    missing: bool
    fetched_at: float


def cache_directory(root: Path, entry_id: str) -> Path:
    """Return a cache directory named from the config entry, never from a VIN."""
    if _ENTRY_ID.fullmatch(entry_id):
        name = entry_id
    else:
        name = hashlib.sha256(entry_id.encode()).hexdigest()
    return root / name


def _safe_etag(value: str | None) -> str | None:
    if value is None:
        return None
    cleaned = value.strip()
    if not cleaned or len(cleaned) > 256 or any(ord(char) < 32 for char in cleaned):
        return None
    return cleaned


def _public(stored: _Stored) -> CachedCarImage:
    return CachedCarImage(stored.content, stored.etag, stored.missing, stored.fetched_at)


def _usable(record: _Stored) -> bool:
    """A negative cache has no bytes. An image cache must be a finished PNG."""
    if record.missing:
        return record.content is None
    return record.content is not None and png_is_complete(record.content)


class CarImageCache:
    """Memory plus disk cache. The fetch callback owns the bearer token."""

    def __init__(
        self,
        directory: Path,
        fetch: FetchCarImage,
        *,
        now: Callable[[], float] | None = None,
    ) -> None:
        self._directory = directory
        self._fetch = fetch
        self.now = now or time.time
        self._memory: dict[int, _Stored] = {}
        self._locks: dict[int, asyncio.Lock] = {}

    def _lock(self, vehicle_id: int) -> asyncio.Lock:
        lock = self._locks.get(vehicle_id)
        if lock is None:
            lock = asyncio.Lock()
            self._locks[vehicle_id] = lock
        return lock

    async def get(self, vehicle_id: int) -> CachedCarImage:
        """Return a cached PNG, a negative result, or an empty miss when nothing is stored."""
        if isinstance(vehicle_id, bool) or not isinstance(vehicle_id, int) or vehicle_id < 0:
            return CachedCarImage(None, None, True, self.now())
        async with self._lock(vehicle_id):
            record = self._memory.get(vehicle_id)
            if record is not None and not _usable(record):
                self._memory.pop(vehicle_id, None)
                await asyncio.to_thread(self._discard, vehicle_id)
                record = None
            if record is None:
                record = await asyncio.to_thread(self._read, vehicle_id)
                if record is not None:
                    self._memory[vehicle_id] = record
            if record is not None and self._fresh(record):
                return _public(record)
            etag = record.etag if record is not None and record.content else None
            try:
                upstream = await self._fetch(vehicle_id, etag)
            except TeslaLoggerApiError as err:
                _LOGGER.debug(
                    "car image for vehicle %s failed (%s)",
                    vehicle_id,
                    type(err).__name__,
                )
                upstream = CarImageUpstream("unavailable")
            stored = await self._store(vehicle_id, record, upstream)
            if stored is None:
                return CachedCarImage(None, None, False, self.now())
            return _public(stored)

    def _fresh(self, record: _Stored) -> bool:
        limit = NEGATIVE_SECONDS if record.missing else REVALIDATE_SECONDS
        return self.now() - record.fetched_at < limit

    async def _store(
        self,
        vehicle_id: int,
        record: _Stored | None,
        upstream: CarImageUpstream,
    ) -> _Stored | None:
        now = self.now()
        etag = _safe_etag(upstream.etag)
        if upstream.kind == "image" and upstream.content and png_is_complete(upstream.content):
            stored = _Stored(upstream.content, etag, False, now)
        elif upstream.kind == "not_modified" and record is not None and record.content:
            stored = _Stored(record.content, etag or record.etag, False, now)
        elif upstream.kind == "missing":
            stored = _Stored(None, None, True, now)
        elif record is not None and record.content:
            # The daily check failed. Keep the bytes and do not try again until tomorrow.
            _LOGGER.debug("car image for vehicle %s kept from cache", vehicle_id)
            stored = _Stored(record.content, record.etag, False, now)
        else:
            _LOGGER.debug("car image for vehicle %s is unavailable", vehicle_id)
            return None
        await asyncio.to_thread(self._write, vehicle_id, stored)
        self._memory[vehicle_id] = stored
        return stored

    def _png_path(self, vehicle_id: int) -> Path:
        return self._directory / f"{vehicle_id}.png"

    def _meta_path(self, vehicle_id: int) -> Path:
        return self._directory / f"{vehicle_id}.json"

    def _read(self, vehicle_id: int) -> _Stored | None:
        meta_path = self._meta_path(vehicle_id)
        if not meta_path.is_file():
            return None
        try:
            raw = json.loads(meta_path.read_text(encoding="utf-8"))
        except (OSError, UnicodeError, json.JSONDecodeError, TypeError):
            return None
        if not isinstance(raw, dict):
            return None
        fetched_at = raw.get("fetched_at")
        missing = raw.get("missing")
        if not isinstance(fetched_at, int | float) or not isinstance(missing, bool):
            return None
        etag = raw.get("etag")
        if etag is not None and not isinstance(etag, str):
            return None
        content: bytes | None = None
        if not missing:
            try:
                content = self._png_path(vehicle_id).read_bytes()
            except OSError:
                self._discard(vehicle_id)
                return None
            if not png_is_complete(content):
                self._discard(vehicle_id)
                return None
        stored = _Stored(content, _safe_etag(etag), missing, float(fetched_at))
        if not _usable(stored):
            self._discard(vehicle_id)
            return None
        return stored

    def _discard(self, vehicle_id: int) -> None:
        """Delete a render and its sidecar. A bad cache must not be served again."""
        self._png_path(vehicle_id).unlink(missing_ok=True)
        self._meta_path(vehicle_id).unlink(missing_ok=True)

    def _write(self, vehicle_id: int, stored: _Stored) -> None:
        self._directory.mkdir(parents=True, exist_ok=True)
        png_path = self._png_path(vehicle_id)
        if stored.content is None:
            png_path.unlink(missing_ok=True)
        else:
            temporary = png_path.with_suffix(".png.tmp")
            temporary.write_bytes(stored.content)
            temporary.replace(png_path)
        payload = {
            "etag": stored.etag,
            "missing": stored.missing,
            "fetched_at": stored.fetched_at,
        }
        meta_path = self._meta_path(vehicle_id)
        temporary_meta = meta_path.with_suffix(".json.tmp")
        temporary_meta.write_text(json.dumps(payload), encoding="utf-8")
        temporary_meta.replace(meta_path)


def async_register_car_view(hass: HomeAssistant) -> None:
    """Register the image view once the HTTP server exists."""
    data = hass.data.setdefault(DOMAIN, {})
    if data.get("car_view_registered"):
        return
    http = getattr(hass, "http", None)
    if http is None or getattr(http, "app", None) is None:
        if not data.get("car_view_listener"):
            data["car_view_listener"] = True

            @callback
            def _on_start(_event: Event) -> None:
                async_register_car_view(hass)

            hass.bus.async_listen_once(EVENT_HOMEASSISTANT_STARTED, _on_start)
        return
    http.register_view(TeslaLoggerCarImageView())
    data["car_view_registered"] = True


class TeslaLoggerCarImageView(HomeAssistantView):
    """Serve one vehicle's PNG. Home Assistant authenticates the caller, including signed paths."""

    url = "/api/tesla_logger/{entry_id}/{vehicle_id}/car.png"
    name = "api:tesla_logger:car_image"
    requires_auth = True

    async def get(self, request: web.Request, entry_id: str, vehicle_id: str) -> web.Response:
        """Return the cached render, 404 when the server has none, or 503 when nothing is cached."""
        if not _VEHICLE_ID.fullmatch(vehicle_id):
            return web.Response(status=404)
        hass: HomeAssistant = request.app[KEY_HASS]
        hub = hass.data.get(DOMAIN, {}).get(entry_id)
        coordinators = getattr(hub, "coordinators", None)
        cache = getattr(hub, "car_images", None)
        numeric_id = int(vehicle_id)
        if not isinstance(coordinators, dict) or numeric_id not in coordinators or cache is None:
            return web.Response(status=404)
        cached = await cache.get(numeric_id)
        if cached.missing:
            return web.Response(status=404, headers={"Cache-Control": "private, max-age=21600"})
        if not cached.content:
            return web.Response(status=503, headers={"Cache-Control": "no-store"})
        headers = {"Cache-Control": "private, max-age=86400"}
        if cached.etag:
            headers["ETag"] = cached.etag
            if _if_none_match(request.headers.get("If-None-Match"), cached.etag):
                return web.Response(status=304, headers=headers)
        return web.Response(body=cached.content, content_type="image/png", headers=headers)


def _if_none_match(header: str | None, etag: str) -> bool:
    if not header:
        return False
    if header.strip() == "*":
        return True
    return etag in {part.strip() for part in header.split(",")}
