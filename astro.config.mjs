// @ts-check
/**
 * ███╗   ███╗ █████╗  █████╗ ███╗   ██╗████████╗██╗███████╗
 * ████╗ ████║██╔══██╗██╔══██╗████╗  ██║╚══██╔══╝██║██╔════╝
 * ██╔████╔██║███████║███████║██╔██╗ ██║   ██║   ██║███████╗
 * ██║╚██╔╝██║██╔══██║██╔══██║██║╚██╗██║   ██║   ██║╚════██║
 * ██║ ╚═╝ ██║██║  ██║██║  ██║██║ ╚████║   ██║   ██║███████║
 * ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝   ╚═╝   ╚═╝╚══════╝
 *
 * Modular Adaptive Architecture for Networked Technology and Intelligent Systems
 *
 * Engineering precision. Built to last.
 * https://maantis.com
 */

import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Astro Configuration - Optimized for performance
export default defineConfig({
  site: 'https://maantis.com',
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/admin/'),
    }),
  ],

  // MAANTIS Performance Optimizations
  // Every byte counts. Every millisecond matters.
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto', // Reduce requests, increase speed
  },

  // Vite: Fast, minimal, precise
  vite: {
    build: {
      minify: 'esbuild', // The mantis shrimp strikes fast
      cssMinify: true,
    },
  },

  // Markdown: Content is king, structure is everything
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
    remarkPlugins: [remarkGfm], // GFM for maximum compatibility
    rehypePlugins: [],
  },

  // Image optimization: See everything, load nothing unnecessary
  image: {
    domains: [], // Mantis shrimp have 16 color receptors. We optimize for all of them.
  },
});
