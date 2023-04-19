import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxInject: 'import { jsx } from \'@emotion/react\'',
  },
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled'],
  },
});
