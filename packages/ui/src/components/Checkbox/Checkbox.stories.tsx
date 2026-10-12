import type { ReactElement } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "./Checkbox";
import { Input, PasswordInput } from "../Input";
import { Button } from "../Button";
import { Mail, Lock } from "lucide-react";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  args: {
    disabled: false,
    size: "default",
  },
  argTypes: {
    size: {
      control: "inline-radio",
      options: ["sm", "default", "lg"],
      description: "Dimensiones del checkbox (sm: 16px, default: 18px, lg: 20px).",
      table: { defaultValue: { summary: "default" } },
    },
    disabled: {
      control: "boolean",
      description: "Deshabilita la interacción con el control.",
    },
    checked: {
      control: "boolean",
      description: "Estado controlado del checkbox.",
    },
    defaultChecked: {
      control: "boolean",
      description: "Estado inicial no controlado.",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default (Unchecked)",
  args: {},
};

export const Checked: Story = {
  name: "Checked (Marcado)",
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  name: "Disabled (Deshabilitado)",
  args: {
    disabled: true,
  },
};

export const CheckedDisabled: Story = {
  name: "Checked Disabled (Marcado y Deshabilitado)",
  args: {
    defaultChecked: true,
    disabled: true,
  },
};

export const WithLabel: Story = {
  name: "Con Etiqueta (Recordarme)",
  render: (): ReactElement => (
    <label
      htmlFor="remember-me"
      className="inline-flex items-center gap-2.5 cursor-pointer select-none text-sm font-normal text-[#F4F7FB]"
    >
      <Checkbox id="remember-me" />
      <span>Recordarme</span>
    </label>
  ),
};

/**
 * Especificación Figma exacta: 6. Checkbox
 * Muestra los estados Default, Hover, Checked, Disabled y Checked Disabled sobre fondo Figma #0F2748.
 */
export const FigmaSpecification: Story = {
  name: "Figma: 6. Checkbox (Especificación Exacta)",
  parameters: { controls: { disable: true } },
  render: (): ReactElement => (
    <div className="w-full max-w-3xl rounded-xl border border-[#243149] bg-[#0F2748] p-8 text-white shadow-xl">
      <div className="mb-6">
        <h3 className="text-lg font-semibold tracking-tight text-white">6. Checkbox</h3>
        <p className="text-xs text-slate-400">Estados de &quot;Recordarme&quot;</p>
      </div>

      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
        {/* Default */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs text-slate-400">Default</span>
          <div className="flex size-10 items-center justify-center">
            <Checkbox />
          </div>
          <span className="font-mono text-xs text-slate-400">#8D9AAF</span>
        </div>

        {/* Hover */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs text-slate-400">Hover</span>
          <div className="flex size-10 items-center justify-center">
            <Checkbox className="border-[#5AA7FF]" />
          </div>
          <span className="font-mono text-xs text-slate-400">#5AA7FF</span>
        </div>

        {/* Checked */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs text-slate-400">Checked</span>
          <div className="flex size-10 items-center justify-center">
            <Checkbox defaultChecked />
          </div>
          <span className="font-mono text-xs text-slate-400">#2F80FF</span>
        </div>

        {/* Disabled */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs text-slate-400">Disabled</span>
          <div className="flex size-10 items-center justify-center">
            <Checkbox disabled />
          </div>
          <span className="font-mono text-xs text-slate-400">#243149</span>
        </div>

        {/* Checked Disabled */}
        <div className="flex flex-col items-center gap-3">
          <span className="text-xs text-slate-400">Checked Disabled</span>
          <div className="flex size-10 items-center justify-center">
            <Checkbox defaultChecked disabled />
          </div>
          <span className="font-mono text-xs text-slate-400">#243149</span>
        </div>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  name: "Escala de Tamaños",
  render: (): ReactElement => (
    <div className="flex items-center gap-6">
      <label className="inline-flex items-center gap-2 cursor-pointer text-xs text-[#F4F7FB]">
        <Checkbox size="sm" defaultChecked />
        <span>Small (16px)</span>
      </label>
      <label className="inline-flex items-center gap-2 cursor-pointer text-sm text-[#F4F7FB]">
        <Checkbox size="default" defaultChecked />
        <span>Default (18px)</span>
      </label>
      <label className="inline-flex items-center gap-2 cursor-pointer text-base text-[#F4F7FB]">
        <Checkbox size="lg" defaultChecked />
        <span>Large (20px)</span>
      </label>
    </div>
  ),
};

export const LoginFormIntegration: Story = {
  name: "Integración en Login",
  render: (): ReactElement => (
    <div className="w-full max-w-sm rounded-xl border border-[#243149] bg-[#0F2748] p-6 text-white shadow-2xl">
      <h3 className="text-lg font-semibold tracking-tight text-white">Portal de cliente</h3>
      <p className="mb-6 text-xs text-slate-400">Inicia sesión para acceder a tu consola.</p>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-300">
            Correo electrónico
          </label>
          <Input
            type="email"
            leftIcon={<Mail className="size-4" />}
            placeholder="nombre@empresa.com"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-300">
            Contraseña
          </label>
          <PasswordInput
            leftIcon={<Lock className="size-4" />}
            placeholder="Ingresa tu contraseña"
          />
        </div>

        <div className="flex items-center justify-between pt-1">
          <label
            htmlFor="login-remember"
            className="inline-flex items-center gap-2 cursor-pointer select-none text-xs text-slate-300 hover:text-white transition-colors"
          >
            <Checkbox id="login-remember" defaultChecked />
            <span>Recordarme</span>
          </label>

          <Button variant="link" className="text-xs">
            ¿Olvidaste tu contraseña?
          </Button>
        </div>

        <div className="pt-2">
          <Button variant="primary" size="lg" className="w-full">
            Ingresar
          </Button>
        </div>
      </form>
    </div>
  ),
};
