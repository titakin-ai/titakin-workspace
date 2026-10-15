import { nextJsConfig } from "@titakin/config/eslint/next";

export default [
  ...nextJsConfig,
  {
    files: ["src/i18n/request.ts", "next.config.ts"],
    rules: {
      "no-restricted-exports": "off",
    },
  },
];
