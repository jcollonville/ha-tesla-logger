"""In-process tesla-logger stand-in for tests."""

from __future__ import annotations

from typing import Any

from aiohttp import web

TOKEN = "tl_testtoken"
VIN = "5YJTEST0000000001"


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
        self.battery_level = 55.0
        self.ws_battery_level = 80.0
        self.last_error: str | None = "token tl_shouldnotleak failed"

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
            "latitude": 48.8566,
            "longitude": 2.3522,
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
            "latitude": 48.8566,
            "longitude": 2.3522,
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
            "start_latitude": 48.8566,
            "start_longitude": 2.3522,
            "end_latitude": 48.87,
            "end_longitude": 2.37,
        }

    def drive_detail(self) -> dict[str, Any]:
        detail = self.drive()
        detail["route"] = [
            {
                "recorded_at": "2026-11-09T08:00:00Z",
                "latitude": 48.8566,
                "longitude": 2.3522,
            },
            {
                "recorded_at": "2026-11-09T08:15:00Z",
                "latitude": 48.86,
                "longitude": 2.36,
            },
            {
                "recorded_at": "2026-11-09T08:30:00Z",
                "latitude": 48.87,
                "longitude": 2.37,
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
            "latitude": 48.8566,
            "longitude": 2.3522,
            "at": "2026-11-09T11:00:00Z",
        }


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
                    },
                    {
                        "start": "2026-11-01T00:00:00Z",
                        "distance_km": 120.5,
                        "energy_used_kwh": None,
                        "wh_per_km": None,
                        "energy_charged_kwh": 25.0,
                    },
                ],
            }
        )

    async def geofences(request: web.Request) -> web.Response:
        _auth(request)
        return web.json_response(
            [
                {
                    "id": 1,
                    "name": "Home",
                    "latitude": 48.8566,
                    "longitude": 2.3522,
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
    app.router.add_get("/api/v1/drives", drives)
    app.router.add_get("/api/v1/drives/{id}", drive)
    app.router.add_get("/api/v1/charges", charges)
    app.router.add_get("/api/v1/stats", stats)
    app.router.add_get("/api/v1/vehicles/{id}/stats/series", stats_series)
    app.router.add_get("/api/v1/geofences", geofences)
    app.router.add_get("/api/v1/ws", websocket)
    return app
