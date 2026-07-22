# 8. ER Diagram

## Entity Relationship Summary

The core data model for VoltGo can be represented as follows:

- Users create Bookings
- Stations contain Chargers
- Chargers are reserved through Bookings
- Bookings generate Payments
- Bookings and Payments trigger Notifications
- Admin actions are stored in Audit Logs

## Mermaid ER Diagram

```mermaid
erDiagram
    USERS ||--o{ BOOKINGS : creates
    STATIONS ||--o{ CHARGERS : contains
    CHARGERS ||--o{ BOOKINGS : reserved_by
    BOOKINGS ||--|| PAYMENTS : generates
    BOOKINGS ||--o{ NOTIFICATIONS : triggers
    USERS ||--o{ NOTIFICATIONS : receives
    ADMINS ||--o{ AUDIT_LOGS : performs

    USERS {
        int id PK
        string full_name
        string email
        string password_hash
        string role
        boolean is_active
        datetime created_at
    }

    STATIONS {
        int id PK
        string name
        string address
        string city
        decimal latitude
        decimal longitude
        string status
        datetime created_at
    }

    CHARGERS {
        int id PK
        int station_id FK
        string connector_type
        string power_level
        string status
        datetime created_at
    }

    BOOKINGS {
        int id PK
        int user_id FK
        int charger_id FK
        datetime start_time
        datetime end_time
        string status
        decimal amount
        datetime created_at
    }

    PAYMENTS {
        int id PK
        int booking_id FK
        string transaction_reference
        string payment_method
        string status
        decimal amount
        datetime created_at
    }

    NOTIFICATIONS {
        int id PK
        int user_id FK
        int booking_id FK
        string type
        string message
        boolean is_read
        datetime created_at
    }

    ADMINS {
        int id PK
        string full_name
        string email
        string password_hash
        string role
        boolean is_active
    }

    AUDIT_LOGS {
        int id PK
        int admin_id FK
        string action
        string target_type
        int target_id
        datetime created_at
    }
```

## Why This Diagram Matters

The ER model clarifies entity ownership and data dependencies, which is essential for robust schema design and future development. It helps reduce ambiguity between user-focused workflows and administrative operations.
