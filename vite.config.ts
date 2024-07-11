import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  test: {

    // add jsdom to vite
    environment: 'jsdom',

    globals: true,

    // assuming the test folder is in the root of our project
    setupFiles: './src/tests.ts'
  }
});
