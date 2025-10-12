# Live Lighthouse Score Display

## Current Implementation

The site now displays live Lighthouse scores on the homepage using the `LiveLighthouseScore.astro` component.

**Current Scores (Manual Update):**
- Performance: 96
- Accessibility: 95
- Best Practices: 100
- SEO: 100

## How to Update Scores Manually

Edit `/src/components/LiveLighthouseScore.astro` and update the `scores` object:

```javascript
const scores: ScoreData = {
  performance: 96,   // Update this
  accessibility: 95, // Update this
  bestPractices: 100,
  seo: 100
};
```

## Automatic Updates with PageSpeed Insights API

To make scores fetch automatically:

### Option 1: Client-Side Fetch (Simple)

Replace the static scores with an API call:

```astro
---
// Remove static scores and add this:
let scores: ScoreData = {
  performance: 0,
  accessibility: 0,
  bestPractices: 0,
  seo: 0
};

// Fetch from PageSpeed Insights API
const apiKey = import.meta.env.PUBLIC_PAGESPEED_API_KEY;
if (apiKey) {
  const url = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://maantis.com&key=${apiKey}&category=performance&category=accessibility&category=best-practices&category=seo`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    scores = {
      performance: Math.round(data.lighthouseResult.categories.performance.score * 100),
      accessibility: Math.round(data.lighthouseResult.categories.accessibility.score * 100),
      bestPractices: Math.round(data.lighthouseResult.categories['best-practices'].score * 100),
      seo: Math.round(data.lighthouseResult.categories.seo.score * 100),
    };
  } catch (error) {
    console.error('Failed to fetch Lighthouse scores:', error);
  }
}
---
```

### Option 2: Build-Time Fetch (Recommended)

Fetch scores during build and cache them:

1. Add to `.env`:
```bash
PUBLIC_PAGESPEED_API_KEY=your_api_key_here
```

2. The scores will update on each build/deploy

### Option 3: GitHub Actions Badge

Use Lighthouse CI to generate a badge:

1. Install Lighthouse CI
2. Run audits in GitHub Actions
3. Generate badge showing scores
4. Embed badge on homepage

### Option 4: Third-Party Service

Use services like:
- **web.dev/measure** - Google's official tool with shareable badges
- **PageSpeed Insights Badge** - Generate embeddable badges
- **Speedlify** - Open-source continuous monitoring

## Get PageSpeed Insights API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing)
3. Enable PageSpeed Insights API
4. Create credentials → API Key
5. Add to `.env` as `PUBLIC_PAGESPEED_API_KEY`

## Rate Limits

PageSpeed Insights API has rate limits:
- 25,000 queries per day
- 1 query per second

For production, consider:
- Caching scores for 24 hours
- Running audits during build time
- Using Lighthouse CI for automated monitoring

## Benefits of Live Scores

✅ **Social Proof** - Show clients you practice what you preach
✅ **Transparency** - Verifiable performance metrics
✅ **Credibility** - Link to independent verification
✅ **Lead Generation** - Perfect scores attract performance-focused clients

---

**Built by MAANTIS** — Where performance is proven, not promised.
