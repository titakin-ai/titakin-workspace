import type { ReactElement } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowRight, Plus, ExternalLink, Sparkles, Trash2, MoreVertical } from "lucide-react";
import { Button, ButtonSpinner, type ButtonProps } from "./Button";

type ButtonVariant = NonNullable<ButtonProps["variant"]>;
type ButtonSize = NonNullable<ButtonProps["size"]>;

const variants: ButtonVariant[] = ["primary", "secondary", "outline", "ghost", "destructive", "link"];
const sizes: ButtonSize[] = ["sm", "default", "lg", "icon", "icon-sm"];

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "primary",
    size: "default",
    children: "Ingresar",
    disabled: false,
    isLoading: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: variants,
      description: "Estilo visual del botón según la jerarquía de diseño Titakin.",
      table: { defaultValue: { summary: "primary" } },
    },
    size: {
      control: "inline-radio",
      options: sizes,
      description: "Dimensiones y espaciado del botón.",
      table: { defaultValue: { summary: "default" } },
    },
    children: {
      control: "text",
      description: "Contenido del botón (texto o elementos componibles).",
    },
    disabled: {
      control: "boolean",
      description: "Deshabilita la interacción.",
    },
    isLoading: {
      control: "boolean",
      description: "Muestra el indicador de carga y previene acciones.",
    },
    asChild: {
      control: "boolean",
      description: "Delega el renderizado al elemento hijo usando Radix Slot.",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Botón Primario",
  },
};

export const Secondary: Story = {
  name: "Secundario (General)",
  args: {
    variant: "secondary",
    children: "Botón Secundario",
  },
};

export const Outline: Story = {
  name: "Outline (Estilo Cyber)",
  args: {
    variant: "outline",
    children: "Botón Outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Botón Fantasma",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
  render: (args): ReactElement => (
    <Button {...args}>
      <Trash2 className="size-4 shrink-0" />
      <span>Eliminar Recurso</span>
    </Button>
  ),
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "¿Olvidaste tu contraseña?",
  },
};

/**
 * Especificación Figma exacta: 1. Botón Primario
 * Muestra los estados Default, Hover, Pressed, Focus, Disabled y Loading con sus valores de color sobre fondo Figma #0F2748.
 */
