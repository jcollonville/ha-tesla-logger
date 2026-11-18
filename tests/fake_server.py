"""In-process tesla-logger stand-in for tests."""

from __future__ import annotations

import asyncio
import struct
import zlib
from typing import Any

from aiohttp import web

TOKEN = "tl_testtoken"
VIN = "5YJTEST0000000001"


def placeholder_png(color: tuple[int, int, int] = (20, 90, 180)) -> bytes:
    """Return a 2x2 PNG generated here. It is not Tesla artwork."""

    def chunk(tag: bytes, data: bytes) -> bytes:
        return (
            struct.pack(">I", len(data))
            + tag
            + data
            + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)
        )

    raw = b"".join(b"\x00" + bytes(color) * 2 for _ in range(2))
    header = struct.pack(">IIBBBBB", 2, 2, 8, 2, 0, 0, 0)
    return (
        b"\x89PNG\r\n\x1a\n"
        + chunk(b"IHDR", header)
        + chunk(b"IDAT", zlib.compress(raw))
        + chunk(b"IEND", b"")
    )


def synthetic_png(color: tuple[int, int, int] = (20, 90, 180), size: int = 24) -> bytes:
    """Return a generated RGB PNG with ancillary chunks. It is not Tesla artwork."""

    def chunk(tag: bytes, data: bytes) -> bytes:
        return (
            struct.pack(">I", len(data))
            + tag
            + data
            + struct.pack(">I", zlib.crc32(tag + data) & 0xFFFFFFFF)
        )

    row = b"\x00" + bytes(color) * size
    header = struct.pack(">IIBBBBB", size, size, 8, 2, 0, 0, 0)
    return (
        b"\x89PNG\r\n\x1a\n"
        + chunk(b"IHDR", header)
        + chunk(b"gAMA", struct.pack(">I", 45455))
        + chunk(b"cHRM", struct.pack(">8I", 31270, 32900, 64000, 33000, 30000, 60000, 15000, 6000))
        + chunk(b"bKGD", struct.pack(">HHH", 0, 0, 0))
        + chunk(b"IDAT", zlib.compress(row * size, level=0))
        + chunk(b"IEND", b"")
    )


def truncated_idat(png: bytes, declared: int = 32768, kept: int = 32) -> bytes:
    """Cut a PNG inside IDAT, leaving a length that does not fit in the buffer."""
    marker = png.index(b"IDAT")
    return png[: marker - 4] + struct.pack(">I", declared) + b"IDAT" + (b"\x00" * kept)


