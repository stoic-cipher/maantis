# MAANTIS Content Vault

This is your Obsidian vault for managing blog content.

## 📁 Folder Structure

```
content/
├── blog/                    # Published blog posts
├── templates/               # Post templates
│   ├── blog-post-template.md
│   └── technical-post-template.md
└── README.md               # This file
```

## 🚀 Quick Start

### 1. Open Vault in Obsidian
1. Open Obsidian
2. Click "Open folder as vault"
3. Select: `/Users/stoic-cipher/maantis/content`

### 2. Enable Templates (Core Plugin)
1. Settings (⚙️) → Core plugins
2. Enable **Templates**
3. Settings → Templates → Template folder location: `templates`

### 3. Create a New Post
1. Create new note in `blog/` folder
2. Cmd/Ctrl + P → "Insert template"
3. Choose `blog-post-template` or `technical-post-template`
4. Fill in the details
5. Set `draft: false` when ready to publish

## 📝 Frontmatter Fields

```yaml
---
title: "Your Post Title"              # Required
description: "SEO description"        # Required
pubDate: 2025-10-11                   # Required (YYYY-MM-DD)
author: "MAANTIS Team"                # Default: Anonymous
tags: ["tag1", "tag2"]                # Array of tags
draft: true                           # true = hidden, false = published
heroImage: "/images/hero.jpg"         # Optional
---
```

## 🏷️ Recommended Tags

**Categories:**
- `web-development`
- `performance`
- `cloud-infrastructure`
- `engineering`
- `case-study`

**Technologies:**
- `react`, `nextjs`, `astro`
- `typescript`, `javascript`
- `aws`, `kubernetes`, `docker`
- `postgresql`, `redis`

**Topics:**
- `optimization`
- `architecture`
- `tutorial`
- `announcement`

## 📂 Suggested Folders (Optional)

Create these folders as needed:

```
content/
├── blog/                    # Live blog posts
├── drafts/                  # Work in progress
├── images/                  # Blog images
├── case-studies/            # Client projects (with permission)
└── templates/               # Post templates
```

## 🔧 Recommended Obsidian Plugins

### Core Plugins (Built-in)
- ✅ **Templates** - Use post templates
- ✅ **Tag pane** - Manage tags
- ✅ **File recovery** - Auto-backup

### Community Plugins
1. **Templater** - Advanced templates with date/time
2. **Calendar** - Visual date organization
3. **Obsidian Git** - Auto-commit to git
4. **Tag Wrangler** - Better tag management
5. **Paste URL into selection** - Quick link formatting

## 🔄 Git Workflow

Your posts are automatically synced with the Astro site via symlink:
- Edit in Obsidian → Changes appear on dev server instantly
- Commit with git to deploy to production

## 📊 Publishing Workflow

1. **Draft**: Set `draft: true` to work on posts without publishing
2. **Review**: Check on local dev server (http://localhost:4323/blog)
3. **Publish**: Set `draft: false` when ready
4. **Deploy**: Git commit + push to deploy to Cloudflare

## 💡 Writing Tips

- **Keep it scannable**: Use headings, bullets, and short paragraphs
- **Show results**: Include metrics, benchmarks, screenshots
- **Link internally**: Reference your services and other posts
- **Call to action**: End with "Need help? [Get in touch](/about)"
- **SEO**: Write descriptive titles and descriptions

## 🖼️ Images

Store images in `/public/images/blog/`:

```markdown
![Alt text](/images/blog/your-image.jpg)
```

Or use external URLs:
```markdown
![Alt text](https://images.unsplash.com/...)
```

---

**Questions?** Check the [Astro Content Collections docs](https://docs.astro.build/en/guides/content-collections/)
