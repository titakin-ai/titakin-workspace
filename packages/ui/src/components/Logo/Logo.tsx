"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

export const symbolVariants = cva("shrink-0 transition-colors duration-150", {
  variants: {
    size: {
      xs: "h-4 w-4",
      sm: "h-6 w-6",
      md: "h-8 w-8",
      lg: "h-10 w-10",
      xl: "h-12 w-12",
      "2xl": "h-16 w-16",
    },
    color: {
      brand: "text-brand-500",
      white: "text-white",
      muted: "text-muted-foreground",
      current: "text-current",
    },
  },
  defaultVariants: {
    size: "md",
    color: "brand",
  },
});

export const logoVariants = cva("inline-flex items-center gap-2.5 select-none", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface TitakinSymbolProps
  extends Omit<React.SVGAttributes<SVGSVGElement>, "color">,
    VariantProps<typeof symbolVariants> {}

/**
 * Isotipo vectorial oficial de Titakin (marca de 4 nodos).
 * Renderiza el SVG escalable con fidelidad matemática al diseño de marca.
 */
export const TitakinSymbol = React.forwardRef<SVGSVGElement, TitakinSymbolProps>(
  ({ size, color, className, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 126 126"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Titakin"
        className={cn(symbolVariants({ size, color }), className)}
        {...props}
      >
        {/* Trazos conectores de la constelación */}
        <line
          x1="21"
          y1="21"
          x2="105"
          y2="21"
          stroke="currentColor"
          strokeWidth="10"
        />
        <line
          x1="21"
          y1="21"
          x2="21"
          y2="105"
          stroke="currentColor"
          strokeWidth="10"
        />
        <line
          x1="21"
          y1="105"
          x2="105"
          y2="21"
          stroke="currentColor"
          strokeWidth="10"
        />

        {/* Nodos circulares */}
        <circle cx="21" cy="21" r="21" fill="currentColor" />
        <circle cx="105" cy="21" r="21" fill="currentColor" />
        <circle cx="21" cy="105" r="21" fill="currentColor" />
        <circle cx="105" cy="105" r="21" fill="currentColor" />
      </svg>
    );
  }
);
TitakinSymbol.displayName = "TitakinSymbol";

export interface LogoProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color">,
    VariantProps<typeof logoVariants> {
  readonly variant?: "symbol" | "full";
  readonly color?: "brand" | "white" | "muted" | "current";
  readonly textClassName?: string;
  readonly label?: string;
}

/**
 * Componente Logo del Design System de Titakin.
 * Permite renderizar tanto el símbolo aislado (`variant="symbol"`)
 * como la versión completa con el logotipo tipográfico (`variant="full"`).
 */
export const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  (
    {
      variant = "symbol",
      size = "md",
      color = "brand",
      className,
      textClassName,
      label = "Titakín",
      ...props
    },
    ref
  ) => {
    if (variant === "symbol") {
      return (
        <div
          ref={ref}
          className={cn("inline-flex items-center justify-center shrink-0", className)}
          {...props}
        >
          <TitakinSymbol size={size} color={color} />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn(logoVariants({ size }), className)}
        {...props}
      >
        <TitakinSymbol size={size} color={color} />
        <span
          className={cn(
            "font-sans font-semibold tracking-tight text-foreground select-none",
            size === "xs" && "text-xs",
            size === "sm" && "text-sm",
            size === "md" && "text-base",
            size === "lg" && "text-lg",
            size === "xl" && "text-xl",
            size === "2xl" && "text-2xl",
            textClassName
          )}
        >
          {label}
        </span>
      </div>
    );
  }
);
Logo.displayName = "Logo";
