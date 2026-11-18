"""Official car render: disk cache and the authenticated Home Assistant view."""

from __future__ import annotations

import json
import logging
import time
from pathlib import Path

from homeassistant.helpers import entity_registry as er
from homeassistant.setup import async_setup_component
from pytest_homeassistant_custom_component.common import MockConfigEntry

from custom_components.tesla_logger.api import CarImageUpstream
from custom_components.tesla_logger.car_image import REVALIDATE_SECONDS, CarImageCache
from custom_components.tesla_logger.const import (
    CONF_SCAN_INTERVAL,
    CONF_TOKEN,
    CONF_URL,
    CONF_WEBSOCKET,
    DOMAIN,
)
from tests.fake_server import TOKEN, VIN, placeholder_png

PNG = placeholder_png()
PNG_NEXT = placeholder_png((180, 40, 40))


def _names(directory: Path) -> list[str]:
    return sorted(path.name for path in directory.iterdir())


def _meta_text(directory: Path) -> str:
    return "\n".join(path.read_text(encoding="utf-8") for path in directory.rglob("*.json"))


def _tree_names(directory: Path) -> list[str]:
    return [path.name for path in directory.rglob("*")]


def test_placeholder_is_a_png() -> None:
    """The fixture image is generated here and starts with the PNG signature."""
    assert PNG.startswith(b"\x89PNG\r\n\x1a\n")
    assert PNG != PNG_NEXT


async def test_cache_revalidates_daily_and_keeps_bytes_when_the_server_is_down(
    tmp_path: Path,
) -> None:
    """A fresh file is not fetched again; a later outage still serves it."""
    clock = {"t": 1_700_000_000.0}
    calls: list[str | None] = []

    async def fetch(vehicle_id: int, etag: str | None) -> CarImageUpstream:
        calls.append(etag)
        assert vehicle_id == 4
        if len(calls) == 1:
            return CarImageUpstream("image", PNG, '"one"')
        if len(calls) == 2:
            return CarImageUpstream("not_modified", etag='"one"')
        return CarImageUpstream("unavailable")

    cache = CarImageCache(tmp_path, fetch, now=lambda: clock["t"])
    first = await cache.get(4)
    assert first.content == PNG
    assert calls == [None]

    clock["t"] += 60
    assert (await cache.get(4)).content == PNG
    assert calls == [None]

    clock["t"] += REVALIDATE_SECONDS
    assert (await cache.get(4)).content == PNG
    assert calls == [None, '"one"']

    clock["t"] += REVALIDATE_SECONDS
    assert (await cache.get(4)).content == PNG
    clock["t"] += 60
    assert (await cache.get(4)).content == PNG
    assert calls == [None, '"one"', '"one"']

    names = _names(tmp_path)
    assert "4.png" in names
    assert "4.json" in names
    meta = json.loads((tmp_path / "4.json").read_text(encoding="utf-8"))
    assert meta["etag"] == '"one"'
    assert TOKEN not in json.dumps(meta)
    assert VIN not in json.dumps(names)


async def test_cache_remembers_a_missing_render(tmp_path: Path) -> None:
    """A 404 stays cached, then a later PNG replaces it."""
    clock = {"t": 1_700_000_000.0}
    calls = 0

    async def fetch(vehicle_id: int, etag: str | None) -> CarImageUpstream:
        del vehicle_id, etag
        nonlocal calls
        calls += 1
        if calls == 1:
            return CarImageUpstream("missing")
        return CarImageUpstream("image", PNG, '"two"')

    cache = CarImageCache(tmp_path, fetch, now=lambda: clock["t"])
    assert (await cache.get(1)).missing is True
    clock["t"] += 60
    assert (await cache.get(1)).missing is True
    assert calls == 1
    assert not (tmp_path / "1.png").exists()

    clock["t"] += 6 * 60 * 60
    found = await cache.get(1)
    assert found.content == PNG
    assert found.missing is False
    assert calls == 2


async def test_cache_reloads_a_fresh_file_without_calling_the_server(tmp_path: Path) -> None:
    """A new process serves the PNG that the previous process stored."""
    clock = {"t": 1_700_000_000.0}
    calls = 0

    async def fetch(vehicle_id: int, etag: str | None) -> CarImageUpstream:
        del vehicle_id, etag
        nonlocal calls
        calls += 1
        return CarImageUpstream("image", PNG, '"disk"')

    first = CarImageCache(tmp_path, fetch, now=lambda: clock["t"])
    assert (await first.get(3)).content == PNG
    clock["t"] += 30
    second = CarImageCache(tmp_path, fetch, now=lambda: clock["t"])
    assert (await second.get(3)).content == PNG
    assert calls == 1


async def _setup(hass, url: str):
    # Home Assistant serves HTTP before custom integrations. The test instance does not.
    assert await async_setup_component(hass, "http", {})
    entry = MockConfigEntry(
        domain=DOMAIN,
        data={CONF_URL: url, CONF_TOKEN: TOKEN},
        options={CONF_SCAN_INTERVAL: 3600, CONF_WEBSOCKET: False},
        unique_id=url,
    )
    entry.add_to_hass(hass)
    assert await hass.config_entries.async_setup(entry.entry_id)
    await hass.async_block_till_done()
    return entry


