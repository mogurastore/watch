import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://watch.mogura.dev/",
  integrations: [sitemap()],
  trailingSlash: "always",
});
