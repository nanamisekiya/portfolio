import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  define: {
    'process.env': {}
  },
  base: process.env.GITHUB_PAGES
  ? '/portfolio/'
  : './',
  plugins: [react()],
});
