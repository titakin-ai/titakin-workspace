"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { Loader2 } from "lucide-react";
import { cn } from "../../lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-sans font-normal tracking-normal transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none select-none cursor-pointer disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-500 text-white hover:bg-brand-400 active:bg-brand-dark focus-visible:ring-brand-300 disabled:bg-border disabled:text-muted-foreground disabled:opacity-100 shadow-sm shadow-brand-500/15",
        secondary:
          "border border-border bg-transparent text-foreground hover:border-brand-400 hover:text-white active:border-border active:bg-surface/50 focus-visible:border-brand-400 focus-visible:ring-2 focus-visible:ring-brand-300 disabled:border-border/50 disabled:text-muted-foreground disabled:opacity-100 shadow-none",
        outline:
          "border border-brand-500 text-brand-300 hover:bg-brand-500/15 hover:border-brand-400 active:bg-brand-dark/30 disabled:border-border disabled:text-muted-foreground disabled:opacity-100",
        ghost:
          "text-foreground hover:bg-border hover:text-white active:bg-surface disabled:text-muted-foreground disabled:opacity-100",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80 focus-visible:ring-destructive/60 disabled:bg-border disabled:text-muted-foreground disabled:opacity-100 shadow-sm shadow-destructive/15",
        link:
          "text-brand-400 hover:text-brand-300 active:text-brand-dark underline-offset-4 hover:underline active:underline p-0 h-auto font-medium transition-colors duration-150 disabled:text-muted-foreground",
      },
      size: {
        default: "h-10 px-4 py-2 text-sm rounded-lg gap-2",
        sm: "h-8 px-3 text-xs rounded-md gap-1.5",
        lg: "h-11 px-6 text-base rounded-lg gap-2.5",
        icon: "size-10 rounded-lg p-0",
        "icon-sm": "size-8 rounded-md p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  readonly asChild?: boolean;
  readonly isLoading?: boolean;
}

/**
 * Componente interactivo de botón para Titakin UI según especificaciones Figma.
 *
 * Estilos y estados Figma:
 * - Default: #2F80FF con texto #FFFFFF
 * - Hover: #5AA7FF con texto #FFFFFF
 * - Pressed: #1457C5 con texto #FFFFFF
 * - Focus: #2F80FF con ring exterior #8BC2FF
 * - Disabled: #243149 con texto #8D9AAF
 * - Loading: #2F80FF con spinner #FFFFFF
 * - Tipografía: Inter regular (font-normal)
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      disabled,
      children,
      ...props
    },
    ref,
  ): React.ReactElement => {
    if (asChild) {
      return (
        <Slot
          ref={ref}
          className={cn(buttonVariants({ variant, size }), className)}
          aria-disabled={disabled || isLoading || undefined}
          {...props}
        >
          {children}
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        type={props.type ?? "button"}
        disabled={disabled || isLoading}
        aria-busy={isLoading || undefined}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {isLoading && <Loader2 className="size-4 animate-spin shrink-0 text-white" aria-hidden="true" />}
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

/**
 * Spinner componible para uso manual dentro de `Button` cuando se desea
 * control granular de la posición del loader o composición pura.
 */
export const ButtonSpinner = React.forwardRef<SVGSVGElement, React.ComponentPropsWithoutRef<typeof Loader2>>(
  ({ className, ...props }, ref): React.ReactElement => (
    <Loader2
      ref={ref}
      className={cn("size-4 animate-spin shrink-0", className)}
      aria-hidden="true"
      {...props}
    />
  ),
);

ButtonSpinner.displayName = "ButtonSpinner";
