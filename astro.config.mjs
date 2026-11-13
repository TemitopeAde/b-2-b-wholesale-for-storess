// @ts-check
import { defineConfig, envField } from 'astro/config';
import wix from '@wix/astro';
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import wixHostingAdapter from "@wix/astro-wix-hosting-adapter";

export default defineConfig({
  output: "server",
  adapter: wixHostingAdapter(),
  integrations: [wix(), react()],
  env: {
    schema: {
      LIFECYCLE_SHEETS_WEBHOOK_URL: envField.string({ context: 'server', access: 'secret', optional: true }),
      LIFECYCLE_SHEETS_WEBHOOK_SECRET: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
  vite: { plugins: [tailwindcss()] },
  image: { domains: ["static.wixstatic.com"] },
  security: { checkOrigin: false },
  devToolbar: { enabled: false }
});
