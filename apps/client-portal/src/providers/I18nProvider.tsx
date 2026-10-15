"use client";

import * as React from "react";
import { NextIntlClientProvider } from "next-intl";
import esMessages from "../../messages/es.json";
import enMessages from "../../messages/en.json";

export const SUPPORTED_LOCALES = ["es", "en"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];

const messagesMap: Record<SupportedLocale, typeof esMessages> = {
  es: esMessages,
  en: enMessages,
};

interface I18nContextValue {
  readonly locale: SupportedLocale;
  readonly setLocale: (locale: SupportedLocale) => void;
}

const I18nContext = React.createContext<I18nContextValue | null>(null);

export const useAppLocale = (): I18nContextValue => {
  const context = React.useContext(I18nContext);
  if (!context) {
    throw new Error("useAppLocale must be used within an I18nProvider");
  }
  return context;
};

export interface I18nProviderProps {
  readonly children: React.ReactNode;
  readonly defaultLocale?: SupportedLocale;
}

/**
 * Proveedor de Internacionalización para el Portal de Cliente.
 * Integra `next-intl` con un contexto reactivo que permite alternar idiomas al instante.
 */
export function I18nProvider({
  children,
  defaultLocale = "es",
}: I18nProviderProps): React.ReactElement {
  const [locale, setLocale] = React.useState<SupportedLocale>(defaultLocale);

  const value = React.useMemo(() => ({ locale, setLocale }), [locale]);

  return (
    <I18nContext.Provider value={value}>
      <NextIntlClientProvider
        locale={locale}
        messages={messagesMap[locale]}
        timeZone="UTC"
      >
        {children}
      </NextIntlClientProvider>
    </I18nContext.Provider>
  );
}
