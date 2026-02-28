# MFA PoC

MFA(Micro Frontend Architecture) 두 가지 구현 방식을 직접 만들어보며 비교하는 학습 프로젝트.

## 계획

| Phase | 방식 | 상태 |
|-------|------|------|
| 1 | Module Federation (`@originjs/vite-plugin-federation`) | ✅ 완료 |
| 2 | Import Map | 🔜 예정 |

두 방식을 같은 앱 구조로 구현해서 차이를 체감하는 게 목표.

---

## Phase 1: Module Federation

shell(host)이 runtime에 remote 앱들을 동적으로 불러오는 구조.

```
shell :3000
├── /            → Dashboard + About
├── /dashboard   → Dashboard
└── /about       → About

remote-dashboard :3002   →  Dashboard 컴포넌트 제공
remote-about     :3003   →  About 컴포넌트 제공
```

### 실행

```bash
cd module-federation
pnpm install
pnpm start
```

### 핵심 학습 포인트

- **bootstrap 패턴** — `main.tsx`가 `import('./bootstrap')`로 시작하는 이유: MF가 공유 모듈 버전을 협상한 뒤에 React가 뜨도록 보장
- **singleton 공유** — 여러 remote가 같은 React 인스턴스를 쓰지 않으면 hook이 깨짐
- **HMR 제약** — remote는 반드시 `build` 후 `preview`로 실행 (dev 모드 불가)
- **remoteEntry.js** — runtime에 fetch되는 진입점. 네트워크 탭에서 확인 가능

---

## Phase 2: Import Map (예정)

브라우저 네이티브 기능으로 외부 모듈 URL을 매핑하는 방식. Phase 1과 비교해서 빌드 도구 의존도, 런타임 동작, DX 차이를 확인할 예정.
