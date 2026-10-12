/**
 * Titakin Design System — Tokens oficiales de diseño según Figma.
 *
 * Fuente única de verdad tipada para colores, tipografía, bordes y espaciados.
 */

export const tokens = {
  colors: {
    brand: {
      /** Primario: Acciones principales (#2F80FF) */
      500: "#2F80FF",
      /** Hover: Estado sobre elementos interactivos (#5AA7FF) */
      400: "#5AA7FF",
      /** Pressed: Estado activo / presionado (#1457C5) */
      dark: "#1457C5",
      /** Focus Ring / Acento claro: Anillos de foco (#8BC2FF) */
      300: "#8BC2FF",
    },
    surface: {
      /** Superficie de tarjetas e inputs (#111A2B) */
      default: "#111A2B",
      /** Fondo base oscuro Figma (#0F2748) */
      darkBase: "#0F2748",
    },
    neutral: {
      /** Borde principal y estados disabled (#243149) */
      border: "#243149",
      /** Borde secundario / texto deshabilitado (#8D9AAF) */
      muted: "#8D9AAF",
      /** Texto de alto contraste sobre fondo oscuro (#F4F7FB) */
      foreground: "#F4F7FB",
      /** Blanco puro (#FFFFFF) */
      white: "#FFFFFF",
    },
    state: {
      /** Error / destructivo (#FF5C6C) */
      destructive: "#FF5C6C",
      /** Éxito (#20C997) */
      success: "#20C997",
      /** Advertencia (#FAAD14) */
      warning: "#FAAD14",
    },
  },
  typography: {
    fontFamily: {
      sans: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: 'ui-monospace, Menlo, Monaco, "Roboto Mono", monospace',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  radii: {
    sm: "4px",
    md: "6px",
    lg: "8px",
    xl: "12px",
    full: "9999px",
  },
} as const;

export type Tokens = typeof tokens;
export type BrandColor = keyof typeof tokens.colors.brand;
