# AGENTS Guidelines for This Repository

This repository contains a Next.js application located in the root of this repository. When
working on the project interactively with an agent (e.g. the Codex CLI) please follow
the guidelines below so that the development experience – in particular Hot Module
Replacement (HMR) – continues to work smoothly.

## 1. Use the Development Server, **not** `pnpm build`

* **Always use `pnpm dev`** while iterating on the
  application.  This starts Next.js in development mode with hot-reload enabled.
* **Do _not_ run `pnpm build` inside the agent session.**  Running the production
  build command switches the `.next` folder to production assets which disables hot
  reload and can leave the development server in an inconsistent state.  If a
  production build is required, do it outside of the interactive agent workflow.

## 2. Keep Dependencies in Sync

If you add or update dependencies remember to:

1. Update the lockfile (`pnpm-lock.yaml`).
2. Re-start the development server so that Next.js picks up the changes.

## 3. Coding Conventions

* Prefer TypeScript (`.tsx`/`.ts`) for new components and utilities.
* Co-locate component-specific styles in the same folder as the component when
  practical.

## 4. Useful Commands Recap

| Command       | Purpose                                            |
| ------------- | -------------------------------------------------- |
| `pnpm dev`    | Start the Next.js dev server with HMR.             |
| `pnpm lint`   | Run ESLint checks.                                 |
| `pnpm test`   | Execute the test suite (if present).               |
| `pnpm build`  | **Production build – _do not run during agent sessions_** |

---

Following these practices ensures that the agent-assisted development workflow stays
fast and dependable.  When in doubt, restart the dev server rather than running the
production build.
