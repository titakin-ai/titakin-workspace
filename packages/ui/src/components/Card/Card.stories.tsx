import type { ReactElement } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./Card";
import { Button } from "../Button";
import { Input, PasswordInput } from "../Input";
import { Checkbox } from "../Checkbox";
import { Logo } from "../Logo";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { ShieldCheck, ArrowRight, Mail } from "lucide-react";

const meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "default",
    padding: "none",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "subtle", "outline", "interactive"],
      description: "Estilo visual y elevación de la tarjeta.",
      table: { defaultValue: { summary: "default" } },
    },
    padding: {
      control: "select",
      options: ["none", "sm", "default", "lg"],
      description: "Espaciado interno cuando no se usan sub-componentes (CardHeader, CardContent, etc.).",
      table: { defaultValue: { summary: "none" } },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args): ReactElement => (
    <Card {...args} className="w-[380px]">
      <CardHeader>
        <CardTitle>Evaluación de Seguridad</CardTitle>
        <CardDescription>
          Resultados del análisis automatizado de postura para tu infraestructura.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-3 p-3 rounded-lg bg-surface/60 border border-border">
          <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0" />
          <div className="flex flex-col text-xs">
            <span className="font-semibold text-foreground">Sin vulnerabilidades críticas</span>
            <span className="text-muted-foreground">Último escaneo completado hace 10 min.</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="justify-end gap-2">
        <Button variant="ghost" size="sm">
          Descartar
        </Button>
        <Button size="sm">Ver reporte</Button>
      </CardFooter>
    </Card>
  ),
};

export const AuthLoginCard: Story = {
  name: "Login Card (Modal / Versión Flotante)",
  render: (): ReactElement => (
    <Card className="w-[420px] max-w-full shadow-2xl">
      <CardHeader className="items-center text-center pb-2">
        <Logo variant="symbol" size="lg" color="brand" className="mb-2" />
        <Heading size="h2">Bienvenido a Titakín</Heading>
        <Text variant="caption" color="muted" className="mt-1">
          Introduce tus credenciales para acceder a la plataforma.
        </Text>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 pt-4">
        <div className="flex flex-col gap-1.5">
          <Text variant="label" htmlFor="email">
            Correo corporativo
          </Text>
          <Input
            id="email"
            type="email"
            placeholder="admin@empresa.com"
            leftIcon={<Mail className="h-4 w-4" />}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <Text variant="label" htmlFor="password">
              Contraseña
            </Text>
            <Button variant="link" size="sm" asChild className="p-0 h-auto text-xs font-medium">
              <a href="#forgot-password">¿Olvidaste tu contraseña?</a>
            </Button>
          </div>
          <PasswordInput id="password" placeholder="••••••••••••" />
        </div>

        <div className="flex items-center gap-2.5 pt-1">
          <Checkbox id="remember" />
          <Text
            variant="label"
            htmlFor="remember"
            className="cursor-pointer text-xs font-normal text-foreground select-none"
          >
            Recordar este dispositivo
          </Text>
        </div>

        <Button className="w-full mt-2" size="lg">
          Iniciar sesión
          <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
      </CardContent>

      <CardFooter className="flex flex-col items-center justify-center border-t border-border/50 pt-5 text-center text-xs text-muted-foreground">
        <Text as="p" variant="caption" color="muted" className="inline-flex items-center gap-1.5 flex-wrap justify-center text-xs text-muted-foreground">
          <span>¿No tienes una cuenta aún?</span>
          <Button variant="link" size="sm" asChild className="p-0 h-auto font-medium text-xs">
            <a href="#register">Contacta a tu administrador MSSP</a>
          </Button>
        </Text>
      </CardFooter>
    </Card>
  ),
};

export const Variants: Story = {
  render: (): ReactElement => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
      <Card variant="default" padding="default">
        <h4 className="font-semibold text-foreground mb-1">Default</h4>
        <p className="text-xs text-muted-foreground">
          Borde estándar con fondo surface y sombra de alta profundidad.
        </p>
      </Card>

      <Card variant="subtle" padding="default">
        <h4 className="font-semibold text-foreground mb-1">Subtle (Transparencia)</h4>
        <p className="text-xs text-muted-foreground">
          Fondo translúcido con efecto backdrop-blur para tarjetas flotantes.
        </p>
      </Card>

      <Card variant="outline" padding="default">
        <h4 className="font-semibold text-foreground mb-1">Outline</h4>
        <p className="text-xs text-muted-foreground">
          Sin relleno ni sombra, solo borde estructural.
        </p>
      </Card>

      <Card variant="interactive" padding="default">
        <h4 className="font-semibold text-foreground mb-1">Interactive (Hover)</h4>
        <p className="text-xs text-muted-foreground">
          Reacciona al puntero resaltando el borde con el color brand.
        </p>
      </Card>
    </div>
  ),
};
