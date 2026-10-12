import type { ReactElement } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Logo, TitakinSymbol } from "./Logo";

const meta = {
  title: "Components/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "symbol",
    size: "md",
    color: "brand",
    label: "Titakín",
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["symbol", "full"],
      description: "Variante visual: solo el isotipo (`symbol`) o isotipo + wordmark (`full`).",
      table: { defaultValue: { summary: "symbol" } },
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      description: "Escala proporcional del logo (de 16px a 64px).",
      table: { defaultValue: { summary: "md" } },
    },
    color: {
      control: "inline-radio",
      options: ["brand", "white", "muted", "current"],
      description: "Color semántico aplicado al isotipo según los tokens del Design System.",
      table: { defaultValue: { summary: "brand" } },
    },
    label: {
      control: "text",
      description: "Texto del wordmark cuando `variant=\"full\"`.",
      table: { defaultValue: { summary: "Titakín" } },
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default (Symbol)",
  args: {
    variant: "symbol",
    size: "lg",
    color: "brand",
  },
};

export const FullLogo: Story = {
  name: "Full Logo (Symbol + Wordmark)",
  args: {
    variant: "full",
    size: "lg",
    color: "brand",
    label: "Titakín",
  },
};

export const AllSizes: Story = {
  name: "Scalability (All Sizes)",
  render: (): ReactElement => (
    <div className="flex flex-col gap-6 items-start p-6 rounded-xl border border-border bg-surface/40">
      <div className="flex flex-col gap-3">
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
          Isotipo (Symbol)
        </span>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center gap-1.5">
            <Logo variant="symbol" size="xs" />
            <span className="text-[10px] text-muted-foreground font-mono">xs (16px)</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <Logo variant="symbol" size="sm" />
            <span className="text-[10px] text-muted-foreground font-mono">sm (24px)</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <Logo variant="symbol" size="md" />
            <span className="text-[10px] text-muted-foreground font-mono">md (32px)</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <Logo variant="symbol" size="lg" />
            <span className="text-[10px] text-muted-foreground font-mono">lg (40px)</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <Logo variant="symbol" size="xl" />
            <span className="text-[10px] text-muted-foreground font-mono">xl (48px)</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <Logo variant="symbol" size="2xl" />
            <span className="text-[10px] text-muted-foreground font-mono">2xl (64px)</span>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-border/60" />

      <div className="flex flex-col gap-3">
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
          Logotipo Completo (Full)
        </span>
        <div className="flex flex-col gap-4">
          <Logo variant="full" size="sm" />
          <Logo variant="full" size="md" />
          <Logo variant="full" size="lg" />
          <Logo variant="full" size="xl" />
        </div>
      </div>
    </div>
  ),
};

export const ColorVariants: Story = {
  render: (): ReactElement => (
    <div className="grid grid-cols-2 gap-4 p-6 rounded-xl border border-border bg-surface/40">
      <div className="flex items-center gap-3 p-3 rounded-lg bg-surface/80 border border-border/40">
        <Logo variant="symbol" size="lg" color="brand" />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-foreground">Brand (Default)</span>
          <span className="text-xs text-muted-foreground font-mono">#2F80FF (brand-500)</span>
        </div>
      </div>

      <div className="flex items-center gap-3 p-3 rounded-lg bg-surface/80 border border-border/40">
        <Logo variant="symbol" size="lg" color="white" />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-foreground">White (Monochrome)</span>
          <span className="text-xs text-muted-foreground font-mono">#FFFFFF</span>
        </div>
      </div>

      <div className="flex items-center gap-3 p-3 rounded-lg bg-surface/80 border border-border/40">
        <Logo variant="symbol" size="lg" color="muted" />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-foreground">Muted / Inactive</span>
          <span className="text-xs text-muted-foreground font-mono">text-muted-foreground</span>
        </div>
      </div>

      <div className="flex items-center gap-3 p-3 rounded-lg bg-surface/80 border border-border/40 text-emerald-400">
        <Logo variant="symbol" size="lg" color="current" />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-foreground">Inherited currentColor</span>
          <span className="text-xs text-muted-foreground font-mono">Herencia de padre</span>
        </div>
      </div>
    </div>
  ),
};

export const AuthHeaderPreview: Story = {
  name: "Contexto: Auth Header (Login)",
  render: (): ReactElement => (
    <div className="w-[380px] p-8 rounded-2xl border border-border bg-surface/70 shadow-2xl flex flex-col items-center text-center">
      <div className="mb-4 p-3 rounded-2xl bg-brand-500/10 border border-brand-500/20">
        <Logo variant="symbol" size="xl" color="brand" />
      </div>
      <h2 className="text-xl font-bold tracking-tight text-foreground">
        Bienvenido a Titakín
      </h2>
      <p className="text-xs text-muted-foreground mt-1.5 max-w-[280px]">
        Plataforma unificada de gestión de riesgos cibernéticos y postura de seguridad.
      </p>
    </div>
  ),
};

export const PureSymbolPrimitive: Story = {
  name: "Primitiva: TitakinSymbol (SVG)",
  render: (): ReactElement => (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-surface/40">
      <TitakinSymbol size="lg" color="brand" />
      <div className="text-xs text-muted-foreground">
        <p className="font-semibold text-foreground">TitakinSymbol</p>
        <p>Elemento SVG puro sin wrappers, ideal para canvas, favicons y menús.</p>
      </div>
    </div>
  ),
};
