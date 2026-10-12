---
name: Engineering Standards & SOLID
description: Architectural and code quality guidelines enforcing SOLID principles and advanced clean code practices for the Titakin monorepo.
---

# Engineering Standards & SOLID Principles

**CRITICAL RULE:** All generated code in this repository MUST adhere strictly to the following advanced engineering practices and SOLID principles. 

## 1. Strict Typing (TypeScript)
- **Zero Tolerance for `any`:** Never use `any`. Always type explicitly or use generics/`unknown` where absolutely necessary.
- **Interface Naming:** Do NOT use the Hungarian "I" prefix for interfaces (e.g., use `BadgeProps`, never `IBadgeProps`).
- **Explicit Returns:** Explicitly type the return value of all functions, components, and custom hooks.

## 2. SOLID Principles in UI & Components
- **Liskov Substitution Principle (LSP):** Base component interfaces MUST ALWAYS extend the corresponding native HTML attributes (e.g., `interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>`).
- **Single Responsibility (SRP) & Open/Closed Principle (OCP):**
  - UI components (especially in `packages/ui`) must be purely presentational (Dumb Components).
  - Favor **Composition** over adding multiple boolean configuration props (e.g., avoid anti-patterns like `hasLeftIcon`, `hasRightIcon`). Components should be open for extension (via composition) but closed for modification.
  - **Radix `asChild` Pattern:** For polymorphic components, ALWAYS implement the `asChild` boolean prop using `@radix-ui/react-slot` (`Slot`). This allows consumers to change the underlying HTML element while maintaining the component's styles and behavior, perfectly adhering to the Open/Closed Principle.

## 3. Inflexible Component Structure
- **Folder per Component (Colocation):** Each component in `packages/ui/src/components/` MUST live in its own dedicated directory containing its implementation, Storybook stories, and a barrel `index.ts` (e.g., `src/components/Badge/{Badge.tsx, Badge.stories.tsx, index.ts}`).
- **Refs:** It is MANDATORY to use `React.forwardRef` in all exposed DOM components.
- **Exports:** Use EXCLUSIVELY named exports. `export default` is strictly prohibited (unless explicitly required by a framework convention like Next.js pages/layouts or Storybook files).
- **Variants:** Manage component variants strictly using `class-variance-authority` (`cva`).
- **Class Composition:** Dynamic class concatenation must exclusively go through a `cn` utility (combining `clsx` and `tailwind-merge`). Direct string interpolation for Tailwind classes is forbidden.
- **Storybook & Docs Synchronization (MANDATORY):** 
  - EVERY UI component created or updated in `packages/ui` MUST be accompanied by its corresponding `.stories.tsx` file documenting all its variants, sizes, and states.
  - **Docs Section Up-to-Date:** The Storybook Docs view (`autodocs`) MUST be kept strictly in sync with the component's latest props, variants, and Figma specifications (`argTypes`, descriptions, default values, and real-world examples).
  - **Docs Theme & Visual Integrity:** Ensure that the Docs tab correctly renders all component variants against the design tokens (Dark Theme `#0F2748`), with full text contrast and without any rogue wrapper borders, ensuring that Docs always mirrors the true, active state of the component library.

## 4. Next.js Compatibility
- **"use client" Directive:** Any component in `packages/ui` that uses interactivity, state, or DOM APIs (including Radix UI primitives) MUST include the `"use client"` directive on the very first line. Stateless server components must omit it.
