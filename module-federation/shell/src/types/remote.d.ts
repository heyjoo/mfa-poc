/**
 * Remote Module 타입 선언
 * 런타임에 Module Federation이 동적으로 제공하는 가상 모듈의 타입 정의.
 */

declare module 'remote_dashboard/Dashboard' {
  import { FC } from 'react'
  const Dashboard: FC
  export default Dashboard
}

declare module 'remote_about/About' {
  import { FC } from 'react'
  const About: FC
  export default About
}
