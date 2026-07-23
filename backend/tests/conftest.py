"""Shared pytest fixtures."""

import pytest

from app import create_app
from app.extensions import db


@pytest.fixture()
def app():
    """Create an application instance configured for testing."""
    application = create_app()
    application.config.update(
        {
            "TESTING": True,
            "SQLALCHEMY_DATABASE_URI": "sqlite:///:memory:",
        }
    )

    with application.app_context():
        db.create_all()
        yield application
        db.session.remove()
        db.drop_all()


@pytest.fixture()
def client(app):
    """Flask test client."""
    return app.test_client()
