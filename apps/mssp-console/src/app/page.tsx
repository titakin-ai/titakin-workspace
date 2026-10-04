import type { ReactElement } from "react";
import { Badge, type BadgeProps } from "@titakin/ui";

type Severity = NonNullable<BadgeProps["severity"]>;

interface TenantSummary {
  readonly slug: string;
  readonly name: string;
  readonly topSeverity: Severity;
  readonly openAlerts: number;
}

const severityLabel: Readonly<Record<Severity, string>> = {
  critical: "Crítico",
  high: "Alto",
  medium: "Medio",
  low: "Bajo",
  info: "Info",
};

const tenants: readonly TenantSummary[] = [
  { slug: "acme", name: "Acme Corp", topSeverity: "critical", openAlerts: 14 },
  { slug: "globex", name: "Globex Bank", topSeverity: "high", openAlerts: 9 },
  { slug: "initech", name: "Initech Health", topSeverity: "medium", openAlerts: 4 },
  { slug: "umbrella", name: "Umbrella Retail", topSeverity: "low", openAlerts: 1 },
];

export default function ConsolePage(): ReactElement {
  return (
    <main className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-16">
      <header className="flex flex-col gap-2">
        <p className="text-sm font-medium text-primary">Titakin · MSSP Console</p>
        <h1 className="text-3xl font-bold tracking-tight">Postura por tenant</h1>
        <p className="text-muted-foreground">Scaffold de Fase 1 — Badge en modo oscuro.</p>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2">
        {tenants.map((tenant) => (
          <li
            key={tenant.slug}
            className="flex flex-col gap-3 rounded-lg border bg-card p-5 text-card-foreground"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="font-semibold">{tenant.name}</span>
              <Badge severity={tenant.topSeverity}>{severityLabel[tenant.topSeverity]}</Badge>
            </div>
            <span className="text-sm text-muted-foreground">
              {tenant.openAlerts} alertas abiertas
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
