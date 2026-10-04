import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Composes conditional class names and resolves Tailwind conflicts
 * (last one wins), so consumers can safely override component styles:
 *
 *   cn("px-2 bg-primary", isActive && "bg-accent", className)
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
