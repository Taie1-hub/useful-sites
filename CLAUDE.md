# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Purpose

A website aggregating useful/interesting websites — sourced from Douyin (抖音) video content by a self-media creator. The site serves as a searchable directory for the creator's audience to browse recommended tools and websites.

## Tech Stack

- **Framework:** Astro 6.x (static site generation, `.astro` + `.md` files)
- **Language:** TypeScript (strict mode via `astro/tsconfigs/strict`)
- **Node:** >=22.12.0
- **Package manager:** npm

## Commands

| Command              | Action                                |
| -------------------- | ------------------------------------- |
| `npm run dev`        | Dev server at `localhost:4321`        |
| `npm run build`      | Production build to `dist/`           |
| `npm run preview`    | Preview production build locally      |
| `npm run astro check`| Type-check the project                |
| `npm run astro add`  | Add integrations (tailwind, react...) |

## Directory Conventions

- `src/pages/` — Routes. `.astro` files become HTML pages, `.md` files become content pages.
- `src/layouts/` — Page wrapper components (`<Layout>` provides `<html>`, `<head>`, `<body>`).
- `src/components/` — Reusable UI components (`.astro` files).
- `src/content/` — Content collections (YAML/Markdown data files organized by collection). Use `src/content/sites/` for individual website entries.
- `public/` — Static assets served as-is (favicon, robots.txt, etc.).

## Content Collections

Site entries live under `src/content/sites/` as Markdown (`.md`) or YAML (`.yml`) files with the following frontmatter schema:

```yaml
title: "网站名称"
url: "https://..."
category: "分类"         # e.g., AI工具, 设计素材, 效率办公, 视频剪辑, 开发者工具
tags: ["标签1", "标签2"]
description: "一句话介绍"
free_tier: "完全免费" | "有免费额度" | "付费"
requires_signup: true | false
language: "中文" | "英文" | "多语言"
featured: true | false   # 是否在首页推荐
sort_order: 1            # 排序权重，越小越靠前
```

Data pages like category lists, tag filters, and the homepage grid query these collections with `getCollection("sites")`.
