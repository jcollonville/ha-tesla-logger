"""History services return server payloads and hide the token."""

from __future__ import annotations

import json

from homeassistant.helpers import device_registry as dr
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.tesla_logger.const import (
    CONF_SCAN_INTERVAL,
    CONF_TOKEN,
    CONF_URL,
    CONF_WEBSOCKET,
    DOMAIN,
)
from tests.fake_server import TOKEN, VIN


async def test_services_return_history(hass, logger_server, enable_custom_integrations) -> None:
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
    device = dr.async_get(hass).async_get_device(identifiers={(DOMAIN, VIN)})
    assert device is not None

    drives = await hass.services.async_call(
        DOMAIN,
        "get_drives",
        {"device_id": device.id, "page": 1, "per_page": 5},
        blocking=True,
        return_response=True,
    )
    assert drives["total"] == 1
    assert drives["data"][0]["distance_km"] == 18.4

    detail = await hass.services.async_call(
        DOMAIN,
        "get_drive",
        {"device_id": device.id, "drive_id": 7, "max_points": 100},
        blocking=True,
        return_response=True,
    )
    assert len(detail["route"]) == 3
    assert detail["series"][1]["speed_kmh"] == 80

    charges = await hass.services.async_call(
        DOMAIN,
        "get_charges",
        {"device_id": device.id},
        blocking=True,
        return_response=True,
    )
    assert charges["data"][0]["energy_added_kwh"] == 6.5

    stats = await hass.services.async_call(
        DOMAIN,
        "get_stats",
        {
            "device_id": device.id,
            "from": "2026-11-01T00:00:00+00:00",
            "to": "2026-11-09T00:00:00+00:00",
        },
        blocking=True,
        return_response=True,
    )
    assert stats["distance_km"] == 120.5
    assert stats["drive_count"] == 4

    series = await hass.services.async_call(
        DOMAIN,
        "get_stats_series",
        {"device_id": device.id, "period": "month", "count": 6},
        blocking=True,
        return_response=True,
    )
    assert series["period"] == "month"
    assert series["buckets"][0]["wh_per_km"] == 180
    assert series["buckets"][0]["drive_duration_s"] == 7200
    assert series["buckets"][0]["drive_count"] == 4
    assert series["buckets"][1]["wh_per_km"] is None
    assert series["buckets"][0]["start"] < series["buckets"][1]["start"]
    assert _state.series_calls == [{"id": "1", "period": "month", "count": "6"}]
    assert "/api/v1/vehicles/1/stats/series" in _state.paths
    assert TOKEN not in json.dumps([drives, detail, charges, stats, series])
