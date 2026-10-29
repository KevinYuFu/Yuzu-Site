// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Static output — builds to /dist for Cloudflare Pages. No adapter needed yet.
  // Old slice-2 routes, kept so existing links still land somewhere.
  redirects: {
    '/music': '/teacher',
    '/artist': '/producer',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