async def test_view_serves_png_and_revalidates_with_etag(
    hass, hass_client, logger_server, enable_custom_integrations, caplog
) -> None:
    """The view uses the stored token, caches the body, and sends If-None-Match."""
    caplog.set_level(logging.DEBUG)
    state, url = logger_server
    state.car_png = PNG
    entry = await _setup(hass, url)
    client = await hass_client()
    path = f"/api/tesla_logger/{entry.entry_id}/1/car.png"

    first = await client.get(path)
    assert first.status == 200
    assert first.headers["Content-Type"].startswith("image/png")
    assert first.headers["ETag"] == '"render-1"'
    assert await first.read() == PNG
    assert state.car_requests == [{"id": "1", "if_none_match": None}]
    assert "/api/v1/vehicles/1/car.png" in state.paths
    assert all(VIN not in item for item in state.paths)

    second = await client.get(path)
    assert second.status == 200
    assert await second.read() == PNG
    assert len(state.car_requests) == 1

    hub = hass.data[DOMAIN][entry.entry_id]
    hub.car_images.now = lambda: time.time() + REVALIDATE_SECONDS + 5
    state.car_etag = '"render-2"'
    state.car_png = PNG_NEXT
    third = await client.get(path)
    assert third.status == 200
    assert await third.read() == PNG_NEXT
    assert state.car_requests[-1] == {"id": "1", "if_none_match": '"render-1"'}

    cached = await client.get(path, headers={"If-None-Match": '"render-2"'})
    assert cached.status == 304
    assert TOKEN not in caplog.text

    root = Path(hass.config.path("tesla_logger", "car_cache"))
    names = _tree_names(root)
    assert names
    blob = " ".join(names)
    assert VIN not in blob
    assert TOKEN not in blob
    meta = _meta_text(root)
    assert TOKEN not in meta
    assert VIN not in meta

    registry = er.async_get(hass)
    entity_id = registry.async_get_entity_id("image", DOMAIN, f"{VIN}_car")
    assert entity_id is not None
    picture = await client.get(f"/api/image_proxy/{entity_id}")
    assert picture.status == 200
    assert await picture.read() == PNG_NEXT

    battery = next(
        item for item in hass.states.async_all() if item.attributes.get("key") == "battery_level"
    )
    assert battery.attributes["vehicle_id"] == 1
    assert battery.attributes["config_entry_id"] == entry.entry_id


async def test_view_404_is_cached_and_a_vin_is_not_a_vehicle_id(
    hass, hass_client, hass_client_no_auth, logger_server, enable_custom_integrations, caplog
) -> None:
    """404, an unknown id, and a logged-out caller do not fetch with a VIN or leak the token."""
    caplog.set_level(logging.DEBUG)
    state, url = logger_server
    entry = await _setup(hass, url)
    client = await hass_client()
    anonymous = await hass_client_no_auth()
    path = f"/api/tesla_logger/{entry.entry_id}/1/car.png"

    denied = await anonymous.get(path)
    assert denied.status == 401
    assert state.car_requests == []

    missing = await client.get(path)
    assert missing.status == 404
    again = await client.get(path)
    assert again.status == 404
    assert len(state.car_requests) == 1

    vin_path = f"/api/tesla_logger/{entry.entry_id}/{VIN}/car.png"
    assert (await client.get(vin_path)).status == 404
    assert (await client.get(f"/api/tesla_logger/{entry.entry_id}/99/car.png")).status == 404
    assert (await client.get("/api/tesla_logger/missing-entry/1/car.png")).status == 404
    assert len(state.car_requests) == 1
    assert TOKEN not in caplog.text
    assert all(header == f"Bearer {TOKEN}" for header in state.headers if header)


async def test_view_serves_the_cached_png_when_the_server_is_down(
    hass, hass_client, logger_server, enable_custom_integrations
) -> None:
    """An unreachable server does not drop a render that was already stored."""
    state, url = logger_server
    state.car_png = PNG
    entry = await _setup(hass, url)
    client = await hass_client()
    path = f"/api/tesla_logger/{entry.entry_id}/1/car.png"
    assert (await client.get(path)).status == 200

    state.car_down = True
    hub = hass.data[DOMAIN][entry.entry_id]
    hub.car_images.now = lambda: time.time() + REVALIDATE_SECONDS + 5
    kept = await client.get(path)
    assert kept.status == 200
    assert await kept.read() == PNG
    assert state.car_requests[-1]["id"] == "1"


async def test_view_returns_503_until_a_render_exists(
    hass, hass_client, logger_server, enable_custom_integrations
) -> None:
    """A down server with no cache is not stored as a missing render."""
    state, url = logger_server
    state.car_down = True
    entry = await _setup(hass, url)
    client = await hass_client()
    path = f"/api/tesla_logger/{entry.entry_id}/1/car.png"
    assert (await client.get(path)).status == 503
    assert (await client.get(path)).status == 503
    assert len(state.car_requests) == 2

    state.car_down = False
    state.car_png = PNG
    found = await client.get(path)
    assert found.status == 200
    assert await found.read() == PNG
