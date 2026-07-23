"""Application configuration loaded from environment variables."""

import os
from urllib.parse import quote_plus

from dotenv import load_dotenv

load_dotenv()


def _build_database_uri() -> str:
    """Build the SQLAlchemy MySQL connection URI from environment variables."""
    user = os.getenv("MYSQL_USER", "root")
    password = quote_plus(os.getenv("MYSQL_PASSWORD", ""))
    host = os.getenv("MYSQL_HOST", "localhost")
    port = os.getenv("MYSQL_PORT", "3306")
    database = os.getenv("MYSQL_DATABASE", "voltgo_dev")

    return f"mysql+pymysql://{user}:{password}@{host}:{port}/{database}"


class Config:
    """Base configuration for the VoltGo backend."""

    SECRET_KEY = os.getenv("SECRET_KEY")
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY")

    MYSQL_HOST = os.getenv("MYSQL_HOST", "localhost")
    MYSQL_PORT = int(os.getenv("MYSQL_PORT", "3306"))
    MYSQL_DATABASE = os.getenv("MYSQL_DATABASE", "voltgo_dev")
    MYSQL_USER = os.getenv("MYSQL_USER", "root")
    MYSQL_PASSWORD = os.getenv("MYSQL_PASSWORD", "")

    SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URL") or _build_database_uri()
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # Comma-separated list supported; defaults to the Vite frontend origin.
    CORS_ORIGINS = [
        origin.strip()
        for origin in os.getenv("CORS_ORIGINS", "http://localhost:5173").split(",")
        if origin.strip()
    ]

    JWT_TOKEN_LOCATION = ["headers"]
    JWT_HEADER_NAME = "Authorization"
    JWT_HEADER_TYPE = "Bearer"

    # Prefer UTF-8 connections for MySQL (names, emails, etc.).
    SQLALCHEMY_ENGINE_OPTIONS = {
        "pool_pre_ping": True,
    }
