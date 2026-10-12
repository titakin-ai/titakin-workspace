"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { Loader2 } from "lucide-react";
import { cn } from "../lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-sans font-normal tracking-normal transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8BC2FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F2748] disabled:pointer-events-none select-none cursor-pointer disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-[#2F80FF] text-white hover:bg-[#5AA7FF] active:bg-[#1457C5] focus-visible:ring-[#8BC2FF] disabled:bg-[#243149] disabled:text-[#8D9AAF] disabled:opacity-100 shadow-sm shadow-blue-500/15",
        secondary:
          "border border-[#243149] bg-transparent text-[#F4F7FB] hover:border-[#5AA7FF] hover:text-white active:border-[#1A2942] active:bg-[#1A2942]/30 focus-visible:border-[#5AA7FF] focus-visible:ring-2 focus-visible:ring-[#8BC2FF] disabled:border-[#243149]/50 disabled:text-[#8D9AAF] disabled:opacity-100 shadow-none",
        outline:
          "border border-[#2F80FF] text-[#8BC2FF] hover:bg-[#2F80FF]/15 hover:border-[#5AA7FF] active:bg-[#1457C5]/30 disabled:border-[#243149] disabled:text-[#8D9AAF] disabled:opacity-100",
        ghost:
          "text-[#F4F7FB] hover:bg-[#243149] hover:text-white active:bg-[#1A2942] disabled:text-[#8D9AAF] disabled:opacity-100",
        destructive:
          "bg-[#FF5C6C] text-white hover:bg-[#ff7582] active:bg-[#e04555] focus-visible:ring-[#FF5C6C]/60 disabled:bg-[#243149] disabled:text-[#8D9AAF] disabled:opacity-100 shadow-sm shadow-red-500/15",
        link:
          "text-[#8BC2FF] hover:text-[#5AA7FF] underline-offset-4 hover:underline p-0 h-auto font-normal disabled:text-[#8D9AAF]",
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
