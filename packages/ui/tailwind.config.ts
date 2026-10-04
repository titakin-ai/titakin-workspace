import type { Config } from "tailwindcss";
import { titakinPreset } from "@titakin/config/tailwind/preset";

/**
 * Tailwind config for the UI library (Storybook / isolated builds).
 *
 * Theme tokens are injected through the shared preset, where every colour is
 * bound to a CSS variable declared in `src/styles/global.css`.
 * Consuming apps reuse the same preset and add this package's sources to `content`.
 */
const config: Config = {
  presets: [titakinPreset],
  content: ["./src/**/*.{ts,tsx}"],
};

export default config;
