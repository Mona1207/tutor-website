# 张昊森｜伴学辅导网站

一个基于 Vue3 + Vite + TypeScript + Tailwind CSS 的纯前端静态网站，适合部署到 GitHub Pages。

## 本地运行

```bash
npm install
npm run dev
```

## 本地构建

```bash
npm run build
```

构建产物会生成在 `dist/` 目录。

## GitHub Pages 部署

项目已按仓库名 `tutor-website` 配置：

```ts
// vite.config.ts
base: '/tutor-website/'
```

部署步骤：

1. 将代码推送到 GitHub 仓库 `tutor-website` 的 `main` 分支。
2. 进入仓库 `Settings` → `Pages`。
3. 在 `Build and deployment` 中选择 `GitHub Actions`。
4. 推送后 `.github/workflows/deploy.yml` 会自动构建并发布 `dist/`。

部署地址通常为：

```text
https://你的用户名.github.io/tutor-website/
```

## 静态资源路径

项目内图片通过 Vue/Vite import 引用，构建后会自动带上 `/tutor-website/` 前缀，部署到 GitHub Pages 后不会因资源路径错误导致白屏。
