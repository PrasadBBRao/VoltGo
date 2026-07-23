"""User ORM model.

Stores account identity and credentials. Passwords are never persisted in
plain text — use ``set_password`` / ``check_password`` with Flask-Bcrypt.
"""

from datetime import datetime, timezone

from app.extensions import bcrypt, db


def _utc_now() -> datetime:
    """Return a timezone-aware UTC timestamp."""
    return datetime.now(timezone.utc)


class User(db.Model):
    """Application user account."""

    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)

    full_name = db.Column(db.String(120), nullable=False)

    email = db.Column(
        db.String(255),
        nullable=False,
        unique=True,
        index=True,
    )

    password_hash = db.Column(db.String(128), nullable=False)

    phone = db.Column(db.String(20), nullable=True)

    is_verified = db.Column(
        db.Boolean,
        nullable=False,
        default=False,
        server_default=db.false(),
    )

    created_at = db.Column(
        db.DateTime(timezone=True),
        nullable=False,
        default=_utc_now,
        server_default=db.func.now(),
    )

    updated_at = db.Column(
        db.DateTime(timezone=True),
        nullable=False,
        default=_utc_now,
        onupdate=_utc_now,
        server_default=db.func.now(),
    )

    def set_password(self, password: str) -> None:
        """Hash ``password`` with Bcrypt and store it on the model.

        Plain-text passwords must never be written to the database.
        """
        self.password_hash = bcrypt.generate_password_hash(password).decode("utf-8")

    def check_password(self, password: str) -> bool:
        """Return True if ``password`` matches the stored hash."""
        if not self.password_hash:
            return False
        return bcrypt.check_password_hash(self.password_hash, password)

    def __repr__(self) -> str:
        return f"<User id={self.id} email={self.email!r}>"
