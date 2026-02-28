import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

// Phase 2: Import Map은 JS 실행 전에 모듈 해석을 완료하므로
// Phase 1의 import('./bootstrap') 동적 import 패턴이 불필요함
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
