// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://d4nld3v.github.io',
  outDir: './docs',
  output: 'static',
  build: {
    format: 'file'
  }
});
