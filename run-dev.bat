@echo off
title NexusSaaS Full-Stack Server
echo ===============================================================
echo     Starting NexusSaaS Full-Stack Suite (Backend + Frontend)
echo ===============================================================
echo.

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [ERROR] Node.js is not found in PATH!
    echo Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

node run-fullstack.js
pause
