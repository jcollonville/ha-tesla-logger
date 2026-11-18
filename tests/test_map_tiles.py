"""Basemap proxy: path allow-list, disk cache, and Home Assistant auth."""

from __future__ import annotations

from pathlib import Path

import pytest
from aiohttp import web
from aiohttp.test_utils import TestServer
from homeassistant.setup import async_setup_component

from custom_components.tesla_logger.const import DOMAIN
from custom_components.tesla_logger.map_tiles import (
    TILE_TTL,
    MapTileCache,
    TileError,
    async_register_map_view,
    normalize_tile_path,
    rewrite_style,
    tile_path_allowed,
)

PNG = b"\x89PNG\r\n\x1a\nsea"


def _names(directory: Path) -> list[str]:
    if not directory.exists():
        return []
    return [path.name for path in directory.iterdir()]


STYLE = b'{"sprite":"UPSTREAM/sprites/ofm_f384/ofm","tiles":["UPSTREAM/planet/20260101_000000_pt/{z}/{x}/{y}.pbf"]}'


def test_only_the_two_styles_and_their_assets_are_allowed() -> None:
    """The proxy accepts the console styles and rejects everything else."""
    assert tile_path_allowed("styles/positron")
    assert tile_path_allowed("styles/dark")
    assert not tile_path_allowed("styles/liberty")
    assert tile_path_allowed("planet")
    assert tile_path_allowed("planet/20261115_080022_pt/3/2/1.pbf")
    assert not tile_path_allowed("planet/20261115_080022_pt/15/0/0.pbf")
    assert not tile_path_allowed("planet/not-a-stamp/0/0/0.pbf")
    assert tile_path_allowed("fonts/Noto Sans Regular/0-255.pbf")
    assert not tile_path_allowed("fonts/Noto Sans Regular/1-255.pbf")
    assert tile_path_allowed("sprites/ofm_f384/ofm.json")
    assert tile_path_allowed("sprites/ofm_f384/ofm@2x.png")
    assert not tile_path_allowed("sprites/ofm_f384/other.png")
    assert tile_path_allowed("natural_earth/ne2sr/2/1/1.png")
    assert not tile_path_allowed("natural_earth/ne2sr/7/0/0.png")
    assert not tile_path_allowed("planet/20261115_080022_pt/3/9/1.pbf")


def test_normalization_rejects_traversal_and_foreign_urls() -> None:
    """Encoded dots, empty segments, and absolute URLs are not paths we fetch."""
    assert normalize_tile_path("fonts/Noto%20Sans/0-255.pbf") == "fonts/Noto Sans/0-255.pbf"
    assert normalize_tile_path("../tokens.json") is None
    assert normalize_tile_path("styles/%2e%2e/secret") is None
    assert normalize_tile_path("styles//positron") is None
    assert normalize_tile_path("https://tiles.openfreemap.org/styles/positron") is None
    assert normalize_tile_path("styles/positron?next=https://example.com") is None


def test_style_json_points_at_the_home_assistant_proxy() -> None:
    """Style and TileJSON URLs are rewritten before the browser can see them."""
    body = (
        b'{"tiles":["http://127.0.0.1:9/planet/20260101_000000_pt/{z}/{x}/{y}.pbf"],'
        b'"glyphs":"http://127.0.0.1:9/fonts/{fontstack}/{range}.pbf"}'
    )
    rewritten = rewrite_style(body, "http://127.0.0.1:9")
    assert rewritten is not None
    text = rewritten.decode()
    assert "127.0.0.1" not in text
    assert "tiles.openfreemap.org" not in text
    assert '"/api/tesla_logger/map/planet/20260101_000000_pt/{z}/{x}/{y}.pbf"' in text
    assert rewrite_style(b"<html>", "http://127.0.0.1:9") is None
    credited = (
        b'{"attribution":"<a href=\\"https://openfreemap.org\\">OpenFreeMap</a>",'
        b'"tiles":["https://tiles.openfreemap.org/planet/20260101_000000_pt/{z}/{x}/{y}.pbf"]}'
    )
    kept = rewrite_style(credited, "https://tiles.openfreemap.org")
    assert kept is not None
    kept_text = kept.decode()
    assert "https://openfreemap.org" in kept_text
    assert "tiles.openfreemap.org" not in kept_text
    assert "/api/tesla_logger/map/planet/20260101_000000_pt/{z}/{x}/{y}.pbf" in kept_text
    sourced = b'{"sources":{"openmaptiles":{"type":"vector","url":"https://tiles.openfreemap.org/planet"}}}'
    sourced_text = rewrite_style(sourced, "https://tiles.openfreemap.org")
    assert sourced_text is not None
    assert b"tiles.openfreemap.org" not in sourced_text
    assert b"/api/tesla_logger/map/planet" in sourced_text


