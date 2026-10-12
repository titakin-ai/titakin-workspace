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

        /* Tokens directos de Figma */
        brand: {
          500: token("brand-500"),
          400: token("brand-400"),
          dark: token("brand-dark"),
          300: token("brand-300"),
        },
        surface: {
          DEFAULT: token("surface"),
        },

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
        sans: [
          "Inter",
          "var(--font-sans, ui-sans-serif)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: ["var(--font-mono, ui-monospace)", "SFMono-Regular", "monospace"],
      },
    },
  },
  plugins: [],
};
