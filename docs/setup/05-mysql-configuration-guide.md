# 5. MySQL Configuration Guide

## Create a Database

Log in to MySQL and create a database for the project:

```sql
CREATE DATABASE voltgo_dev CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'voltgo_user'@'localhost' IDENTIFIED BY 'strong_password';
GRANT ALL PRIVILEGES ON voltgo_dev.* TO 'voltgo_user'@'localhost';
FLUSH PRIVILEGES;
```

## Recommended Connection Settings

Use environment variables for the database connection:

- host
- port
- database name
- username
- password

## Why This Matters

MySQL provides a reliable relational data store for transactions, bookings, payments, and user records.
