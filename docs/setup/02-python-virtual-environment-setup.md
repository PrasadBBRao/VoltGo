# 2. Python Virtual Environment Setup

## Create a Virtual Environment

From the backend directory:

```bash
cd backend
python -m venv .venv
```

## Activate the Environment

### Windows PowerShell
```powershell
.\.venv\Scripts\Activate.ps1
```

### Windows Command Prompt
```cmd
.venv\Scripts\activate.bat
```

## Upgrade Packaging Tools

```bash
python -m pip install --upgrade pip setuptools wheel
```

## Install Backend Dependencies

```bash
pip install flask sqlalchemy flask-jwt-extended flask-cors python-dotenv mysqlclient
```

## Freeze Dependencies

```bash
pip freeze > requirements.txt
```

## Why This Matters

A virtual environment isolates dependencies and prevents version conflicts between projects.
