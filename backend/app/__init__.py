"""VoltGo Flask application factory."""

from flask import Flask
from flask_cors import CORS

from app.config import Config
from app.extensions import bcrypt, db, jwt, migrate


def create_app(config_class=Config):
    """Create and configure the Flask application."""
    app = Flask(__name__)
    app.config.from_object(config_class)

    _register_extensions(app)
    _import_models()
    _register_blueprints(app)

    return app


def _register_extensions(app: Flask) -> None:
    """Bind Flask extensions to the application instance."""
    db.init_app(app)
    jwt.init_app(app)
    bcrypt.init_app(app)
    migrate.init_app(app, db)

    cors_origins = app.config.get("CORS_ORIGINS", ["http://localhost:5173"])
    CORS(app, resources={r"/api/*": {"origins": cors_origins}})


def _import_models() -> None:
    """Import models so SQLAlchemy metadata is registered for migrations."""
    from app import models  # noqa: F401


def _register_blueprints(app: Flask) -> None:
    """Register API blueprints."""
    from app.routes.auth import auth_bp

    app.register_blueprint(auth_bp, url_prefix="/api/auth")
