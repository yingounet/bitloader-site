// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ['en', 'zh', 'ja', 'ko', 'de'],
    defaultLocale: 'en',
    prefixDefaultLocale: false,
  },
  vite: {
    plugins: [tailwindcss()]
  }
});