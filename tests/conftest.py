"""Pytest fixtures for the Tesla Logger integration."""

from __future__ import annotations

from collections.abc import AsyncIterator

import pytest
import pytest_socket
from aiohttp.test_utils import TestServer

from tests.fake_server import FakeState, make_app

pytest_plugins = "pytest_homeassistant_custom_component"


@pytest.fixture(scope="session", autouse=True)
def _pycares_thread():
    """aiohttp's resolver starts a daemon thread on first use.

    Home Assistant's cleanup check treats that thread as a leak if it appears
    during a test, so start it once before any test records its thread set.
    """
    import pycares

    pycares.Channel()
    yield


@pytest.fixture
def allow_sockets():
    """The HA test plugin blocks sockets. The fake server needs a local port."""
    pytest_socket.enable_socket()
    yield
    pytest_socket.disable_socket(allow_unix_socket=True)
    pytest_socket.socket_allow_hosts(["127.0.0.1"])


@pytest.fixture
async def logger_server(allow_sockets) -> AsyncIterator[tuple[FakeState, str]]:
    """Start a local fake tesla-logger server."""
    del allow_sockets
    state = FakeState()
    server = TestServer(make_app(state))
    await server.start_server()
    try:
        yield state, str(server.make_url("/")).rstrip("/")
    finally:
        await server.close()
