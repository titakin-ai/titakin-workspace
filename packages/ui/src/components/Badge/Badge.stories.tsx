import type { ReactElement } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge, BadgeDot, type BadgeProps } from "./Badge";

type Severity = NonNullable<BadgeProps["severity"]>;

const severityLabels: Readonly<Record<Severity, string>> = {
  default: "Primario (Default)",
  critical: "Crítico",
  high: "Alto",
  medium: "Medio",
  low: "Bajo",
  outline: "Outline (Neutro)",
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
      description: "Nivel de severidad para ciberseguridad.",
      table: { defaultValue: { summary: "default" } },
    },
    children: {
      control: "text",
    },
    className: {
      control: "text",
    },
    asChild: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { severity: "default", children: severityLabels.default },
};

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

export const Outline: Story = {
  args: { severity: "outline", children: severityLabels.outline },
};

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

export const WithDot: Story = {
  name: "Con Dot (Composición OCP)",
  args: { severity: "critical" },
  render: (args): ReactElement => (
    <Badge {...args}>
      <BadgeDot />
      {severityLabels[args.severity as Severity]}
    </Badge>
  ),
};

export const LogsTableStyle: Story = {
  name: "Estilo Tablas de Logs (Fondo transparente)",
  args: { severity: "high" },
  render: (args): ReactElement => (
    <Badge {...args} className="bg-transparent border-transparent">
      <BadgeDot />
      {severityLabels[args.severity as Severity]}
    </Badge>
  ),
};
