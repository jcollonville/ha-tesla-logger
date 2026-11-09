"""WebSocket reconnect and authentication failure."""

from __future__ import annotations

import asyncio
from contextlib import suppress

from aiohttp import ClientSession

from custom_components.tesla_logger.websocket import TeslaLoggerWebSocket
from tests.fake_server import TOKEN


async def test_reconnects_with_backoff_after_a_dropped_socket(logger_server) -> None:
    state, url = logger_server
    state.drop_ws = 1
    frames: list[dict] = []
    async with ClientSession() as session:
        client = TeslaLoggerWebSocket(
            session,
            url,
            TOKEN,
            on_state=frames.append,
            on_auth_failed=lambda: None,
            backoff_start=0.01,
            backoff_max=0.05,
        )
        task = asyncio.create_task(client.run())
        for _ in range(50):
            if frames:
                break
            await asyncio.sleep(0.02)
        task.cancel()
        with suppress(asyncio.CancelledError):
            await task
    assert state.ws_attempts >= 2
    assert frames[0]["type"] == "state"
    assert frames[0]["battery_level"] == 80
    assert client.reconnect_delays[0] == 0.01
    assert all("access_token" not in header for header in state.headers)


async def test_unauthorized_socket_stops_without_retry(logger_server) -> None:
    state, url = logger_server
    state.ws_unauthorized = True
    failed: list[bool] = []
    async with ClientSession() as session:
        client = TeslaLoggerWebSocket(
            session,
            url,
            TOKEN,
            on_state=lambda _frame: None,
            on_auth_failed=lambda: failed.append(True),
            backoff_start=0.01,
            backoff_max=0.05,
        )
        await asyncio.wait_for(client.run(), timeout=2)
    assert failed == [True]
    assert state.ws_attempts == 1
    assert client.reconnect_delays == []
    assert client.connected is False
