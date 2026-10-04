import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

/**
 * Titakin engineering guardrails, enforced at lint time:
 *  - Zero `any`.
 *  - Interfaces without the Hungarian "I" prefix (`BadgeProps`, never `IBadgeProps`).
 *  - Explicit return types on functions and custom hooks.
 *  - Named exports only (framework-mandated files are whitelisted below).
 *
 * @type {import("typescript-eslint").ConfigArray}
 */
export const baseConfig = tseslint.config(
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/.turbo/**",
      "**/dist/**",
      "**/storybook-static/**",
      "**/next-env.d.ts",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.node },
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-function-return-type": [
        "error",
        { allowTypedFunctionExpressions: true, allowHigherOrderFunctions: true },
      ],
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "interface",
          format: ["PascalCase"],
          custom: { regex: "^I[A-Z]", match: false },
        },
        { selector: "typeAlias", format: ["PascalCase"] },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "no-restricted-exports": [
        "error",
        {
          restrictDefaultExports: {
            direct: true,
            named: true,
            defaultFrom: true,
            namedFrom: true,
            namespaceFrom: true,
          },
        },
      ],
    },
  },
  {
    // Tooling config files (next, tailwind, postcss, eslint…) are required to default-export.
    files: ["**/*.config.{js,mjs,cjs,ts,mts}"],
    rules: { "no-restricted-exports": "off" },
  },
);
