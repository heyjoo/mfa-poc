# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a Micro Frontend Architecture (MFA) proof-of-concept repository. It explores different MFA approaches in separate phases:

- **Phase 1 (`module-federation/`)** — Vite + `@originjs/vite-plugin-federation` + pnpm workspace (complete)
- **Phase 2** — Import Map approach (planned)

## Phase 1: Module Federation

### Commands

```bash
cd module-federation

# Install dependencies
pnpm install

# Run everything (build remotes → preview remotes → dev shell)
pnpm start

# Or step by step:
pnpm build:remotes      # Build remote-dashboard and remote-about
pnpm preview:remotes    # Serve remotes at :3002 and :3003
pnpm dev:shell          # Dev server for shell at :3000

# Build individual packages
pnpm -F remote-dashboard build
pnpm -F remote-about build
pnpm -F shell build
```

### Architecture

The monorepo has three Vite+React+TypeScript apps managed via pnpm workspace:

| App | Port | Role |
|-----|------|------|
| `shell` | 3000 | Host — Header, routing (react-router-dom), consumes remotes |
| `remote-dashboard` | 3002 | Remote — exposes `./Dashboard` component |
| `remote-about` | 3003 | Remote — exposes `./About` component |

**Routes (shell):**
- `/` — Home: Dashboard + About remotes together
- `/dashboard` — Dashboard remote only
- `/about` — About remote only

**Request flow at runtime:**
1. Shell loads → `main.tsx` fires `import('./bootstrap')` (dynamic import)
2. Module Federation intercepts, fetches `remoteEntry.js` from each remote
3. Shared module versions are negotiated (react, react-dom as singletons)
4. Only then does `bootstrap.tsx` execute → `ReactDOM.createRoot()`
5. When a route renders, `lazy()` triggers the actual component chunk fetch

### Key Patterns

**`main.tsx` → dynamic import is mandatory:**
The `main.tsx` entry point must use `import('./bootstrap')` (not a static import). This defers execution until Module Federation completes shared-module negotiation. Skipping this causes multiple React instances, breaking hooks.

**Remote lazy imports are centralized in `shell/src/remotes.ts`:**
Define all `lazy(() => import('remote_*/...'))` calls there and import from pages. Avoids duplicate dynamic import declarations.

**`shared` config — `singleton` type extension:**
`@originjs/vite-plugin-federation`'s `SharedConfig` omits `singleton`, `eager`, `strictVersion`. Add to each `vite.config.ts` (do not use `as any`):
```ts
declare module '@originjs/vite-plugin-federation' {
  interface SharedConfig {
    singleton?: boolean
    eager?: boolean
    strictVersion?: boolean
  }
}
```

**TypeScript remote module declarations:**
Remote modules are virtual and unknown to TypeScript. Declare them in `shell/src/types/remote.d.ts`. In production, use `@module-federation/typescript` to auto-generate these from remote apps.

**CSS imports:**
Files importing CSS must have `/// <reference types="vite/client" />` in `src/vite-env.d.ts`.

**Remote apps cannot use HMR:**
Remotes must be built and served via `vite preview`. Only the shell can use `vite dev`.

**All builds must target `esnext`:**
Module Federation relies on ES modules. Each `vite.config.ts` sets `build.target: 'esnext'`.
