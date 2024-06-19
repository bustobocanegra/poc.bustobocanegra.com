import { defineConfig, passthroughImageService } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  compressHTML: false,
  image: {
    service: passthroughImageService()
  },
  integrations: [mdx()]
});