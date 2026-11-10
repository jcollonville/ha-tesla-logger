"""Services that proxy history queries so the browser never sees the token."""

from __future__ import annotations

import logging
from collections.abc import Awaitable
from typing import Any

import voluptuous as vol
from homeassistant.core import HomeAssistant, ServiceCall, SupportsResponse
from homeassistant.exceptions import HomeAssistantError, ServiceValidationError
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers import device_registry as dr

from .api import TeslaLoggerApiError, TeslaLoggerAuthError
from .const import (
    DOMAIN,
    SERVICE_GET_CHARGES,
    SERVICE_GET_CONSUMPTION_BY_TEMP,
    SERVICE_GET_DRIVE,
    SERVICE_GET_DRIVES,
    SERVICE_GET_STATS,
    SERVICE_GET_STATS_SERIES,
)
from .coordinator import TeslaLoggerCoordinator, TeslaLoggerHub
from .redact import redact_secrets

_LOGGER = logging.getLogger(__name__)

_SERIES = {
    vol.Required("device_id"): cv.string,
    vol.Required("period"): vol.In(("week", "month", "year")),
    vol.Optional("count", default=12): vol.All(vol.Coerce(int), vol.Range(min=1, max=120)),
}

_HISTORY = {
    vol.Required("device_id"): cv.string,
    vol.Optional("from"): cv.datetime,
    vol.Optional("to"): cv.datetime,
    vol.Optional("page", default=1): vol.All(vol.Coerce(int), vol.Range(min=1)),
    vol.Optional("per_page", default=20): vol.All(vol.Coerce(int), vol.Range(min=1, max=100)),
}


def _resolve(hass: HomeAssistant, device_id: str) -> tuple[TeslaLoggerHub, TeslaLoggerCoordinator]:
    device = dr.async_get(hass).async_get(device_id)
    if device is None:
        raise ServiceValidationError("Unknown device")
    vin = next(
        (identifier for domain, identifier in device.identifiers if domain == DOMAIN),
        None,
    )
    if vin is None:
        raise ServiceValidationError("Device is not a Tesla Logger vehicle")
    for entry in hass.config_entries.async_loaded_entries(DOMAIN):
        hub: TeslaLoggerHub = entry.runtime_data
        for coordinator in hub.coordinators.values():
            if coordinator.meta.vin == vin:
                return hub, coordinator
    raise ServiceValidationError("Vehicle is unavailable")


async def _call(action: Awaitable[Any]) -> dict[str, Any]:
    try:
        payload = await action
    except TeslaLoggerAuthError as err:
        raise HomeAssistantError("Authentication failed") from err
    except TeslaLoggerApiError as err:
        raise HomeAssistantError(redact_secrets(str(err))) from err
    if not isinstance(payload, dict):
        raise HomeAssistantError("Unexpected response")
    return payload


def async_register_services(hass: HomeAssistant) -> None:
    """Register history services once."""
    if hass.services.has_service(DOMAIN, SERVICE_GET_DRIVES):
        return

    async def get_drives(call: ServiceCall) -> dict[str, Any]:
        hub, coordinator = _resolve(hass, call.data["device_id"])
        return await _call(
            hub.api.list_drives(
                coordinator.meta.vehicle_id,
                start=call.data.get("from"),
                end=call.data.get("to"),
                page=call.data["page"],
                per_page=call.data["per_page"],
            )
        )

    async def get_drive(call: ServiceCall) -> dict[str, Any]:
        hub, coordinator = _resolve(hass, call.data["device_id"])
        payload = await _call(hub.api.get_drive(call.data["drive_id"], call.data["max_points"]))
        owner = payload.get("vehicle_id")
        if owner is not None and int(owner) != coordinator.meta.vehicle_id:
            raise ServiceValidationError("Drive belongs to another vehicle")
        return payload

    async def get_charges(call: ServiceCall) -> dict[str, Any]:
        hub, coordinator = _resolve(hass, call.data["device_id"])
        return await _call(
            hub.api.list_charges(
                coordinator.meta.vehicle_id,
                start=call.data.get("from"),
                end=call.data.get("to"),
                page=call.data["page"],
                per_page=call.data["per_page"],
            )
        )

    async def get_stats(call: ServiceCall) -> dict[str, Any]:
        hub, coordinator = _resolve(hass, call.data["device_id"])
        return await _call(
            hub.api.get_stats(
                coordinator.meta.vehicle_id,
                start=call.data.get("from"),
                end=call.data.get("to"),
            )
        )

    async def get_stats_series(call: ServiceCall) -> dict[str, Any]:
        hub, coordinator = _resolve(hass, call.data["device_id"])
        return await _call(
            hub.api.get_stats_series(
                coordinator.meta.vehicle_id,
                period=call.data["period"],
                count=call.data["count"],
            )
        )

    async def get_consumption_by_temp(call: ServiceCall) -> dict[str, Any]:
        hub, coordinator = _resolve(hass, call.data["device_id"])
        return await _call(
            hub.api.get_consumption_by_temp(
                coordinator.meta.vehicle_id,
                period=call.data["period"],
                count=call.data["count"],
            )
        )

    hass.services.async_register(
        DOMAIN,
        SERVICE_GET_DRIVES,
        get_drives,
        schema=vol.Schema(_HISTORY),
        supports_response=SupportsResponse.ONLY,
    )
    hass.services.async_register(
        DOMAIN,
        SERVICE_GET_DRIVE,
        get_drive,
        schema=vol.Schema(
            {
                vol.Required("device_id"): cv.string,
                vol.Required("drive_id"): vol.Coerce(int),
                vol.Optional("max_points", default=300): vol.All(
                    vol.Coerce(int), vol.Range(min=2, max=2000)
                ),
            }
        ),
        supports_response=SupportsResponse.ONLY,
    )
    hass.services.async_register(
        DOMAIN,
        SERVICE_GET_CHARGES,
        get_charges,
        schema=vol.Schema(_HISTORY),
        supports_response=SupportsResponse.ONLY,
    )
    hass.services.async_register(
        DOMAIN,
        SERVICE_GET_STATS,
        get_stats,
        schema=vol.Schema(
            {
                vol.Required("device_id"): cv.string,
                vol.Optional("from"): cv.datetime,
                vol.Optional("to"): cv.datetime,
            }
        ),
        supports_response=SupportsResponse.ONLY,
    )
    hass.services.async_register(
        DOMAIN,
        SERVICE_GET_STATS_SERIES,
        get_stats_series,
        schema=vol.Schema(_SERIES),
        supports_response=SupportsResponse.ONLY,
    )
    hass.services.async_register(
        DOMAIN,
        SERVICE_GET_CONSUMPTION_BY_TEMP,
        get_consumption_by_temp,
        schema=vol.Schema(_SERIES),
        supports_response=SupportsResponse.ONLY,
    )


def async_unload_services(hass: HomeAssistant) -> None:
    """Remove services when the last server entry is unloaded."""
    for service in (
        SERVICE_GET_DRIVES,
        SERVICE_GET_DRIVE,
        SERVICE_GET_CHARGES,
        SERVICE_GET_STATS,
        SERVICE_GET_STATS_SERIES,
        SERVICE_GET_CONSUMPTION_BY_TEMP,
    ):
        if hass.services.has_service(DOMAIN, service):
            hass.services.async_remove(DOMAIN, service)
