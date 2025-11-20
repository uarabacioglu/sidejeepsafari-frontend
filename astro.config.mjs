import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";


export default defineConfig({
  site: "https://sidejeepsafari.com",
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()],

  i18n: {
    locales: ["de", "en", "tr", "ru"],
    defaultLocale: "en",
  },

  adapter: netlify()
});
