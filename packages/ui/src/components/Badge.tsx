import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

import { Slot } from "@radix-ui/react-slot";

/*
 * NOTE: no "use client" directive on purpose. Badge is stateless, uses no hooks,
 * event handlers or DOM APIs, so it stays a React Server Component and ships zero JS.
 * Interactive components (Radix primitives, hooks, DOM APIs) MUST start with "use client".
 */

/**
 * Severity scale aligned with CVSS qualitative ratings.
 * Colours come exclusively from semantic CSS-variable tokens (`--severity-*`).
 */
export const badgeVariants = cva(
  [
    "inline-flex items-center gap-1 whitespace-nowrap rounded-md border border-transparent",
    "px-2 py-0.5 text-xs font-semibold uppercase tracking-wide",
    "transition-colors [&>svg]:size-3 [&>svg]:shrink-0",
  ],
  {
    variants: {
      severity: {
        critical: "bg-severity-critical text-severity-critical-foreground",
        high: "bg-severity-high text-severity-high-foreground",
        medium: "bg-severity-medium text-severity-medium-foreground",
        low: "bg-severity-low text-severity-low-foreground",
        info: "bg-severity-info text-severity-info-foreground",
      },
    },
    defaultVariants: {
      severity: "info",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  readonly asChild?: boolean;
}

/**
 * Presentational severity indicator.
 *
 * Open for extension through composition (icons, counters… as `children`)
 * and `className` overrides; closed for modification (no boolean config props).
 * Supports the Radix `asChild` pattern to change the rendered element.
 *
 * @example
 * <Badge severity="critical">
 *   <ShieldAlert aria-hidden />
 *   Crítico
 * </Badge>
 */
export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, severity, asChild = false, ...props }, ref): React.ReactElement => {
    const Comp = asChild ? Slot : "div";
    return <Comp ref={ref} className={cn(badgeVariants({ severity }), className)} {...props} />;
  },
);

Badge.displayName = "Badge";
