param(
    [string]$GameRoot = 'D:\Project\Cocos\HX',
    [switch]$Rebuild
)
$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path $PSScriptRoot -Parent
$siteDir  = Join-Path $repoRoot 'site'
$buildDir = Join-Path $GameRoot 'cocos\build\web-mobile'

if ($Rebuild) {
    Write-Output "正在用 Cocos Creator 重新构建（约 1-3 分钟）..."
    & (Join-Path $GameRoot 'scripts\build-cocos.ps1')
    if ($LASTEXITCODE -ne 0) { throw "Cocos 构建失败，退出码 $LASTEXITCODE" }
}

$indexFile = Join-Path $buildDir 'index.html'
if (-not (Test-Path $indexFile)) {
    throw "找不到构建产物：$indexFile`n先在游戏工程运行 npm.cmd run build:cocos"
}

Write-Output "源目录: $buildDir"
Write-Output "目标目录: $siteDir"
robocopy $buildDir $siteDir /MIR /NFL /NDL /NJH /NJS /NP | Out-Null
if ($LASTEXITCODE -gt 7) { throw "robocopy 失败，退出码 $LASTEXITCODE" }

$files = Get-ChildItem $siteDir -Recurse -File -Force
Write-Output "同步完成：$($files.Count) 个文件"

# robocopy /MIR 会删掉构建产物里没有的文件，所以自定义文件在同步之后再覆盖进去
$webDir = Join-Path $repoRoot 'web'
if (Test-Path $webDir) {
    Copy-Item (Join-Path $webDir '*') $siteDir -Force
    Write-Output "已覆盖自定义文件：sw.js / sw-register.js"
}

# 构建产物是 PNG 纹理，必须转 WebP 才能压到 16 MB 左右
$py = Get-Command python -ErrorAction SilentlyContinue
if (-not $py) { throw "找不到 python，无法执行 WebP 优化（tools\optimize-site.py）" }
Write-Output "正在优化素材（PNG -> WebP）..."
& $py.Source (Join-Path $PSScriptRoot 'optimize-site.py') --dir $siteDir
if ($LASTEXITCODE -ne 0) { throw "素材优化失败，退出码 $LASTEXITCODE" }

Write-Output ""
Write-Output "下一步提交并发布："
Write-Output "  git -C `"$repoRoot`" add -A"
Write-Output "  git -C `"$repoRoot`" commit -m `"更新游戏构建`""
Write-Output "  git -C `"$repoRoot`" push"
