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
$sizeMB = [math]::Round((($files | Measure-Object Length -Sum).Sum) / 1MB, 2)
$maxMB  = [math]::Round((($files | Measure-Object Length -Maximum).Maximum) / 1MB, 2)
Write-Output "同步完成：$($files.Count) 个文件, $sizeMB MB, 单文件最大 $maxMB MB"

if ($maxMB -gt 25) {
    Write-Output "警告：存在超过 25 MiB 的文件，Cloudflare 静态资源会拒绝部署。"
}

Write-Output ""
Write-Output "下一步提交并发布："
Write-Output "  git -C `"$repoRoot`" add -A"
Write-Output "  git -C `"$repoRoot`" commit -m `"更新游戏构建`""
Write-Output "  git -C `"$repoRoot`" push"
