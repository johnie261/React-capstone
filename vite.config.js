/* import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import styledComponents from 'vite-plugin-styled-components'

export default defineConfig({
  plugins: [
    react(),
    styledComponents()
  ]
})
*/
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxInject: `import { jsx } from '@emotion/react'`
  },
  optimizeDeps: {
    include: ['@emotion/react', '@emotion/styled']
  },
  // ...
  // Other configurations here
  // ...
});
