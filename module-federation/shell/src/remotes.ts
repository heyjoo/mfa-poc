import { lazy } from 'react'

// Remote 컴포넌트를 한 곳에서 정의하여 중복 import 방지.
// lazy()는 컴포넌트가 실제로 렌더링될 때 해당 remoteEntry.js를 fetch함.
export const RemoteDashboard = lazy(() => import('remote_dashboard/Dashboard'))
export const RemoteAbout = lazy(() => import('remote_about/About'))
