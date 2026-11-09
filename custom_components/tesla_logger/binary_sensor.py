"""Binary sensors for cable, lock, sentry, and exposed closures."""

from __future__ import annotations

from homeassistant.components.binary_sensor import (
    BinarySensorDeviceClass,
    BinarySensorEntity,
    BinarySensorEntityDescription,
)
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import vehicle_added_signal
from .coordinator import TeslaLoggerConfigEntry, TeslaLoggerCoordinator
from .entity import TeslaLoggerEntity
from .models import ClosureSpec
from .parsing import CLOSURES, binary_value, exposed_closures

_KIND_CLASS = {
    "door": BinarySensorDeviceClass.DOOR,
    "window": BinarySensorDeviceClass.WINDOW,
    "opening": BinarySensorDeviceClass.OPENING,
}

BINARY_DESCRIPTIONS: tuple[BinarySensorEntityDescription, ...] = (
    BinarySensorEntityDescription(
        key="plugged_in",
        translation_key="plugged_in",
        has_entity_name=True,
        device_class=BinarySensorDeviceClass.PLUG,
    ),
    BinarySensorEntityDescription(
        key="lock",
        translation_key="lock",
        has_entity_name=True,
        device_class=BinarySensorDeviceClass.LOCK,
    ),
    BinarySensorEntityDescription(
        key="sentry",
        translation_key="sentry",
        has_entity_name=True,
    ),
)


def _closure_description(spec: ClosureSpec) -> BinarySensorEntityDescription:
    return BinarySensorEntityDescription(
        key=spec.key,
        translation_key=spec.key,
        has_entity_name=True,
        device_class=_KIND_CLASS[spec.kind],
    )


def _fixed(coordinator: TeslaLoggerCoordinator) -> list[TeslaLoggerBinarySensor]:
    return [
        TeslaLoggerBinarySensor(coordinator, description) for description in BINARY_DESCRIPTIONS
    ]


async def async_setup_entry(
    hass: HomeAssistant,
    entry: TeslaLoggerConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up binary sensors, including closures once the API exposes them."""
    hub = entry.runtime_data
    seen: dict[int, set[str]] = {vehicle_id: set() for vehicle_id in hub.coordinators}

    def _closures(coordinator: TeslaLoggerCoordinator) -> list[TeslaLoggerBinarySensor]:
        data = coordinator.data
        if data is None:
            return []
        known = seen.setdefault(coordinator.meta.vehicle_id, set())
        entities: list[TeslaLoggerBinarySensor] = []
        for spec in exposed_closures(data.state):
            if spec.key in known:
                continue
            known.add(spec.key)
            entities.append(TeslaLoggerBinarySensor(coordinator, _closure_description(spec)))
        return entities

    entities: list[TeslaLoggerBinarySensor] = []
    for coordinator in hub.coordinators.values():
        entities.extend(_fixed(coordinator))
        entities.extend(_closures(coordinator))
    async_add_entities(entities)

    @callback
    def _sync(coordinator: TeslaLoggerCoordinator) -> None:
        added = _closures(coordinator)
        if added:
            async_add_entities(added)

    for coordinator in hub.coordinators.values():
        entry.async_on_unload(
            coordinator.async_add_listener(lambda coord=coordinator: _sync(coord))
        )

    @callback
    def _add(coordinator: TeslaLoggerCoordinator) -> None:
        async_add_entities([*_fixed(coordinator), *_closures(coordinator)])
        entry.async_on_unload(
            coordinator.async_add_listener(lambda coord=coordinator: _sync(coord))
        )

    entry.async_on_unload(
        async_dispatcher_connect(hass, vehicle_added_signal(entry.entry_id), _add)
    )


class TeslaLoggerBinarySensor(TeslaLoggerEntity, BinarySensorEntity):
    """A boolean vehicle reading."""

    def __init__(
        self,
        coordinator: TeslaLoggerCoordinator,
        description: BinarySensorEntityDescription,
    ) -> None:
        super().__init__(coordinator, description.key)
        self.entity_description = description

    @property
    def is_on(self) -> bool | None:
        data = self.coordinator.data
        if data is None:
            return None
        return binary_value(self.entity_description.key, data)


# Imported so tests can assert the closure catalogue stays wired to descriptions.
CLOSURE_KEYS = tuple(spec.key for spec in CLOSURES)
