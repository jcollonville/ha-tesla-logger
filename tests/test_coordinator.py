"""Coordinator, WebSocket updates, and entity state."""

from __future__ import annotations

import asyncio
import json

from homeassistant.helpers import device_registry as dr
from homeassistant.helpers import entity_registry as er
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.tesla_logger.const import (
    CONF_SCAN_INTERVAL,
    CONF_TOKEN,
    CONF_URL,
    CONF_WEBSOCKET,
    DOMAIN,
)
from tests.fake_server import TOKEN, VIN


def _entry(url: str, *, websocket: bool) -> MockConfigEntry:
    return MockConfigEntry(
        domain=DOMAIN,
        data={CONF_URL: url, CONF_TOKEN: TOKEN},
        options={CONF_SCAN_INTERVAL: 3600, CONF_WEBSOCKET: websocket},
        unique_id=url,
    )


def _state(hass, domain: str, key: str):
    entity_id = er.async_get(hass).async_get_entity_id(domain, DOMAIN, f"{VIN}_{key}")
    assert entity_id, key
    return hass.states.get(entity_id)


async def test_entities_follow_the_rest_payload(
    hass, logger_server, enable_custom_integrations
) -> None:
    state, url = logger_server
    entry = _entry(url, websocket=False)
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()

    battery = _state(hass, "sensor", "battery_level")
    assert float(battery.state) == 55
    assert battery.attributes["device_class"] == "battery"
    assert battery.attributes["unit_of_measurement"] == "%"
    assert float(_state(hass, "sensor", "rated_range").state) == 280.5
    assert _state(hass, "sensor", "rated_range").attributes["unit_of_measurement"] == "km"
    assert float(_state(hass, "sensor", "odometer").state) == 12345.6
    assert _state(hass, "sensor", "activity").state == "charging"
    assert _state(hass, "sensor", "geofence").state == "Home"
    assert float(_state(hass, "sensor", "inside_temp").state) == 21.5
    assert float(_state(hass, "sensor", "charger_power").state) == 11
    assert float(_state(hass, "sensor", "charger_voltage").state) == 230
    assert float(_state(hass, "sensor", "charge_limit").state) == 80
    assert float(_state(hass, "sensor", "tpms_front_left").state) == 2.9
    assert _state(hass, "sensor", "tpms_front_left").attributes["unit_of_measurement"] == "bar"
    assert abs(float(_state(hass, "sensor", "last_drive_efficiency").state) - (3200 / 18.4)) < 0.01
    assert "tl_shouldnotleak" not in _state(hass, "sensor", "last_error").state
    assert "tl_REDACTED" in _state(hass, "sensor", "last_error").state

    assert _state(hass, "binary_sensor", "plugged_in").state == "on"
    assert _state(hass, "binary_sensor", "lock").state == "off"
    assert _state(hass, "binary_sensor", "sentry").state == "on"
    assert _state(hass, "binary_sensor", "door_front_left").state == "on"
    assert _state(hass, "binary_sensor", "trunk").state == "on"
    assert _state(hass, "binary_sensor", "window_front_right").state == "on"

    tracker = _state(hass, "device_tracker", "location")
    assert tracker.attributes["latitude"] == 48.8566
    assert tracker.attributes["longitude"] == 2.3522
    assert tracker.attributes["source_type"] == "gps"

    device = dr.async_get(hass).async_get_device(identifiers={(DOMAIN, VIN)})
    assert device is not None
    assert device.manufacturer == "Tesla"
    assert device.model == "Model Y"
    assert device.sw_version == "2026.44.3"

    dumped = json.dumps(
        [item.as_dict() for item in hass.states.async_all()],
        default=str,
    )
    assert TOKEN not in dumped
    assert "tl_shouldnotleak" not in dumped

    state.battery_level = 61
    coordinator = next(iter(entry.runtime_data.coordinators.values()))
    await coordinator.async_refresh()
    await hass.async_block_till_done()
    assert float(_state(hass, "sensor", "battery_level").state) == 61


async def test_missing_optional_fields_stay_unknown_and_closures_are_absent(
    hass, logger_server, enable_custom_integrations
) -> None:
    state, url = logger_server
    state.rich = False
    state.last_error = None
    entry = _entry(url, websocket=False)
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()

    assert _state(hass, "sensor", "charger_voltage").state == "unknown"
    assert _state(hass, "sensor", "charge_limit").state == "unknown"
    assert _state(hass, "binary_sensor", "lock").state == "unknown"
    assert _state(hass, "binary_sensor", "sentry").state == "unknown"
    assert _state(hass, "binary_sensor", "plugged_in").state == "on"
    registry = er.async_get(hass)
    assert registry.async_get_entity_id("binary_sensor", DOMAIN, f"{VIN}_door_front_left") is None


async def test_websocket_updates_battery(
    hass, logger_server, enable_custom_integrations, monkeypatch
) -> None:
    from custom_components.tesla_logger.websocket import TeslaLoggerWebSocket

    monkeypatch.setattr(TeslaLoggerWebSocket, "BACKOFF_START", 0.01)
    monkeypatch.setattr(TeslaLoggerWebSocket, "BACKOFF_MAX", 0.05)
    state, url = logger_server
    state.drop_ws = 1
    entry = _entry(url, websocket=True)
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    assert float(_state(hass, "sensor", "battery_level").state) == 55

    for _ in range(50):
        await hass.async_block_till_done()
        if float(_state(hass, "sensor", "battery_level").state) == 80:
            break
        await asyncio.sleep(0.05)
    assert float(_state(hass, "sensor", "battery_level").state) == 80
    assert _state(hass, "sensor", "activity").state == "driving"
    assert state.ws_attempts >= 2
    assert all(header == f"Bearer {TOKEN}" for header in state.headers)
    hub = entry.runtime_data
    assert hub.websocket.reconnect_delays
    assert hub.websocket.reconnect_delays[0] == 0.01
