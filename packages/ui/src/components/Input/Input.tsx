"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import { cn } from "../../lib/utils";

export const inputVariants = cva(
  "flex h-10 w-full rounded-lg border bg-surface/60 px-3.5 py-2 text-sm font-sans font-normal text-foreground placeholder:text-muted-foreground transition-colors duration-150 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 disabled:text-muted-foreground",
  {
    variants: {
      isError: {
        true: "border-destructive bg-destructive/10 text-foreground focus-visible:border-destructive focus-visible:ring-2 focus-visible:ring-destructive/30",
        false:
          "border-border hover:border-brand-400 focus-visible:border-brand-500 focus-visible:ring-2 focus-visible:ring-brand-500/30",
      },
    },
    defaultVariants: {
      isError: false,
    },
  },
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  readonly leftIcon?: React.ReactNode;
  readonly rightIcon?: React.ReactNode;
  readonly errorMessage?: string;
  readonly helperText?: string;
  readonly wrapperClassName?: string;
}

/**
 * Componente de entrada de texto según especificaciones Figma de Titakin.
 * Utiliza tokens semánticos de diseño en lugar de valores hexadecimales literales.
 *
 * Estados Figma (Tokens):
 * - Default: Borde border-border, Placeholder text-muted-foreground
 * - Hover: Borde hover:border-brand-400
 * - Focus: Borde focus-visible:border-brand-500 con anillo focus-visible:ring-brand-500/30
 * - Filled: Texto text-foreground
 * - Error: Borde border-destructive, fondo sutil bg-destructive/10
 * - Disabled: Borde border-border, texto text-muted-foreground
 */
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      wrapperClassName,
      isError = false,
      errorMessage,
      helperText,
      leftIcon,
      rightIcon,
      disabled,
      id,
      ...props
    },
    ref,
  ): React.ReactElement => {
    const generatedId = React.useId();
    const inputId = id ?? generatedId;
    const hasError = isError || Boolean(errorMessage);

    return (
      <div className={cn("flex flex-col w-full gap-1.5", wrapperClassName)}>
        <div className="relative flex items-center w-full">
          {leftIcon && (
            <span
              className={cn(
                "pointer-events-none absolute left-3.5 flex items-center justify-center text-muted-foreground transition-colors",
                disabled && "opacity-50",
              )}
              aria-hidden="true"
            >
              {leftIcon}
            </span>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={hasError ? "true" : undefined}
            aria-describedby={
              errorMessage
                ? `${inputId}-error`
                : helperText
                  ? `${inputId}-helper`
                  : undefined
            }
            className={cn(
              inputVariants({ isError: hasError }),
              leftIcon && "pl-10",
              (rightIcon || hasError) && "pr-10",
              className,
            )}
            {...props}
          />

          {hasError && !rightIcon ? (
            <span
              className="pointer-events-none absolute right-3 flex items-center justify-center text-destructive"
              aria-hidden="true"
            >
              <AlertCircle className="size-4" />
            </span>
          ) : (
            rightIcon && (
              <span
                className={cn(
                  "absolute right-3 flex items-center justify-center text-muted-foreground transition-colors",
                  disabled && "opacity-50",
                )}
              >
                {rightIcon}
              </span>
            )
          )}
        </div>

        {errorMessage && (
          <p
            id={`${inputId}-error`}
            role="alert"
            className="text-xs font-normal text-destructive tracking-normal"
          >
            {errorMessage}
          </p>
        )}

        {!errorMessage && helperText && (
          <p
            id={`${inputId}-helper`}
            className="text-xs font-normal text-muted-foreground tracking-normal"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export interface PasswordInputProps extends Omit<InputProps, "type"> {
  readonly showToggle?: boolean;
}

/**
 * Componente especializado de entrada de contraseña con botón de alternancia
 * de visibilidad (Ver / Ocultar) e icono de candado según Figma (4. Input - Contraseña).
 */
export const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ showToggle = true, rightIcon, ...props }, ref): React.ReactElement => {
    const [isVisible, setIsVisible] = React.useState<boolean>(false);

    const toggleVisibility = (): void => {
      setIsVisible((prev) => !prev);
    };

    const toggleButton = showToggle ? (
      <button
        type="button"
        tabIndex={-1}
        onClick={toggleVisibility}
        aria-label={isVisible ? "Ocultar contraseña" : "Ver contraseña"}
        className="text-muted-foreground hover:text-foreground transition-colors focus:outline-none"
      >
        {isVisible ? <Eye className="size-4" /> : <EyeOff className="size-4" />}
      </button>
    ) : null;

    return (
      <Input
        ref={ref}
        type={isVisible ? "text" : "password"}
        rightIcon={rightIcon ?? toggleButton}
        {...props}
      />
    );
  },
);

PasswordInput.displayName = "PasswordInput";
