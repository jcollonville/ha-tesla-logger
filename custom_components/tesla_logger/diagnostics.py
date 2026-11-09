"""Diagnostics with the API token removed."""

from __future__ import annotations

from typing import Any

from homeassistant.components.diagnostics import async_redact_data
from homeassistant.core import HomeAssistant

from .const import CONF_TOKEN
from .coordinator import TeslaLoggerConfigEntry
from .redact import SECRET_KEYS, redact_tree

_TO_REDACT = set(SECRET_KEYS) | {CONF_TOKEN}


async def async_get_config_entry_diagnostics(
    hass: HomeAssistant, entry: TeslaLoggerConfigEntry
) -> dict[str, Any]:
    """Return diagnostics for a config entry."""
    del hass
    hub = entry.runtime_data
    vehicles: list[dict[str, Any]] = []
    for coordinator in hub.coordinators.values():
        data = coordinator.data
        vehicles.append(
            {
                "vehicle_id": coordinator.meta.vehicle_id,
                "vin": coordinator.meta.vin,
                "name": coordinator.meta.name,
                "model": coordinator.meta.model,
                "ws_connected": data.ws_connected if data else False,
                "geofence": data.geofence if data else None,
                "state": data.state if data else None,
                "last_drive_id": (data.last_drive or {}).get("id") if data else None,
                "last_charge_id": (data.last_charge or {}).get("id") if data else None,
                "last_update_success": coordinator.last_update_success,
            }
        )
    payload = {
        "entry": async_redact_data(entry.as_dict(), _TO_REDACT),
        "websocket_connected": hub.ws_connected,
        "vehicles": vehicles,
    }
    return redact_tree(payload)
