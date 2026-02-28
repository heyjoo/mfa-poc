import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJs from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [react(), cssInjectedByJs()],
  build: {
    lib: {
      entry: 'src/components/Dashboard.tsx',
      formats: ['es'],
      fileName: () => 'dashboard.js',
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom', 'react-dom/client'],
    },
    target: 'esnext',
  },
  preview: { port: 3002, cors: true },
})
