# MAANTIS

**Modular Adaptive Architecture for Networked Technology and Intelligent Systems**

Precision-engineered website showcasing systems thinking, architectural clarity, and technical depth.

## Vision

Create adaptive, intelligent systems that evolve as fast as the environments they power — built with precision, resilience, and purpose.

## Tech Stack

- **Astro 5** — High-performance static site generation
- **Content Collections** — Type-safe, validated content
- **Obsidian Integration** — Write posts in your vault at `content/blog/`
- **GitHub Flavored Markdown** — Full GFM support (tables, task lists, etc.)
- **Custom Design System** — Mantis shrimp-inspired color palette and components

## Project Structure

```text
/
├── content/
│   └── blog/              # Your Obsidian vault - write posts here
│       └── *.md           # Blog posts with frontmatter
├── src/
│   ├── content/
│   │   ├── config.ts      # Content collection schema
│   │   └── blog/          # Symlink to /content/blog
│   ├── layouts/
│   │   └── Layout.astro   # Global layout with nav, footer, design tokens
│   ├── pages/
│   │   ├── index.astro    # Homepage
│   │   ├── about.astro    # About page
│   │   └── blog/
│   │       ├── index.astro        # Blog listing
│   │       └── [...slug].astro   # Individual posts
│   └── components/
├── public/                # Static assets
├── astro.config.mjs       # Astro configuration
└── package.json
```

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |

## Writing Content

### Blog Posts

Create markdown files in `content/blog/` with frontmatter:

```markdown
---
title: Your Post Title
description: Brief description
pubDate: 2025-01-15
author: Your Name
tags: [systems, architecture, engineering]
draft: false
---

# Your content here

Write using full Obsidian markdown support.
```

### Required Frontmatter

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Post title |
| `description` | string | Yes | Brief description |
| `pubDate` | date | Yes | Publication date (YYYY-MM-DD) |
| `author` | string | No | Author name |
| `tags` | array | No | Array of tags |
| `draft` | boolean | No | Hide in production if true |

## Design System

### Color Tokens

Inspired by mantis shrimp vision and ocean depths:

```css
--color-depth: #0a1628           /* Deep ocean base */
--color-strike: #00d9ff          /* Electric cyan accent */
--color-text-primary: #e0e1dd    /* Primary text */
--color-text-secondary: #778da9  /* Secondary text */
```

### Typography

- Body: Inter
- Mono: JetBrains Mono

### Spacing

Uses consistent spacing scale via CSS custom properties:
- `--space-xs` through `--space-2xl`

## Performance Features

- Static site generation (zero hydration needed)
- HTML compression enabled
- Automatic CSS inlining
- Optimized image handling
- Build-time syntax highlighting
- Type-safe content collections

## Brand Voice

**Tone:** Engineered clarity, stoic resolve, born-from-depth ethos

**Principles:**
1. Precision over trends
2. Adaptation under pressure
3. Intelligence informed by reality
4. Structure that endures

## Deployment

Build outputs to `dist/` - deploy to any static host:

```bash
npm run build
# Deploy dist/ to Netlify, Vercel, Cloudflare Pages, etc.
```

---

**Precision. Adaptation. Intelligence.**

See `BLOG_SETUP.md` for detailed Obsidian integration guide.
