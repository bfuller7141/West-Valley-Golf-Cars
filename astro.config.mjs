import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wvgolfcars.com',
  site: 'https://westvalleygolfcars.com',
  integrations: [react(), sitemap()],
});