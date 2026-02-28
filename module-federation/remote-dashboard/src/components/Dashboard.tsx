import { useState } from 'react'
import './Dashboard.css'

// Dashboard 컴포넌트: React Hook(useState) 사용
// singleton: true 설정 덕분에 shell과 동일한 React 인스턴스를 사용하므로 Hook이 정상 동작
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
          <h2 className="card-title">Module Federation 상태</h2>
          <div className="status-list">
            <div className="status-item">
              <span className="status-dot green"></span>
              <span>remoteEntry.js 로드됨</span>
            </div>
            <div className="status-item">
              <span className="status-dot green"></span>
              <span>React 싱글톤 인스턴스 공유</span>
            </div>
            <div className="status-item">
              <span className="status-dot green"></span>
              <span>런타임 동적 로드 성공</span>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">Hook 동작 확인</h2>
          <p className="card-desc">
            이 카운터는 remote-dashboard의 useState Hook.<br />
            singleton React 인스턴스 공유가 올바르게 작동하면 정상 동작함.
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
            <div className="code-line"><span className="code-comment">// dist 구조</span></div>
            <div className="code-line">remote-dashboard/dist/</div>
            <div className="code-line">├── assets/</div>
            <div className="code-line">│   ├── <span className="highlight">remoteEntry.js</span> ← 진입점</div>
            <div className="code-line">│   └── Dashboard.xxxx.js</div>
            <div className="code-line">└── index.html</div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard
