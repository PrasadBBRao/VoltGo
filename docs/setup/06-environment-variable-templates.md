# 6. Environment Variable Templates

## Frontend Environment Template

Create a file named `.env` inside the frontend directory:

```env
VITE_API_BASE_URL=http://127.0.0.1:5000
VITE_APP_NAME=VoltGo
VITE_APP_ENV=development
```

## Backend Environment Template

Create a file named `.env` inside the backend directory:

```env
FLASK_APP=app.py
FLASK_ENV=development
SECRET_KEY=replace-with-a-secure-secret-key
JWT_SECRET_KEY=replace-with-a-secure-jwt-secret
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DATABASE=voltgo_dev
MYSQL_USER=voltgo_user
MYSQL_PASSWORD=strong_password
CORS_ORIGINS=http://localhost:5173
```

## Why This Matters

Environment variables keep configuration secure and portable across local, staging, and production environments.
