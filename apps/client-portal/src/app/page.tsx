"use client";

import * as React from "react";
import { Login, LoginDark } from "@/features/auth";

export default function LoginPage(): React.ReactElement {
  const [variant, setVariant] = React.useState<"dark" | "light">("dark");

  return (
    <div className="relative min-h-screen">
      {/* Switcher flotante para alternar y comparar ambas versiones en vivo */}
      <div
        role="group"
        aria-label="Selector de versión de Login"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center p-1 rounded-full bg-slate-950/90 border border-slate-700/70 shadow-2xl backdrop-blur-md text-xs"
      >
        <button
          type="button"
          onClick={() => setVariant("dark")}
          className={`px-4 py-1.5 rounded-full font-medium transition-all ${
            variant === "dark"
              ? "bg-brand-500 text-white shadow-md font-semibold"
              : "text-slate-400 hover:text-white"
          }`}
        >
          Versión 2: Card Oscuro (Titakín)
        </button>
        <button
          type="button"
          onClick={() => setVariant("light")}
          className={`px-4 py-1.5 rounded-full font-medium transition-all ${
            variant === "light"
              ? "bg-white text-slate-900 shadow-md font-semibold"
              : "text-slate-400 hover:text-white"
          }`}
        >
          Versión 1: Panel Blanco (TITAKIN)
        </button>
      </div>

      {variant === "dark" ? <LoginDark /> : <Login />}
    </div>
  );
}
