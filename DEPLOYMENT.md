# Deployment Guide

The MAANTIS site is a static Astro site that can be deployed to any static hosting platform. Here are the recommended options:

## Recommended Platforms

### 1. Vercel (Easiest - Recommended)

**Why Vercel:**
- Zero-config deployment for Astro
- Automatic HTTPS
- Global CDN
- Preview deployments for every push
- Built-in analytics

**Deploy Steps:**
```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy
vercel
```

**Or use the web interface:**
1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Vercel auto-detects Astro and deploys
5. Done! Your site is live

**Configuration:** `vercel.json` is already set up with optimized headers and caching.

---

### 2. Netlify

**Why Netlify:**
- Excellent free tier
- Form handling (for contact forms)
- Edge functions
- Split testing

**Deploy Steps:**
```bash
# Install Netlify CLI (optional)
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

**Or use the web interface:**
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect GitHub and select your repo
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy!

**Configuration:** `netlify.toml` is already configured.

---

### 3. Cloudflare Pages

**Why Cloudflare:**
- Fastest global CDN
- Unlimited bandwidth (free tier)
- Built-in DDoS protection
- Edge workers for advanced features

**Deploy Steps:**
1. Push to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Create a new project
4. Connect your GitHub repo
5. Framework preset: **Astro**
6. Build command: `npm run build`
7. Build output: `dist`
8. Deploy!

---

### 4. GitHub Pages (Free)

**Why GitHub Pages:**
- Completely free
- Simple for open-source projects
- Custom domain support

**Deploy Steps:**
1. Install gh-pages package: `npm install -D gh-pages`
2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. Update `astro.config.mjs`:
   ```js
   export default defineConfig({
     site: 'https://yourusername.github.io',
     base: '/repository-name',
   });
   ```
4. Run: `npm run deploy`

---

## Custom Domain Setup

### For Vercel:
1. Go to your project settings
2. Domains → Add domain
3. Add your custom domain (e.g., `maantis.com`)
4. Update DNS with provided nameservers or CNAME

### For Netlify:
1. Site settings → Domain management
2. Add custom domain
3. Update DNS records as instructed

### For Cloudflare Pages:
1. Custom domains → Set up a custom domain
2. If domain is already on Cloudflare, it's automatic
3. Otherwise, update DNS records

---

## Performance Optimizations (Already Configured)

✅ **HTML Compression** - Enabled in `astro.config.mjs`
✅ **CSS Minification** - Enabled via Vite config
✅ **JavaScript Minification** - Enabled via esbuild
✅ **Asset Optimization** - Static generation with pre-rendering
✅ **Security Headers** - Configured in `vercel.json` and `netlify.toml`
✅ **Cache Control** - 1-year caching for static assets

---

## Build Information

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Node version:** 18+ recommended
- **Build time:** ~600-700ms
- **Total pages:** 9 pages + blog posts
- **Production size:** Optimized and minified

---

## Environment Variables

Currently, no environment variables are needed. If you add:
- Analytics (Plausible, Fathom, GA4)
- CMS (Sanity, Contentful)
- Contact forms (FormSpree, etc.)

Add them in your hosting platform's environment variables section.

---

## Post-Deployment Checklist

After deploying:
- [ ] Test all pages load correctly
- [ ] Verify custom domain is working
- [ ] Check HTTPS is enabled
- [ ] Run Lighthouse audit (should score 95-100)
- [ ] Test on mobile devices
- [ ] Verify all links work
- [ ] Check contact email links
- [ ] Set up analytics (optional)

---

## Continuous Deployment

All platforms support automatic deployment:
- Push to `main` branch → Automatic production deployment
- Push to other branches → Preview deployments (Vercel/Netlify)

---

## Troubleshooting

**Build fails:**
- Check Node version is 18+
- Run `npm install` to ensure dependencies are current
- Check build logs for specific errors

**404 on routes:**
- Ensure `dist` is set as output directory
- Check that all pages built successfully
- Verify routing configuration

**Slow load times:**
- Run `npm run build` to ensure minification is working
- Check CDN is enabled on your hosting platform
- Verify cache headers are applied

---

## Support

For deployment issues:
- **Vercel:** [vercel.com/docs](https://vercel.com/docs)
- **Netlify:** [docs.netlify.com](https://docs.netlify.com)
- **Cloudflare:** [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages)
