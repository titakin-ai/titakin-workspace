import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import { baseConfig } from "./base.mjs";

/**
 * React rules layered on top of the Titakin base guardrails.
 *
 * @type {import("typescript-eslint").ConfigArray}
 */
export const reactLibraryConfig = [
  ...baseConfig,
  {
    ...react.configs.flat.recommended,
    settings: { react: { version: "detect" } },
  },
  react.configs.flat["jsx-runtime"],
  {
    plugins: { "react-hooks": reactHooks },
    rules: reactHooks.configs.recommended.rules,
  },
  {
    languageOptions: {
      globals: { ...globals.browser },
    },
    rules: {
      // Prop contracts are enforced by TypeScript, not runtime PropTypes.
      "react/prop-types": "off",
    },
  },
  {
    // Storybook CSF and config files (main/preview) require a default export.
    files: ["**/*.stories.{ts,tsx}", "**/.storybook/*.{ts,tsx}"],
    rules: { "no-restricted-exports": "off" },
  },
];
