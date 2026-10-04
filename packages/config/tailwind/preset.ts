import type { Config } from "tailwindcss";

const token = (name: string): string => `hsl(var(--${name}) / <alpha-value>)`;

export const titakinPreset: Partial<Config> = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: token("background"),
        foreground: token("foreground"),
        border: token("border"),
        input: token("input"),
        ring: token("ring"),

        primary: {
          DEFAULT: token("primary"),
          foreground: token("primary-foreground"),
        },
        secondary: {
          DEFAULT: token("secondary"),
          foreground: token("secondary-foreground"),
        },
        muted: {
          DEFAULT: token("muted"),
          foreground: token("muted-foreground"),
        },
        destructive: {
          DEFAULT: token("destructive"),
          foreground: token("destructive-foreground"),
        },
        warning: {
          DEFAULT: token("warning"),
          foreground: token("warning-foreground"),
        },
        caution: {
          DEFAULT: token("caution"),
          foreground: token("caution-foreground"),
        },
        success: {
          DEFAULT: token("success"),
          foreground: token("success-foreground"),
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans, ui-sans-serif)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono, ui-monospace)", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};
