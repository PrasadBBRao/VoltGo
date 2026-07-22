# 4. Flask Setup Guide

## Create the Flask Application Structure

Organize the backend into the following areas:

- app/routes
- app/models
- app/services
- app/utils
- app/config
- app/database
- app/middleware
- app/tests

## Basic Application Entry Point

Create an application factory pattern to keep configuration modular and testable.

```python
from flask import Flask
from flask_cors import CORS


def create_app():
    app = Flask(__name__)
    CORS(app)
    return app
```

## Recommended Extensions

- Flask-JWT-Extended for authentication support
- Flask-CORS for cross-origin requests
- SQLAlchemy for ORM support
- python-dotenv for environment-driven configuration

## Why This Matters

A modular Flask structure improves maintainability and supports future growth into a larger service-oriented backend.
