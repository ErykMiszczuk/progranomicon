import tutorialkit from '@tutorialkit/astro';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://progranomicon.netlify.app',
  devToolbar: {
    enabled: false,
  },
  integrations: [tutorialkit()],
});
