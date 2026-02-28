import Dashboard from './components/Dashboard'

function App() {
  return (
    <div>
      <div style={{
        background: '#1e1e2e',
        borderBottom: '2px solid #10b981',
        padding: '0.75rem 2rem',
        fontFamily: 'monospace',
        fontSize: '0.875rem',
        color: '#6ee7b7',
      }}>
        remote-dashboard 개발 미리보기 — shell에서는 Dashboard 컴포넌트만 사용
      </div>
      <Dashboard />
    </div>
  )
}

export default App
