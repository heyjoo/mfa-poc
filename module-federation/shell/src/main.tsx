/**
 * bootstrap.tsx 패턴 - Module Federation의 핵심
 *
 * 왜 동적 import가 필요한가?
 *
 * Module Federation은 런타임에 shared 모듈을 "협상(negotiate)"함:
 * 1. shell의 remoteEntry를 로드
 * 2. remote_header의 remoteEntry를 fetch (http://localhost:3001/assets/remoteEntry.js)
 * 3. remote_dashboard의 remoteEntry를 fetch (http://localhost:3002/assets/remoteEntry.js)
 * 4. 각 앱이 선언한 shared 버전을 비교하여 최적의 단일 인스턴스 결정
 * 5. 협상 완료 후 실제 컴포넌트 코드 실행
 *
 * 만약 동기 import라면 (즉, 이 파일에 직접 ReactDOM.render를 작성하면):
 * → 협상 완료 전에 React가 초기화 → 각 remote가 별도 React 인스턴스 사용
 * → useState 등 Hook이 "규칙 위반" 오류 발생
 *
 * 동적 import(() => ...) 사용 시:
 * → 이 파일이 먼저 파싱됨 (실행은 아직 안 됨)
 * → Module Federation이 공유 모듈 협상을 완료함
 * → 그 다음에 bootstrap.tsx가 실행됨 → 안전
 */
import('./bootstrap')
