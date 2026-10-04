import nextPlugin from "@next/eslint-plugin-next";
import { reactLibraryConfig } from "./react-library.mjs";

/**
 * Next.js (App Router) layer.
 *
 * @type {import("typescript-eslint").ConfigArray}
 */
export const nextJsConfig = [
  ...reactLibraryConfig,
  {
    plugins: { "@next/next": nextPlugin },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
  {
    // App Router file conventions are the only place where default exports are allowed.
    files: [
      "**/app/**/{page,layout,template,loading,error,global-error,not-found,default}.tsx",
      "**/app/**/{opengraph-image,twitter-image,icon,apple-icon}.tsx",
      "**/app/**/{sitemap,robots,manifest}.ts",
    ],
    rules: { "no-restricted-exports": "off" },
  },
];
