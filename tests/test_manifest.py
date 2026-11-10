"""The Lovelace card cache-buster follows manifest.json."""

from __future__ import annotations

import json
from pathlib import Path

from custom_components.tesla_logger.const import CARD_URL, CARD_VERSION

ROOT = Path(__file__).resolve().parents[1]


def test_card_version_matches_manifest() -> None:
    """A HACS update must bust the card cache with the integration version."""
    manifest = json.loads(
        (ROOT / "custom_components" / "tesla_logger" / "manifest.json").read_text(encoding="utf-8")
    )
    assert manifest["version"] == CARD_VERSION
    assert CARD_URL.endswith("?v=" + manifest["version"])
