import type { Metadata } from "next";
import type { ReactElement, ReactNode } from "react";
import "@titakin/ui/styles/global.css";

export const metadata: Metadata = {
  title: "Titakin · MSSP Console",
  description: "Consola de administración MSSP de Titakin: gestión multi-tenant de clientes y alertas.",
};

interface RootLayoutProps {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): ReactElement {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
