"""HTTP client for the tesla-logger read API."""

from __future__ import annotations

import logging
from dataclasses import dataclass
from datetime import datetime
from typing import Any, Literal, Protocol
from urllib.parse import urlparse, urlunparse

from aiohttp import ClientError, ClientSession, ClientTimeout

from .models import VehicleMeta

_LOGGER = logging.getLogger(__name__)
_TIMEOUT = ClientTimeout(total=20)
PNG_MAGIC = b"\x89PNG\r\n\x1a\n"
MAX_CAR_IMAGE_BYTES = 8 * 1024 * 1024
_PNG_CHUNK_HEADER = 8
_PNG_CHUNK_CRC = 4
CarImageKind = Literal["image", "not_modified", "missing", "unavailable"]


class _BodyReader(Protocol):
    """The subset of aiohttp's StreamReader used to pull a response body."""

    async def read(self, n: int = -1) -> bytes: ...


def png_is_complete(data: bytes) -> bool:
    """Return True when `data` is a PNG that ends on an in-bounds IEND chunk.

    A truncated download still starts with the PNG signature. Walking each
    chunk length is what rejects a cut-off IDAT instead of caching it.
    """
    if not data.startswith(PNG_MAGIC):
        return False
    offset = len(PNG_MAGIC)
    size = len(data)
    first = True
    while offset < size:
        if offset + _PNG_CHUNK_HEADER + _PNG_CHUNK_CRC > size:
            return False
        length = int.from_bytes(data[offset : offset + 4], "big")
        kind = data[offset + 4 : offset + _PNG_CHUNK_HEADER]
        chunk_end = offset + _PNG_CHUNK_HEADER + length + _PNG_CHUNK_CRC
        if chunk_end > size:
            return False
        if first and kind != b"IHDR":
            return False
        first = False
        if kind == b"IEND":
            return length == 0 and chunk_end == size
        offset = chunk_end
    return False


async def read_bounded_body(
    stream: _BodyReader,
    declared: int | None,
    limit: int,
) -> bytes | None:
    """Read a response body until EOF, refusing anything past `limit`.

    `StreamReader.read(n)` returns whatever is already buffered, not `n` bytes
    and not the rest of the body. Callers have to keep reading until EOF.
    `declared` is the Content-Length when the server sent one.
    """
    if declared is not None and declared > limit:
        return None
    chunks: list[bytes] = []
    total = 0
    while declared is None or total < declared:
        block = await stream.read(64 * 1024)
        if not block:
            break
        total += len(block)
        if total > limit:
            return None
        chunks.append(block)
    if declared is not None and total != declared:
        return None
    return b"".join(chunks)


@dataclass(frozen=True, slots=True)
class CarImageUpstream:
    """One response from the car render endpoint. Bytes are a PNG or absent."""

    kind: CarImageKind
    content: bytes | None = None
    etag: str | None = None


class TeslaLoggerApiError(Exception):
    """The server could not be queried."""

    def __init__(self, message: str, status: int | None = None) -> None:
        super().__init__(message)
        self.status = status


class TeslaLoggerAuthError(TeslaLoggerApiError):
    """The bearer token was rejected."""


class InvalidUrl(TeslaLoggerApiError):
    """The configured URL is not an HTTP(S) origin."""


def normalize_url(url: str) -> str:
    """Return a canonical server origin without credentials or a trailing slash."""
    raw = url.strip()
    parsed = urlparse(raw)
    if parsed.scheme not in {"http", "https"} or not parsed.hostname:
        raise InvalidUrl("invalid url")
    if parsed.username or parsed.password or parsed.query or parsed.fragment:
        raise InvalidUrl("invalid url")
    path = parsed.path.rstrip("/")
    return urlunparse((parsed.scheme, parsed.netloc, path, "", "", ""))


def websocket_url(base_url: str) -> str:
    """Return the WebSocket URL for a REST base URL."""
    parsed = urlparse(base_url)
    scheme = "wss" if parsed.scheme == "https" else "ws"
    path = f"{parsed.path.rstrip('/')}/api/v1/ws"
    return urlunparse((scheme, parsed.netloc, path, "", "", ""))


