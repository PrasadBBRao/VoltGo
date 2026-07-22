# 10. Recommended Folder Structure

## Overview

A clean folder structure is essential for maintainability, team collaboration, and long-term growth. The structure below is designed to support a modular application and future service extraction.

## Proposed Structure

```text
project-root/
  docs/
  assets/
  src/
    app/
      core/
      shared/
      modules/
        auth/
        users/
        stations/
        chargers/
        bookings/
        payments/
        notifications/
        admin/
        analytics/
    infrastructure/
      database/
      config/
      logging/
    tests/
      unit/
      integration/
      e2e/
  scripts/
  package.json
  README.md
```

## Module Responsibility

- core: foundational application configuration and shared infrastructure
- shared: reusable helpers, UI primitives, and common utilities
- modules: domain-specific features separated by business capability
- infrastructure: database, config, and cross-cutting concerns
- tests: validation for unit, integration, and end-to-end behavior

## Why This Structure

This layout prevents the codebase from becoming tightly coupled and makes it easier to add new features without disrupting existing domain modules. It also aligns well with enterprise-style development practices and portfolio presentation.
