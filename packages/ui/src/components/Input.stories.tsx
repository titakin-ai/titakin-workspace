import type { ReactElement } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mail, Lock, EyeOff, AlertCircle } from "lucide-react";
import { Input, PasswordInput } from "./Input";
import { Button } from "./Button";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  args: {
    placeholder: "nombre@empresa.com",
    disabled: false,
    isError: false,
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "Texto de ayuda / placeholder.",
    },
    disabled: {
      control: "boolean",
      description: "Deshabilita la interacción con el campo.",
    },
    isError: {
      control: "boolean",
      description: "Aplica el estado visual de error (#FF5C6C).",
    },
    errorMessage: {
      control: "text",
      description: "Mensaje de validación de error renderizado debajo del input.",
    },
    helperText: {
      control: "text",
      description: "Texto informativo de soporte.",
    },
  },
  decorators: [
    (Story, context): ReactElement => {
      if (context.parameters?.unconstrainedWidth) {
        return <Story />;
      }
      return (
        <div className="w-full max-w-sm">
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    leftIcon: <Mail className="size-4" />,
    placeholder: "nombre@empresa.com",
  },
};

export const Filled: Story = {
  args: {
    leftIcon: <Mail className="size-4" />,
    defaultValue: "usuario@empresa.com",
  },
};

export const WithError: Story = {
  name: "Error (Con Mensaje)",
  args: {
    leftIcon: <Mail className="size-4" />,
    defaultValue: "usuario@empresa.com",
    errorMessage: "El usuario no existe o las credenciales son incorrectas.",
  },
};

export const Disabled: Story = {
  args: {
    leftIcon: <Mail className="size-4" />,
    placeholder: "nombre@empresa.com",
    disabled: true,
  },
};

export const Password: Story = {
  name: "Password con Toggle",
  render: (): ReactElement => (
    <PasswordInput
      leftIcon={<Lock className="size-4" />}
      placeholder="Ingresa tu contraseña"
      defaultValue="MiPassword123"
    />
  ),
};

/**
 * Especificación Figma exacta: 3. Input - Correo electrónico
 * Muestra los estados Default, Hover, Focus, Filled, Error (con mensaje), Error y Disabled.
 */
export const FigmaEmailSpecification: Story = {
  name: "Figma: 3. Input - Correo electrónico (Especificación Exacta)",
  parameters: { controls: { disable: true }, unconstrainedWidth: true },
  render: (): ReactElement => (
    <div className="w-full max-w-5xl rounded-xl border border-[#243149] bg-[#0F2748] p-8 text-white shadow-xl">
      <div className="mb-6">
        <h3 className="text-lg font-semibold tracking-tight text-white">3. Input - Correo electrónico</h3>
        <p className="text-xs text-slate-400">Estados del campo de correo</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Default */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-slate-400">Default</span>
          <Input leftIcon={<Mail className="size-4" />} placeholder="nombre@empresa.com" />
          <span className="text-[11px] font-mono text-slate-400">Borde: #243149</span>
        </div>

        {/* Hover */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-slate-400">Hover</span>
          <Input
            leftIcon={<Mail className="size-4 text-[#5AA7FF]" />}
            placeholder="nombre@empresa.com"
            className="border-[#5AA7FF]"
          />
          <span className="text-[11px] font-mono text-slate-400">Borde: #5AA7FF</span>
        </div>

        {/* Focus */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-slate-400">Focus</span>
          <Input
            leftIcon={<Mail className="size-4 text-[#2F80FF]" />}
            placeholder="nombre@empresa.com"
            className="border-[#2F80FF] ring-2 ring-[#2F80FF]/30"
          />
          <span className="text-[11px] font-mono text-slate-400">Borde: #2F80FF</span>
        </div>

        {/* Filled */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-slate-400">Filled</span>
          <Input leftIcon={<Mail className="size-4" />} defaultValue="usuario@empresa.com" />
          <span className="text-[11px] font-mono text-slate-400">Borde: #243149</span>
        </div>

        {/* Error con mensaje */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-slate-400">Error (con mensaje)</span>
          <Input
            leftIcon={<Mail className="size-4" />}
            defaultValue="usuario@empresa.com"
            errorMessage="El usuario no existe o las credenciales son incorrectas."
          />
        </div>

        {/* Error */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-slate-400">Error</span>
          <Input
            leftIcon={<Mail className="size-4" />}
            defaultValue="usuario@empresa.com"
            isError
            rightIcon={<AlertCircle className="size-4 text-[#FF5C6C]" />}
          />
          <span className="text-[11px] font-mono text-slate-400">Borde: #FF5C6C</span>
        </div>

        {/* Disabled */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-slate-400">Disabled</span>
          <Input
            leftIcon={<Mail className="size-4" />}
            placeholder="nombre@empresa.com"
            disabled
          />
          <span className="text-[11px] font-mono text-slate-400">Borde: #243149 / Texto: #8D9AAF</span>
        </div>
      </div>
    </div>
  ),
};

/**
 * Especificación Figma exacta: 4. Input - Contraseña
 * Muestra los estados Default, Hover, Focus, Filled, Error, Error (con toggle) y Disabled.
 */
export const FigmaPasswordSpecification: Story = {
  name: "Figma: 4. Input - Contraseña (Especificación Exacta)",
  parameters: { controls: { disable: true }, unconstrainedWidth: true },
  render: (): ReactElement => (
    <div className="w-full max-w-5xl rounded-xl border border-[#243149] bg-[#0F2748] p-8 text-white shadow-xl">
      <div className="mb-6">
        <h3 className="text-lg font-semibold tracking-tight text-white">4. Input - Contraseña</h3>
        <p className="text-xs text-slate-400">Estados del campo de contraseña</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Default */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-slate-400">Default</span>
          <PasswordInput
            leftIcon={<Lock className="size-4" />}
            defaultValue="••••••••"
          />
          <span className="text-[11px] font-mono text-slate-400">Borde: #243149</span>
        </div>

        {/* Hover */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-slate-400">Hover</span>
          <PasswordInput
            leftIcon={<Lock className="size-4 text-[#5AA7FF]" />}
            defaultValue="••••••••"
            className="border-[#5AA7FF]"
          />
          <span className="text-[11px] font-mono text-slate-400">Borde: #5AA7FF</span>
        </div>

        {/* Focus */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-slate-400">Focus</span>
          <PasswordInput
            leftIcon={<Lock className="size-4 text-[#2F80FF]" />}
            defaultValue="••••••••"
            className="border-[#2F80FF] ring-2 ring-[#2F80FF]/30"
          />
          <span className="text-[11px] font-mono text-slate-400">Borde: #2F80FF</span>
        </div>

        {/* Filled */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-slate-400">Filled</span>
          <PasswordInput
            leftIcon={<Lock className="size-4" />}
            defaultValue="••••••••"
          />
          <span className="text-[11px] font-mono text-slate-400">Borde: #243149</span>
        </div>

        {/* Error con mensaje */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-slate-400">Error</span>
          <Input
            type="password"
            leftIcon={<Lock className="size-4" />}
            defaultValue="••••••••"
            errorMessage="Contraseña incorrecta."
          />
        </div>

        {/* Error con toggle */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-slate-400">Error (con toggle)</span>
          <PasswordInput
            leftIcon={<Lock className="size-4" />}
            defaultValue="••••••••"
            isError
            rightIcon={<EyeOff className="size-4 text-[#8D9AAF]" />}
          />
          <span className="text-[11px] font-mono text-slate-400">Borde: #FF5C6C</span>
        </div>

        {/* Disabled */}
        <div className="flex flex-col gap-2">
          <span className="text-xs text-slate-400">Disabled</span>
          <PasswordInput
            leftIcon={<Lock className="size-4" />}
            defaultValue="••••••••"
            disabled
          />
          <span className="text-[11px] font-mono text-slate-400">Borde: #243149 / Texto: #8D9AAF</span>
        </div>
      </div>
    </div>
  ),
};

/**
 * Ejemplo completo del formulario de autenticación combinando Inputs y Botones.
 */
export const AuthLoginFormExample: Story = {
  name: "Formulario de Login Completo",
  parameters: { controls: { disable: true }, unconstrainedWidth: true },
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

        <div className="pt-2">
          <Button variant="primary" size="lg" className="w-full">
            Ingresar
          </Button>
        </div>
      </form>
    </div>
  ),
};
