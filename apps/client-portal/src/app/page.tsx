import type { ReactElement } from "react";
import { Badge, type BadgeProps } from "@titakin/ui";

interface Finding {
  readonly id: string;
  readonly title: string;
  readonly severity: NonNullable<BadgeProps["severity"]>;
  readonly label: string;
}

const findings: readonly Finding[] = [
  { id: "CVE-2024-3094", title: "Backdoor en xz-utils (liblzma)", severity: "critical", label: "Crítico" },
  { id: "CVE-2023-4966", title: "Citrix Bleed — fuga de sesión", severity: "high", label: "Alto" },
  { id: "CVE-2023-44487", title: "HTTP/2 Rapid Reset", severity: "medium", label: "Medio" },
  { id: "CVE-2022-0778", title: "OpenSSL bucle infinito en BN_mod_sqrt", severity: "low", label: "Bajo" },
];

export default function HomePage(): ReactElement {
  return (
    <main className="mx-auto flex max-w-3xl flex-col gap-8 px-6 py-16">
      <header className="flex flex-col gap-2">
        <p className="text-sm font-medium text-primary">Titakin · Client Portal</p>
        <h1 className="text-3xl font-bold tracking-tight">Hallazgos recientes</h1>
        <p className="text-muted-foreground">Scaffold de Fase 1 — validación del componente Badge.</p>
      </header>

      <ul className="divide-y rounded-lg border bg-card text-card-foreground">
        {findings.map((finding) => (
          <li key={finding.id} className="flex items-center justify-between gap-4 px-5 py-4">
            <div className="flex flex-col">
              <span className="font-medium">{finding.title}</span>
              <span className="font-mono text-xs text-muted-foreground">{finding.id}</span>
            </div>
            <Badge severity={finding.severity}>{finding.label}</Badge>
          </li>
        ))}
      </ul>
    </main>
  );
}
