import About from './components/About'

function App() {
  return (
    <div>
      <div style={{
        background: '#1e1e2e',
        borderBottom: '2px solid #f59e0b',
        padding: '0.75rem 2rem',
        fontFamily: 'monospace',
        fontSize: '0.875rem',
        color: '#fcd34d',
      }}>
        remote-about 개발 미리보기 — shell에서는 About 컴포넌트만 사용
      </div>
      <About />
    </div>
  )
}

export default App
