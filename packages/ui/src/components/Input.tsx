"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import { cn } from "../lib/utils";

export const inputVariants = cva(
  "flex h-10 w-full rounded-lg border bg-[#111A2B]/60 px-3.5 py-2 text-sm font-sans font-normal text-[#F4F7FB] placeholder:text-[#8D9AAF] transition-colors duration-150 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 disabled:text-[#8D9AAF]",
  {
    variants: {
      isError: {
        true: "border-[#FF5C6C] bg-[#FF5C6C]/10 text-[#F4F7FB] focus-visible:border-[#FF5C6C] focus-visible:ring-2 focus-visible:ring-[#FF5C6C]/30",
        false:
          "border-[#243149] hover:border-[#5AA7FF] focus-visible:border-[#2F80FF] focus-visible:ring-2 focus-visible:ring-[#2F80FF]/30",
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
 *
 * Estados:
 * - Default: Borde #243149, Placeholder #8D9AAF
 * - Hover: Borde #5AA7FF
 * - Focus: Borde #2F80FF con anillo exterior
 * - Filled: Texto #F4F7FB
 * - Error: Borde #FF5C6C, fondo sutil #FF5C6C/10
 * - Disabled: Borde #243149, texto #8D9AAF
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
    const defaultId = React.useId();
    const inputId = id ?? defaultId;
    const hasError = isError || Boolean(errorMessage);

    return (
      <div className={cn("flex w-full flex-col gap-1.5", wrapperClassName)}>
        <div className="relative flex w-full items-center">
          {leftIcon && (
            <span
              className={cn(
                "pointer-events-none absolute left-3 flex items-center justify-center text-[#8D9AAF] transition-colors",
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
              className="pointer-events-none absolute right-3 flex items-center justify-center text-[#FF5C6C]"
              aria-hidden="true"
            >
              <AlertCircle className="size-4" />
            </span>
          ) : (
            rightIcon && (
              <span
                className={cn(
                  "absolute right-3 flex items-center justify-center text-[#8D9AAF] transition-colors",
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
            className="text-xs font-normal text-[#FF5C6C] tracking-normal"
          >
            {errorMessage}
          </p>
        )}

        {!errorMessage && helperText && (
          <p
            id={`${inputId}-helper`}
            className="text-xs font-normal text-[#8D9AAF] tracking-normal"
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
        className="text-[#8D9AAF] hover:text-[#F4F7FB] transition-colors focus:outline-none"
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
