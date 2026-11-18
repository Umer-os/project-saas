@echo off
title NexusSaaS Live Scanner Service
echo ===============================================================
echo     Starting Live Inventory Scanner (OpenCV + pyzbar) on :8765
echo ===============================================================
where python >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Python is not found in PATH! Install Python 3.10+ from https://python.org
    pause
    exit /b 1
)
cd /d "%~dp0scanner-service"
python -c "import cv2, flask, flask_cors, requests" 2>nul || pip install -r requirements.txt
python app.py
pause
