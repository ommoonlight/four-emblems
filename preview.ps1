# Local preview server for the static site.
# Usage:  .\preview.ps1                 (serves .\site on port 8000)
#         .\preview.ps1 -Port 8080
#         .\preview.ps1 -Root .\other-folder
# If script execution is blocked, double-click 启动预览.cmd instead,
# or run: powershell -ExecutionPolicy Bypass -File .\preview.ps1
param(
    [int]$Port = 8000,
    [string]$Root = "site"
)

$ErrorActionPreference = "Stop"
$here = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $here

if (-not (Test-Path $Root)) {
    Write-Host "[ERROR] Folder not found: $Root" -ForegroundColor Red
    Write-Host "        Put your game files in .\$Root first." -ForegroundColor Yellow
    exit 1
}

$rootFull = (Resolve-Path $Root).Path

if (-not (Test-Path (Join-Path $rootFull "index.html"))) {
    Write-Host "[WARN] No index.html in $rootFull" -ForegroundColor Yellow
    Write-Host "       The site root must contain index.html." -ForegroundColor Yellow
}

$python = Get-Command python -ErrorAction SilentlyContinue
if (-not $python) {
    Write-Host "[ERROR] Python not found. Install Python 3, or run: npx serve $Root" -ForegroundColor Red
    exit 1
}

$ips = @()
try {
    $ips = Get-NetIPAddress -AddressFamily IPv4 -ErrorAction Stop |
        Where-Object {
            $_.IPAddress -notlike "127.*" -and
            $_.IPAddress -notlike "169.254.*" -and
            $_.IPAddress -notlike "198.18.*" -and
            $_.IPAddress -notlike "198.19.*"
        } |
        Select-Object -ExpandProperty IPAddress -Unique |
        Sort-Object
} catch { }

Write-Host ""
Write-Host "  Serving : $rootFull" -ForegroundColor Cyan
Write-Host "  Local   : http://localhost:$Port" -ForegroundColor Green
foreach ($ip in $ips) {
    Write-Host "  Phone   : http://${ip}:$Port   (same Wi-Fi)" -ForegroundColor Green
}
Write-Host ""
Write-Host "  If the phone cannot connect, allow python.exe through Windows Firewall." -ForegroundColor DarkGray
Write-Host "  Press Ctrl+C to stop." -ForegroundColor DarkGray
Write-Host ""

& $python.Source -m http.server $Port --directory $rootFull --bind 0.0.0.0
