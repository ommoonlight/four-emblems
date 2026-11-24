#!/usr/bin/env python3
"""站点构建后优化：把纹理 PNG 转成 WebP，并让 Cocos 运行时按 .webp 取图。

Cocos Creator 3.8 的 web-mobile 构建里，ImageAsset 的默认扩展名取自
engine 中的 `extnames[0]`（构建产物里写作 `xxx.extnames = ['.png', ...]`）。
把它改成 `['.webp', ...]` 之后，运行时就会去 native 目录请求 .webp 文件。

用法：
    python tools/optimize-site.py                # 处理 D:\\Project\\服务器\\site
    python tools/optimize-site.py --dir <站点目录>
    python tools/optimize-site.py --quality 92   # 更高质量（体积更大）
    python tools/optimize-site.py --dry-run      # 只估算，不改文件
"""
import argparse
import json
import os
import re
import sys

from PIL import Image

DEFAULT_SITE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "site")
EXTNAMES_PNG = re.compile(r"""(\.extnames\s*=\s*\[)["']\.png["']""")
EXTNAMES_WEBP = re.compile(r"""\.extnames\s*=\s*\[\s*["']\.webp["']""")


def patch_engine(site_dir, dry_run=False):
    js_dir = os.path.join(site_dir, "cocos-js")
    if not os.path.isdir(js_dir):
        raise SystemExit(f"找不到引擎目录：{js_dir}")

    patched, already = [], []
    for name in sorted(os.listdir(js_dir)):
        if not name.endswith(".js"):
            continue
        path = os.path.join(js_dir, name)
        with open(path, encoding="utf-8", errors="ignore") as fh:
            src = fh.read()

        if EXTNAMES_WEBP.search(src):
            already.append(name)
            continue

        new, count = EXTNAMES_PNG.subn(r"\1'.webp'", src)
        if count:
            if not dry_run:
                with open(path, "w", encoding="utf-8", newline="") as fh:
                    fh.write(new)
            patched.append((name, count))

    if not patched and not already:
        raise SystemExit(
            "没有在引擎里找到 extnames = ['.png', ...]，Cocos 版本可能变了。\n"
            "已中止，避免出现 PNG 转 WebP 后运行时仍请求 .png 的 404。"
        )

    for name, count in patched:
        print(f"  引擎补丁: {name} ({count} 处 extnames -> '.webp')")
    for name in already:
        print(f"  引擎已打过补丁: {name}")
    return bool(patched)


BOOT_TAG = '<script src="/boot.js"></script>'
LEGACY_TAGS = ('<script src="/sw-register.js"></script>',)


def inject_boot(site_dir, dry_run=False):
    """在 index.html 里挂上启动层（断流重试 + 进度条 + 缓存）。"""
    index = os.path.join(site_dir, "index.html")
    if not os.path.isfile(index):
        raise SystemExit(f"找不到 {index}")

    with open(index, encoding="utf-8") as fh:
        html = fh.read()

    for tag in LEGACY_TAGS:
        if tag in html:
            html = html.replace(f"    {tag}\n", "").replace(tag, "")
            print("  清理旧的 sw-register.js 挂载")

    if BOOT_TAG in html:
        changed = False
        if not dry_run:
            with open(index, "w", encoding="utf-8", newline="") as fh:
                fh.write(html)
        else:
            changed = True
        print("  index.html 已挂载 boot.js")
        return changed

    if "</head>" not in html:
        raise SystemExit("index.html 里没有 </head>，无法注入 boot.js")

    html = html.replace("</head>", f"    {BOOT_TAG}\n</head>", 1)
    if not dry_run:
        with open(index, "w", encoding="utf-8", newline="") as fh:
            fh.write(html)
    print("  index.html 已注入 boot.js")
    return True


def write_manifest(site_dir, dry_run=False):
    """写 build-manifest.json，给进度条一个总字节数。"""
    total, count, newest = 0, 0, 0
    for root, _dirs, files in os.walk(site_dir):
        for name in files:
            if name == "build-manifest.json" or name == "index.html":
                continue
            path = os.path.join(root, name)
            size = os.path.getsize(path)
            total += size
            count += 1
            newest = max(newest, int(os.path.getmtime(path)))
    payload = json.dumps({"totalBytes": total, "files": count, "builtAt": newest}, ensure_ascii=False)
    if not dry_run:
        with open(os.path.join(site_dir, "build-manifest.json"), "w", encoding="utf-8") as fh:
            fh.write(payload)
    print(f"  build-manifest.json: {count} 个文件 / {total / 1048576:.2f} MB")
    return total


def convert(site_dir, quality, dry_run=False):
    assets = os.path.join(site_dir, "assets")
    pngs = []
    for root, _dirs, files in os.walk(assets):
        pngs.extend(os.path.join(root, f) for f in files if f.lower().endswith(".png"))

    if not pngs:
        print("  没有 PNG 需要转换（可能已经优化过）。")
        return 0, 0

    before = sum(os.path.getsize(p) for p in pngs)
    after = 0
    for path in pngs:
        with Image.open(path) as im:
            mode = "RGBA" if (im.mode == "RGBA" or "transparency" in im.info) else "RGB"
            im = im.convert(mode)
            out = path[:-4] + ".webp"
            if dry_run:
                import io

                buf = io.BytesIO()
                im.save(buf, format="WEBP", quality=quality, method=6, alpha_quality=95)
                size = buf.tell()
            else:
                im.save(out, format="WEBP", quality=quality, method=6, alpha_quality=95)
                size = os.path.getsize(out)
                os.remove(path)
        after += size

    print(f"  纹理: {len(pngs)} 个 PNG {before / 1048576:.2f} MB -> WebP {after / 1048576:.2f} MB")
    return before, after


def report(site_dir):
    total, biggest, count = 0, ("", 0), 0
    for root, _dirs, files in os.walk(site_dir):
        for name in files:
            path = os.path.join(root, name)
            size = os.path.getsize(path)
            total += size
            count += 1
            if size > biggest[1]:
                biggest = (os.path.relpath(path, site_dir), size)
    print(f"  站点合计: {count} 个文件, {total / 1048576:.2f} MB")
    print(f"  最大文件: {biggest[0]} ({biggest[1] / 1048576:.2f} MB)")
    if biggest[1] > 25 * 1024 * 1024:
        print("  警告：单文件超过 25 MiB，Cloudflare 会拒绝部署。")
    return total


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--dir", default=os.path.abspath(DEFAULT_SITE))
    parser.add_argument("--quality", type=int, default=90)
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    site = os.path.abspath(args.dir)
    print(f"优化目录: {site}  (webp quality={args.quality}{'  DRY-RUN' if args.dry_run else ''})")
    patch_engine(site, args.dry_run)
    inject_boot(site, args.dry_run)
    convert(site, args.quality, args.dry_run)
    write_manifest(site, args.dry_run)
    if not args.dry_run:
        report(site)
    return 0


if __name__ == "__main__":
    sys.exit(main())
