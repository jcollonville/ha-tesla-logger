"""Image entity for the official car render.

The class does not also inherit the coordinator entity base. Home Assistant's
image entity and that base both sit on Entity, and the method order would hide
the image state.
"""

from __future__ import annotations

from datetime import UTC, datetime

from homeassistant.components.image import ImageEntity
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.device_registry import DeviceInfo
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import vehicle_added_signal
from .coordinator import TeslaLoggerConfigEntry, TeslaLoggerCoordinator
from .entity import vehicle_device_info


async def async_setup_entry(
    hass: HomeAssistant,
    entry: TeslaLoggerConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up one image per vehicle."""
    hub = entry.runtime_data
    async_add_entities(_image(coordinator) for coordinator in hub.coordinators.values())

    @callback
    def _add(coordinator: TeslaLoggerCoordinator) -> None:
        async_add_entities([_image(coordinator)])

    entry.async_on_unload(
        async_dispatcher_connect(hass, vehicle_added_signal(entry.entry_id), _add)
    )


def _image(coordinator: TeslaLoggerCoordinator) -> TeslaLoggerCarImage:
    return TeslaLoggerCarImage(coordinator)


class TeslaLoggerCarImage(ImageEntity):
    """PNG from the shared cache. An empty image means the card should use the SVG."""

    _attr_has_entity_name = True
    _attr_translation_key = "car"
    _attr_content_type = "image/png"

    def __init__(self, coordinator: TeslaLoggerCoordinator) -> None:
        super().__init__(coordinator.hass)
        self.coordinator = coordinator
        self._attr_unique_id = f"{coordinator.meta.vin}_car"

    @property
    def device_info(self) -> DeviceInfo:
        return vehicle_device_info(self.coordinator)

    @property
    def available(self) -> bool:
        return self.coordinator.last_update_success

    async def async_added_to_hass(self) -> None:
        """Follow coordinator availability without polling the render."""
        await super().async_added_to_hass()
        self.async_on_remove(self.coordinator.async_add_listener(self._handle_coordinator_update))

    @callback
    def _handle_coordinator_update(self) -> None:
        self.async_write_ha_state()

    async def async_image(self) -> bytes | None:
        """Return the cached PNG, or None when the server has no render."""
        cached = await self.coordinator.hub.car_images.get(self.coordinator.meta.vehicle_id)
        if not cached.content:
            return None
        self._attr_image_last_updated = datetime.fromtimestamp(cached.fetched_at, UTC)
        return cached.content
