// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    locales: ["de", "en", "tr", "ru"],
    defaultLocale: "en",
  },

  adapter: netlify()
});