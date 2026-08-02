import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  plugins: [],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: 'index.html',
    },
    // Generate compressed assets
    cssCodeSplit: false,
    assetsInlineLimit: 4096,
  },
  server: {
    host: true,
  },
});
