import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

/**
 * bootstrap.tsx
 *
 * main.tsx의 동적 import에 의해 실행되는 진짜 진입점.
 * shared 모듈 협상이 완료된 후 실행되므로 안전하게 ReactDOM을 사용할 수 있음.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
