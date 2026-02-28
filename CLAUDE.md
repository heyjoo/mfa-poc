# MFA PoC

- Phase 1 `module-federation/` — Vite + `@originjs/vite-plugin-federation` + pnpm workspace ✅
- Phase 2 — Import Map (planned)

## Module Federation

| App | Port | Role |
|-----|------|------|
| `shell` | 3000 | Host — react-router-dom, Header |
| `remote-dashboard` | 3002 | exposes `./Dashboard` |
| `remote-about` | 3003 | exposes `./About` |

Routes: `/` (Dashboard + About) · `/dashboard` · `/about`

### Commands

```bash
cd module-federation
pnpm install
pnpm start                        # build:remotes → preview:remotes → dev:shell
pnpm -F <package> build|preview   # e.g. pnpm -F shell build
```

### Constraints

**`main.tsx` — dynamic import 유지, static import으로 변경 금지:**
`import('./bootstrap')` 는 MF 공유 모듈 협상이 완료된 후 React를 기동시킴. static import으로 변경 시 React 인스턴스 중복 → hooks 오류.

**`shared` singleton — `as any` 금지, module augmentation 사용:**
```ts
// 각 vite.config.ts 상단
declare module '@originjs/vite-plugin-federation' {
  interface SharedConfig { singleton?: boolean; eager?: boolean; strictVersion?: boolean }
}
```

**TypeScript remote 타입 선언:** `shell/src/types/remote.d.ts`

**Remote lazy import:** `shell/src/remotes.ts` 에 중앙화

**CSS import:** `src/vite-env.d.ts` 에 `/// <reference types="vite/client" />` 필요

**HMR:** remote는 `build` + `vite preview` 필수. shell만 `vite dev` 가능.

**Build target:** 모든 `vite.config.ts` 에 `build.target: 'esnext'`
