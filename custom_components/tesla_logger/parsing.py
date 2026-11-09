"""Pure mapping from tesla-logger payloads to entity values.

Distances are kilometres, speeds are km/h, temperatures are Celsius, energy is
kWh, and tire pressures are bar. The read API currently returns a subset of
the archived columns. Missing keys stay unknown instead of being invented.
"""

from __future__ import annotations

import math
from collections.abc import Mapping
from typing import Any

from .models import ClosureSpec, VehicleData
from .redact import redact_secrets

_DISCONNECTED = frozenset({"", "disconnected", "none", "null"})

CLOSURES: tuple[ClosureSpec, ...] = (
    ClosureSpec("door_front_left", ("df", "door_front_left", "driver_front_door"), "door"),
    ClosureSpec(
        "door_front_right",
        ("pf", "door_front_right", "passenger_front_door"),
        "door",
    ),
    ClosureSpec("door_rear_left", ("dr", "door_rear_left", "driver_rear_door"), "door"),
    ClosureSpec(
        "door_rear_right",
        ("pr", "door_rear_right", "passenger_rear_door"),
        "door",
    ),
    ClosureSpec(
        "window_front_left",
        ("fd_window", "window_front_left", "driver_front_window"),
        "window",
    ),
    ClosureSpec(
        "window_front_right",
        ("fp_window", "window_front_right", "passenger_front_window"),
        "window",
    ),
    ClosureSpec(
        "window_rear_left",
        ("rd_window", "window_rear_left", "driver_rear_window"),
        "window",
    ),
    ClosureSpec(
        "window_rear_right",
        ("rp_window", "window_rear_right", "passenger_rear_window"),
        "window",
    ),
    ClosureSpec("frunk", ("ft", "frunk", "front_trunk"), "opening"),
    ClosureSpec("trunk", ("rt", "trunk", "rear_trunk"), "opening"),
)

_TPMS_FIELDS = {
    "tpms_front_left": ("fl", "front_left", "tpms_pressure_fl_bar", "tpms_pressure_fl"),
    "tpms_front_right": ("fr", "front_right", "tpms_pressure_fr_bar", "tpms_pressure_fr"),
    "tpms_rear_left": ("rl", "rear_left", "tpms_pressure_rl_bar", "tpms_pressure_rl"),
    "tpms_rear_right": ("rr", "rear_right", "tpms_pressure_rr_bar", "tpms_pressure_rr"),
}


def num(payload: Mapping[str, Any] | None, *keys: str) -> float | None:
    """Return the first finite number stored under one of the keys."""
    if not payload:
        return None
    for key in keys:
        if key not in payload or payload[key] is None:
            continue
        try:
            value = float(payload[key])
        except (TypeError, ValueError):
            return None
        if not math.isfinite(value):
            return None
        return value
    return None


def text(payload: Mapping[str, Any] | None, key: str) -> str | None:
    """Return a stripped string value."""
    if not payload or key not in payload or payload[key] is None:
        return None
    rendered = str(payload[key]).strip()
    return rendered or None


def haversine_m(lat1: float, lon1: float, lat2: float, lon2: float) -> float:
    """Great-circle distance in metres."""
    radius = 6_371_000.0
    phi1 = math.radians(lat1)
    phi2 = math.radians(lat2)
    d_phi = math.radians(lat2 - lat1)
    d_lambda = math.radians(lon2 - lon1)
    a = math.sin(d_phi / 2) ** 2 + math.cos(phi1) * math.cos(phi2) * math.sin(d_lambda / 2) ** 2
    return 2 * radius * math.atan2(math.sqrt(a), math.sqrt(1 - a))


def match_geofence(
    latitude: float | None,
    longitude: float | None,
    fences: list[dict[str, Any]] | tuple[dict[str, Any], ...],
) -> str | None:
    """Return the name of the smallest geofence containing the point."""
    if latitude is None or longitude is None:
        return None
    best_name: str | None = None
    best_distance: float | None = None
    for fence in fences:
        try:
            distance = haversine_m(
                latitude,
                longitude,
                float(fence["latitude"]),
                float(fence["longitude"]),
            )
            radius = float(fence["radius_m"])
        except (KeyError, TypeError, ValueError):
            continue
        if distance <= radius and (best_distance is None or distance < best_distance):
            best_distance = distance
            name = fence.get("name")
            best_name = str(name) if name else None
    return best_name


def efficiency_wh_per_km(drive: Mapping[str, Any] | None) -> float | None:
    """Return Wh/km for a drive, or None when distance is missing or zero."""
    if not drive:
        return None
    distance = num(drive, "distance_km")
    energy = num(drive, "energy_used_kwh")
    if distance is None or energy is None or distance <= 0:
        return None
    return energy * 1000.0 / distance


def plugged_in(state: Mapping[str, Any]) -> bool | None:
    """Return whether a charge cable is connected."""
    for key in ("plugged_in", "is_plugged_in"):
        if key in state and state[key] is not None:
            return bool(state[key])
    charging = state.get("charging_state")
    if charging is None:
        return None
    return str(charging).strip().lower() not in _DISCONNECTED


def lock_is_unlocked(state: Mapping[str, Any]) -> bool | None:
    """Return True when the car is unlocked.

    Home Assistant's lock device class uses on = unlocked and off = locked.
    """
    for key in ("locked", "is_locked"):
        if key in state and state[key] is not None:
            return not bool(state[key])
    return None


