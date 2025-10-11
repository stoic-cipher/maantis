# Astro + Obsidian Blog Setup

This project is configured to use Obsidian as a content management system for your Astro blog. Write your posts in Obsidian, and Astro will automatically generate a high-performance static site.

## Structure

```
/
├── content/
│   └── blog/          # Your Obsidian vault - write posts here!
│       └── *.md       # Blog post markdown files
├── src/
│   ├── content/
│   │   ├── config.ts  # Content collection schema
│   │   └── blog/      # Symlink to /content/blog
│   └── pages/
│       └── blog/
│           ├── index.astro      # Blog listing page
│           └── [...slug].astro  # Individual blog post page
└── astro.config.mjs   # Astro configuration
```

## Writing Blog Posts

### 1. Open content/blog in Obsidian

Simply add the `content/blog` folder to your Obsidian vault (or use `content/` as your entire vault).

### 2. Create a new markdown file

Each markdown file in `content/blog/` becomes a blog post. For example:

**content/blog/my-first-post.md**

```markdown
---
title: My First Blog Post
description: A short description of your post
pubDate: 2025-01-15
author: Your Name
tags: [astro, obsidian, blogging]
draft: false
---

# Your Content Here

Write your blog post using full Obsidian markdown support!

## Features

- **Task lists**: - [x] Completed task
- **Tables**: Full GFM table support
- **Code blocks**: With syntax highlighting
- **Strikethrough**: ~~crossed out text~~
- And more!
```

### 3. Required Frontmatter

Each blog post must include these frontmatter fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Post title |
| `description` | string | Yes | Brief description |
| `pubDate` | date | Yes | Publication date (YYYY-MM-DD) |
| `author` | string | No | Author name (defaults to "Anonymous") |
| `tags` | array | No | Array of tag strings |
| `draft` | boolean | No | Set to `true` to hide in production |
| `updatedDate` | date | No | Last updated date |
| `heroImage` | string | No | Path to hero image |

## Obsidian Features Supported

### ✅ Fully Supported

- Standard markdown (headings, lists, links, images)
- GitHub Flavored Markdown (GFM)
  - Tables
  - Task lists
  - Strikethrough
  - Autolinks
- Code blocks with syntax highlighting
- Blockquotes
- Horizontal rules
- Inline code

### ⚠️ Partial Support

- **Internal links**: `[[other-post]]` - Currently rendered as-is. You can add a remark plugin for automatic linking.
- **Embeds**: Image embeds work, but block embeds need custom handling.
- **Dataview**: Not supported (Dataview is Obsidian-specific).

### 📦 Can Be Added

Want more Obsidian features? Install these plugins:

```bash
# For wiki-style links
npm install remark-wiki-link

# For Obsidian-style callouts
npm install remark-obsidian-callout

# For math equations
npm install remark-math rehype-katex
```

## Development

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Performance Features

This setup includes several performance optimizations:

- **Static Site Generation**: All pages pre-rendered at build time
- **HTML Compression**: Minified HTML output
- **Automatic Inlining**: Critical CSS inlined automatically
- **Optimized Images**: Use Astro's Image component for automatic optimization
- **Syntax Highlighting**: Fast, build-time code highlighting with Shiki
- **Content Collections**: Type-safe, validated content with build-time caching

## Workflow Tips

### 1. Use Obsidian Templates

Create a template in Obsidian for new blog posts:

```markdown
---
title: {{title}}
description:
pubDate: {{date}}
author: Your Name
tags: []
draft: true
---

# {{title}}

Start writing here...
```

### 2. Draft Posts

Set `draft: true` in frontmatter to work on posts without publishing them. They'll show in development but hide in production builds.

### 3. Image Handling

Store images in `public/images/` and reference them:

```markdown
![Alt text](/images/my-image.jpg)
```

Or use Astro's optimized Image component for better performance.

### 4. Git Integration

The `content/` folder is tracked by git, so your posts are version controlled. Obsidian workspace files are gitignored to avoid conflicts.

## Extending

### Add RSS Feed

```bash
npm install @astrojs/rss
```

### Add Sitemap

```bash
npm install @astrojs/sitemap
```

### Add Search

Consider adding pagefind or other static search solutions.

### Custom Styling

Edit the styles in `src/pages/blog/index.astro` and `src/pages/blog/[...slug].astro` to customize the look of your blog.

## Troubleshooting

### Symlink Issues

If you have issues with the symlink, you can:
1. Use `content/` directly by moving it to `src/content/blog/`
2. Or manually recreate the symlink: `ln -s ../../content/blog src/content/blog`

### Build Errors

- Ensure all posts have required frontmatter fields
- Check that dates are in valid format (YYYY-MM-DD)
- Validate that there are no syntax errors in markdown

### Obsidian Not Syncing

- Make sure you've opened `content/blog` (or `content/`) as a vault in Obsidian
- Check that file permissions allow Obsidian to write to the folder

---

Happy blogging! 🚀
