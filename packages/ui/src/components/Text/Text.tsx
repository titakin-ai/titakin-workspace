"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

export const textVariants = cva("font-sans text-foreground", {
  variants: {
    variant: {
      lead: "text-base md:text-lg text-muted-foreground font-normal leading-relaxed",
      body: "text-sm font-normal leading-normal",
      "body-sm": "text-xs font-normal leading-normal",
      caption: "text-xs text-muted-foreground font-normal leading-tight",
      label: "text-sm font-medium text-foreground leading-none select-none",
      code: "font-mono text-xs bg-surface/80 px-1.5 py-0.5 rounded border border-border text-foreground inline-block",
    },
    color: {
      default: "text-foreground",
      muted: "text-muted-foreground",
      brand: "text-brand-500",
      destructive: "text-destructive",
      success: "text-success",
      warning: "text-warning",
      inherit: "text-inherit",
    },
    weight: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    variant: "body",
    align: "left",
  },
});

type TextTag = "p" | "span" | "div" | "label" | "small" | "code" | "strong" | "em";

const defaultTagMap: Record<NonNullable<VariantProps<typeof textVariants>["variant"]>, TextTag> = {
  lead: "p",
  body: "p",
  "body-sm": "p",
  caption: "span",
  label: "label",
  code: "code",
};

export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, "color">,
    VariantProps<typeof textVariants> {
  readonly asChild?: boolean;
  readonly as?: TextTag;
  readonly htmlFor?: string;
}

/**
 * Componente Text del Design System de Titakin.
 * Controla la escala y jerarquía de párrafos, etiquetas, leyendas y micro-copias
 * en base a tokens semánticos de Figma y soporte polimórfico.
 */
export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant = "body", color, weight, align, asChild = false, as, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={cn(textVariants({ variant, color, weight, align }), className)}
          {...props}
        />
      );
    }

    const Component = (as ?? (variant ? defaultTagMap[variant] : "p")) as "p";

    return (
      <Component
        ref={ref}
        className={cn(textVariants({ variant, color, weight, align }), className)}
        {...props}
      />
    );
  }
);
Text.displayName = "Text";
