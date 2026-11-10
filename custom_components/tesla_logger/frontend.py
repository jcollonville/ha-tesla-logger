"""Serve the Lovelace card without a manual resource."""

from __future__ import annotations

import logging
from pathlib import Path

from homeassistant.components.frontend import DATA_EXTRA_MODULE_URL, add_extra_js_url
from homeassistant.components.http import StaticPathConfig
from homeassistant.core import HomeAssistant

from .const import CARD_PATH, CARD_URL, DOMAIN

_LOGGER = logging.getLogger(__name__)


async def async_register_card(hass: HomeAssistant) -> None:
    """Register the card file and ask the frontend to load it."""
    data = hass.data.setdefault(DOMAIN, {})
    card = Path(__file__).parent / "www" / "tesla-logger-card.js"
    if not data.get("static_registered") and _http_ready(hass):
        await hass.http.async_register_static_paths([StaticPathConfig(CARD_PATH, str(card), False)])
        data["static_registered"] = True
    if not data.get("module_registered") and DATA_EXTRA_MODULE_URL in hass.data:
        add_extra_js_url(hass, CARD_URL)
        data["module_registered"] = True
    elif not data.get("module_registered"):
        _LOGGER.debug("Frontend is not ready; the card module was not registered")


def _http_ready(hass: HomeAssistant) -> bool:
    http = getattr(hass, "http", None)
    return http is not None and getattr(http, "app", None) is not None