class FakeState:
    """Mutable server state."""

    def __init__(self, *, rich: bool = True) -> None:
        self.token = TOKEN
        self.rich = rich
        self.ws_attempts = 0
        self.drop_ws = 0
        self.ws_unauthorized = False
        self.rest_unauthorized = False
        self.paths: list[str] = []
        self.headers: list[str] = []
        self.series_calls: list[dict[str, str]] = []
        self.temp_calls: list[dict[str, str]] = []
        self.battery_level = 55.0
        self.ws_battery_level = 80.0
        self.last_error: str | None = "token tl_shouldnotleak failed"
        self.car_png: bytes | None = None
        self.car_etag = '"render-1"'
        self.car_down = False
        self.car_chunk_size: int | None = None
        self.car_content_length: int | None = None
        self.car_requests: list[dict[str, str | None]] = []

    def vehicle(self) -> dict[str, Any]:
        return {
            "id": 1,
            "vin": VIN,
            "name": "Red",
            "model": "Model Y",
            "exterior_color": "Red",
            "activity": "charging",
            "battery_level": self.battery_level,
            "rated_range_km": 280.5,
            "odometer_km": 12345.6,
            "latitude": 0,
            "longitude": 0,
            "speed_kmh": 0,
            "charger_power_kw": 11,
            "last_poll_at": "2026-11-09T10:00:00Z",
            "last_error": self.last_error,
        }

    def state(self) -> dict[str, Any]:
        payload: dict[str, Any] = {
            "vehicle_id": 1,
            "activity": "charging",
            "battery_level": self.battery_level,
            "usable_battery_level": 53,
            "rated_range_km": 280.5,
            "ideal_range_km": 320.0,
            "est_range_km": 260.0,
            "odometer_km": 12345.6,
            "latitude": 0,
            "longitude": 0,
            "heading_deg": 90,
            "speed_kmh": 0,
            "power_kw": -1.2,
            "inside_temp_c": 21.5,
            "outside_temp_c": 12.0,
            "charging_state": "Charging",
            "charger_power_kw": 11.0,
            "charge_energy_added_kwh": 6.5,
            "shift_state": "P",
            "software_version": "2026.44.3",
            "update_status": "idle",
            "last_poll_at": "2026-11-09T10:00:00Z",
            "last_data_at": "2026-11-09T10:00:00Z",
            "last_error": self.last_error,
        }
        if self.rich:
            payload.update(
                {
                    "locked": True,
                    "sentry_mode": True,
                    "charge_limit_soc": 80,
                    "charger_voltage": 230,
                    "charger_current": 16,
                    "tpms_pressure_fl": 2.9,
                    "tpms_pressure_fr": 2.85,
                    "tpms_pressure_rl": 2.8,
                    "tpms_pressure_rr": 2.75,
                    "df": 1,
                    "pf": 0,
                    "fd_window": 0,
                    "fp_window": 1,
                    "ft": 0,
                    "rt": 1,
                }
            )
        return payload

    def drive(self) -> dict[str, Any]:
        return {
            "id": 7,
            "vehicle_id": 1,
            "start_at": "2026-11-09T08:00:00Z",
            "end_at": "2026-11-09T08:30:00Z",
            "distance_km": 18.4,
            "duration_s": 1800,
            "energy_used_kwh": 3.2,
            "max_speed_kmh": 110,
            "avg_speed_kmh": 36.8,
            "elevation_gain_m": 40,
            "elevation_loss_m": 35,
            "start_latitude": 0,
            "start_longitude": 0,
            "end_latitude": 0,
            "end_longitude": 1,
            "start_geofence_id": 1,
        }

    def drive_detail(self) -> dict[str, Any]:
        detail = self.drive()
        detail["route"] = [
            {
                "recorded_at": "2026-11-09T08:00:00Z",
                "latitude": 0,
                "longitude": 0,
            },
            {
                "recorded_at": "2026-11-09T08:15:00Z",
                "latitude": 0,
                "longitude": 0,
            },
            {
                "recorded_at": "2026-11-09T08:30:00Z",
                "latitude": 0,
                "longitude": 0,
            },
        ]
        detail["series"] = [
            {
                "recorded_at": "2026-11-09T08:00:00Z",
                "speed_kmh": 0,
                "battery_level": 70,
                "elevation_m": 40,
                "power_kw": 0,
            },
            {
                "recorded_at": "2026-11-09T08:15:00Z",
                "speed_kmh": 80,
                "battery_level": 64,
                "elevation_m": 70,
                "power_kw": 20,
            },
            {
                "recorded_at": "2026-11-09T08:30:00Z",
                "speed_kmh": 10,
                "battery_level": 60,
                "elevation_m": 45,
                "power_kw": 5,
            },
        ]
        return detail

    def charge(self) -> dict[str, Any]:
        return {
            "id": 3,
            "vehicle_id": 1,
            "start_at": "2026-11-09T09:00:00Z",
            "end_at": None,
            "energy_added_kwh": 6.5,
            "duration_s": 2400,
            "is_dc": False,
            "charger_type": "AC",
            "max_power_kw": 11,
            "latitude": 0,
            "longitude": 0,
            "geofence_id": 1,
        }

    def stats(self, query: dict[str, str]) -> dict[str, Any]:
        return {
            "vehicle_id": 1,
            "from": query.get("from"),
            "to": query.get("to"),
            "drive_count": 4,
            "distance_km": 120.5,
            "drive_duration_s": 9000,
            "energy_used_kwh": 22.0,
            "charge_count": 2,
            "energy_added_kwh": 25.0,
        }

    def ws_frame(self) -> dict[str, Any]:
        return {
            "type": "state",
            "vehicle_id": 1,
            "vin": VIN,
            "name": "Red",
            "model": "Model Y",
            "activity": "driving",
            "battery_level": self.ws_battery_level,
            "rated_range_km": 300,
            "odometer_km": 12346,
            "speed_kmh": 42,
            "power_kw": 15,
            "charger_power_kw": 0,
            "inside_temp_c": 22,
            "outside_temp_c": 11,
            "latitude": 0,
            "longitude": 0,
            "at": "2026-11-09T11:00:00Z",
        }


