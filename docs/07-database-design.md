# 7. Database Design

## Overview

The database should be relational and structured around transactional entities such as users, stations, chargers, bookings, and payments. This is the most appropriate design for enforcing constraints, consistency, and auditability.

## Core Entities

### Users
Stores user profile, authentication details, role, and account status.

### Stations
Stores station-level information including name, address, coordinates, operating hours, and status.

### Chargers
Stores charger-specific data such as connector type, power rating, station association, and availability state.

### Bookings
Represents charging reservations and contains references to users, chargers, time windows, pricing, and booking status.

### Payments
Stores transactions associated with bookings, including amount, currency, method, status, and timestamps.

### Notifications
Stores message events such as booking confirmations, reminders, and payment updates.

### Audit Logs
Records important administrative actions and system events for traceability.

## Suggested Relationships

- One user can have many bookings.
- One station can have many chargers.
- One charger can have many bookings over time.
- One booking has one payment record (or zero in some failed flows).
- One booking can have many notifications.

## Design Principles

- Use explicit foreign keys to preserve relationships.
- Keep immutable financial history intact.
- Use status enums for workflow clarity.
- Separate operational data from user-facing display data where beneficial.

## Why a Relational Model

A relational database is ideal because the application depends on consistent booking state, financial integrity, and clear relationships between entities. This makes it more reliable than a document-first model for the initial release.

## Recommended Indexing Strategy

- Index user email and role fields.
- Index station location and status.
- Index booking date/time and status.
- Index payment status and transaction reference.
