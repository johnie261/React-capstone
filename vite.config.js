import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled'],
  },
});
