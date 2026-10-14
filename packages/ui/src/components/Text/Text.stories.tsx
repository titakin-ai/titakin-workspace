import type { ReactElement } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Text } from "./Text";
import { Input } from "../Input";

const meta = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Monitorea tu superficie de ataque en tiempo real con Titakín.",
    variant: "body",
    align: "left",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["lead", "body", "body-sm", "caption", "label", "code"],
      description: "Estilo y escala tipográfica del texto.",
      table: { defaultValue: { summary: "body" } },
    },
    color: {
      control: "select",
      options: ["default", "muted", "brand", "destructive", "success", "warning", "inherit"],
      description: "Color semántico según tokens de diseño.",
      table: { defaultValue: { summary: "default" } },
    },
    weight: {
      control: "inline-radio",
      options: ["regular", "medium", "semibold", "bold"],
      description: "Grosor tipográfico (Inter regular por defecto en cuerpo).",
    },
    align: {
      control: "inline-radio",
      options: ["left", "center", "right"],
      description: "Alineación horizontal del texto.",
      table: { defaultValue: { summary: "left" } },
    },
    as: {
      control: "select",
      options: ["p", "span", "div", "label", "small", "code", "strong", "em"],
      description: "Etiqueta HTML a renderizar cuando no se usa asChild.",
    },
    asChild: {
      control: "boolean",
      description: "Permite componer con elementos hijos usando Radix Slot.",
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Plataforma unificada de gestión de riesgos cibernéticos y postura de seguridad.",
    variant: "body",
  },
};

export const AllVariants: Story = {
  render: (): ReactElement => (
    <div className="flex flex-col gap-5 max-w-xl p-6 rounded-xl border border-border bg-surface/40">
      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
          lead · 16-18px
        </span>
        <Text variant="lead">
          Titakín automatiza la detección de vulnerabilidades y la gestión de cumplimiento normativo.
        </Text>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
          body · 14px (Predeterminado)
        </span>
        <Text variant="body">
          Introduce tu correo electrónico institucional para acceder a la consola MSSP de Titakín.
        </Text>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
          body-sm · 12px
        </span>
        <Text variant="body-sm">
          Al continuar, confirmas que aceptas la política de privacidad y condiciones del servicio.
        </Text>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
          caption · 12px muted
        </span>
        <Text variant="caption">Última sincronización de alertas: hace 3 minutos.</Text>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
          label · 14px medium
        </span>
        <Text variant="label">Correo corporativo</Text>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
          code · 12px mono
        </span>
        <div>
          <Text variant="code">npm install @titakin/ui</Text>
        </div>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: (): ReactElement => (
    <div className="flex flex-col gap-3 p-6 rounded-xl border border-border bg-surface/40">
      <Text color="default">Default · #F4F7FB (Foreground)</Text>
      <Text color="muted">Muted · #8D9AAF (Secundario / Ayuda)</Text>
      <Text color="brand">Brand · #2F80FF (Enlaces y resaltados)</Text>
      <Text color="destructive">Destructive · #FF5C6C (Errores y alertas críticas)</Text>
      <Text color="warning">Warning · #FAAD14 (Alertas de precaución)</Text>
      <Text color="success">Success · #20C997 (Acciones completadas con éxito)</Text>
    </div>
  ),
};

export const FormIntegration: Story = {
  render: (): ReactElement => (
    <div className="w-[340px] flex flex-col gap-1.5 p-6 rounded-xl border border-border bg-surface/60">
      <Text variant="label" htmlFor="user-email">
        Correo electrónico
      </Text>
      <Input id="user-email" placeholder="nombre@empresa.com" />
      <Text variant="caption">Te enviaremos un código de un solo uso para verificar tu identidad.</Text>
    </div>
  ),
};