async def _stream_png(request: web.Request, body: bytes, state: FakeState) -> web.StreamResponse:
    """Send a PNG in small writes so a single StreamReader.read(n) cannot see it all."""
    declared = len(body) if state.car_content_length is None else state.car_content_length
    headers = {
        "ETag": state.car_etag,
        "Cache-Control": "public, max-age=86400",
        "Content-Length": str(declared),
    }
    response = web.StreamResponse(status=200, headers=headers)
    response.content_type = "image/png"
    await response.prepare(request)
    step = state.car_chunk_size or len(body)
    try:
        await response.write(body[:step])
        # Yield so the client can observe the first buffer before the rest is written.
        for _ in range(8):
            await asyncio.sleep(0)
        for offset in range(step, len(body), step):
            await response.write(body[offset : offset + step])
            await asyncio.sleep(0)
        if declared != len(body):
            if request.transport is not None:
                request.transport.close()
            return response
        await response.write_eof()
    except (ConnectionError, RuntimeError):
        return response
    return response


def make_app(state: FakeState) -> web.Application:
    """Build the fake API."""

    def _auth(request: web.Request) -> None:
        state.paths.append(request.path)
        header = request.headers.get("Authorization", "")
        state.headers.append(header)
        if state.rest_unauthorized or header != f"Bearer {state.token}":
            raise web.HTTPUnauthorized(
                text='{"error":"unauthorized"}',
                content_type="application/json",
            )

    async def vehicles(request: web.Request) -> web.Response:
        _auth(request)
        return web.json_response([state.vehicle()])

    async def vehicle_state(request: web.Request) -> web.Response:
        _auth(request)
        return web.json_response(state.state())

    async def drives(request: web.Request) -> web.Response:
        _auth(request)
        return web.json_response({"data": [state.drive()], "page": 1, "per_page": 1, "total": 1})

    async def drive(request: web.Request) -> web.Response:
        _auth(request)
        return web.json_response(state.drive_detail())

    async def charges(request: web.Request) -> web.Response:
        _auth(request)
        return web.json_response({"data": [state.charge()], "page": 1, "per_page": 1, "total": 1})

    async def stats(request: web.Request) -> web.Response:
        _auth(request)
        if "vehicle_id" not in request.query:
            raise web.HTTPBadRequest(text='{"error":"vehicle_id is required"}')
        return web.json_response(state.stats(dict(request.query)))

    async def consumption_by_temp(request: web.Request) -> web.Response:
        _auth(request)
        state.temp_calls.append(
            {
                "id": request.match_info["id"],
                "period": request.query.get("period", ""),
                "count": request.query.get("count", ""),
            }
        )
        return web.json_response(
            [
                {"temp_c_bucket": 5, "wh_per_km": 190, "distance_km": 12},
                {"temp_c_bucket": 15, "wh_per_km": 150, "distance_km": 80},
            ]
        )

    async def stats_series(request: web.Request) -> web.Response:
        _auth(request)
        period = request.query.get("period", "month")
        state.series_calls.append(
            {
                "id": request.match_info["id"],
                "period": period,
                "count": request.query.get("count", ""),
            }
        )
        return web.json_response(
            {
                "period": period,
                "buckets": [
                    {
                        "start": "2026-10-01T00:00:00Z",
                        "distance_km": 100.0,
                        "energy_used_kwh": 18.0,
                        "wh_per_km": 180.0,
                        "energy_charged_kwh": 20.0,
                        "drive_duration_s": 7200,
                        "drive_count": 4,
                        "range_at_100_km": 480.0,
                        "ac_energy_kwh": 12.0,
                        "dc_energy_kwh": 8.0,
                        "dc_share_pct": 40.0,
                        "charge_cost": 15.5,
                        "cost_per_km": 0.16,
                        "idle_range_loss_km_per_day": 1.2,
                        "idle_energy_loss_kwh_per_day": 0.3,
                    },
                    {
                        "start": "2026-11-01T00:00:00Z",
                        "distance_km": 120.5,
                        "energy_used_kwh": None,
                        "wh_per_km": None,
                        "energy_charged_kwh": 25.0,
                        "drive_duration_s": 5400,
                        "drive_count": 2,
                        "range_at_100_km": 470.0,
                        "ac_energy_kwh": 5.0,
                        "dc_energy_kwh": 0.0,
                        "dc_share_pct": 0.0,
                        "charge_cost": 2.0,
                        "cost_per_km": 0.05,
                        "idle_range_loss_km_per_day": 0.4,
                        "idle_energy_loss_kwh_per_day": 0.1,
                    },
                ],
            }
        )

    async def car_png(request: web.Request) -> web.Response:
        _auth(request)
        state.car_requests.append(
            {
                "id": request.match_info["id"],
                "if_none_match": request.headers.get("If-None-Match"),
            }
        )
        if state.car_down:
            return web.Response(status=503)
        if state.car_png is None:
            return web.Response(status=404)
        headers = {"ETag": state.car_etag, "Cache-Control": "public, max-age=86400"}
        if request.headers.get("If-None-Match") == state.car_etag:
            return web.Response(status=304, headers=headers)
        if state.car_chunk_size or state.car_content_length is not None:
            return await _stream_png(request, state.car_png, state)
        return web.Response(body=state.car_png, content_type="image/png", headers=headers)

    async def geofences(request: web.Request) -> web.Response:
        _auth(request)
        return web.json_response(
            [
                {
                    "id": 1,
                    "name": "Home",
                    "latitude": 0,
                    "longitude": 0,
                    "radius_m": 200,
                }
            ]
        )

    async def websocket(request: web.Request) -> web.StreamResponse:
        header = request.headers.get("Authorization", "")
        state.headers.append(header)
        state.ws_attempts += 1
        if state.ws_unauthorized or header != f"Bearer {state.token}":
            raise web.HTTPUnauthorized(
                text='{"error":"unauthorized"}',
                content_type="application/json",
            )
        socket = web.WebSocketResponse()
        await socket.prepare(request)
        request.app["sockets"].add(socket)
        try:
            if state.ws_attempts <= state.drop_ws:
                await socket.close()
                return socket
            await socket.send_json(state.ws_frame())
            async for _message in socket:
                pass
            return socket
        finally:
            request.app["sockets"].discard(socket)

    sockets: set[web.WebSocketResponse] = set()

    async def _shutdown(_app: web.Application) -> None:
        for socket in list(sockets):
            await socket.close()

    app = web.Application()
    app["state"] = state
    app["sockets"] = sockets
    app.on_shutdown.append(_shutdown)
    app.router.add_get("/api/v1/vehicles", vehicles)
    app.router.add_get("/api/v1/vehicles/{id}/state", vehicle_state)
    app.router.add_get("/api/v1/vehicles/{id}/car.png", car_png)
    app.router.add_get("/api/v1/drives", drives)
    app.router.add_get("/api/v1/drives/{id}", drive)
    app.router.add_get("/api/v1/charges", charges)
    app.router.add_get("/api/v1/stats", stats)
    app.router.add_get("/api/v1/vehicles/{id}/stats/series", stats_series)
    app.router.add_get("/api/v1/vehicles/{id}/stats/consumption_by_temp", consumption_by_temp)
    app.router.add_get("/api/v1/geofences", geofences)
    app.router.add_get("/api/v1/ws", websocket)
    return app
