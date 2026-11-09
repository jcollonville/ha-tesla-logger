"""Diagnostics redact the API token."""

from __future__ import annotations

import json

from custom_components.tesla_logger.const import (
    CONF_SCAN_INTERVAL,
    CONF_TOKEN,
    CONF_URL,
    CONF_WEBSOCKET,
    DOMAIN,
)
from custom_components.tesla_logger.diagnostics import async_get_config_entry_diagnostics
from pytest_homeassistant_custom_component.common import MockConfigEntry
from tests.fake_server import TOKEN


async def test_diagnostics_redact_the_token(
    hass, logger_server, enable_custom_integrations
) -> None:
    _state, url = logger_server
    entry = MockConfigEntry(
        domain=DOMAIN,
        data={CONF_URL: url, CONF_TOKEN: TOKEN},
        options={CONF_SCAN_INTERVAL: 3600, CONF_WEBSOCKET: False},
        unique_id=url,
    )
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    payload = await async_get_config_entry_diagnostics(hass, entry)
    rendered = json.dumps(payload)
    assert TOKEN not in rendered
    assert "tl_shouldnotleak" not in rendered
    assert payload["entry"]["data"]["token"] == "**REDACTED**"
    assert payload["vehicles"][0]["state"]["battery_level"] == 55
    assert "tl_REDACTED" in payload["vehicles"][0]["state"]["last_error"]
