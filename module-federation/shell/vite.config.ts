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
      name: 'shell',
      remotes: {
        remote_dashboard: 'http://localhost:3002/assets/remoteEntry.js',
        remote_about: 'http://localhost:3003/assets/remoteEntry.js',
      },
      shared: {
        react: { singleton: true, requiredVersion: '^18.3.1' },
        'react-dom': { singleton: true, requiredVersion: '^18.3.1' },
      },
    }),
  ],
  build: {
    target: 'esnext',
  },
  server: {
    port: 3000,
  },
})
