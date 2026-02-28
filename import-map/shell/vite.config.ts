import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime',
        'react-dom',
        'react-dom/client',
        'react-router-dom',
        'remote-dashboard/Dashboard',
        'remote-about/About',
      ],
    },
    target: 'esnext',
  },
  preview: { port: 3000 },
})