def sentry_on(state: Mapping[str, Any]) -> bool | None:
    """Return whether sentry mode is enabled."""
    for key in ("sentry_mode", "sentry"):
        if key in state and state[key] is not None:
            return bool(state[key])
    return None


def _as_open(value: Any) -> bool:
    if isinstance(value, bool):
        return value
    if isinstance(value, (int, float)) and not isinstance(value, bool):
        return value != 0
    if isinstance(value, str):
        return value.strip().lower() in {"1", "true", "open", "opened", "on", "yes"}
    return False


def closure_open(state: Mapping[str, Any], spec: ClosureSpec) -> bool | None:
    """Return whether a closure is open, or None if the server did not send it."""
    containers: list[Any] = []
    if spec.kind == "door":
        containers.append(state.get("doors"))
    elif spec.kind == "window":
        containers.append(state.get("windows"))
    else:
        containers.append(state.get("trunks"))
    for container in containers:
        if isinstance(container, Mapping):
            for field in spec.fields:
                if field in container and container[field] is not None:
                    return _as_open(container[field])
    for field in spec.fields:
        if field in state and state[field] is not None:
            return _as_open(state[field])
    return None


def exposed_closures(state: Mapping[str, Any]) -> list[ClosureSpec]:
    """Return closures present in this payload."""
    return [spec for spec in CLOSURES if closure_open(state, spec) is not None]


def _tpms(state: Mapping[str, Any], key: str) -> float | None:
    nested = state.get("tpms")
    fields = _TPMS_FIELDS[key]
    if isinstance(nested, Mapping):
        value = num(nested, *fields)
        if value is not None:
            return value
    return num(state, *fields)


def _drive_num(data: VehicleData, key: str) -> float | None:
    return num(data.last_drive, key)


def _charge_num(data: VehicleData, key: str) -> float | None:
    return num(data.last_charge, key)


def sensor_value(key: str, data: VehicleData) -> float | str | None:
    """Map a sensor key to its native value."""
    state = data.state
    readers = {
        "battery_level": lambda: num(state, "battery_level"),
        "usable_battery_level": lambda: num(state, "usable_battery_level"),
        "rated_range": lambda: num(state, "rated_range_km"),
        "ideal_range": lambda: num(state, "ideal_range_km"),
        "estimated_range": lambda: num(state, "est_range_km"),
        "odometer": lambda: num(state, "odometer_km"),
        "speed": lambda: num(state, "speed_kmh"),
        "power": lambda: num(state, "power_kw"),
        "inside_temp": lambda: num(state, "inside_temp_c"),
        "outside_temp": lambda: num(state, "outside_temp_c"),
        "charging_state": lambda: text(state, "charging_state"),
        "charger_power": lambda: num(state, "charger_power_kw"),
        "charger_voltage": lambda: num(state, "charger_voltage", "charger_voltage_v"),
        "charger_current": lambda: num(state, "charger_current", "charger_current_a"),
        "energy_added": lambda: num(state, "charge_energy_added_kwh"),
        "charge_limit": lambda: num(state, "charge_limit_soc", "charge_limit"),
        "activity": lambda: text(state, "activity"),
        "software_version": lambda: text(state, "software_version"),
        "update_status": lambda: text(state, "update_status"),
        "shift_state": lambda: text(state, "shift_state"),
        "geofence": lambda: data.geofence,
        "heading": lambda: num(state, "heading_deg"),
        "last_error": lambda: (
            redact_secrets(error) if (error := text(state, "last_error")) else None
        ),
        "last_drive_distance": lambda: _drive_num(data, "distance_km"),
        "last_drive_duration": lambda: _drive_num(data, "duration_s"),
        "last_drive_energy": lambda: _drive_num(data, "energy_used_kwh"),
        "last_drive_efficiency": lambda: efficiency_wh_per_km(data.last_drive),
        "last_charge_energy": lambda: _charge_num(data, "energy_added_kwh"),
        "last_charge_duration": lambda: _charge_num(data, "duration_s"),
    }
    if key in _TPMS_FIELDS:
        return _tpms(state, key)
    reader = readers.get(key)
    if reader is None:
        return None
    return reader()


def binary_value(key: str, data: VehicleData) -> bool | None:
    """Map a binary sensor key to its on/off value."""
    state = data.state
    if key == "plugged_in":
        return plugged_in(state)
    if key == "lock":
        return lock_is_unlocked(state)
    if key == "sentry":
        return sentry_on(state)
    for spec in CLOSURES:
        if spec.key == key:
            return closure_open(state, spec)
    return None


def battery_icon(level: float | None, charging: bool) -> str:
    """Return an mdi battery icon for a percentage."""
    if level is None:
        return "mdi:battery-unknown"
    step = max(0, min(100, int(round(level / 10.0) * 10)))
    if charging:
        if step >= 100:
            return "mdi:battery-charging-100"
        if step <= 0:
            return "mdi:battery-charging-outline"
        return f"mdi:battery-charging-{step}"
    if step >= 100:
        return "mdi:battery"
    if step <= 0:
        return "mdi:battery-outline"
    return f"mdi:battery-{step}"
