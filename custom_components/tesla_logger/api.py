"""HTTP client for the tesla-logger read API."""

from __future__ import annotations

import logging
from datetime import datetime
from typing import Any
from urllib.parse import urlparse, urlunparse

from aiohttp import ClientError, ClientSession, ClientTimeout

from .models import VehicleMeta

_LOGGER = logging.getLogger(__name__)
_TIMEOUT = ClientTimeout(total=20)


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

    async def list_geofences(self) -> list[dict[str, Any]]:
        payload = await self._get("/api/v1/geofences")
        if not isinstance(payload, list):
            raise TeslaLoggerApiError("unexpected geofence payload")
        return [row for row in payload if isinstance(row, dict)]

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