def _tile_app(hits: list[dict[str, str | None]]) -> web.Application:
    async def handle(request: web.Request) -> web.Response:
        hits.append(
            {
                "path": request.path,
                "if_none_match": request.headers.get("If-None-Match"),
                "authorization": request.headers.get("Authorization"),
                "user_agent": request.headers.get("User-Agent"),
            }
        )
        rel = request.path.lstrip("/")
        if rel == "natural_earth/ne2sr/2/1/1.png":
            if request.headers.get("If-None-Match") == '"png-1"':
                return web.Response(status=304, headers={"ETag": '"png-1"'})
            return web.Response(body=PNG, content_type="image/png", headers={"ETag": '"png-1"'})
        if rel == "styles/positron":
            base = str(request.url.origin())
            body = STYLE.replace(b"UPSTREAM", base.encode())
            return web.Response(
                body=body, content_type="application/json", headers={"ETag": '"style-1"'}
            )
        if rel == "boom":
            return web.Response(status=502)
        return web.Response(status=404)

    app = web.Application()
    app.router.add_route("GET", "/{path:.*}", handle)
    return app


async def test_cache_fetches_once_revalidates_and_serves_stale(
    tmp_path: Path, allow_sockets
) -> None:
    """A tile is stored on disk, revalidated with ETag, and kept when upstream fails."""
    del allow_sockets
    hits: list[dict[str, str | None]] = []
    server = TestServer(app=_tile_app(hits))
    await server.start_server()
    try:
        clock = {"t": 1_700_000_000.0}
        cache = MapTileCache(
            tmp_path,
            server.make_url("/"),
            now=lambda: clock["t"],
            max_files=2,
        )
        with pytest.raises(TileError) as denied:
            await cache.get("../etc/passwd")
        assert denied.value.status == 404
        first = await cache.get("natural_earth/ne2sr/2/1/1.png")
        assert first is not None
        assert first.body == PNG
        assert first.etag == '"png-1"'
        assert len(hits) == 1
        assert hits[0]["authorization"] is None
        assert hits[0]["if_none_match"] is None
        assert "tesla" in (hits[0]["user_agent"] or "")

        clock["t"] += 60
        assert (await cache.get("natural_earth/ne2sr/2/1/1.png")).body == PNG
        assert len(hits) == 1

        names = _names(tmp_path)
        assert not any("ne2sr" in name or name.endswith(".png") for name in names)
        assert names

        clock["t"] += TILE_TTL
        second = await cache.get("natural_earth/ne2sr/2/1/1.png")
        assert second is not None
        assert second.body == PNG
        assert hits[-1]["if_none_match"] == '"png-1"'

        restarted = MapTileCache(tmp_path, "http://127.0.0.1:9", now=lambda: clock["t"])
        assert (await restarted.get("natural_earth/ne2sr/2/1/1.png")).body == PNG
        assert len(hits) == 2

        clock["t"] += TILE_TTL
        stale_server = MapTileCache(tmp_path, "http://127.0.0.1:9", now=lambda: clock["t"])
        kept = await stale_server.get("natural_earth/ne2sr/2/1/1.png")
        assert kept is not None
        assert kept.body == PNG
        await cache.close()
        await restarted.close()
        await stale_server.close()
    finally:
        await server.close()


