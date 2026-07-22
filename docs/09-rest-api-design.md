# 9. REST API Design

## Overview

The API layer should expose clear, resource-oriented endpoints for the core product domains. This allows the frontend and admin dashboard to interact with the same backend services while keeping the interface predictable and modular.

## Suggested API Groups

### Authentication
- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/refresh
- POST /api/auth/logout
- POST /api/auth/password-reset

### Users
- GET /api/users/me
- PUT /api/users/me
- GET /api/users/{id}

### Stations
- GET /api/stations
- GET /api/stations/{id}
- POST /api/stations
- PUT /api/stations/{id}
- DELETE /api/stations/{id}

### Chargers
- GET /api/chargers
- GET /api/chargers/{id}
- POST /api/chargers
- PUT /api/chargers/{id}
- DELETE /api/chargers/{id}

### Bookings
- GET /api/bookings
- GET /api/bookings/{id}
- POST /api/bookings
- PUT /api/bookings/{id}
- DELETE /api/bookings/{id}

### Payments
- GET /api/payments
- GET /api/payments/{id}
- POST /api/payments
- PUT /api/payments/{id}

### Notifications
- GET /api/notifications
- PUT /api/notifications/{id}/read

### Analytics
- GET /api/analytics/overview
- GET /api/analytics/revenue
- GET /api/analytics/utilization

## API Design Principles

- Use RESTful resource naming.
- Return consistent JSON response structures.
- Use standard HTTP status codes.
- Separate read and write concerns where appropriate.
- Protect admin endpoints with strict authorization roles.

## Example Response Shape

```json
{
  "success": true,
  "data": {
    "id": 101,
    "status": "confirmed",
    "start_time": "2026-07-25T10:00:00Z",
    "end_time": "2026-07-25T12:00:00Z"
  },
  "message": "Booking created successfully"
}
```

## Why This API Design

This API structure is compatible with both modern web and mobile clients and is suitable for future microservice extraction. It also keeps the backend contract simple enough for clear documentation and strong testing.
