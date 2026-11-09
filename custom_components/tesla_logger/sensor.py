"""Sensors for a Tesla Logger vehicle."""

from __future__ import annotations

from homeassistant.components.sensor import (
    SensorDeviceClass,
    SensorEntity,
    SensorEntityDescription,
    SensorStateClass,
)
from homeassistant.const import (
    DEGREE,
    PERCENTAGE,
    EntityCategory,
    UnitOfElectricCurrent,
    UnitOfElectricPotential,
    UnitOfEnergy,
    UnitOfLength,
    UnitOfPower,
    UnitOfPressure,
    UnitOfSpeed,
    UnitOfTemperature,
    UnitOfTime,
)
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers import entity_registry as er
from homeassistant.helpers.dispatcher import async_dispatcher_connect
from homeassistant.helpers.entity_platform import AddEntitiesCallback

from .const import vehicle_added_signal
from .coordinator import TeslaLoggerConfigEntry, TeslaLoggerCoordinator
from .entity import TeslaLoggerEntity
from .parsing import battery_icon, plugged_in, sensor_value

_DIAGNOSTIC = EntityCategory.DIAGNOSTIC
_SENSOR_OPTIONS = "sensor"
_SENSOR_PRIVATE = "sensor.private"
_UNIT_OF_MEASUREMENT = "unit_of_measurement"


def _sensor(
    key: str,
    *,
    device_class: SensorDeviceClass | None = None,
    unit: str | None = None,
    suggested_unit: str | None = None,
    state_class: SensorStateClass | None = SensorStateClass.MEASUREMENT,
    precision: int | None = None,
    category: EntityCategory | None = None,
) -> SensorEntityDescription:
    return SensorEntityDescription(
        key=key,
        translation_key=key,
        has_entity_name=True,
        device_class=device_class,
        native_unit_of_measurement=unit,
        suggested_unit_of_measurement=suggested_unit,
        state_class=state_class,
        suggested_display_precision=precision,
        entity_category=category,
    )


SENSOR_DESCRIPTIONS: tuple[SensorEntityDescription, ...] = (
    _sensor(
        "battery_level",
        device_class=SensorDeviceClass.BATTERY,
        unit=PERCENTAGE,
        precision=0,
    ),
    _sensor(
        "usable_battery_level",
        device_class=SensorDeviceClass.BATTERY,
        unit=PERCENTAGE,
        precision=0,
        category=_DIAGNOSTIC,
    ),
    _sensor(
        "rated_range",
        device_class=SensorDeviceClass.DISTANCE,
        unit=UnitOfLength.KILOMETERS,
        precision=0,
    ),
    _sensor(
        "ideal_range",
        device_class=SensorDeviceClass.DISTANCE,
        unit=UnitOfLength.KILOMETERS,
        precision=0,
        category=_DIAGNOSTIC,
    ),
    _sensor(
        "estimated_range",
        device_class=SensorDeviceClass.DISTANCE,
        unit=UnitOfLength.KILOMETERS,
        precision=0,
        category=_DIAGNOSTIC,
    ),
    _sensor(
        "odometer",
        device_class=SensorDeviceClass.DISTANCE,
        unit=UnitOfLength.KILOMETERS,
        state_class=SensorStateClass.TOTAL_INCREASING,
        precision=0,
    ),
    _sensor(
        "speed",
        device_class=SensorDeviceClass.SPEED,
        unit=UnitOfSpeed.KILOMETERS_PER_HOUR,
        precision=0,
    ),
    _sensor(
        "power",
        device_class=SensorDeviceClass.POWER,
        unit=UnitOfPower.KILO_WATT,
        precision=1,
    ),
    _sensor(
        "inside_temp",
        device_class=SensorDeviceClass.TEMPERATURE,
        unit=UnitOfTemperature.CELSIUS,
        precision=1,
    ),
    _sensor(
        "outside_temp",
        device_class=SensorDeviceClass.TEMPERATURE,
        unit=UnitOfTemperature.CELSIUS,
        precision=1,
    ),
    _sensor("charging_state", state_class=None),
    _sensor(
        "charger_power",
        device_class=SensorDeviceClass.POWER,
        unit=UnitOfPower.KILO_WATT,
        precision=1,
    ),
    _sensor(
        "charger_voltage",
        device_class=SensorDeviceClass.VOLTAGE,
        unit=UnitOfElectricPotential.VOLT,
        precision=0,
    ),
    _sensor(
        "charger_current",
        device_class=SensorDeviceClass.CURRENT,
        unit=UnitOfElectricCurrent.AMPERE,
        precision=0,
    ),
    _sensor(
        "energy_added",
        device_class=SensorDeviceClass.ENERGY,
        unit=UnitOfEnergy.KILO_WATT_HOUR,
        state_class=SensorStateClass.TOTAL_INCREASING,
        precision=2,
    ),
    _sensor("charge_limit", unit=PERCENTAGE, precision=0),
    _sensor("activity", state_class=None),
    _sensor("software_version", state_class=None, category=_DIAGNOSTIC),
    _sensor("update_status", state_class=None, category=_DIAGNOSTIC),
    _sensor("shift_state", state_class=None, category=_DIAGNOSTIC),
    _sensor("geofence", state_class=None),
    _sensor("heading", unit=DEGREE, precision=0, category=_DIAGNOSTIC),
    _sensor("last_error", state_class=None, category=_DIAGNOSTIC),
    _sensor(
        "last_drive_distance",
        device_class=SensorDeviceClass.DISTANCE,
        unit=UnitOfLength.KILOMETERS,
        precision=0,
    ),
    _sensor(
        "last_drive_duration",
        device_class=SensorDeviceClass.DURATION,
        unit=UnitOfTime.SECONDS,
        suggested_unit=UnitOfTime.MINUTES,
        precision=0,
    ),
    _sensor(
        "last_drive_energy",
        unit=UnitOfEnergy.KILO_WATT_HOUR,
        precision=2,
    ),
    _sensor("last_drive_efficiency", unit="Wh/km", precision=0),
    _sensor(
        "last_charge_energy",
        unit=UnitOfEnergy.KILO_WATT_HOUR,
        precision=2,
    ),
    # Hours with one decimal: 16336 s displays as 4.5 h, not 5 h.
    _sensor(
        "last_charge_duration",
        device_class=SensorDeviceClass.DURATION,
        unit=UnitOfTime.SECONDS,
        suggested_unit=UnitOfTime.HOURS,
        precision=1,
    ),
    _sensor(
        "tpms_front_left",
        device_class=SensorDeviceClass.PRESSURE,
        unit=UnitOfPressure.BAR,
        precision=2,
    ),
    _sensor(
        "tpms_front_right",
        device_class=SensorDeviceClass.PRESSURE,
        unit=UnitOfPressure.BAR,
        precision=2,
    ),
    _sensor(
        "tpms_rear_left",
        device_class=SensorDeviceClass.PRESSURE,
        unit=UnitOfPressure.BAR,
        precision=2,
    ),
    _sensor(
        "tpms_rear_right",
        device_class=SensorDeviceClass.PRESSURE,
        unit=UnitOfPressure.BAR,
        precision=2,
    ),
)


