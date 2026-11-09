"""Config flow tests."""

from __future__ import annotations

from custom_components.tesla_logger.const import (
    CONF_SCAN_INTERVAL,
    CONF_TOKEN,
    CONF_URL,
    CONF_WEBSOCKET,
    DOMAIN,
)
from homeassistant.config_entries import SOURCE_REAUTH, SOURCE_USER
from pytest_homeassistant_custom_component.common import MockConfigEntry
from tests.fake_server import TOKEN


async def test_user_flow_creates_entry(hass, logger_server, enable_custom_integrations) -> None:
    state, url = logger_server
    result = await hass.config_entries.flow.async_init(DOMAIN, context={"source": SOURCE_USER})
    assert result["type"] == "form"
    result = await hass.config_entries.flow.async_configure(
        result["flow_id"],
        {CONF_URL: f"{url}/", CONF_TOKEN: TOKEN},
    )
    assert result["type"] == "create_entry"
    assert result["data"][CONF_URL] == url
    assert result["data"][CONF_TOKEN] == TOKEN
    assert result["options"][CONF_WEBSOCKET] is True
    assert state.headers
    assert all(header == f"Bearer {TOKEN}" for header in state.headers)
    assert TOKEN not in result["title"]


async def test_invalid_auth_and_url(hass, logger_server, enable_custom_integrations) -> None:
    _state, url = logger_server
    result = await hass.config_entries.flow.async_init(DOMAIN, context={"source": SOURCE_USER})
    bad_auth = await hass.config_entries.flow.async_configure(
        result["flow_id"],
        {CONF_URL: url, CONF_TOKEN: "tl_wrongtoken"},
    )
    assert bad_auth["errors"]["base"] == "invalid_auth"

    result = await hass.config_entries.flow.async_init(DOMAIN, context={"source": SOURCE_USER})
    bad_url = await hass.config_entries.flow.async_configure(
        result["flow_id"],
        {CONF_URL: "ftp://logger.local", CONF_TOKEN: TOKEN},
    )
    assert bad_url["errors"]["base"] == "invalid_url"

    result = await hass.config_entries.flow.async_init(DOMAIN, context={"source": SOURCE_USER})
    refused = await hass.config_entries.flow.async_configure(
        result["flow_id"],
        {CONF_URL: "http://127.0.0.1:1", CONF_TOKEN: TOKEN},
    )
    assert refused["errors"]["base"] == "cannot_connect"


async def test_duplicate_server_aborts(hass, logger_server, enable_custom_integrations) -> None:
    _state, url = logger_server
    MockConfigEntry(
        domain=DOMAIN,
        data={CONF_URL: url, CONF_TOKEN: TOKEN},
        unique_id=url,
    ).add_to_hass(hass)
    result = await hass.config_entries.flow.async_init(DOMAIN, context={"source": SOURCE_USER})
    result = await hass.config_entries.flow.async_configure(
        result["flow_id"],
        {CONF_URL: url, CONF_TOKEN: TOKEN},
    )
    assert result["type"] == "abort"
    assert result["reason"] == "already_configured"


async def test_options_and_reauth(hass, logger_server, enable_custom_integrations) -> None:
    state, url = logger_server
    entry = MockConfigEntry(
        domain=DOMAIN,
        data={CONF_URL: url, CONF_TOKEN: TOKEN},
        options={CONF_SCAN_INTERVAL: 60, CONF_WEBSOCKET: False},
        unique_id=url,
    )
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()

    result = await hass.config_entries.options.async_init(entry.entry_id)
    result = await hass.config_entries.options.async_configure(
        result["flow_id"],
        {CONF_SCAN_INTERVAL: 120, CONF_WEBSOCKET: False},
    )
    assert result["type"] == "create_entry"
    await hass.async_block_till_done()
    assert entry.options[CONF_SCAN_INTERVAL] == 120

    state.token = "tl_rotatedtoken"
    result = await hass.config_entries.flow.async_init(
        DOMAIN,
        context={
            "source": SOURCE_REAUTH,
            "entry_id": entry.entry_id,
            "unique_id": url,
        },
    )
    assert result["step_id"] == "reauth_confirm"
    result = await hass.config_entries.flow.async_configure(
        result["flow_id"],
        {CONF_TOKEN: "tl_rotatedtoken"},
    )
    assert result["type"] == "abort"
    assert result["reason"] == "reauth_successful"
    await hass.async_block_till_done()
    assert entry.data[CONF_TOKEN] == "tl_rotatedtoken"