export const FigmaPrimarySpecification: Story = {
  name: "Figma: 1. Botón Primario (Especificación Exacta)",
  parameters: { controls: { disable: true } },
  render: (): ReactElement => (
    <div className="w-full max-w-4xl rounded-xl border border-[#243149] bg-[#0F2748] p-8 text-white shadow-xl">
      <div className="mb-6">
        <h3 className="text-lg font-semibold tracking-tight text-white">1. Botón Primario</h3>
        <p className="text-xs text-slate-400">Usado para acciones principales como &quot;Ingresar&quot;</p>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {/* Default */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-slate-400">Default</span>
          <Button variant="primary">Ingresar</Button>
          <div className="mt-1 text-[11px] leading-tight text-slate-400">
            <span className="block font-mono text-slate-200">#2F80FF</span>
            <span>Texto: #FFFFFF</span>
          </div>
        </div>

        {/* Hover */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-slate-400">Hover</span>
          <Button className="bg-[#5AA7FF] hover:bg-[#5AA7FF]">Ingresar</Button>
          <div className="mt-1 text-[11px] leading-tight text-slate-400">
            <span className="block font-mono text-slate-200">#5AA7FF</span>
            <span>Texto: #FFFFFF</span>
          </div>
        </div>

        {/* Pressed */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-slate-400">Pressed</span>
          <Button className="bg-[#1457C5] hover:bg-[#1457C5]">Ingresar</Button>
          <div className="mt-1 text-[11px] leading-tight text-slate-400">
            <span className="block font-mono text-slate-200">#1457C5</span>
            <span>Texto: #FFFFFF</span>
          </div>
        </div>

        {/* Focus */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-slate-400">Focus</span>
          <Button className="ring-2 ring-[#8BC2FF] ring-offset-2 ring-offset-[#0F2748]">Ingresar</Button>
          <div className="mt-1 text-[11px] leading-tight text-slate-400">
            <span className="block font-mono text-slate-200">#2F80FF</span>
            <span>Ring: #8BC2FF</span>
          </div>
        </div>

        {/* Disabled */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-slate-400">Disabled</span>
          <Button disabled>Ingresar</Button>
          <div className="mt-1 text-[11px] leading-tight text-slate-400">
            <span className="block font-mono text-slate-200">#243149</span>
            <span>Texto: #8D9AAF</span>
          </div>
        </div>

        {/* Loading */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-slate-400">Loading</span>
          <Button isLoading>Ingresando...</Button>
          <div className="mt-1 text-[11px] leading-tight text-slate-400">
            <span className="block font-mono text-slate-200">#2F80FF</span>
            <span>Spinner: #FFFFFF</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

/**
 * Especificación Figma exacta: 2. Botón Secundario (General)
 * Muestra los estados Default, Hover, Pressed y Focus con sus valores de borde y texto sobre fondo Figma #0F2748.
 */
export const FigmaSecondarySpecification: Story = {
  name: "Figma: 2. Botón Secundario (Especificación Exacta)",
  parameters: { controls: { disable: true } },
  render: (): ReactElement => (
    <div className="w-full max-w-4xl rounded-xl border border-[#243149] bg-[#0F2748] p-8 text-white shadow-xl">
      <div className="mb-6">
        <h3 className="text-lg font-semibold tracking-tight text-white">2. Botón Secundario</h3>
        <p className="text-xs text-slate-400">Usado para acciones secundarias y alternativas</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Default */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-slate-400">Default</span>
          <Button variant="secondary" className="w-full justify-center">
            <span>Acción Secundaria</span>
          </Button>
          <div className="mt-1 text-[11px] leading-tight text-slate-400">
            <span className="block font-mono text-slate-200">Borde: #243149</span>
            <span>Texto: #F4F7FB</span>
          </div>
        </div>

        {/* Hover */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-slate-400">Hover</span>
          <Button variant="secondary" className="w-full justify-center border-[#5AA7FF]">
            <span>Acción Secundaria</span>
          </Button>
          <div className="mt-1 text-[11px] leading-tight text-slate-400">
            <span className="block font-mono text-slate-200">Borde: #5AA7FF</span>
            <span>Texto: #F4F7FB</span>
          </div>
        </div>

        {/* Pressed */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-slate-400">Pressed</span>
          <Button variant="secondary" className="w-full justify-center border-[#1A2942] bg-[#1A2942]/30">
            <span>Acción Secundaria</span>
          </Button>
          <div className="mt-1 text-[11px] leading-tight text-slate-400">
            <span className="block font-mono text-slate-200">Borde: #1A2942</span>
            <span>Texto: #F4F7FB</span>
          </div>
        </div>

        {/* Focus */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-slate-400">Focus</span>
          <Button
            variant="secondary"
            className="w-full justify-center border-[#5AA7FF] ring-2 ring-[#8BC2FF] ring-offset-2 ring-offset-[#0F2748]"
          >
            <span>Acción Secundaria</span>
          </Button>
          <div className="mt-1 text-[11px] leading-tight text-slate-400">
            <span className="block font-mono text-slate-200">Borde: #5AA7FF</span>
            <span>Ring: #8BC2FF</span>
          </div>
        </div>
      </div>
    </div>
  ),
};

/**
 * Paleta de colores principales Figma incluyendo el fondo Dark #0F2748.
 */
export const FigmaColorTokens: Story = {
  name: "Figma: Colores Principales",
  parameters: { controls: { disable: true } },
  render: (): ReactElement => (
    <div className="w-full max-w-4xl rounded-xl border border-[#243149] bg-[#0F2748] p-8 text-white shadow-xl">
      <h3 className="mb-4 text-base font-semibold tracking-tight text-white">Colores principales</h3>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {[
          { name: "Dark Base (Figma)", hex: "#0F2748", desc: "Fondo Azul Oscuro" },
          { name: "Brand 500", hex: "#2F80FF", desc: "Primario" },
          { name: "Brand 400", hex: "#5AA7FF", desc: "Hover" },
          { name: "Brand Dark", hex: "#1457C5", desc: "Pressed" },
          { name: "Brand 300", hex: "#8BC2FF", desc: "Ring / Focus" },
          { name: "Border", hex: "#243149", desc: "Borde / Disabled" },
          { name: "Surface", hex: "#111A2B", desc: "Superficie Tarjetas" },
          { name: "Texto Secundario", hex: "#F4F7FB", desc: "Texto Botón Secundario" },
          { name: "Error", hex: "#FF5C6C", desc: "Error / Destructive" },
          { name: "Success", hex: "#20C997", desc: "Success" },
        ].map((c) => (
          <div key={c.hex} className="flex flex-col items-center gap-2 rounded-lg border border-white/5 bg-[#111A2B]/60 p-3 text-center">
            <div className="size-10 rounded-full border border-white/10 shadow-md" style={{ backgroundColor: c.hex }} />
            <div>
              <p className="font-mono text-xs font-semibold text-white">{c.hex}</p>
              <p className="text-[11px] text-slate-300">{c.name}</p>
              <p className="text-[10px] text-slate-400">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

/**
 * Composición de formulario con acción Primaria y Secundaria general.
 */
export const FormActionButtons: Story = {
  name: "Formulario: Primario y Secundario",
  parameters: { controls: { disable: true } },
  render: (): ReactElement => (
    <div className="w-full max-w-sm space-y-3 rounded-xl border border-[#243149] bg-[#0F2748] p-6 text-white shadow-lg">
      <Button variant="primary" size="lg" className="w-full">
        <span>Ingresar</span>
        <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
      </Button>

      <Button variant="secondary" size="lg" className="w-full">
        <span>Cancelar</span>
      </Button>
    </div>
  ),
};

/**
 * Réplicas de las acciones del MSSP Console (Captura 2).
 */
export const DashboardActions: Story = {
  name: "MSSP: Acciones de Consola (Captura 2)",
  parameters: { controls: { disable: true } },
  render: (): ReactElement => (
    <div className="flex flex-col gap-6 rounded-xl border border-[#243149] bg-[#0F2748] p-6 text-white">
      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Acción Primaria (+ Crear cliente)
        </p>
        <Button variant="primary">
          <Plus className="size-4 shrink-0" />
          <span>Crear cliente</span>
        </Button>
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Acción con IA (Analizar con IA)
        </p>
        <Button variant="primary">
          <Sparkles className="size-4 shrink-0" />
          <span>Analizar con IA</span>
        </Button>
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Acción Secundaria / Cyber Outline (Abrir cliente)
        </p>
        <div className="max-w-md">
          <Button variant="outline" className="w-full justify-center">
            <ExternalLink className="size-4 shrink-0" />
            <span>Abrir cliente</span>
          </Button>
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
          Acción en Fila de Tabla (Menú Contextual)
        </p>
        <Button variant="ghost" size="icon" aria-label="Más acciones">
          <MoreVertical className="size-4" />
        </Button>
      </div>
    </div>
  ),
};

/**
 * Demostración de todos los tamaños disponibles.
 */
export const AllSizes: Story = {
  name: "Escala de Tamaños",
  parameters: { controls: { disable: true } },
  render: (): ReactElement => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small (sm)</Button>
      <Button size="default">Default (md)</Button>
      <Button size="lg">Large (lg)</Button>
      <Button size="icon" aria-label="Icon">
        <Plus className="size-4" />
      </Button>
      <Button size="icon-sm" aria-label="Icon Small">
        <Plus className="size-3.5" />
      </Button>
    </div>
  ),
};

/**
 * Estado de carga con `isLoading` integrado o composición manual con `ButtonSpinner`.
 */
export const LoadingStates: Story = {
  name: "Estados de Carga",
  parameters: { controls: { disable: true } },
  render: (): ReactElement => (
    <div className="flex flex-wrap items-center gap-4">
      <Button variant="primary" isLoading>
        Procesando...
      </Button>
      <Button variant="secondary" isLoading>
        Cargando...
      </Button>
      <Button variant="destructive" disabled>
        <ButtonSpinner />
        <span>Eliminando</span>
      </Button>
    </div>
  ),
};

/**
 * Polimorfismo mediante `asChild` para renderizar un enlace `<a>` con estilo de botón.
 */
export const AsLinkWithAsChild: Story = {
  name: "Polimorfismo (asChild)",
  render: (): ReactElement => (
    <Button asChild variant="primary">
      <a href="https://titakin.com" target="_blank" rel="noopener noreferrer">
        <span>Ir al sitio web</span>
        <ExternalLink className="size-4 shrink-0" />
      </a>
    </Button>
  ),
};
