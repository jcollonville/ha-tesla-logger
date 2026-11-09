"""GPS device tracker fed by tesla-logger coordinates."""

from __future__ import annotations

from typing import Any

from homeassistant.components.device_tracker import SourceType, TrackerEntity
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import vehicle_added_signal
from .coordinator import TeslaLoggerConfigEntry, TeslaLoggerCoordinator
from .entity import TeslaLoggerEntity
from .parsing import num


def _tracker(coordinator: TeslaLoggerCoordinator) -> TeslaLoggerDeviceTracker:
    return TeslaLoggerDeviceTracker(coordinator)


async def async_setup_entry(
    hass: HomeAssistant,
    entry: TeslaLoggerConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up one device tracker per vehicle."""
    hub = entry.runtime_data
    async_add_entities(_tracker(coordinator) for coordinator in hub.coordinators.values())

    @callback
    def _add(coordinator: TeslaLoggerCoordinator) -> None:
        async_add_entities([_tracker(coordinator)])

    entry.async_on_unload(
        async_dispatcher_connect(hass, vehicle_added_signal(entry.entry_id), _add)
    )


class TeslaLoggerDeviceTracker(TeslaLoggerEntity, TrackerEntity):
    """Latest GPS fix. Zone membership is resolved by Home Assistant."""

    _attr_translation_key = "location"

    def __init__(self, coordinator: TeslaLoggerCoordinator) -> None:
        super().__init__(coordinator, "location")

    @property
    def source_type(self) -> SourceType:
        return SourceType.GPS

    @property
    def latitude(self) -> float | None:
        return self._coord("latitude")

    @property
    def longitude(self) -> float | None:
        return self._coord("longitude")

    @property
    def location_accuracy(self) -> int:
        return 0

    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        attributes = super().extra_state_attributes
        data = self.coordinator.data
        if data is None:
            return attributes
        if data.geofence:
            attributes["geofence"] = data.geofence
        heading = num(data.state, "heading_deg")
        if heading is not None:
            attributes["heading"] = heading
        return attributes

    def _coord(self, key: str) -> float | None:
        data = self.coordinator.data
        if data is None:
            return None
        return num(data.state, key)
