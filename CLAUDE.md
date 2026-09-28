# CLAUDE.md

@AGENTS.md

## Claude Code Specific

### Behavior
- Prefer minimal, well-scoped patches over broad rewrites — this mirrors the PR review expectations in AGENTS.md.
- When touching `packages/redux/*`, always check for the `ReduxProvider` wiring at the app root before assuming a plain `react-redux` `Provider` — this is a common source of bugs in this repo.
- When adding a new screen, follow the existing composition pattern: pull primitives from `packages/ui`, connect state via hooks, keep the screen file itself thin.

### Before running native-related commands
- Always run `npx expo install <package>` instead of `npm install <package>` for anything touching native modules, to keep SDK compatibility.
- If asked to debug a build issue, check the Troubleshooting section in AGENTS.md first before proposing a fresh `node_modules` wipe.

### Do not
- Do not edit `android/`, `ios/`, CI config, `Info.plist`, or keystores without explicit confirmation from the user first.
- Do not introduce a second state-management pattern alongside Redux Toolkit.
- Do not use `react-redux`'s `Provider` directly — always `ReduxProvider` from `@hireyooapp/redux`.