"""SQLAlchemy models package.

Import concrete models here so Flask-Migrate can discover metadata.
"""

from app.extensions import db
from app.models.user import User

__all__ = ["db", "User"]
