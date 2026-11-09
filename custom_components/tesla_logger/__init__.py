"""Tesla Logger integration."""

from __future__ import annotations

import logging

from homeassistant.core import HomeAssistant
from homeassistant.exceptions import ConfigEntryAuthFailed, ConfigEntryNotReady
from homeassistant.helpers import config_validation as cv
from homeassistant.helpers.aiohttp_client import async_get_clientsession

from .api import TeslaLoggerApi, TeslaLoggerApiError, TeslaLoggerAuthError
from .const import CONF_TOKEN, CONF_URL, DOMAIN, PLATFORMS
from .coordinator import TeslaLoggerConfigEntry, TeslaLoggerHub
from .frontend import async_register_card
from .services import async_register_services, async_unload_services

_LOGGER = logging.getLogger(__name__)

CONFIG_SCHEMA = cv.config_entry_only_config_schema(DOMAIN)


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Register the Lovelace card once Home Assistant starts."""
    del config
    hass.data.setdefault(DOMAIN, {})
    await async_register_card(hass)
    return True


async def async_setup_entry(hass: HomeAssistant, entry: TeslaLoggerConfigEntry) -> bool:
    """Connect to one tesla-logger server."""
    await async_register_card(hass)
    api = TeslaLoggerApi(
        async_get_clientsession(hass),
        entry.data[CONF_URL],
        entry.data[CONF_TOKEN],
    )
    hub = TeslaLoggerHub(hass, entry, api, entry.data[CONF_TOKEN])
    try:
        await hub.async_load_vehicles()
    except TeslaLoggerAuthError as err:
        raise ConfigEntryAuthFailed("Authentication failed") from err
    except TeslaLoggerApiError as err:
        raise ConfigEntryNotReady("Cannot reach Tesla Logger") from err
    if hub.coordinators:
        for coordinator in hub.coordinators.values():
            await coordinator.async_refresh()
    else:
        _LOGGER.warning("Tesla Logger at %s has no vehicles yet", entry.data[CONF_URL])
    entry.runtime_data = hub
    hass.data.setdefault(DOMAIN, {})[entry.entry_id] = hub
    await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)
    async_register_services(hass)
    entry.async_on_unload(entry.add_update_listener(async_reload_entry))
    if hub.websocket_should_run():
        entry.async_create_background_task(hass, hub.websocket.run(), name="tesla_logger_websocket")
    entry.async_create_background_task(hass, hub.discover_loop(), name="tesla_logger_discovery")
    return True


async def async_unload_entry(hass: HomeAssistant, entry: TeslaLoggerConfigEntry) -> bool:
    """Unload a server entry."""
    unloaded = await hass.config_entries.async_unload_platforms(entry, PLATFORMS)
    if unloaded:
        store = hass.data.get(DOMAIN, {})
        store.pop(entry.entry_id, None)
        if not any(key not in {"static_registered", "module_registered"} for key in store):
            async_unload_services(hass)
    return unloaded


async def async_reload_entry(hass: HomeAssistant, entry: TeslaLoggerConfigEntry) -> None:
    """Reload when options change."""
    await hass.config_entries.async_reload(entry.entry_id)
