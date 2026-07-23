"""Standard JSON response helpers."""

from flask import jsonify


def success_response(message: str, status_code: int = 200, **extra):
    """Return a consistent success JSON payload."""
    payload = {"success": True, "message": message, **extra}
    return jsonify(payload), status_code


def error_response(message: str, status_code: int = 400, errors: dict | None = None):
    """Return a consistent error JSON payload."""
    payload: dict = {"success": False, "message": message}
    if errors:
        payload["errors"] = errors
    return jsonify(payload), status_code
