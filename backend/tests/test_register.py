"""Tests for POST /api/auth/register."""


def test_register_success(client):
    response = client.post(
        "/api/auth/register",
        json={
            "full_name": "John Doe",
            "email": "john@example.com",
            "password": "Password123!",
            "phone": "9876543210",
        },
    )

    assert response.status_code == 201
    data = response.get_json()
    assert data["success"] is True
    assert data["message"] == "User registered successfully."
    assert "password_hash" not in data


def test_register_without_phone(client):
    response = client.post(
        "/api/auth/register",
        json={
            "full_name": "Jane Doe",
            "email": "jane@example.com",
            "password": "Password123!",
        },
    )

    assert response.status_code == 201


def test_register_validation_errors(client):
    response = client.post(
        "/api/auth/register",
        json={
            "full_name": "",
            "email": "invalid-email",
            "password": "short",
        },
    )

    assert response.status_code == 400
    data = response.get_json()
    assert data["success"] is False
    assert data["message"] == "Validation failed."
    assert "full_name" in data["errors"]
    assert "email" in data["errors"]
    assert "password" in data["errors"]


def test_register_duplicate_email(client):
    payload = {
        "full_name": "John Doe",
        "email": "duplicate@example.com",
        "password": "Password123!",
    }

    first = client.post("/api/auth/register", json=payload)
    second = client.post("/api/auth/register", json=payload)

    assert first.status_code == 201
    assert second.status_code == 409
    data = second.get_json()
    assert data["success"] is False
    assert data["message"] == "Email already registered."
