"""The Lovelace card is cached, code-split, and precompressed."""

from __future__ import annotations

import json
from pathlib import Path
from types import SimpleNamespace

from aiohttp import web
from aiohttp.test_utils import TestClient, TestServer
from homeassistant.components.frontend import DATA_EXTRA_MODULE_URL

from custom_components.tesla_logger.const import CARD_STATIC_PATH, CARD_URL, CARD_VERSION
from custom_components.tesla_logger.frontend import async_register_card

ROOT = Path(__file__).resolve().parents[1]
WWW = ROOT / "custom_components" / "tesla_logger" / "www"


async def test_card_static_path_is_a_cached_directory() -> None:
    """Chunks share one cached directory; the loader URL stays versioned."""
    configs: list[object] = []

    async def register(items: list[object]) -> None:
        configs.extend(items)

    hass = SimpleNamespace(
        data={DATA_EXTRA_MODULE_URL: set()},
        http=SimpleNamespace(app=object(), async_register_static_paths=register),
    )
    await async_register_card(hass)  # type: ignore[arg-type]

    assert len(configs) == 1
    config = configs[0]
    assert config.url_path == CARD_STATIC_PATH
    assert config.cache_headers is True
    assert Path(config.path) == WWW
    assert CARD_URL in hass.data[DATA_EXTRA_MODULE_URL]
    assert CARD_URL.endswith(f"?v={CARD_VERSION}")


def test_built_chunks_are_precompressed_and_split() -> None:
    """The eager loader stays small; Leaflet is its own precompressed chunk."""
    scripts = sorted(WWW.glob("*.js"))
    assert [path.name for path in scripts if path.name == "tesla-logger-card.js"]
    loader = (WWW / "tesla-logger-card.js").read_text(encoding="utf-8")
    assert len(loader.encode()) < 30_000
    assert f"?v={CARD_VERSION}" in loader
    assert 'import("./' in loader or "import('./" in loader
    leaflet = [path for path in scripts if path.name.startswith("leaflet-")]
    assert len(leaflet) == 1
    assert "1.9.4" in leaflet[0].read_text(encoding="utf-8")
    for script in scripts:
        if script == leaflet[0]:
            continue
        assert "1.9.4" not in script.read_text(encoding="utf-8")
        text = script.read_text(encoding="utf-8")
        assert 'from"lit"' not in text
        assert 'from"leaflet"' not in text
        assert "from 'lit'" not in text
        assert "from 'leaflet'" not in text
        for suffix in (".gz", ".br"):
            sibling = Path(str(script) + suffix)
            assert sibling.is_file()
            assert sibling.stat().st_size < script.stat().st_size
    manifest = json.loads((WWW.parent / "manifest.json").read_text(encoding="utf-8"))
    assert manifest["version"] == "0.1.11"


async def test_aiohttp_serves_precompressed_siblings(tmp_path: Path, allow_sockets) -> None:
    """FileResponse prefers .br, then .gz, and keeps the JavaScript content type."""
    del allow_sockets
    www = tmp_path / "www"
    www.mkdir()
    (www / "card.js").write_bytes(b"plain")
    (www / "card.js.gz").write_bytes(b"gzip-body")
    (www / "card.js.br").write_bytes(b"br-body")
    app = web.Application()
    app.router.add_static("/tesla_logger", www)
    client = TestClient(TestServer(app), auto_decompress=False)
    await client.start_server()
    try:
        plain = await client.get("/tesla_logger/card.js", headers={"Accept-Encoding": "identity"})
        assert plain.status == 200
        assert "Content-Encoding" not in plain.headers
        assert "javascript" in plain.headers["Content-Type"]
        assert await plain.read() == b"plain"

        gzipped = await client.get("/tesla_logger/card.js", headers={"Accept-Encoding": "gzip"})
        assert gzipped.headers["Content-Encoding"] == "gzip"
        assert gzipped.headers["Vary"] == "Accept-Encoding"
        assert "javascript" in gzipped.headers["Content-Type"]
        assert await gzipped.read() == b"gzip-body"

        brotli = await client.get(
            "/tesla_logger/card.js",
            headers={"Accept-Encoding": "gzip, deflate, br"},
        )
        assert brotli.headers["Content-Encoding"] == "br"
        assert "javascript" in brotli.headers["Content-Type"]
        assert await brotli.read() == b"br-body"
    finally:
        await client.close()
