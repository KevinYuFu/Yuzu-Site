// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Static output — builds to /dist for Cloudflare Pages. No adapter needed yet.
  // Old routes, kept so existing links still land on the current page.
  // Static output has no adapter, so each entry becomes an HTML redirect page.
  // The artist page moved from /producer to /yuzu. /artist is the older alias.
  redirects: {
    '/music': '/teacher',
    '/artist': '/yuzu',
    '/producer': '/yuzu',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
