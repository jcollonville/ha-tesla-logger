"""Per-vehicle data coordinator."""

from __future__ import annotations

import asyncio
import logging
import time
from dataclasses import replace
from datetime import timedelta
from typing import Any

from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.exceptions import ConfigEntryAuthFailed
from homeassistant.helpers.dispatcher import async_dispatcher_send
from homeassistant.helpers.update_coordinator import DataUpdateCoordinator, UpdateFailed

from .api import TeslaLoggerApi, TeslaLoggerApiError, TeslaLoggerAuthError
from .const import (
    GEOFENCE_CACHE_SECONDS,
    scan_interval_seconds,
    vehicle_added_signal,
    websocket_enabled,
)
from .models import VehicleData, VehicleMeta
from .parsing import match_geofence, num
from .websocket import TeslaLoggerWebSocket

_LOGGER = logging.getLogger(__name__)
_WS_SKIP = frozenset({"type", "vehicle_id", "vin", "name", "model", "at"})


def _first(page: dict[str, Any]) -> dict[str, Any] | None:
    rows = page.get("data")
    if isinstance(rows, list) and rows and isinstance(rows[0], dict):
        return rows[0]
    return None


class TeslaLoggerCoordinator(DataUpdateCoordinator[VehicleData]):
    """REST snapshot for one vehicle, patched by WebSocket state frames."""

    def __init__(
        self,
        hass: HomeAssistant,
        hub: TeslaLoggerHub,
        meta: VehicleMeta,
    ) -> None:
        self.hub = hub
        self.meta = meta
        super().__init__(
            hass,
            _LOGGER,
            name=f"Tesla Logger {meta.vin}",
            update_interval=hub.scan_interval,
            config_entry=hub.entry,
        )

    async def _async_update_data(self) -> VehicleData:
        try:
            state = await self.hub.api.get_state(self.meta.vehicle_id)
            drives = await self.hub.api.list_drives(
                self.meta.vehicle_id,
                start=None,
                end=None,
                page=1,
                per_page=1,
            )
            charges = await self.hub.api.list_charges(
                self.meta.vehicle_id,
                start=None,
                end=None,
                page=1,
                per_page=1,
            )
            fences = await self.hub.async_geofences()
        except TeslaLoggerAuthError as err:
            raise ConfigEntryAuthFailed("Authentication failed") from err
        except TeslaLoggerApiError as err:
            if self.data is not None and self.hub.ws_connected:
                _LOGGER.debug(
                    "REST poll failed for vehicle %s; keeping live data",
                    self.meta.vehicle_id,
                )
                return self.data
            raise UpdateFailed("Tesla Logger request failed") from err
        return self._snapshot(
            state,
            _first(drives),
            _first(charges),
            fences,
            ws_connected=self.hub.ws_connected,
        )

    @callback
    def apply_ws(self, frame: dict[str, Any]) -> None:
        """Merge one live state frame into the current snapshot."""
        current = self.data
        state = dict(current.state) if current else {}
        for key, value in frame.items():
            if key not in _WS_SKIP:
                state[key] = value
        if frame.get("at") is not None:
            state["last_data_at"] = frame["at"]
        name = frame.get("name")
        model = frame.get("model")
        if isinstance(name, str) or isinstance(model, str):
            self.meta = replace(
                self.meta,
                name=name if isinstance(name, str) else self.meta.name,
                model=model if isinstance(model, str) else self.meta.model,
            )
        self.async_set_updated_data(
            self._snapshot(
                state,
                current.last_drive if current else None,
                current.last_charge if current else None,
                self.hub.cached_geofences,
                ws_connected=True,
            )
        )

    def _snapshot(
        self,
        state: dict[str, Any],
        last_drive: dict[str, Any] | None,
        last_charge: dict[str, Any] | None,
        fences: list[dict[str, Any]],
        *,
        ws_connected: bool,
    ) -> VehicleData:
        return VehicleData(
            meta=self.meta,
            state=state,
            geofence=match_geofence(
                num(state, "latitude"),
                num(state, "longitude"),
                fences,
            ),
            last_drive=last_drive,
            last_charge=last_charge,
            ws_connected=ws_connected,
        )


type TeslaLoggerConfigEntry = ConfigEntry[TeslaLoggerHub]


class TeslaLoggerHub:
    """One tesla-logger server and a coordinator per vehicle."""

    def __init__(
        self,
        hass: HomeAssistant,
        entry: ConfigEntry,
        api: TeslaLoggerApi,
        token: str,
    ) -> None:
        self.hass = hass
        self.entry = entry
        self.api = api
        self.coordinators: dict[int, TeslaLoggerCoordinator] = {}
        self._geofences: list[dict[str, Any]] | None = None
        self._geofences_at = 0.0
        self._geofence_lock = asyncio.Lock()
        self.websocket = TeslaLoggerWebSocket(
            api.session,
            api.base_url,
            token,
            on_state=self._on_state,
            on_auth_failed=self._on_auth_failed,
        )

    @property
    def scan_interval(self) -> timedelta:
        return timedelta(seconds=scan_interval_seconds(dict(self.entry.options)))

    @property
    def ws_connected(self) -> bool:
        return self.websocket.connected

    @property
    def cached_geofences(self) -> list[dict[str, Any]]:
        return list(self._geofences or [])

    async def async_load_vehicles(self) -> None:
        """Create coordinators for the vehicles returned by the server."""
        for meta in await self.api.list_vehicles():
            self.coordinators[meta.vehicle_id] = TeslaLoggerCoordinator(self.hass, self, meta)

    async def async_geofences(self) -> list[dict[str, Any]]:
        async with self._geofence_lock:
            now = time.monotonic()
            if self._geofences is not None and now - self._geofences_at < GEOFENCE_CACHE_SECONDS:
                return list(self._geofences)
            fences = await self.api.list_geofences()
            self._geofences = fences
            self._geofences_at = now
            return list(fences)

    async def discover_loop(self) -> None:
        """Poll the vehicle list for cars added after setup."""
        while True:
            await asyncio.sleep(scan_interval_seconds(dict(self.entry.options)))
            await self.discover_new()

    async def discover_new(self) -> None:
        try:
            vehicles = await self.api.list_vehicles()
        except TeslaLoggerAuthError:
            self._on_auth_failed()
            return
        except TeslaLoggerApiError:
            _LOGGER.debug("Vehicle discovery failed")
            return
        for meta in vehicles:
            current = self.coordinators.get(meta.vehicle_id)
            if current is not None:
                current.meta = meta
                continue
            coordinator = TeslaLoggerCoordinator(self.hass, self, meta)
            self.coordinators[meta.vehicle_id] = coordinator
            await coordinator.async_refresh()
            async_dispatcher_send(
                self.hass,
                vehicle_added_signal(self.entry.entry_id),
                coordinator,
            )

    def websocket_should_run(self) -> bool:
        return websocket_enabled(dict(self.entry.options))

    @callback
    def _on_state(self, frame: dict[str, Any]) -> None:
        try:
            vehicle_id = int(frame["vehicle_id"])
        except (KeyError, TypeError, ValueError):
            return
        coordinator = self.coordinators.get(vehicle_id)
        if coordinator is not None:
            coordinator.apply_ws(frame)

    @callback
    def _on_auth_failed(self) -> None:
        self.entry.async_start_reauth(self.hass)
