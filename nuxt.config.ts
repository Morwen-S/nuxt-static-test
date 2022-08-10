import { defineNuxtConfig } from 'nuxt';
import { fileURLToPath } from 'node:url';
import StylelintPlugin from 'vite-plugin-stylelint';

const landingDirectory = process.env.LANDING_NAME;

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    // rootDir:  `./landings/${landingDirectory}`,
    srcDir: `./landings/${landingDirectory}`,
    alias:  {
        '@': fileURLToPath(new URL('./', import.meta.url)),
    },
    vite: {
        plugins: [
            StylelintPlugin({
                fix: true,
            }),
        ],
    },
});
