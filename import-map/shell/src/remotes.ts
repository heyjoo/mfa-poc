import { lazy } from 'react'

// Remote 컴포넌트를 한 곳에서 정의하여 중복 import 방지.
// Phase 1: 'remote_dashboard/Dashboard' (underscore, Module Federation 형식)
// Phase 2: 'remote-dashboard/Dashboard' (hyphen, importmap 키와 일치)
export const RemoteDashboard = lazy(() => import('remote-dashboard/Dashboard'))
export const RemoteAbout = lazy(() => import('remote-about/About'))
