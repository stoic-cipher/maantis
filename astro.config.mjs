// @ts-check
import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  // Performance optimizations
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },

  // Vite configuration for additional minification
  vite: {
    build: {
      minify: 'esbuild',
      cssMinify: true,
    },
  },

  // Markdown configuration for Obsidian compatibility
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
    // Enable GitHub Flavored Markdown for better Obsidian compatibility
    // Supports tables, task lists, strikethrough, autolinks, and more
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },

  // Optimize images
  image: {
    domains: [],
  },
});
