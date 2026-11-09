"""Entity value mapping, independent of a running Home Assistant instance."""

from __future__ import annotations

from custom_components.tesla_logger.binary_sensor import BINARY_DESCRIPTIONS
from custom_components.tesla_logger.models import VehicleData, VehicleMeta
from custom_components.tesla_logger.parsing import (
    binary_value,
    efficiency_wh_per_km,
    exposed_closures,
    match_geofence,
    sensor_value,
)
from custom_components.tesla_logger.sensor import SENSOR_DESCRIPTIONS
from homeassistant.components.binary_sensor import BinarySensorDeviceClass
from homeassistant.components.sensor import (
    SensorDeviceClass,
    SensorStateClass,
)
from homeassistant.const import (
    PERCENTAGE,
    UnitOfEnergy,
    UnitOfLength,
    UnitOfPower,
    UnitOfPressure,
    UnitOfSpeed,
    UnitOfTemperature,
)

META = VehicleMeta(1, "5YJTEST0000000001", "Red", "Model Y", "Red")


def _data(state: dict, drive: dict | None = None, charge: dict | None = None) -> VehicleData:
    return VehicleData(
        meta=META,
        state=state,
        geofence="Home",
        last_drive=drive,
        last_charge=charge,
        ws_connected=False,
    )


def test_sensor_keys_match_descriptions() -> None:
    """Every published sensor has a reader, including the official state fields."""
    data = _data(
        {
            "battery_level": 55,
            "usable_battery_level": 53,
            "rated_range_km": 280.5,
            "ideal_range_km": 320,
            "est_range_km": 260,
            "odometer_km": 10,
            "speed_kmh": 0,
            "power_kw": -1.2,
            "inside_temp_c": 21.5,
            "outside_temp_c": 12,
            "activity": "charging",
            "charging_state": "Charging",
            "charger_power_kw": 11,
            "charge_energy_added_kwh": 6.5,
            "shift_state": "P",
            "software_version": "2026.44.3",
            "update_status": "idle",
            "heading_deg": 90,
            "last_error": "token tl_shouldnotleak failed",
            "charger_voltage": 230,
            "charger_current": 16,
            "charge_limit_soc": 80,
            "tpms_pressure_fl": 2.9,
            "tpms_pressure_fr": 2.8,
            "tpms_pressure_rl": 2.7,
            "tpms_pressure_rr": 2.6,
        },
        drive={"distance_km": 18.4, "duration_s": 1800, "energy_used_kwh": 3.2},
        charge={"energy_added_kwh": 6.5, "duration_s": 2400},
    )
    for description in SENSOR_DESCRIPTIONS:
        assert sensor_value(description.key, data) is not None, description.key


def test_units_and_state_classes() -> None:
    by_key = {item.key: item for item in SENSOR_DESCRIPTIONS}
    assert by_key["battery_level"].device_class is SensorDeviceClass.BATTERY
    assert by_key["battery_level"].native_unit_of_measurement == PERCENTAGE
    assert by_key["battery_level"].state_class is SensorStateClass.MEASUREMENT
    assert by_key["rated_range"].device_class is SensorDeviceClass.DISTANCE
    assert by_key["rated_range"].native_unit_of_measurement == UnitOfLength.KILOMETERS
    assert by_key["odometer"].state_class is SensorStateClass.TOTAL_INCREASING
    assert by_key["speed"].native_unit_of_measurement == UnitOfSpeed.KILOMETERS_PER_HOUR
    assert by_key["power"].native_unit_of_measurement == UnitOfPower.KILO_WATT
    assert by_key["inside_temp"].device_class is SensorDeviceClass.TEMPERATURE
    assert by_key["inside_temp"].native_unit_of_measurement == UnitOfTemperature.CELSIUS
    assert by_key["energy_added"].device_class is SensorDeviceClass.ENERGY
    assert by_key["energy_added"].native_unit_of_measurement == UnitOfEnergy.KILO_WATT_HOUR
    assert by_key["energy_added"].state_class is SensorStateClass.TOTAL_INCREASING
    assert by_key["tpms_front_left"].device_class is SensorDeviceClass.PRESSURE
    assert by_key["tpms_front_left"].native_unit_of_measurement == UnitOfPressure.BAR
    assert by_key["last_drive_efficiency"].native_unit_of_measurement == "Wh/km"
    lock = next(item for item in BINARY_DESCRIPTIONS if item.key == "lock")
    assert lock.device_class is BinarySensorDeviceClass.LOCK
    plug = next(item for item in BINARY_DESCRIPTIONS if item.key == "plugged_in")
    assert plug.device_class is BinarySensorDeviceClass.PLUG


def test_optional_fields_and_derived_values() -> None:
    minimal = _data({"activity": "asleep", "battery_level": 40, "charging_state": None})
    assert sensor_value("charger_voltage", minimal) is None
    assert sensor_value("charge_limit", minimal) is None
    assert sensor_value("activity", minimal) == "asleep"
    assert binary_value("lock", minimal) is None
    assert binary_value("sentry", minimal) is None
    assert binary_value("plugged_in", minimal) is None
    assert exposed_closures(minimal.state) == []

    charging = _data({"charging_state": "Charging", "locked": True, "sentry_mode": False})
    assert binary_value("plugged_in", charging) is True
    assert binary_value("lock", charging) is False
    assert binary_value("sentry", charging) is False
    disconnected = _data({"charging_state": "Disconnected", "locked": False})
    assert binary_value("plugged_in", disconnected) is False
    assert binary_value("lock", disconnected) is True

    doors = _data({"df": 1, "rt": 0, "fp_window": "open"})
    keys = [spec.key for spec in exposed_closures(doors.state)]
    assert keys == ["door_front_left", "window_front_right", "trunk"]
    assert binary_value("door_front_left", doors) is True
    assert binary_value("trunk", doors) is False
    assert binary_value("window_front_right", doors) is True


def test_efficiency_geofence_and_secret_redaction() -> None:
    assert efficiency_wh_per_km({"distance_km": 10, "energy_used_kwh": 1.5}) == 150
    assert efficiency_wh_per_km({"distance_km": 0, "energy_used_kwh": 1}) is None
    assert efficiency_wh_per_km(None) is None
    fences = [{"name": "Home", "latitude": 48.8566, "longitude": 2.3522, "radius_m": 100}]
    assert match_geofence(48.8566, 2.3522, fences) == "Home"
    assert match_geofence(49.0, 2.3522, fences) is None
    data = _data({"last_error": "failed with tl_supersecret"})
    assert sensor_value("last_error", data) == "failed with tl_REDACTED"
    assert "tl_supersecret" not in str(sensor_value("last_error", data))
