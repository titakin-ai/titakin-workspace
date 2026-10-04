import type { Config } from "tailwindcss";

/**
 * Maps a CSS custom property holding raw HSL channels (e.g. `--primary: 243 75% 59%`)
 * to a Tailwind colour that still supports opacity modifiers (`bg-primary/50`).
 */
const token = (name: string): string => `hsl(var(--${name}) / <alpha-value>)`;

/**
 * Titakin design-system preset.
 *
 * `theme.colors` is REPLACED (not extended): Tailwind's static palette
 * (`bg-red-500`, `text-slate-400`…) does not exist in this project. Every colour
 * resolves to a CSS variable, which is what makes per-tenant and light/dark
 * theming possible at runtime without rebuilding CSS.
 */
export const titakinPreset: Partial<Config> = {
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",

      background: token("background"),
      foreground: token("foreground"),
      border: token("border"),
      input: token("input"),
      ring: token("ring"),

      primary: { DEFAULT: token("primary"), foreground: token("primary-foreground") },
      secondary: { DEFAULT: token("secondary"), foreground: token("secondary-foreground") },
      muted: { DEFAULT: token("muted"), foreground: token("muted-foreground") },
      accent: { DEFAULT: token("accent"), foreground: token("accent-foreground") },
      destructive: { DEFAULT: token("destructive"), foreground: token("destructive-foreground") },
      card: { DEFAULT: token("card"), foreground: token("card-foreground") },
      popover: { DEFAULT: token("popover"), foreground: token("popover-foreground") },

      severity: {
        critical: {
          DEFAULT: token("severity-critical"),
          foreground: token("severity-critical-foreground"),
        },
        high: { DEFAULT: token("severity-high"), foreground: token("severity-high-foreground") },
        medium: {
          DEFAULT: token("severity-medium"),
          foreground: token("severity-medium-foreground"),
        },
        low: { DEFAULT: token("severity-low"), foreground: token("severity-low-foreground") },
        info: { DEFAULT: token("severity-info"), foreground: token("severity-info-foreground") },
      },
    },
    extend: {
      borderColor: { DEFAULT: token("border") },
      ringColor: { DEFAULT: token("ring") },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};
