import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// @originjs/vite-plugin-federation의 SharedConfig 타입 확장
// singleton, eager, strictVersion은 Webpack Module Federation 스펙에 정의된 옵션이지만
// 현재 플러그인의 타입 정의에서 주석 처리되어 있음 (런타임에서는 정상 동작).
// Module augmentation으로 타입을 확장하여 as any 없이 타입 안전하게 사용.
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
      name: 'remote_dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './Dashboard': './src/components/Dashboard.tsx',
      },
      shared: {
        // singleton: true → 여러 앱이 동일한 React 인스턴스를 공유
        // 없으면 각 remote마다 별도 React → useState/useEffect 등 Hook 오류 발생
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
    port: 3002,
  },
})
