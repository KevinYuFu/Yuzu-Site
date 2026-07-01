// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Static output — builds to /dist for Cloudflare Pages. No adapter needed yet.
  vite: {
    plugins: [tailwindcss()],
  },
});
