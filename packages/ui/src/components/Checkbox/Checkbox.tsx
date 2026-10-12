"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cva, type VariantProps } from "class-variance-authority";
import { Check } from "lucide-react";
import { cn } from "../../lib/utils";

export const checkboxVariants = cva(
  "peer shrink-0 rounded-[4px] border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed select-none flex items-center justify-center cursor-pointer",
  {
    variants: {
      size: {
        default: "size-[18px]",
        sm: "size-4",
        lg: "size-5",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

export interface CheckboxProps
  extends React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {}

/**
 * Componente Checkbox interactivo según especificaciones Figma de Titakin (6. Checkbox).
 * Utiliza tokens de diseño de Tailwind en lugar de valores hexadecimales literales.
 *
 * Estados Figma (Tokens):
 * - Default: Borde border-muted-foreground (--muted-foreground: #8D9AAF), fondo transparente
 * - Hover: Borde hover:border-brand-400 (--brand-400: #5AA7FF)
 * - Checked: Fondo bg-brand-500, Borde border-brand-500 (--brand-500: #2F80FF), Icono blanco
 * - Disabled: Borde disabled:border-border (--border: #243149), fondo disabled:bg-surface/50
 * - Checked Disabled: Fondo bg-border, Borde border-border, Icono text-muted-foreground
 */
export const Checkbox = React.forwardRef<
  React.ComponentRef<typeof CheckboxPrimitive.Root>,
  CheckboxProps
>(({ className, size, ...props }, ref): React.ReactElement => {
  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn(
        checkboxVariants({ size }),
        // Estado Default (Unchecked)
        "border-muted-foreground bg-transparent text-white",
        // Estado Hover
        "hover:border-brand-400",
        // Estado Checked
        "data-[state=checked]:bg-brand-500 data-[state=checked]:border-brand-500 data-[state=checked]:text-white",
        // Estado Disabled Unchecked
        "disabled:border-border disabled:bg-surface/50 disabled:hover:border-border",
        // Estado Checked Disabled
        "data-[state=checked]:disabled:bg-border data-[state=checked]:disabled:border-border data-[state=checked]:disabled:text-muted-foreground",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="flex items-center justify-center text-current">
        <Check
          className={cn(
            "stroke-[2.5]",
            size === "sm" && "size-3",
            size === "lg" && "size-4",
            (!size || size === "default") && "size-3.5",
          )}
          aria-hidden="true"
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Checkbox.displayName = "Checkbox";
