"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

export const cardVariants = cva(
  "rounded-2xl border text-foreground transition-all duration-150",
  {
    variants: {
      variant: {
        default: "border-border bg-surface shadow-2xl",
        subtle: "border-border/60 bg-surface/70 shadow-lg backdrop-blur-sm",
        outline: "border-border bg-transparent shadow-none",
        interactive:
          "border-border bg-surface shadow-xl hover:border-brand-400 hover:shadow-2xl cursor-pointer",
      },
      padding: {
        none: "",
        sm: "p-4",
        default: "p-6 sm:p-8",
        lg: "p-8 sm:p-10",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "none",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  readonly asChild?: boolean;
}

/**
 * Contenedor estructural principal para tarjetas y modales en Titakin UI.
 * Implementa tokens de superficie, borde y sombra calibrados para tema oscuro (#0F2748).
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp
        ref={ref}
        className={cn(cardVariants({ variant, padding }), className)}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

export type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Cabecera de la tarjeta para alojar logos, títulos y descripciones.
 */
export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col gap-1.5 p-6 sm:p-8 pb-4 sm:pb-6", className)}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  readonly asChild?: boolean;
}

/**
 * Título semántico principal de la tarjeta.
 */
export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "h3";

    return (
      <Comp
        ref={ref}
        className={cn("text-xl sm:text-2xl font-bold tracking-tight text-foreground", className)}
        {...props}
      />
    );
  }
);
CardTitle.displayName = "CardTitle";

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  readonly asChild?: boolean;
}

/**
 * Texto descriptivo secundario situado bajo el título de la tarjeta.
 */
export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "p";

    return (
      <Comp
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
      />
    );
  }
);
CardDescription.displayName = "CardDescription";

export type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Cuerpo principal de la tarjeta para ubicar formularios, tablas o controles.
 */
export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("p-6 sm:p-8 pt-0", className)}
      {...props}
    />
  )
);
CardContent.displayName = "CardContent";

export type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * Pie de tarjeta destinado a botones de acción, enlaces y notas legales.
 */
export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex items-center p-6 sm:p-8 pt-0", className)}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";
