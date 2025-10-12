// @ts-check
import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://maantis.com',
  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/admin/'),
    }),
  ],
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
