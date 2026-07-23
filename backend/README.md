# VoltGo Backend

Flask API for the VoltGo EV charging platform.

## Stack

- Python / Flask
- MySQL
- SQLAlchemy (Flask-SQLAlchemy)
- Flask-JWT-Extended
- Flask-Bcrypt
- Flask-Migrate
- Flask-CORS
- python-dotenv

## Project structure

```text
backend/
├── app/
│   ├── __init__.py          # Application factory
│   ├── config.py            # Environment-based configuration
│   ├── extensions.py        # db, jwt, bcrypt, migrate
│   ├── models/              # SQLAlchemy models
│   ├── routes/              # Blueprints (auth scaffolded)
│   ├── services/            # Business logic
│   ├── utils/               # Shared helpers
│   └── schemas/             # Request/response schemas
├── migrations/              # Alembic migrations (Flask-Migrate)
├── tests/                   # Pytest suite
├── .env.example             # Environment template
├── requirements.txt
└── run.py                   # Dev entry point
```

## Prerequisites

- Python 3.11+ recommended
- MySQL 8.x running locally
- A MySQL database and user matching your `.env` values

## Setup

### 1. Create and activate a virtual environment

```bash
cd backend
python -m venv .venv

# Windows (PowerShell)
.\.venv\Scripts\Activate.ps1

# macOS / Linux
source .venv/bin/activate
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. Configure environment variables

```bash
# Windows
copy .env.example .env

# macOS / Linux
cp .env.example .env
```

Edit `.env` and set:

- `SECRET_KEY`
- `JWT_SECRET_KEY`
- `MYSQL_HOST`, `MYSQL_PORT`, `MYSQL_DATABASE`, `MYSQL_USER`, `MYSQL_PASSWORD`

Never commit real secrets. `.env` is gitignored.

### 4. Create the MySQL database

Example:

```sql
CREATE DATABASE voltgo_dev CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'voltgo_user'@'localhost' IDENTIFIED BY 'strong_password';
GRANT ALL PRIVILEGES ON voltgo_dev.* TO 'voltgo_user'@'localhost';
FLUSH PRIVILEGES;
```

### 5. Database migrations (User model)

Use Flask-Migrate to manage schema changes. Do **not** call `db.create_all()` in application code.

From the `backend/` directory (with the virtualenv activated and `.env` configured):

```bash
# First time only — initialize the Alembic migrations environment
flask db init

# Generate a migration from the current models (creates the users table)
flask db migrate -m "Create users table"

# Apply migrations to the database
flask db upgrade
```

> This repository already includes an initialized `migrations/` folder and a
> `Create users table` revision. On a fresh clone you can skip `flask db init`
> / `flask db migrate` and run `flask db upgrade` after configuring MySQL.

Useful follow-up commands:

```bash
# Show current revision
flask db current

# Roll back one revision
flask db downgrade
```

### 6. Run the development server

```bash
python run.py
```

Or:

```bash
flask run
```

The API listens on `http://127.0.0.1:5000` by default.

CORS is configured for the Vite frontend at `http://localhost:5173`.

## Database & User model

The `User` model lives in `app/models/user.py` and is exported from `app/models`
so Flask-Migrate can detect it.

Fields:

| Column | Notes |
| --- | --- |
| `id` | Primary key |
| `full_name` | Required |
| `email` | Required, unique, indexed |
| `password_hash` | Required — never store plain text |
| `phone` | Optional |
| `is_verified` | Boolean, default `False` |
| `created_at` | Set automatically on insert |
| `updated_at` | Updated automatically on change |

Password helpers on the model:

- `user.set_password(password)` — hashes with Flask-Bcrypt
- `user.check_password(password)` — verifies against the stored hash

## Auth blueprint

The `auth` blueprint is registered at `/api/auth`.

Authentication endpoints (register, login, password reset, etc.) are intentionally **not** implemented in this step. They will be added in later Sprint 2 tasks.

## Tests

```bash
pytest
```

## Notes

- Configuration is loaded from environment variables via `python-dotenv`.
- Extensions are created in `app/extensions.py` and bound inside `create_app()`.
- Prefer adding domain logic in `services/` and keeping route handlers thin.
