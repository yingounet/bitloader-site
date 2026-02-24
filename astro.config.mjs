// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ['en', 'zh-Hans', 'zh-Hant', 'ja', 'fr', 'de', 'es', 'ko', 'pt-BR', 'ru', 'it', 'pl', 'nl'],
    defaultLocale: 'en',
    prefixDefaultLocale: false,
  },
  vite: {
    plugins: [tailwindcss()]
  }
});