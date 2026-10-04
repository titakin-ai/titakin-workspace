import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";
import { Slot } from "@radix-ui/react-slot";

/*
 * NOTE: no "use client" directive on purpose. Badge is stateless, uses no hooks,
 * event handlers or DOM APIs, so it stays a React Server Component and ships zero JS.
 */

export const badgeVariants = cva(
  "inline-flex items-center rounded-md border border-transparent px-2.5 py-0.5 text-xs font-semibold font-sans tracking-tight transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      severity: {
        default: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
        critical: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
        high: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
        medium: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400",
        low: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400",
        outline: "text-foreground border-border",
      },
    },
    defaultVariants: {
      severity: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  readonly asChild?: boolean;
}

/**
 * Indicador presentacional de severidad.
 * Soporta el patrón `asChild` de Radix para polimorfismo.
 */
export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, severity, asChild = false, ...props }, ref): React.ReactElement => {
    const Comp = asChild ? Slot : "div";
    return <Comp ref={ref} className={cn(badgeVariants({ severity }), className)} {...props} />;
  },
);

Badge.displayName = "Badge";

/**
 * Componente componible para añadir un punto semántico (Dot) al Badge sin usar
 * props booleanas anti-patrón (como `withDot`), respetando el principio OCP.
 * Hereda automáticamente el color del texto del Badge padre (`bg-current`).
 */
export const BadgeDot = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref): React.ReactElement => (
    <span ref={ref} aria-hidden="true" className={cn("size-2 shrink-0 rounded-full bg-current", className)} {...props} />
  ),
);

BadgeDot.displayName = "BadgeDot";
