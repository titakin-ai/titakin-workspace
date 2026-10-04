---
name: Monorepo Caching & Dev Servers
description: Rules for handling dev servers and avoiding cache issues when modifying shared monorepo configurations.
---

# Monorepo Caching & Dev Servers

**CRITICAL BEHAVIORAL RULE:**

Due to aggressive caching in Turborepo and Vite, changes to shared packages (like `@titakin/config`) often do not trigger HMR (Hot Module Replacement) in running dev servers of other packages (like Storybook in `packages/ui` or Next.js apps).

To prevent the user from seeing stale UI and thinking the code is broken:

1. **Proactive Restarts:** Whenever you modify shared configurations (`tailwind.config.ts`, `preset.ts`, `global.css`, `postcss.config.js`), you **MUST** proactively use the `manage_task` tool to kill and restart any running background servers (`pnpm dev`, `pnpm storybook`).
2. **Internal Validation:** If you change Tailwind classes, you should verify the CSS compiles correctly internally (e.g., running a quick typecheck or build) before assuming the visual output is correct.
3. **Inform the User:** Always inform the user if you restarted a server so they know to perform a Hard Refresh in their browser.
