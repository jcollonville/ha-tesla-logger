"""Data containers shared by the coordinator and entity mapping."""

from __future__ import annotations

from dataclasses import dataclass
from typing import Any


@dataclass(frozen=True, slots=True)
class VehicleMeta:
    """Identity of one vehicle on a tesla-logger server."""

    vehicle_id: int
    vin: str
    name: str | None
    model: str | None
    exterior_color: str | None


@dataclass(frozen=True, slots=True)
class VehicleData:
    """Latest merged snapshot for one vehicle."""

    meta: VehicleMeta
    state: dict[str, Any]
    geofence: str | None
    last_drive: dict[str, Any] | None
    last_charge: dict[str, Any] | None
    ws_connected: bool


@dataclass(frozen=True, slots=True)
class ClosureSpec:
    """A door, window, or trunk that is created only when the API exposes it."""

    key: str
    fields: tuple[str, ...]
    kind: str
