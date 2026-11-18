"""Car render downloads: full body, size cap, and a complete PNG."""

from __future__ import annotations

import asyncio
from pathlib import Path

from aiohttp import ClientSession

from custom_components.tesla_logger.api import (
    MAX_CAR_IMAGE_BYTES,
    TeslaLoggerApi,
    png_is_complete,
    read_bounded_body,
)
from custom_components.tesla_logger.car_image import CarImageCache
from tests.fake_server import TOKEN, placeholder_png, synthetic_png, truncated_idat


def _stored_names(directory: Path) -> list[str]:
    return sorted(path.name for path in directory.rglob("*") if path.is_file())


async def _cached(url: str, tmp_path: Path, vehicle_id: int = 1):
    async with ClientSession() as session:
        api = TeslaLoggerApi(session, url, TOKEN)
        cache = CarImageCache(tmp_path, api.fetch_car_image)
        return await cache.get(vehicle_id)


async def test_chunked_upstream_is_read_in_full_and_cached(logger_server, tmp_path: Path) -> None:
    """Several small socket reads must be joined before the PNG is stored."""
    state, url = logger_server
    png = synthetic_png()
    state.car_png = png
    state.car_chunk_size = 64
    cached = await _cached(url, tmp_path)
    assert cached.content == png
    assert (tmp_path / "1.png").read_bytes() == png


async def test_truncated_upstream_png_is_rejected_and_not_cached(
    logger_server, tmp_path: Path
) -> None:
    """A PNG that ends inside a declared IDAT is not stored."""
    state, url = logger_server
    state.car_png = truncated_idat(synthetic_png())
    cached = await _cached(url, tmp_path)
    assert cached.content is None
    assert cached.missing is False
    assert _stored_names(tmp_path) == []


async def test_content_length_over_the_cap_is_rejected(logger_server, tmp_path: Path) -> None:
    """A declared length above the cap is refused before the body is treated as an image."""
    state, url = logger_server
    state.car_png = placeholder_png()
    state.car_content_length = MAX_CAR_IMAGE_BYTES + 1
    cached = await asyncio.wait_for(_cached(url, tmp_path), timeout=2)
    assert cached.content is None
    assert _stored_names(tmp_path) == []


async def test_content_length_must_match_the_body(logger_server, tmp_path: Path) -> None:
    """A body shorter than Content-Length is not cached, even when the bytes are a PNG."""
    state, url = logger_server
    png = placeholder_png()
    state.car_png = png
    state.car_content_length = len(png) + 10
    cached = await asyncio.wait_for(_cached(url, tmp_path), timeout=2)
    assert cached.content is None
    assert _stored_names(tmp_path) == []


class _Chunks:
    """In-memory body that ends after the given parts. Not an HTTP response."""

    def __init__(self, parts: list[bytes]) -> None:
        self.parts = list(parts)

    async def read(self, n: int) -> bytes:
        del n
        if not self.parts:
            return b""
        return self.parts.pop(0)


async def test_read_bounded_body_rejects_a_short_stream_when_length_is_declared() -> None:
    """A clean EOF shorter than Content-Length is not a complete body."""
    stream = _Chunks([b"abcdef"])
    assert await read_bounded_body(stream, 8, 100) is None


async def test_read_bounded_body_rejects_a_declared_length_over_the_cap() -> None:
    """The cap is applied before any chunk is pulled from the stream."""
    stream = _Chunks([b"abcdef"])
    assert await read_bounded_body(stream, 6, 5) is None
    assert stream.parts == [b"abcdef"]


async def test_read_bounded_body_stops_when_chunks_pass_the_cap() -> None:
    """An undeclared body is abandoned once the accumulated size passes the cap."""
    stream = _Chunks([b"aa", b"bbb", b"cc"])
    assert await read_bounded_body(stream, None, 4) is None
    assert stream.parts == [b"cc"]


async def test_png_is_complete_walks_chunks_to_iend() -> None:
    """Ancillary chunks are fine. A cut-off IDAT, a missing IEND, and trailing bytes are not."""
    png = synthetic_png()
    assert png_is_complete(png)
    assert png_is_complete(placeholder_png())
    assert not png_is_complete(truncated_idat(png))
    assert not png_is_complete(png[:-1])
    assert not png_is_complete(png + b"\x00")
    assert not png_is_complete(b"\x89PNG\r\n\x1a\n")


async def test_body_past_the_cap_is_rejected(logger_server, tmp_path: Path, monkeypatch) -> None:
    """Reading stops once the accumulated body passes the cap."""
    monkeypatch.setattr(
        "custom_components.tesla_logger.api.MAX_CAR_IMAGE_BYTES",
        48,
    )
    state, url = logger_server
    state.car_png = synthetic_png()
    state.car_chunk_size = 16
    cached = await _cached(url, tmp_path)
    assert cached.content is None
    assert _stored_names(tmp_path) == []
