# 3. React Vite Setup Guide

## Create the Frontend App

From the project root:

```bash
cd frontend
npm create vite@latest . -- --template react
```

## Install Dependencies

```bash
npm install
npm install react-router-dom axios
```

## Recommended Development Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint ."
  }
}
```

## Why This Matters

Vite provides a fast development environment, efficient HMR, and strong performance for modern frontend development.
