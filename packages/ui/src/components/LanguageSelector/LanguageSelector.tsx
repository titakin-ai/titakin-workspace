"use client";

import * as React from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { Text } from "../Text";
import { cn } from "../../lib/utils";

export const languageSelectorVariants = cva(
  "inline-flex items-center gap-1.5 font-sans font-medium select-none transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/20 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        minimal:
          "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white bg-transparent",
        outline:
          "border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60 shadow-xs",
        ghost:
          "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 bg-transparent",
      },
      size: {
        sm: "text-xs py-1 px-2 rounded-md",
        md: "text-sm py-1.5 px-3 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "minimal",
      size: "sm",
    },
  }
);

export interface LanguageOption {
  readonly code: string;
  readonly label: string;
  readonly nativeLabel?: string;
}

export const DEFAULT_LANGUAGES: readonly LanguageOption[] = [
  { code: "es", label: "ES", nativeLabel: "Español" },
  { code: "en", label: "EN", nativeLabel: "English" },
] as const;

export interface LanguageSelectorProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "value" | "onChange">,
    VariantProps<typeof languageSelectorVariants> {
  readonly value?: string;
  readonly onValueChange?: (code: string) => void;
  readonly languages?: readonly LanguageOption[];
  readonly showNativeName?: boolean;
  readonly menuAlign?: "left" | "right";
  readonly className?: string;
}

/**
 * Selector de Idioma oficial de Titakín UI.
 * Soporta navegación por teclado, accesibilidad ARIA y opciones configurables.
 */
export const LanguageSelector = React.forwardRef<HTMLButtonElement, LanguageSelectorProps>(
  (
    {
      value = "es",
      onValueChange,
      languages = DEFAULT_LANGUAGES,
      variant = "minimal",
      size = "sm",
      showNativeName = false,
      menuAlign = "right",
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const listboxId = React.useId();

    const selectedOption =
      languages.find((lang) => lang.code.toLowerCase() === value.toLowerCase()) ??
      languages[0] ?? { code: value, label: value.toUpperCase() };

    // Cerrar al hacer clic fuera del componente
    React.useEffect(() => {
      if (!isOpen) return;

      const handleClickOutside = (event: MouseEvent): void => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      const handleEscape = (event: KeyboardEvent): void => {
        if (event.key === "Escape") {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      return (): void => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscape);
      };
    }, [isOpen]);

    const handleSelect = (code: string): void => {
      onValueChange?.(code);
      setIsOpen(false);
    };

    return (
      <div ref={containerRef} className="relative inline-block text-left">
        <button
          ref={ref}
          type="button"
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={isOpen ? listboxId : undefined}
          onClick={() => setIsOpen((prev) => !prev)}
          className={cn(languageSelectorVariants({ variant, size }), className)}
          {...props}
        >
          <Globe className="h-4 w-4 text-slate-400 dark:text-slate-500 shrink-0" />
          <Text
            as="span"
            variant="caption"
            className="font-medium text-inherit tracking-wide uppercase"
          >
            {showNativeName && selectedOption.nativeLabel
              ? selectedOption.nativeLabel
              : selectedOption.label}
          </Text>
          <ChevronDown
            className={cn(
              "h-3.5 w-3.5 text-slate-400 dark:text-slate-500 transition-transform duration-200 shrink-0",
              isOpen && "rotate-180"
            )}
          />
        </button>

        {isOpen && (
          <div
            id={listboxId}
            role="listbox"
            aria-label="Seleccionar idioma"
            className={cn(
              "absolute top-full mt-1.5 z-50 min-w-[130px] rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0D1F3C] p-1.5 shadow-xl shadow-slate-900/10 dark:shadow-black/40 focus:outline-none animate-in fade-in-0 zoom-in-95 duration-100",
              menuAlign === "right" ? "right-0" : "left-0"
            )}
          >
            {languages.map((lang) => {
              const isSelected =
                lang.code.toLowerCase() === value.toLowerCase();

              return (
                <button
                  key={lang.code}
                  type="button"
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(lang.code)}
                  className={cn(
                    "w-full flex items-center justify-between gap-3 px-2.5 py-1.5 text-xs rounded-lg transition-colors cursor-pointer text-left select-none font-medium",
                    isSelected
                      ? "bg-brand-500/10 text-brand-500 font-semibold dark:bg-brand-500/20 dark:text-brand-300"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span className="uppercase text-[11px] font-bold tracking-wider text-slate-400">
                      {lang.code}
                    </span>
                    <span>{lang.nativeLabel ?? lang.label}</span>
                  </div>
                  {isSelected && <Check className="h-3.5 w-3.5 text-brand-500 shrink-0" />}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }
);

LanguageSelector.displayName = "LanguageSelector";
