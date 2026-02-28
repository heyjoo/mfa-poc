import './About.css'

const About = () => {
  return (
    <section className="about">
      <div className="about-header">
        <h1 className="about-title">About</h1>
        <div className="about-badge">
          <span>remote-about</span>
          <span className="port-badge">:3003</span>
        </div>
      </div>

      <div className="about-grid">
        <div className="card">
          <h2 className="card-title">이 프로젝트는</h2>
          <p className="card-desc">
            Micro Frontend Architecture(MFA)의 구현 방식을 직접 구축하며 학습하는 PoC입니다.
            각 UI 영역을 독립된 앱으로 분리하고, 런타임에 동적으로 조합합니다.
          </p>
        </div>

        <div className="card">
          <h2 className="card-title">Phase 1: Module Federation</h2>
          <div className="tech-list">
            {['Vite', '@originjs/vite-plugin-federation', 'TypeScript', 'pnpm workspace'].map(t => (
              <span key={t} className="tech-badge">{t}</span>
            ))}
          </div>
        </div>

        <div className="card">
          <h2 className="card-title">앱 구성</h2>
          <div className="app-list">
            {[
              { name: 'shell', port: '3000', role: 'Host — 라우팅 + Header' },
              { name: 'remote-dashboard', port: '3002', role: 'Dashboard UI' },
              { name: 'remote-about', port: '3003', role: 'About UI (현재)' },
            ].map(({ name, port, role }) => (
              <div key={name} className="app-item">
                <span className="app-name">{name}</span>
                <span className="app-port">:{port}</span>
                <span className="app-role">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
