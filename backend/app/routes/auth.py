"""Authentication routes blueprint."""

from flask import Blueprint, request

from app.schemas.auth import RegisterSchema
from app.services.auth_service import (
    EmailAlreadyRegisteredError,
    RegistrationDatabaseError,
    register_user,
)
from app.utils.responses import error_response, success_response

auth_bp = Blueprint("auth", __name__)


@auth_bp.post("/register")
def register():
    """Register a new user account."""
    payload, errors = RegisterSchema.from_dict(request.get_json(silent=True))

    if errors:
        return error_response(
            message="Validation failed.",
            status_code=400,
            errors=errors,
        )

    try:
        register_user(payload)
    except EmailAlreadyRegisteredError:
        return error_response(
            message="Email already registered.",
            status_code=409,
        )
    except RegistrationDatabaseError:
        return error_response(
            message="Unable to register user. Please try again.",
            status_code=500,
        )

    return success_response(
        message="User registered successfully.",
        status_code=201,
    )
