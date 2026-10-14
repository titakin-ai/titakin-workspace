import type { ReactElement } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from "./Heading";

const meta = {
  title: "Components/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Bienvenido a Titakín",
    size: "h2",
    color: "default",
    align: "left",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["display", "h1", "h2", "h3", "h4", "h5", "h6"],
      description: "Escala visual del encabezado (de display a h6).",
      table: { defaultValue: { summary: "h2" } },
    },
    color: {
      control: "inline-radio",
      options: ["default", "muted", "brand", "destructive", "white"],
      description: "Color semántico del texto basado en tokens de diseño.",
      table: { defaultValue: { summary: "default" } },
    },
    weight: {
      control: "select",
      options: ["normal", "medium", "semibold", "bold", "extrabold"],
      description: "Grosor tipográfico (opcional, tiene valor por defecto según el tamaño).",
    },
    align: {
      control: "inline-radio",
      options: ["left", "center", "right"],
      description: "Alineación horizontal del texto.",
      table: { defaultValue: { summary: "left" } },
    },
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "div"],
      description: "Etiqueta HTML a renderizar cuando no se usa asChild.",
    },
    asChild: {
      control: "boolean",
      description: "Permite componer el estilo con un elemento hijo usando Radix Slot.",
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Iniciar sesión en Titakín",
    size: "h2",
  },
};

export const AllSizes: Story = {
  render: (): ReactElement => (
    <div className="flex flex-col gap-6 max-w-2xl p-6 rounded-xl border border-border bg-surface/40">
      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
          display · 48px
        </span>
        <Heading size="display">Seguridad Unificada</Heading>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
          h1 · 30px (Título de página)
        </span>
        <Heading size="h1">Dashboard de Postura</Heading>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
          h2 · 24px (Tarjeta de Auth / Sección principal)
        </span>
        <Heading size="h2">Bienvenido de nuevo</Heading>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
          h3 · 20px (Título de Card)
        </span>
        <Heading size="h3">Evaluación de Riesgos</Heading>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
          h4 · 18px (Sub-sección)
        </span>
        <Heading size="h4">Autenticación Multifactor</Heading>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
          h5 · 16px (Widget header)
        </span>
        <Heading size="h5">Clientes Activos</Heading>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
          h6 · 14px (Overline / Etiqueta)
        </span>
        <Heading size="h6">Métricas de Alerta</Heading>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: (): ReactElement => (
    <div className="flex flex-col gap-4 p-6 rounded-xl border border-border bg-surface/40">
      <Heading size="h3" color="default">
        Default (Foreground / #F4F7FB)
      </Heading>
      <Heading size="h3" color="muted">
        Muted (Secundario / #8D9AAF)
      </Heading>
      <Heading size="h3" color="brand">
        Brand (#2F80FF / Brand 500)
      </Heading>
      <Heading size="h3" color="destructive">
        Destructive (#FF5C6C / Error)
      </Heading>
    </div>
  ),
};

export const SemanticPolymorphism: Story = {
  render: (): ReactElement => (
    <div className="flex flex-col gap-4 max-w-md p-6 rounded-xl border border-border bg-surface/40">
      <p className="text-xs text-muted-foreground">
        Visualmente parece un <strong>h3 (20px)</strong>, pero en el DOM HTML se renderiza como un{" "}
        <strong>&lt;h1&gt;</strong> para SEO accesible:
      </p>
      <Heading as="h1" size="h3">
        Título de Nivel 1 semántico con escala h3
      </Heading>
    </div>
  ),
};
