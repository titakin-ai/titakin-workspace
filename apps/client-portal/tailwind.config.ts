import type { Config } from "tailwindcss";
import { titakinPreset } from "@titakin/config/tailwind/preset";

const config: Config = {
  presets: [titakinPreset],
  content: ["./src/**/*.{ts,tsx}", "../../packages/ui/src/**/*.{ts,tsx}"],
};

export default config;
