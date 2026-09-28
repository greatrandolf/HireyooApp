# Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v57.0.0/ before writing any code.

# AGENTS.md

## Purpose
Canonical project context for AI coding agents (Claude Code, Copilot, Codex, Cursor, etc). Keep this file as the single source of truth — other tool-specific files should import or reference it, not duplicate it.

## Tech Stack
- Expo (managed workflow)
- React Native
- React Navigation — Drawer containing Bottom Tabs
- Redux Toolkit + react-redux
- `rn-responsive-styles` for responsive styling

## Monorepo Structure
Workspace type: Yarn Workspaces or pnpm — keep ONE package manager across the repo, do not mix.

```
packages/
  ui/
    src/
      components/        # reusable UI, presentational only, no app logic or store coupling
  redux/
    src/
      auth/               # RTK slice
      transactions/        # RTK slice
src/
  navigation/
    navigators/           # Drawer > Bottom Tabs bootstrapping
    routes/               # typed route params, shared across navigators/screens
  screens/
    _components_/
    dashboard/
      home/
      transaction/
      account/
    auth/
      login/
      AuthNavigator.tsx
```

## Root-level Shared Dependencies
`expo`, `react-native`, `@react-navigation/native`, `@react-navigation/bottom-tabs`, `@react-navigation/drawer`, `@reduxjs/toolkit`, `react-redux`, `rn-responsive-styles`

Install native peers with `npx expo install` for SDK compatibility (e.g. `react-native-gesture-handler`, `react-native-reanimated`, `react-native-screens`, `@react-native-masked-view/masked-view`, `react-native-safe-area-context`).

## Conventions

### Packages
- `packages/ui`: reusable component library, small exported API surface (e.g. `Text`, `Button`, `Header`, `Card`) from `packages/ui/src/index.ts`.
- Keep presentational components in `packages/ui`; no direct app logic or store coupling.
- Prefer package imports for `packages/*` over relative imports.

### Navigation & Screens
- Navigation bootstrapping lives in `navigation/navigators` (Drawer containing Bottom Tabs).
- Route params are typed in `navigation/routes`, used across navigators and screens.
- `screens/*` stay focused on composition: import primitives from `packages/ui`, connect to state via hooks.
