/**
 * Remote Module 타입 선언
 * Import Map이 런타임에 동적으로 제공하는 가상 모듈의 타입 정의.
 * importmap의 키("remote-dashboard/Dashboard")와 정확히 일치해야 함.
 */

declare module 'remote-dashboard/Dashboard' {
  import { FC } from 'react'
  const Dashboard: FC
  export default Dashboard
}

declare module 'remote-about/About' {
  import { FC } from 'react'
  const About: FC
  export default About
}
