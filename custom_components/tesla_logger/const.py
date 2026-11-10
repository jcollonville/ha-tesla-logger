"""Constants for the Tesla Logger integration."""

from __future__ import annotations

from datetime import timedelta
from typing import Final

from homeassistant.const import Platform

DOMAIN: Final = "tesla_logger"
CARD_PATH: Final = "/tesla_logger/tesla-logger-card.js"
CARD_VERSION: Final = "0.1.6"

CONF_URL: Final = "url"
CONF_TOKEN: Final = "token"
CONF_SCAN_INTERVAL: Final = "scan_interval"
CONF_WEBSOCKET: Final = "websocket"

DEFAULT_SCAN_INTERVAL: Final = 60
MIN_SCAN_INTERVAL: Final = 15
MAX_SCAN_INTERVAL: Final = 3600
GEOFENCE_CACHE_SECONDS: Final = 300

PLATFORMS: Final = [
    Platform.SENSOR,
    Platform.BINARY_SENSOR,
    Platform.DEVICE_TRACKER,
]

SERVICE_GET_DRIVES: Final = "get_drives"
SERVICE_GET_DRIVE: Final = "get_drive"
SERVICE_GET_CHARGES: Final = "get_charges"
SERVICE_GET_STATS: Final = "get_stats"
SERVICE_GET_STATS_SERIES: Final = "get_stats_series"
SERVICES: Final = (
    SERVICE_GET_DRIVES,
    SERVICE_GET_DRIVE,
    SERVICE_GET_CHARGES,
    SERVICE_GET_STATS,
    SERVICE_GET_STATS_SERIES,
)


def vehicle_added_signal(entry_id: str) -> str:
    """Dispatcher signal fired when a vehicle is discovered."""
    return f"{DOMAIN}_vehicle_added_{entry_id}"


def scan_interval_seconds(options: dict[str, object] | object) -> int:
    """Return a scan interval clamped to the supported range."""
    raw = DEFAULT_SCAN_INTERVAL
    if isinstance(options, dict):
        raw = options.get(CONF_SCAN_INTERVAL, DEFAULT_SCAN_INTERVAL)
    try:
        seconds = int(raw)  # type: ignore[arg-type]
    except (TypeError, ValueError):
        seconds = DEFAULT_SCAN_INTERVAL
    return min(max(seconds, MIN_SCAN_INTERVAL), MAX_SCAN_INTERVAL)


def scan_interval(options: dict[str, object]) -> timedelta:
    """Return the REST poll interval."""
    return timedelta(seconds=scan_interval_seconds(options))


def websocket_enabled(options: dict[str, object]) -> bool:
    """Return whether the live WebSocket should run."""
    return bool(options.get(CONF_WEBSOCKET, True))
