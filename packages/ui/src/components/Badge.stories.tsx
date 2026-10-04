import type { ReactElement } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, type BadgeProps } from "./Badge";

type Severity = NonNullable<BadgeProps["severity"]>;

const severityLabels: Readonly<Record<Severity, string>> = {
  critical: "Crítico",
  high: "Alto",
  medium: "Medio",
  low: "Bajo",
  info: "Info",
};

const severities = Object.keys(severityLabels) as Severity[];

const meta = {
  title: "Components/Badge",
  component: Badge,
  args: {
    severity: "critical",
    children: "Crítico",
  },
  argTypes: {
    severity: {
      control: "inline-radio",
      options: severities,
      description: "Nivel de severidad (escala cualitativa CVSS).",
      table: { defaultValue: { summary: "info" } },
    },
    children: {
      control: "text",
      description: "Contenido del badge: texto, iconos, contadores… (composición).",
    },
    className: {
      control: "text",
      description: "Clases adicionales; se fusionan con `cn` (gana la última).",
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          "Indicador presentacional de severidad. Extiende `HTMLAttributes<HTMLDivElement>`, " +
          "reenvía `ref` y obtiene sus colores exclusivamente de tokens CSS (`--severity-*`), " +
          "por lo que responde al tema claro/oscuro y al inquilino activo.",
      },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

/* ---------------------------------------------------------------- Severity variants */

export const Critical: Story = {
  args: { severity: "critical", children: severityLabels.critical },
};

export const High: Story = {
  args: { severity: "high", children: severityLabels.high },
};

export const Medium: Story = {
  args: { severity: "medium", children: severityLabels.medium },
};

export const Low: Story = {
  args: { severity: "low", children: severityLabels.low },
};

export const Info: Story = {
  args: { severity: "info", children: severityLabels.info },
};

/* ---------------------------------------------------------------- Overview */

export const AllSeverities: Story = {
  name: "Escala completa",
  parameters: { controls: { disable: true } },
  render: (): ReactElement => (
    <div className="flex flex-wrap items-center gap-2">
      {severities.map((severity) => (
        <Badge key={severity} severity={severity}>
          {severityLabels[severity]}
        </Badge>
      ))}
    </div>
  ),
};

/* ---------------------------------------------------------------- Composition (OCP) */

function ShieldAlertIcon(): ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  );
}

/** Icons are composed as `children` — no `hasLeftIcon`/`hasRightIcon` props. */
export const WithIcon: Story = {
  name: "Con icono (composición)",
  render: (args): ReactElement => (
    <Badge {...args}>
      <ShieldAlertIcon />
      {args.children}
    </Badge>
  ),
};

/** Counters and any other content are also plain children. */
export const WithCounter: Story = {
  name: "Con contador (composición)",
  args: { severity: "high" },
  render: (args): ReactElement => (
    <Badge {...args}>
      Alto
      <span className="rounded-sm bg-background/25 px-1 tabular-nums">12</span>
    </Badge>
  ),
};

/** `className` overrides are merged through `cn`, so conflicting utilities resolve cleanly. */
export const ClassNameOverride: Story = {
  name: "Override con className",
  args: { severity: "medium", children: "Medio", className: "rounded-full px-3" },
};
