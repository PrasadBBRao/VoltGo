"""Authentication business logic."""

from sqlalchemy.exc import SQLAlchemyError

from app.extensions import db
from app.models import User
from app.schemas.auth import RegisterSchema


class EmailAlreadyRegisteredError(Exception):
    """Raised when registration is attempted with an existing email."""


class RegistrationDatabaseError(Exception):
    """Raised when persisting a new user fails."""


def register_user(data: RegisterSchema) -> User:
    """Create a new user account from validated registration data."""
    existing = User.query.filter_by(email=data.email).first()
    if existing:
        raise EmailAlreadyRegisteredError()

    user = User(
        full_name=data.full_name,
        email=data.email,
        phone=data.phone,
    )
    user.set_password(data.password)

    try:
        db.session.add(user)
        db.session.commit()
    except SQLAlchemyError as exc:
        db.session.rollback()
        raise RegistrationDatabaseError() from exc

    return user
