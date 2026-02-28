import { Suspense } from 'react'
import { RemoteDashboard } from '../remotes'

const DashboardPage = () => {
  return (
    <Suspense fallback={<div style={{ padding: '4rem 2rem', textAlign: 'center', color: '#475569', fontFamily: 'monospace' }}>Dashboard 로딩 중...</div>}>
      <RemoteDashboard />
    </Suspense>
  )
}

export default DashboardPage
