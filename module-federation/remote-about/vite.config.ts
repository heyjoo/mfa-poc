import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

declare module '@originjs/vite-plugin-federation' {
  interface SharedConfig {
    singleton?: boolean
    eager?: boolean
    strictVersion?: boolean
  }
}

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'remote_about',
      filename: 'remoteEntry.js',
      exposes: {
        './About': './src/components/About.tsx',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.3.1' },
        'react-dom': { singleton: true, requiredVersion: '^18.3.1' },
      },
    }),
  ],
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 1500,
  },
  preview: {
    port: 3003,
  },
})