async def test_style_urls_are_rewritten_before_they_are_cached(
    tmp_path: Path, allow_sockets
) -> None:
    """The cached style JSON has no upstream host left in it."""
    del allow_sockets
    hits: list[dict[str, str | None]] = []
    server = TestServer(app=_tile_app(hits))
    await server.start_server()
    try:
        cache = MapTileCache(tmp_path, server.make_url("/"))
        tile = await cache.get("styles/positron")
        assert tile is not None
        text = tile.body.decode()
        assert "/api/tesla_logger/map/sprites/ofm_f384/ofm" in text
        assert "127.0.0.1" not in text
        assert "tiles.openfreemap.org" not in text
        await cache.get("styles/positron")
        assert len(hits) == 1
        assert tile.content_type == "application/json"
        await cache.close()
    finally:
        await server.close()


async def test_oversized_body_and_unrewritten_style_are_dropped(
    tmp_path: Path, allow_sockets
) -> None:
    """A body over the cap, or a style that still names the tile host, is not stored."""
    del allow_sockets

    async def handle(request: web.Request) -> web.Response:
        rel = request.path.lstrip("/")
        if rel == "natural_earth/ne2sr/0/0/0.png":
            return web.Response(body=PNG + b"x" * 64, content_type="image/png")
        if rel == "styles/dark":
            return web.Response(
                body=b'{"tiles":["https://evil.example/planet/{z}/{x}/{y}.pbf"]}',
                content_type="application/json",
            )
        return web.Response(status=404)

    app = web.Application()
    app.router.add_get("/{path:.*}", handle)
    server = TestServer(app)
    await server.start_server()
    try:
        cache = MapTileCache(tmp_path, server.make_url("/"), max_bytes=16)
        with pytest.raises(TileError) as oversized:
            await cache.get("natural_earth/ne2sr/0/0/0.png")
        assert oversized.value.status == 502
        with pytest.raises(TileError) as leaked:
            await cache.get("styles/dark")
        assert leaked.value.status == 502
        assert _names(tmp_path) == []
        await cache.close()
    finally:
        await server.close()


async def test_map_view_requires_auth_and_refuses_an_open_proxy(
    hass, hass_client, hass_client_no_auth, allow_sockets, tmp_path: Path
) -> None:
    """Logged-out callers get 401, and rejected paths never reach the tile host."""
    del allow_sockets
    hits: list[dict[str, str | None]] = []
    server = TestServer(app=_tile_app(hits))
    await server.start_server()
    try:
        assert await async_setup_component(hass, "http", {})
        cache = MapTileCache(tmp_path, server.make_url("/"))
        hass.data.setdefault(DOMAIN, {})["map_cache"] = cache
        async_register_map_view(hass)
        anonymous = await hass_client_no_auth()
        client = await hass_client()

        denied = await anonymous.get("/api/tesla_logger/map/styles/positron")
        assert denied.status == 401
        assert hits == []

        missing = await client.get("/api/tesla_logger/map/styles/liberty")
        assert missing.status == 404
        escaped = await client.get("/api/tesla_logger/map/styles/%2e%2e/secret")
        assert escaped.status == 404
        assert hits == []

        style = await client.get("/api/tesla_logger/map/styles/positron")
        assert style.status == 200
        assert "json" in style.headers["Content-Type"]
        body = await style.read()
        assert b"tiles.openfreemap.org" not in body
        assert b"/api/tesla_logger/map/" in body
        assert len(hits) == 1
        assert hits[0]["authorization"] is None
        await cache.close()
    finally:
        await server.close()
