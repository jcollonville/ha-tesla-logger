"""Config and options flow for Tesla Logger."""

from __future__ import annotations

import logging
from collections.abc import Mapping
from typing import Any
from urllib.parse import urlparse

import voluptuous as vol
from homeassistant.config_entries import (
    ConfigEntry,
    ConfigFlow,
    ConfigFlowResult,
    OptionsFlow,
)
from homeassistant.core import HomeAssistant, callback
from homeassistant.exceptions import HomeAssistantError
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from homeassistant.helpers.selector import (
    BooleanSelector,
    NumberSelector,
    NumberSelectorConfig,
    NumberSelectorMode,
    TextSelector,
    TextSelectorConfig,
    TextSelectorType,
)

from .api import (
    InvalidUrl,
    TeslaLoggerApi,
    TeslaLoggerApiError,
    TeslaLoggerAuthError,
    normalize_url,
)
from .const import (
    CONF_SCAN_INTERVAL,
    CONF_TOKEN,
    CONF_URL,
    CONF_WEBSOCKET,
    DEFAULT_SCAN_INTERVAL,
    DOMAIN,
    MAX_SCAN_INTERVAL,
    MIN_SCAN_INTERVAL,
)

_LOGGER = logging.getLogger(__name__)


class CannotConnect(HomeAssistantError):
    """The server did not respond."""


class InvalidAuth(HomeAssistantError):
    """The token was rejected."""


def _url_selector() -> TextSelector:
    return TextSelector(TextSelectorConfig(type=TextSelectorType.URL))


def _token_selector() -> TextSelector:
    return TextSelector(TextSelectorConfig(type=TextSelectorType.PASSWORD))


async def async_validate(hass: HomeAssistant, url: str, token: str) -> str:
    """Validate the URL and token by listing vehicles."""
    try:
        normalized = normalize_url(url)
    except InvalidUrl as err:
        raise InvalidUrl("invalid url") from err
    cleaned = token.strip()
    if not cleaned:
        raise InvalidAuth
    api = TeslaLoggerApi(async_get_clientsession(hass), normalized, cleaned)
    try:
        await api.list_vehicles()
    except TeslaLoggerAuthError as err:
        raise InvalidAuth from err
    except TeslaLoggerApiError as err:
        raise CannotConnect from err
    return normalized


class TeslaLoggerConfigFlow(ConfigFlow, domain=DOMAIN):
    """Ask for the server URL and a read API token."""

    VERSION = 1

    async def async_step_user(self, user_input: dict[str, Any] | None = None) -> ConfigFlowResult:
        errors: dict[str, str] = {}
        if user_input is not None:
            try:
                url = await async_validate(self.hass, user_input[CONF_URL], user_input[CONF_TOKEN])
            except InvalidUrl:
                errors["base"] = "invalid_url"
            except CannotConnect:
                errors["base"] = "cannot_connect"
            except InvalidAuth:
                errors["base"] = "invalid_auth"
            except Exception:
                _LOGGER.exception("Unexpected Tesla Logger validation error")
                errors["base"] = "unknown"
            else:
                await self.async_set_unique_id(url)
                self._abort_if_unique_id_configured()
                return self.async_create_entry(
                    title=urlparse(url).netloc or url,
                    data={CONF_URL: url, CONF_TOKEN: user_input[CONF_TOKEN].strip()},
                    options={
                        CONF_SCAN_INTERVAL: DEFAULT_SCAN_INTERVAL,
                        CONF_WEBSOCKET: True,
                    },
                )
        return self.async_show_form(
            step_id="user",
            data_schema=vol.Schema(
                {
                    vol.Required(CONF_URL): _url_selector(),
                    vol.Required(CONF_TOKEN): _token_selector(),
                }
            ),
            errors=errors,
        )

    async def async_step_reauth(self, entry_data: Mapping[str, Any]) -> ConfigFlowResult:
        """Start reauthentication when the token is rejected."""
        _ = entry_data
        return await self.async_step_reauth_confirm()

    async def async_step_reauth_confirm(
        self, user_input: dict[str, Any] | None = None
    ) -> ConfigFlowResult:
        errors: dict[str, str] = {}
        entry = self._get_reauth_entry()
        if user_input is not None:
            try:
                await async_validate(self.hass, entry.data[CONF_URL], user_input[CONF_TOKEN])
            except CannotConnect:
                errors["base"] = "cannot_connect"
            except InvalidAuth:
                errors["base"] = "invalid_auth"
            except InvalidUrl:
                errors["base"] = "invalid_url"
            except Exception:
                _LOGGER.exception("Unexpected Tesla Logger reauth error")
                errors["base"] = "unknown"
            else:
                return self.async_update_reload_and_abort(
                    entry,
                    data_updates={CONF_TOKEN: user_input[CONF_TOKEN].strip()},
                )
        return self.async_show_form(
            step_id="reauth_confirm",
            data_schema=vol.Schema({vol.Required(CONF_TOKEN): _token_selector()}),
            errors=errors,
        )

    @staticmethod
    @callback
    def async_get_options_flow(
        config_entry: ConfigEntry,
    ) -> TeslaLoggerOptionsFlow:
        return TeslaLoggerOptionsFlow()


class TeslaLoggerOptionsFlow(OptionsFlow):
    """Scan interval and WebSocket toggle."""

    async def async_step_init(self, user_input: dict[str, Any] | None = None) -> ConfigFlowResult:
        if user_input is not None:
            user_input[CONF_SCAN_INTERVAL] = int(user_input[CONF_SCAN_INTERVAL])
            return self.async_create_entry(data=user_input)
        options = self.config_entry.options
        return self.async_show_form(
            step_id="init",
            data_schema=vol.Schema(
                {
                    vol.Required(
                        CONF_SCAN_INTERVAL,
                        default=int(options.get(CONF_SCAN_INTERVAL, DEFAULT_SCAN_INTERVAL)),
                    ): NumberSelector(
                        NumberSelectorConfig(
                            min=MIN_SCAN_INTERVAL,
                            max=MAX_SCAN_INTERVAL,
                            step=5,
                            mode=NumberSelectorMode.BOX,
                            unit_of_measurement="s",
                        )
                    ),
                    vol.Required(
                        CONF_WEBSOCKET,
                        default=bool(options.get(CONF_WEBSOCKET, True)),
                    ): BooleanSelector(),
                }
            ),
        )
