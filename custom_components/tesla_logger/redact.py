"""Redact API tokens before they can reach logs or diagnostics."""

from __future__ import annotations

import re
from typing import Any

_TOKEN = re.compile(r"tl_[A-Za-z0-9_-]+")
_BEARER = re.compile(r"(?i)\bbearer\s+\S+")
SECRET_KEYS = frozenset({"token", "access_token", "api_token", "password", "authorization"})


def redact_secrets(value: str) -> str:
    """Remove bearer tokens and tesla-logger API tokens from text."""
    cleaned = _BEARER.sub("Bearer REDACTED", value)
    return _TOKEN.sub("tl_REDACTED", cleaned)


def redact_tree(value: Any) -> Any:
    """Redact secrets in nested JSON-like data."""
    if isinstance(value, str):
        return redact_secrets(value)
    if isinstance(value, dict):
        redacted: dict[Any, Any] = {}
        for key, item in value.items():
            if isinstance(key, str) and key.lower() in SECRET_KEYS:
                redacted[key] = "**REDACTED**"
            else:
                redacted[key] = redact_tree(item)
        return redacted
    if isinstance(value, list):
        return [redact_tree(item) for item in value]
    if isinstance(value, tuple):
        return tuple(redact_tree(item) for item in value)
    return value