def _entities(
    coordinator: TeslaLoggerCoordinator,
) -> list[TeslaLoggerSensor]:
    return [TeslaLoggerSensor(coordinator, description) for description in SENSOR_DESCRIPTIONS]


async def async_setup_entry(
    hass: HomeAssistant,
    entry: TeslaLoggerConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up sensors for each known vehicle."""
    hub = entry.runtime_data
    async_add_entities(
        sensor for coordinator in hub.coordinators.values() for sensor in _entities(coordinator)
    )

    @callback
    def _add(coordinator: TeslaLoggerCoordinator) -> None:
        async_add_entities(_entities(coordinator))

    entry.async_on_unload(
        async_dispatcher_connect(hass, vehicle_added_signal(entry.entry_id), _add)
    )


class TeslaLoggerSensor(TeslaLoggerEntity, SensorEntity):
    """One numeric or text reading."""

    def __init__(
        self,
        coordinator: TeslaLoggerCoordinator,
        description: SensorEntityDescription,
    ) -> None:
        super().__init__(coordinator, description.key)
        self.entity_description = description

    async def async_added_to_hass(self) -> None:
        """Apply a newer duration display unit to entities still on raw seconds."""
        await super().async_added_to_hass()
        self._adopt_duration_display_unit()

    @callback
    def _adopt_duration_display_unit(self) -> None:
        """Move a duration sensor off the original seconds suggestion.

        Home Assistant stores ``suggested_unit_of_measurement`` the first time
        an entity is seen and does not refresh it. Entities created before the
        minutes/hours suggestion keep showing seconds unless the user already
        chose a unit.
        """
        suggested = self.entity_description.suggested_unit_of_measurement
        entry = self.registry_entry
        if (
            suggested is None
            or entry is None
            or self.entity_description.device_class is not SensorDeviceClass.DURATION
        ):
            return
        if _UNIT_OF_MEASUREMENT in entry.options.get(_SENSOR_OPTIONS, {}):
            return
        private = dict(entry.options.get(_SENSOR_PRIVATE, {}))
        stored = private.get("suggested_unit_of_measurement")
        if stored == suggested or stored not in (None, UnitOfTime.SECONDS):
            return
        private["suggested_unit_of_measurement"] = suggested
        er.async_get(self.hass).async_update_entity_options(
            entry.entity_id,
            _SENSOR_PRIVATE,
            private,
        )

    @property
    def native_value(self) -> float | str | None:
        data = self.coordinator.data
        if data is None:
            return None
        return sensor_value(self.entity_description.key, data)

    @property
    def icon(self) -> str | None:
        if self.entity_description.key != "battery_level":
            return None
        data = self.coordinator.data
        if data is None:
            return "mdi:battery-unknown"
        level = sensor_value("battery_level", data)
        charging = plugged_in(data.state) is True or data.state.get("activity") == "charging"
        return battery_icon(level if isinstance(level, float) else None, charging)
