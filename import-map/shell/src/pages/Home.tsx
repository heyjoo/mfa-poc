import { Suspense } from 'react'
import { RemoteDashboard, RemoteAbout } from '../remotes'
import './Home.css'

// Home: Dashboard와 About 두 remote를 한 페이지에 함께 노출
const Home = () => {
  return (
    <div className="home">
      <Suspense fallback={<div className="loading">Dashboard 로딩 중...</div>}>
        <RemoteDashboard />
      </Suspense>
      <div className="divider" />
      <Suspense fallback={<div className="loading">About 로딩 중...</div>}>
        <RemoteAbout />
      </Suspense>
    </div>
  )
}

export default Home
