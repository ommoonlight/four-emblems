param(
    [string]$GameRoot = 'D:\Project\Cocos\HX',
    [switch]$Rebuild,
    [switch]$Release,
    [switch]$Playtest
)
$ErrorActionPreference = 'Stop'
$repoRoot = Split-Path $PSScriptRoot -Parent
$siteDir  = Join-Path $repoRoot 'site'
$outputName = if ($Release) { 'web-mobile-release' } else { 'web-mobile' }
$buildDir = Join-Path $GameRoot ('cocos/build/' + $outputName)

if ($Rebuild) {
    Write-Output "正在用 Cocos Creator 重新构建（约 1-3 分钟）..."
    & (Join-Path $GameRoot 'scripts\build-cocos.ps1') -Release:$Release
    if ($LASTEXITCODE -ne 0) { throw "Cocos 构建失败，退出码 $LASTEXITCODE" }
}

$indexFile = Join-Path $buildDir 'index.html'
if (-not (Test-Path $indexFile)) {
    throw "找不到构建产物：$indexFile`n先在游戏工程运行 npm.cmd run build:cocos"
}

# Resolve the only destructive mirror target before robocopy /MIR.
$resolvedSite = [IO.Path]::GetFullPath($siteDir)
$expectedSite = [IO.Path]::GetFullPath((Join-Path $repoRoot 'site'))
if ($resolvedSite -ne $expectedSite -or -not $resolvedSite.StartsWith([IO.Path]::GetFullPath($repoRoot) + [IO.Path]::DirectorySeparatorChar)) { throw 'Unsafe site target' }
$gameSource = Get-Content (Join-Path $GameRoot 'cocos/assets/scripts/Game.ts') -Raw
$versionMatch = [regex]::Match($gameSource, "releaseVersion='([^']+)'")
if (-not $versionMatch.Success) { throw 'Missing game release version' }
$releaseVersion = $versionMatch.Groups[1].Value
foreach ($webFile in @('boot.js','sw.js')) {
    $path = Join-Path $repoRoot ('web/' + $webFile)
    $text = Get-Content $path -Raw
    $text = [regex]::Replace($text, '202[0-9]{5}-[a-z0-9-]+', $releaseVersion)
    [IO.File]::WriteAllText($path,$text,[Text.UTF8Encoding]::new($false))
}
Write-Output "源目录: $buildDir"
Write-Output "目标目录: $siteDir"
robocopy $buildDir $siteDir /MIR /XD .runtime-bridge /NFL /NDL /NJH /NJS /NP | Out-Null
if ($LASTEXITCODE -gt 7) { throw "robocopy 失败，退出码 $LASTEXITCODE" }

# Remove the old editor snapshot if the previous deployment included it.
$editorSnapshot = Join-Path $resolvedSite '.runtime-bridge/config.snapshot.json'
if (Test-Path -LiteralPath $editorSnapshot) { Remove-Item -LiteralPath $editorSnapshot }
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
# Always resize classified RPG backgrounds in the delivery copy before encoding.
& $py.Source (Join-Path $GameRoot 'scripts\image_delivery.py') --game-root $GameRoot --directory $siteDir
if ($LASTEXITCODE -ne 0) { throw "图片尺寸审查失败，停止发布" }
Write-Output "正在优化素材（PNG -> WebP）..."
& $py.Source (Join-Path $PSScriptRoot 'optimize-site.py') --dir $siteDir
if ($LASTEXITCODE -ne 0) { throw "素材优化失败，退出码 $LASTEXITCODE" }
& $py.Source (Join-Path $GameRoot 'scripts\content-delivery.py') $siteDir
if ($LASTEXITCODE -ne 0) { throw 'Content delivery manifest failed' }

Write-Output ""
$html = Get-Content $indexFile -Raw
if ($Playtest) { $html = $html.Replace('</head>', '<meta name="four-emblems-playtest" content="1"></head>') }
$boot = '<script src="/boot.js?v=' + $releaseVersion + '"></script>'
if (-not $html.Contains('<!-- game-brand-end -->')) { throw 'Missing branded startup shell' }
$html = $html.Replace('<!-- game-brand-end -->', '<!-- game-brand-end -->' + $boot)
[IO.File]::WriteAllText((Join-Path $siteDir 'index.html'),$html,[Text.UTF8Encoding]::new($false))
$bundle = Join-Path $siteDir 'assets/main/index.js'
$releaseInfo = @{version=$releaseVersion;build='Cocos Creator 3.8.8 Web Mobile';stage=@(480,344);canvas=@(480,854);debug=(-not $Release.IsPresent);bundleSha256=(Get-FileHash $bundle -Algorithm SHA256).Hash.ToLower()}
[IO.File]::WriteAllText((Join-Path $siteDir 'release.json'),($releaseInfo | ConvertTo-Json),[Text.UTF8Encoding]::new($false))
Write-Output "下一步提交并发布："
Write-Output "  git -C `"$repoRoot`" add -A"
Write-Output "  git -C `"$repoRoot`" commit -m `"更新游戏构建`""
Write-Output "  git -C `"$repoRoot`" push"
