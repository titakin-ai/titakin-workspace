"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

export const headingVariants = cva("font-sans tracking-tight text-foreground", {
  variants: {
    size: {
      display: "text-4xl md:text-5xl font-extrabold tracking-tight",
      h1: "text-3xl font-bold tracking-tight",
      h2: "text-2xl font-bold tracking-tight",
      h3: "text-xl font-semibold tracking-tight",
      h4: "text-lg font-semibold tracking-tight",
      h5: "text-base font-semibold",
      h6: "text-sm font-semibold uppercase tracking-wider",
    },
    color: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      brand: "text-brand-500",
      destructive: "text-destructive",
      white: "text-white",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    size: "h2",
    color: "default",
    align: "left",
  },
});

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

const defaultTagMap: Record<NonNullable<VariantProps<typeof headingVariants>["size"]>, HeadingTag> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color">,
    VariantProps<typeof headingVariants> {
  readonly asChild?: boolean;
  readonly as?: HeadingTag;
}

/**
 * Componente Heading del Design System de Titakin.
 * Proporciona una jerarquía tipográfica uniforme para títulos y encabezados,
 * asegurando accesibilidad, SEO y soporte polimórfico mediante `asChild` o `as`.
 */
export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, size = "h2", color, weight, align, asChild = false, as, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={cn(headingVariants({ size, color, weight, align }), className)}
          {...props}
        />
      );
    }

    const Component: React.ElementType = as ?? (size ? defaultTagMap[size] : "h2");

    return (
      <Component
        ref={ref}
        className={cn(headingVariants({ size, color, weight, align }), className)}
        {...props}
      />
    );
  }
);
Heading.displayName = "Heading";
