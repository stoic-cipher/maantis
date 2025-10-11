# How to Add Lottie Animations to MAANTIS

The glassmorphism effects are live and working beautifully! Now you can add Lottie animations to bring the site to life.

## Quick Start

### 1. Find and Download Animations

Visit [LottieFiles.com](https://lottiefiles.com) and search for:

- **Ocean/Water animations**: For hero backgrounds
  - Search: "ocean waves", "water ripples", "underwater"
- **Tech animations**: For website development pages
  - Search: "coding", "web development", "digital"
- **Diver animations**: For About page
  - Search: "scuba diver", "diving", "underwater exploration"
- **Data/Performance animations**: For metrics sections
  - Search: "analytics", "performance", "data visualization"

### 2. Download Files

1. Click on an animation you like
2. Click "Download" (free account required)
3. Choose `.lottie` format (smaller) or `.json` (more compatible)
4. Save to your computer

### 3. Add to Project

Place animation files in the `public/animations/` directory:

```bash
public/
  animations/
    ocean-waves.json
    coding-animation.json
    diver-silhouette.json
    data-viz.json
```

### 4. Enable Animations

The `@dotlottie/player-component` package is already installed. Just uncomment the placeholders and update the paths.

## Specific Locations

### Homepage Hero Animation

**File:** `src/pages/index.astro` (around line 38)

**Current state:** Commented out

**To enable:**
```astro
<div class="hero-visual">
  <div class="hero-animation-layer">
    <dotlottie-player
      src="/animations/ocean-waves.json"
      background="transparent"
      speed="0.5"
      loop
      autoplay
      style="width: 100%; height: 100%; opacity: 0.25;"
    ></dotlottie-player>
  </div>
  <!-- rest of content -->
</div>
```

**Add script import at top:**
```astro
<script>
  import '@dotlottie/player-component';
</script>
```

### Manifesto Card Icons

**File:** `src/pages/index.astro` (around line 61)

**Replace the current icon divs:**

```astro
<div class="manifesto-card">
  <div class="card-animation">
    <dotlottie-player
      src="/animations/gear-icon.json"
      background="transparent"
      speed="1"
      loop
      autoplay
      style="width: 80px; height: 80px;"
    ></dotlottie-player>
  </div>
  <h3>Engineered Clarity</h3>
  <!-- rest of content -->
</div>
```

Use different animations for each of the 3 cards.

### About Page - Hero Background

**File:** `src/pages/about.astro` (around line 20)

**Add ambient underwater effect:**

```astro
<section class="hero-section">
  <div class="hero-ambient">
    <dotlottie-player
      src="/animations/underwater-bubbles.json"
      background="transparent"
      speed="0.4"
      loop
      autoplay
      style="width: 100%; height: 100%; position: absolute; top: 0; left: 0; opacity: 0.15; pointer-events: none;"
    ></dotlottie-player>
  </div>
  <div class="hero-container">
    <!-- content -->
  </div>
</section>
```

**Add script import at top:**
```astro
<script>
  import '@dotlottie/player-component';
</script>
```

### About Page - Diving Section

**File:** `src/pages/about.astro` (around line 163)

**Add diver visual:**

```astro
<section class="diving-section">
  <div class="section-container">
    <h2 class="section-title">Why Diving Matters</h2>
    <div class="diving-visual">
      <dotlottie-player
        src="/animations/diver-silhouette.json"
        background="transparent"
        speed="0.8"
        loop
        autoplay
        style="width: 200px; height: 200px; margin: 0 auto var(--space-lg);"
      ></dotlottie-player>
    </div>
    <!-- rest of content -->
  </div>
</section>
```

### Website Development Page - Hero

**File:** `src/pages/services/website-development.astro` (around line 11)

**Add tech animation:**

```astro
<section class="hero">
  <div class="hero-animation">
    <dotlottie-player
      src="/animations/web-development.json"
      background="transparent"
      speed="1"
      loop
      autoplay
      style="width: 300px; height: 300px; margin: 0 auto; opacity: 0.3;"
    ></dotlottie-player>
  </div>
  <div class="container">
    <!-- content -->
  </div>
</section>
```

**Add script import at top:**
```astro
<script>
  import '@dotlottie/player-component';
</script>
```

## Recommended Animation Settings

### Background Ambient Effects
```javascript
speed="0.3-0.5"
opacity="0.1-0.2"
loop
autoplay
```

### Icon Animations
```javascript
speed="1"
width="80px"
height="80px"
loop
autoplay
```

### Feature Animations
```javascript
speed="0.8-1.2"
width="200-300px"
height="200-300px"
loop
autoplay
```

## Suggested Animations from LottieFiles

### Ocean/Water Theme
- [Ocean Waves](https://lottiefiles.com/search?q=ocean+waves)
- [Underwater Bubbles](https://lottiefiles.com/search?q=underwater+bubbles)
- [Water Ripples](https://lottiefiles.com/search?q=water+ripples)

### Tech/Development Theme
- [Coding Animation](https://lottiefiles.com/search?q=coding)
- [Web Development](https://lottiefiles.com/search?q=web+development)
- [Data Visualization](https://lottiefiles.com/search?q=data+analytics)

### Diving Theme
- [Scuba Diver](https://lottiefiles.com/search?q=scuba+diver)
- [Deep Sea](https://lottiefiles.com/search?q=deep+sea)

## Performance Tips

1. **Use .lottie format** - Smaller file size than .json
2. **Optimize animations** - Keep them under 100KB when possible
3. **Limit concurrent animations** - 3-4 visible animations max
4. **Use lower speeds for ambient effects** - `speed="0.3"` reduces CPU usage
5. **Set appropriate opacity** - Background animations should be 0.1-0.3 opacity

## Testing

After adding animations:

1. Check dev server: `npm run dev`
2. Visit http://localhost:4322/
3. Open browser console (F12) to check for errors
4. Build for production: `npm run build`
5. Ensure animations load and play smoothly

## Troubleshooting

**Animation not showing:**
- Check file path is correct (`/animations/filename.json`)
- Verify file is in `public/animations/` directory
- Check browser console for 404 errors

**Animation loads but doesn't play:**
- Ensure `autoplay` attribute is present
- Check `loop` attribute is set
- Verify the JSON file isn't corrupted

**Performance issues:**
- Reduce animation complexity
- Lower the `speed` value
- Use fewer concurrent animations
- Compress animation files

## Current Glassmorphism Effects ✅

All glassmorphism effects are LIVE and working:

- ✅ Navigation bar - frosted glass with 20px blur
- ✅ Manifesto cards - glass effect with hover lift
- ✅ Capability cards - enhanced glass with glow
- ✅ Tech category cards - subtle glass with hover
- ✅ Philosophy principle cards - glass with slide animation
- ✅ Founder cards (About page) - premium glass effect
- ✅ Philosophy cards (About page) - consistent glassmorphism

The site looks beautiful with the glassmorphism! Adding Lottie animations will complete the visual experience.
