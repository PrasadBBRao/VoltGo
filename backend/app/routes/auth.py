"""Authentication routes blueprint.

Endpoints (register, login, logout, password reset, etc.) will be
implemented in a later sprint step. This module only registers the blueprint.
"""

from flask import Blueprint

auth_bp = Blueprint("auth", __name__)
