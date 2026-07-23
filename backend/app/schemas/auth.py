"""Authentication request validation schemas."""

import re
from dataclasses import dataclass
from typing import Any


EMAIL_PATTERN = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")


@dataclass
class RegisterSchema:
    """Validated registration payload."""

    full_name: str
    email: str
    password: str
    phone: str | None = None

    @classmethod
    def from_dict(cls, data: dict[str, Any] | None) -> tuple["RegisterSchema | None", dict[str, str]]:
        """Validate raw JSON and return (schema, errors)."""
        errors: dict[str, str] = {}

        if not isinstance(data, dict):
            return None, {"body": "Request body must be a JSON object."}

        full_name = data.get("full_name")
        email = data.get("email")
        password = data.get("password")
        phone = data.get("phone")

        if full_name is None or str(full_name).strip() == "":
            errors["full_name"] = "Full name is required."

        if email is None or str(email).strip() == "":
            errors["email"] = "Email is required."
        elif not EMAIL_PATTERN.match(str(email).strip()):
            errors["email"] = "Please enter a valid email address."

        if password is None or password == "":
            errors["password"] = "Password is required."
        elif len(str(password)) < 8:
            errors["password"] = "Password must be at least 8 characters."

        if phone is not None and phone != "" and len(str(phone).strip()) > 20:
            errors["phone"] = "Phone number must be 20 characters or fewer."

        if errors:
            return None, errors

        normalized_phone = str(phone).strip() if phone not in (None, "") else None

        return (
            cls(
                full_name=str(full_name).strip(),
                email=str(email).strip().lower(),
                password=str(password),
                phone=normalized_phone,
            ),
            {},
        )
