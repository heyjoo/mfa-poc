import { Suspense } from 'react'
import { RemoteAbout } from '../remotes'

const AboutPage = () => {
  return (
    <Suspense fallback={<div style={{ padding: '4rem 2rem', textAlign: 'center', color: '#475569', fontFamily: 'monospace' }}>About 로딩 중...</div>}>
      <RemoteAbout />
    </Suspense>
  )
}

export default AboutPage
