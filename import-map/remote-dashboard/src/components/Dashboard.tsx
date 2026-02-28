import { useState } from 'react'
import './Dashboard.css'

// Dashboard 컴포넌트: React Hook(useState) 사용
// Import Map이 동일한 CDN URL을 사용하므로 브라우저 캐시를 통해 React 싱글톤이 보장됨
const Dashboard = () => {
  const [count, setCount] = useState(0)

  return (
    <main className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="dashboard-badge">
          <span>remote-dashboard</span>
          <span className="port-badge">:3002</span>
        </div>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <h2 className="card-title">Import Map 상태</h2>
          <div className="status-list">
            <div className="status-item">
              <span className="status-dot green"></span>
              <span>dashboard.js 로드됨 (plain ES module)</span>
            </div>
            <div className="status-item">
              <span className="status-dot green"></span>
              <span>React 싱글톤 (CDN 캐시 공유)</span>
            </div>
            <div className="status-item">
              <span className="status-dot green"></span>
              <span>CORS 허용 (cors: true)</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Hook 동작 확인</h2>
          <p className="card-desc">
            이 카운터는 remote-dashboard의 useState Hook.<br />
            Import Map이 동일한 CDN React URL을 공유하여 싱글톤이 보장됨.
          </p>
          <div className="counter">
            <button className="counter-btn" onClick={() => setCount(c => c - 1)}>−</button>
            <span className="counter-value">{count}</span>
            <button className="counter-btn" onClick={() => setCount(c => c + 1)}>+</button>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">빌드 아키텍처</h2>
          <div className="code-block">
            <div className="code-line"><span className="code-comment">// dist 구조 (lib 모드)</span></div>
            <div className="code-line">remote-dashboard/dist/</div>
            <div className="code-line">└── <span className="highlight">dashboard.js</span> ← plain ES module</div>
            <div className="code-line"></div>
            <div className="code-line"><span className="code-comment">// importmap에서 참조</span></div>
            <div className="code-line">"remote-dashboard/Dashboard":</div>
            <div className="code-line">  "http://localhost:3002/dashboard.js"</div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard
