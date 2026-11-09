"""Shared entity base."""

from __future__ import annotations

from typing import Any

from homeassistant.helpers.device_registry import DeviceInfo
from homeassistant.helpers.update_coordinator import CoordinatorEntity

from .const import CONF_URL, DOMAIN
from .coordinator import TeslaLoggerCoordinator


class TeslaLoggerEntity(CoordinatorEntity[TeslaLoggerCoordinator]):
    """Entity bound to one vehicle coordinator."""

    _attr_has_entity_name = True

    def __init__(
        self,
        coordinator: TeslaLoggerCoordinator,
        key: str,
    ) -> None:
        super().__init__(coordinator)
        self._key = key
        self._attr_unique_id = f"{coordinator.meta.vin}_{key}"
        self._attr_translation_key = key

    @property
    def device_info(self) -> DeviceInfo:
        meta = self.coordinator.meta
        state = self.coordinator.data.state if self.coordinator.data else {}
        software = state.get("software_version")
        return DeviceInfo(
            identifiers={(DOMAIN, meta.vin)},
            name=meta.name or meta.vin,
            manufacturer="Tesla",
            model=meta.model,
            sw_version=software if isinstance(software, str) else None,
            serial_number=meta.vin,
            configuration_url=self.coordinator.hub.entry.data[CONF_URL],
        )

    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        meta = self.coordinator.meta
        return {
            "vehicle_id": meta.vehicle_id,
            "vin": meta.vin,
            "key": self._key,
        }
