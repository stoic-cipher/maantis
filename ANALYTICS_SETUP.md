# MAANTIS Analytics & SEO Setup Guide

## Google Tag Manager (GTM) - ✅ Installed

**GTM ID:** `GTM-KNX9CT7D`

The site is already configured with Google Tag Manager. The GTM container is loaded on every page.

### What's Next:
1. Log into [Google Tag Manager](https://tagmanager.google.com/)
2. Add tags for:
   - Google Analytics 4 (GA4)
   - Conversion tracking
   - Custom events (form submissions, button clicks, etc.)
   - Any other marketing pixels (Meta, LinkedIn, etc.)

## Google Analytics 4 (GA4)

### Option 1: Setup via GTM (Recommended)
1. In GTM, create a new tag → Google Analytics: GA4 Configuration
2. Enter your GA4 Measurement ID
3. Set trigger to "All Pages"
4. Publish the container

### Option 2: Direct Implementation
1. Get your GA4 Measurement ID (format: `G-XXXXXXXXXX`)
2. Add to environment variables: `PUBLIC_GA4_ID=G-XXXXXXXXXX`
3. The site will automatically include GA4 tracking

## Google Search Console

### Step 1: Verify Site Ownership
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://maantis.com`
3. Choose verification method: **HTML meta tag**
4. Copy the verification code (format: `content="abc123xyz..."`)
5. Update `src/layouts/Layout.astro`:
   ```html
   <meta name="google-site-verification" content="YOUR_CODE_HERE" />
   ```
6. Deploy and click "Verify" in Search Console

### Step 2: Submit Sitemap
1. After verification, go to Sitemaps section
2. Submit: `https://maantis.com/sitemap-index.xml`
3. Google will start indexing your pages

### Step 3: Monitor Performance
- Check "Performance" tab for search queries and clicks
- Review "Coverage" for indexing status
- Monitor "Enhancements" for Core Web Vitals

## Current SEO Status

**Sitemap:** ✅ Already configured at `/sitemap-index.xml`
**Robots.txt:** ✅ Already configured
**Structured Data:** ✅ JSON-LD implemented (Organization schema)
**Meta Tags:** ✅ Complete (title, description, OG, Twitter)

## Tracking Events

### Recommended Events to Track (via GTM):
1. **Contact Form Submissions**
2. **CTA Button Clicks** (Services, Contact)
3. **Navigation Clicks**
4. **Scroll Depth** (25%, 50%, 75%, 100%)
5. **Outbound Link Clicks**
6. **File Downloads** (if applicable)

## Performance Monitoring

The site already includes:
- Lighthouse scores: Performance 100, Accessibility 100, Best Practices 100, SEO 100
- Core Web Vitals optimized
- Fast page loads with system fonts and optimized assets

---

**Built by MAANTIS** — Precision. Adaptation. Intelligence.
