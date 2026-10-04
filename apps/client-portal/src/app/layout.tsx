import type { Metadata } from "next";
import type { ReactElement, ReactNode } from "react";
import "@titakin/ui/styles/global.css";

export const metadata: Metadata = {
  title: "Titakin · Client Portal",
  description: "Portal de cliente de Titakin: visibilidad de riesgos, hallazgos y postura de seguridad.",
};

interface RootLayoutProps {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): ReactElement {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
