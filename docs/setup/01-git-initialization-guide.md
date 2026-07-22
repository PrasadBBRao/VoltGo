# 1. Git Initialization Guide

## Initialize Git

Run the following commands from the project root:

```bash
git init
git branch -M main
git status
```

## Recommended Git Configuration

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

## Create Initial Commit

```bash
git add .
git commit -m "chore: initialize VoltGo project structure"
```

## Connect to Remote Repository

```bash
git remote add origin <your-repository-url>
git push -u origin main
```

## Why This Matters

Git provides version control, collaboration support, rollback safety, and a clean history for scalable development.
