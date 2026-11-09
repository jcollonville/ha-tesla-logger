"""WebSocket client for live tesla-logger state frames."""

from __future__ import annotations

import asyncio
import json
import logging
from collections.abc import Awaitable, Callable
from typing import Any

from aiohttp import (
    ClientError,
    ClientResponseError,
    ClientSession,
    WSMsgType,
    WSServerHandshakeError,
)

from .api import TeslaLoggerAuthError, websocket_url

_LOGGER = logging.getLogger(__name__)

StateCallback = Callable[[dict[str, Any]], None]
AuthCallback = Callable[[], Awaitable[None] | None]


class TeslaLoggerWebSocket:
    """Follow GET /api/v1/ws and reconnect with exponential backoff.

    The bearer token is sent in the Authorization header, never the query string.
    """

    BACKOFF_START = 1.0
    BACKOFF_MAX = 60.0

    def __init__(
        self,
        session: ClientSession,
        base_url: str,
        token: str,
        on_state: StateCallback,
        on_auth_failed: AuthCallback,
        *,
        backoff_start: float | None = None,
        backoff_max: float | None = None,
    ) -> None:
        self._session = session
        self._url = websocket_url(base_url)
        self._token = token
        self._on_state = on_state
        self._on_auth_failed = on_auth_failed
        self._backoff_start = self.BACKOFF_START if backoff_start is None else backoff_start
        self._backoff_max = self.BACKOFF_MAX if backoff_max is None else backoff_max
        self.connected = False
        self.reconnect_delays: list[float] = []

    def __repr__(self) -> str:
        return f"TeslaLoggerWebSocket(url={self._url!r}, connected={self.connected})"

    async def run(self) -> None:
        """Read state frames until cancelled or the token is rejected."""
        delay = self._backoff_start
        while True:
            received = False
            try:
                received = await self._connect_once()
            except TeslaLoggerAuthError:
                self.connected = False
                await self._fail_auth()
                return
            except asyncio.CancelledError:
                self.connected = False
                raise
            except Exception:
                _LOGGER.debug("WebSocket disconnected (%s)", self._url)
            self.connected = False
            if received:
                delay = self._backoff_start
            self.reconnect_delays.append(delay)
            await asyncio.sleep(delay)
            delay = min(delay * 2, self._backoff_max)

    async def _fail_auth(self) -> None:
        result = self._on_auth_failed()
        if result is not None:
            await result

    async def _connect_once(self) -> bool:
        headers = {
            "Authorization": f"Bearer {self._token}",
            "Accept": "application/json",
        }
        try:
            websocket = await self._session.ws_connect(self._url, headers=headers)
        except WSServerHandshakeError as err:
            self._raise_if_unauthorized(err.status)
            raise
        except ClientResponseError as err:
            self._raise_if_unauthorized(err.status)
            raise
        received = False
        try:
            self.connected = True
            async for message in websocket:
                if message.type == WSMsgType.TEXT:
                    if self._handle(message.data):
                        received = True
                elif message.type in (
                    WSMsgType.CLOSE,
                    WSMsgType.CLOSED,
                    WSMsgType.ERROR,
                    WSMsgType.CLOSING,
                ):
                    break
        finally:
            self.connected = False
            await self._close(websocket)
        return received

    async def _close(self, websocket: Any) -> None:
        """Close the socket without blocking unload if the peer is gone."""
        if websocket.closed:
            return
        try:
            await asyncio.wait_for(websocket.close(), timeout=1)
        except asyncio.CancelledError:
            self._abort(websocket)
            raise
        except (TimeoutError, ClientError):
            self._abort(websocket)

    @staticmethod
    def _abort(websocket: Any) -> None:
        response = getattr(websocket, "_response", None)
        if response is not None:
            response.close()

    def _raise_if_unauthorized(self, status: int | None) -> None:
        if status == 401:
            raise TeslaLoggerAuthError("unauthorized", status=401)

    def _handle(self, raw: str) -> bool:
        try:
            payload = json.loads(raw)
        except json.JSONDecodeError:
            return False
        if not isinstance(payload, dict) or payload.get("type") != "state":
            return False
        self._on_state(payload)
        return True
