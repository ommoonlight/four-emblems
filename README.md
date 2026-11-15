# 服务器 / 网站项目

个人 HTML 游戏上线项目。路线已确定为 **静态托管（Cloudflare Pages）**，不购买服务器。

## 目录

```
服务器/
├─ site/              # ← 把你的游戏文件全部放这里（index.html 在根）
├─ preview.ps1        # 本地起服务，手机同 Wi-Fi 可测
├─ 启动预览.cmd        # 双击即用（绕过脚本执行策略限制）
├─ 部署指南.md        # 从整理文件到绑定域名的完整步骤
└─ README.md
```

## 快速开始

```powershell
# 1. 本地预览（双击 启动预览.cmd 也可以）
powershell -ExecutionPolicy Bypass -File .\preview.ps1

# 2. 推送到 GitHub
git init; git add .; git commit -m "init"
git remote add origin https://github.com/<用户名>/<仓库名>.git
git push -u origin main
```

3. Cloudflare Pages 连仓库：Build command 留空，输出目录填 `site`
4. 绑定域名 → 完成

详细步骤见 [部署指南.md](./部署指南.md)。

## 当前状态

- [x] 目录结构与部署方案确定
- [x] 游戏文件已放入 `site/`
- [x] 单文件 34.5MB 的 Cocos 包已拆分为 414 个文件（`index.html` 57KB，最大文件 6.8MB）
- [ ] 本地刷新验证
- [ ] GitHub 仓库创建并推送
- [ ] Cloudflare Pages 部署
- [ ] 域名绑定 + HTTPS

## 关于拆分

原始 `index.html` 是 Cocos Creator 的单文件导出（34.5MB，整个游戏 + 资源 base64 塞在一个 HTML 里），
超过 Cloudflare Pages 单文件 25MiB 上限，且首次加载极慢。

用 `tools/unpack.js` 把内嵌资源还原成正常目录结构：

```powershell
node tools\unpack.js site\index.html site
```

原始文件备份在 `_backup/index.original.html`（已在 .gitignore 中，不会上传）。
