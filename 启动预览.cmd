@echo off
pushd "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -File ".\preview.ps1" %*
popd
echo.
pause