def _query(params: dict[str, Any] | None) -> dict[str, str] | None:
    if not params:
        return None
    rendered: dict[str, str] = {}
    for key, value in params.items():
        if value is None:
            continue
        if isinstance(value, datetime):
            rendered[key] = value.isoformat()
        else:
            rendered[key] = str(value)
    return rendered


def parse_vehicle(row: dict[str, Any]) -> VehicleMeta | None:
    """Parse one vehicle list item."""
    if "id" not in row or not row.get("vin"):
        return None
    try:
        vehicle_id = int(row["id"])
    except (TypeError, ValueError):
        return None
    name = row.get("name")
    model = row.get("model")
    color = row.get("exterior_color")
    return VehicleMeta(
        vehicle_id=vehicle_id,
        vin=str(row["vin"]),
        name=str(name) if name else None,
        model=str(model) if model else None,
        exterior_color=str(color) if color else None,
    )


class TeslaLoggerApi:
    """Read-only client. The token is sent as a bearer header and never logged."""

    def __init__(self, session: ClientSession, base_url: str, token: str) -> None:
        self._session = session
        self._base = base_url.rstrip("/")
        self._token = token

    def __repr__(self) -> str:
        return f"TeslaLoggerApi(base_url={self._base!r})"

    @property
    def session(self) -> ClientSession:
        return self._session

    @property
    def base_url(self) -> str:
        return self._base

    def _headers(self) -> dict[str, str]:
        return {
            "Authorization": f"Bearer {self._token}",
            "Accept": "application/json",
        }

    async def _get(self, path: str, params: dict[str, Any] | None = None) -> Any:
        url = f"{self._base}{path}"
        try:
            async with self._session.get(
                url,
                headers=self._headers(),
                params=_query(params),
                timeout=_TIMEOUT,
            ) as response:
                if response.status == 401:
                    raise TeslaLoggerAuthError("unauthorized", status=401)
                if response.status >= 400:
                    _LOGGER.debug("GET %s failed with status %s", path, response.status)
                    raise TeslaLoggerApiError(
                        f"request failed ({response.status})",
                        status=response.status,
                    )
                try:
                    return await response.json(content_type=None)
                except (ClientError, ValueError, TypeError) as err:
                    raise TeslaLoggerApiError("invalid JSON") from err
        except TeslaLoggerApiError:
            raise
        except (TimeoutError, ClientError) as err:
            _LOGGER.debug("GET %s failed (%s)", path, type(err).__name__)
            raise TeslaLoggerApiError("connection failed") from err

    async def list_vehicles(self) -> list[VehicleMeta]:
        payload = await self._get("/api/v1/vehicles")
        if not isinstance(payload, list):
            raise TeslaLoggerApiError("unexpected vehicles payload")
        vehicles: list[VehicleMeta] = []
        for row in payload:
            if isinstance(row, dict) and (meta := parse_vehicle(row)) is not None:
                vehicles.append(meta)
        return vehicles

    async def get_state(self, vehicle_id: int) -> dict[str, Any]:
        payload = await self._get(f"/api/v1/vehicles/{vehicle_id}/state")
        if not isinstance(payload, dict):
            raise TeslaLoggerApiError("unexpected state payload")
        return payload

    async def list_drives(
        self,
        vehicle_id: int,
        *,
        start: datetime | None,
        end: datetime | None,
        page: int,
        per_page: int,
    ) -> dict[str, Any]:
        return await self._page(
            "/api/v1/drives",
            vehicle_id=vehicle_id,
            start=start,
            end=end,
            page=page,
            per_page=per_page,
        )

    async def get_drive(self, drive_id: int, max_points: int) -> dict[str, Any]:
        payload = await self._get(
            f"/api/v1/drives/{drive_id}",
            {"max_points": max_points},
        )
        if not isinstance(payload, dict):
            raise TeslaLoggerApiError("unexpected drive payload")
        return payload

    async def list_charges(
        self,
        vehicle_id: int,
        *,
        start: datetime | None,
        end: datetime | None,
        page: int,
        per_page: int,
    ) -> dict[str, Any]:
        return await self._page(
            "/api/v1/charges",
            vehicle_id=vehicle_id,
            start=start,
            end=end,
            page=page,
            per_page=per_page,
        )

    async def get_stats(
        self,
        vehicle_id: int,
        *,
        start: datetime | None,
        end: datetime | None,
    ) -> dict[str, Any]:
        payload = await self._get(
            "/api/v1/stats",
            {"vehicle_id": vehicle_id, "from": start, "to": end},
        )
        if not isinstance(payload, dict):
            raise TeslaLoggerApiError("unexpected stats payload")
        return payload

    async def get_stats_series(
        self,
        vehicle_id: int,
        *,
        period: str,
        count: int,
    ) -> dict[str, Any]:
        """Return oldest-to-newest buckets for one vehicle."""
        payload = await self._get(
            f"/api/v1/vehicles/{vehicle_id}/stats/series",
            {"period": period, "count": count},
        )
        if not isinstance(payload, dict):
            raise TeslaLoggerApiError("unexpected stats series payload")
        return payload

    async def get_consumption_by_temp(
        self,
        vehicle_id: int,
        *,
        period: str,
        count: int,
    ) -> dict[str, Any]:
        """Return Wh/km by outdoor-temperature bin for one window."""
        payload = await self._get(
            f"/api/v1/vehicles/{vehicle_id}/stats/consumption_by_temp",
            {"period": period, "count": count},
        )
        if isinstance(payload, list):
            return {"data": [row for row in payload if isinstance(row, dict)]}
        if isinstance(payload, dict):
            return payload
        raise TeslaLoggerApiError("unexpected consumption by temperature payload")

    async def list_geofences(self) -> list[dict[str, Any]]:
        payload = await self._get("/api/v1/geofences")
        if not isinstance(payload, list):
            raise TeslaLoggerApiError("unexpected geofence payload")
        return [row for row in payload if isinstance(row, dict)]

    async def fetch_car_image(self, vehicle_id: int, etag: str | None = None) -> CarImageUpstream:
        """GET the official render. The vehicle id is numeric; a VIN is never interpolated."""
        if isinstance(vehicle_id, bool) or not isinstance(vehicle_id, int) or vehicle_id < 0:
            return CarImageUpstream("unavailable")
        path = f"/api/v1/vehicles/{vehicle_id}/car.png"
        headers = {
            "Authorization": f"Bearer {self._token}",
            "Accept": "image/png",
        }
        if etag:
            headers["If-None-Match"] = etag
        try:
            async with self._session.get(
                f"{self._base}{path}",
                headers=headers,
                timeout=_TIMEOUT,
                allow_redirects=False,
            ) as response:
                if response.status == 401:
                    raise TeslaLoggerAuthError("unauthorized", status=401)
                if response.status == 304:
                    return CarImageUpstream("not_modified", etag=response.headers.get("ETag"))
                if response.status == 404:
                    return CarImageUpstream("missing")
                if response.status != 200:
                    _LOGGER.debug("GET %s failed with status %s", path, response.status)
                    return CarImageUpstream("unavailable")
                content_type = response.headers.get("Content-Type", "")
                if "image/png" not in content_type.lower():
                    _LOGGER.debug("GET %s returned an unexpected content type", path)
                    return CarImageUpstream("unavailable")
                body = await read_bounded_body(
                    response.content,
                    response.content_length,
                    MAX_CAR_IMAGE_BYTES,
                )
                if body is None or not png_is_complete(body):
                    _LOGGER.debug("GET %s returned an incomplete car image", path)
                    return CarImageUpstream("unavailable")
                return CarImageUpstream("image", content=body, etag=response.headers.get("ETag"))
        except TeslaLoggerApiError:
            raise
        except (TimeoutError, ClientError) as err:
            _LOGGER.debug("GET %s failed (%s)", path, type(err).__name__)
            return CarImageUpstream("unavailable")

    async def _page(
        self,
        path: str,
        *,
        vehicle_id: int,
        start: datetime | None,
        end: datetime | None,
        page: int,
        per_page: int,
    ) -> dict[str, Any]:
        payload = await self._get(
            path,
            {
                "vehicle_id": vehicle_id,
                "from": start,
                "to": end,
                "page": page,
                "per_page": per_page,
            },
        )
        if not isinstance(payload, dict):
            raise TeslaLoggerApiError("unexpected page payload")
        return payload
