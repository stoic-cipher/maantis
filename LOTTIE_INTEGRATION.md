# Lottie Animation Integration Guide

The `@dotlottie/player-component` package is installed and ready to use for adding animated graphics throughout the site.

## Quick Start

### 1. Find Lottie Animations

Get free Lottie animations from:
- **LottieFiles**: https://lottiefiles.com
- Search for: ocean, water, waves, diving, technology, AI, etc.

### 2. Download and Add to Project

```bash
# Create public/animations directory
mkdir -p public/animations

# Add your .lottie or .json files there
# Example: public/animations/ocean-wave.lottie
```

### 3. Use in Astro Components

```astro
---
// Any .astro file
---

<div class="animation-container">
  <dotlottie-player
    src="/animations/ocean-wave.lottie"
    autoplay
    loop
    style="width: 400px; height: 400px"
  />
</div>

<script>
  // Import the Lottie player component
  import '@dotlottie/player-component';
</script>

<style>
  .animation-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
```

## Recommended Animations for MAANTIS

### Homepage
- **Ocean waves/currents** - For hero background
- **Underwater scene** - Side decoration
- **Data flow/network** - For distributed systems section

### About Page
- **Diver silhouette** - Next to founder profiles
- **Mantis shrimp animation** - If you can find one!
- **Bubbles rising** - Background ambient effect

### Services Page
- **AI/Brain network** - For agentic systems section
- **Cloud infrastructure** - For cloud architecture
- **Connected nodes** - For distributed systems
- **Loading/processing** - For performance metrics

### Blog
- **Scroll indicators** - Subtle reading progress
- **Code symbols** - For technical posts

## Advanced Configuration

### Control Playback

```astro
<dotlottie-player
  id="my-animation"
  src="/animations/strike.lottie"
  speed="1"
  direction="1"
  mode="normal"
  style="width: 300px"
/>

<script>
  import '@dotlottie/player-component';

  const player = document.getElementById('my-animation');

  // Play on scroll into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        player.play();
      }
    });
  });

  observer.observe(player);
</script>
```

### Trigger on Hover

```astro
<dotlottie-player
  id="hover-animation"
  src="/animations/button-hover.lottie"
  hover
  style="width: 200px"
/>

<script>
  import '@dotlottie/player-component';
</script>
```

### Custom Segments

```astro
<dotlottie-player
  src="/animations/complex.lottie"
  segment="[0, 50]"
  autoplay
  loop
/>
```

## Suggested Placements

### 1. Homepage Hero Section

Replace or augment the grid background with an animated ocean/water effect:

```astro
<div class="hero-visual">
  <dotlottie-player
    src="/animations/ocean-depth.lottie"
    autoplay
    loop
    style="width: 100%; height: 100%; opacity: 0.3;"
  />
  <Logo size="large" interactive={true} />
</div>
```

### 2. About Page - Diving Context

Add diving animations near the founders section:

```astro
<div class="founder-visual">
  <dotlottie-player
    src="/animations/diver-silhouette.lottie"
    autoplay
    loop
    style="width: 300px; height: 400px;"
  />
</div>
```

### 3. Services Page - Agentic Systems

Visualize AI/agent networks:

```astro
<div class="service-animation">
  <dotlottie-player
    src="/animations/ai-network.lottie"
    autoplay
    loop
    speed="0.5"
    style="width: 400px;"
  />
</div>
```

### 4. Background Ambient Effects

Subtle underwater ambiance:

```astro
<div class="ambient-layer">
  <dotlottie-player
    src="/animations/bubbles.lottie"
    autoplay
    loop
    speed="0.3"
    style="width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; z-index: -1; opacity: 0.1; pointer-events: none;"
  />
</div>
```

## Performance Tips

1. **Use .lottie files** instead of .json (smaller, optimized)
2. **Lazy load** animations that aren't immediately visible
3. **Limit concurrent animations** - too many can impact performance
4. **Reduce complexity** - Simpler animations = better performance
5. **Use `loading="lazy"`** attribute when available

## Creating Custom Animations

If you want custom mantis shrimp or diving animations:

1. **Adobe After Effects** → Export with Bodymovin plugin
2. **LottieFiles Editor**: https://lottiefiles.com/editor
3. **Commission from LottieFiles**: https://lottiefiles.com/for-hire

## Example: Strike Animation on Scroll

```astro
---
// services.astro
---

<section class="strike-demo">
  <h2>Precision Strike</h2>
  <dotlottie-player
    id="strike-animation"
    src="/animations/mantis-strike.lottie"
    style="width: 600px; height: 400px;"
  />
</section>

<script>
  import '@dotlottie/player-component';

  const strikePlayer = document.getElementById('strike-animation');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        strikePlayer.play();
        observer.unobserve(strikePlayer);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(strikePlayer);
</script>
```

## Resources

- **Lottie Player Docs**: https://developers.lottiefiles.com/docs/dotlottie-player/
- **LottieFiles Library**: https://lottiefiles.com/featured
- **Ocean/Water Animations**: https://lottiefiles.com/search?q=ocean
- **Tech/AI Animations**: https://lottiefiles.com/search?q=artificial+intelligence

---

## Next Steps

1. Browse LottieFiles for relevant animations
2. Download 3-5 key animations (ocean, diving, AI network, etc.)
3. Add to `public/animations/`
4. Integrate using examples above
5. Test performance and adjust as needed

The Lottie player is already installed - just add animations and start using them!
