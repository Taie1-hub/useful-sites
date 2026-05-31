// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://taie1-hub.github.io',
  base: '/useful-sites/',
  outDir: './docs',
  vite: {
    plugins: [tailwindcss()],
  },
});
