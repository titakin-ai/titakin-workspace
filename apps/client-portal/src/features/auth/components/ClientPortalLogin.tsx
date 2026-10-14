"use client";

import * as React from "react";
import Image from "next/image";
import {
  Users,
  ShieldCheck,
  Cpu,
  BarChart3,
  Globe,
  ChevronDown,
  Mail,
  Lock,
  ArrowRight,
} from "lucide-react";
import {
  Logo,
  Heading,
  Text,
  Input,
  PasswordInput,
  Checkbox,
  Button,
} from "@titakin/ui";

export interface ClientPortalLoginProps {
  readonly backgroundImageSrc?: string;
  readonly globeImageSrc?: string;
  readonly onLogin?: (data: { email: string; password: string; remember: boolean }) => void;
  readonly className?: string;
}

/**
 * Pantalla oficial de Login para el Portal de Cliente de Titakín.
 * Módulo de autenticación que consume las primitivas del Design System (@titakin/ui)
 * e implementa la experiencia Figma "Desktop - Principal" con Next.js Image.
 */
export const ClientPortalLogin: React.FC<ClientPortalLoginProps> = ({
  backgroundImageSrc = "/Background.svg",
  globeImageSrc = "/Globe_Holographic.png",
  onLogin,
  className,
}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState(true);
  const [language, setLanguage] = React.useState("ES");

  const isFormValid = email.trim().length > 0 && password.trim().length > 0;

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (isFormValid && onLogin) {
      onLogin({ email, password, remember });
    }
  };

  return (
    <div
      className={`min-h-screen w-full flex flex-col lg:flex-row bg-[#020A1D] overflow-hidden select-none font-sans ${className ?? ""}`}
    >
      {/* ============================================================ */}
      {/* SECCIÓN IZQUIERDA: HERO CON BACKGROUND.SVG Y GLOBO 3D        */}
      {/* ============================================================ */}
      <div
        className="relative flex-1 flex flex-col justify-between p-8 lg:p-14 min-h-[500px] lg:min-h-screen overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageSrc})` }}
      >
        {/* Globo Holográfico centrado hacia la derecha */}
        <div className="absolute -right-12 lg:right-4 top-1/2 -translate-y-1/2 w-[340px] sm:w-[460px] lg:w-[600px] h-[340px] sm:h-[460px] lg:h-[600px] pointer-events-none select-none opacity-90 z-0">
          <Image
            src={globeImageSrc}
            alt="Titakín Security Globe"
            width={600}
            height={600}
            priority
            className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(47,128,255,0.35)]"
          />
        </div>

        {/* Header Superior Izquierdo: Logo Titakín con <Logo uppercase /> */}
        <div className="relative z-10">
          <Logo
            variant="full"
            size="lg"
            color="brand"
            uppercase
            textClassName="text-xl lg:text-2xl font-bold tracking-widest text-white"
          />
        </div>

        {/* Bloque Central: Titulares con <Heading> y Capacidades con <Text> */}
        <div className="relative z-10 my-auto py-10 max-w-lg">
          <Heading as="h1" size="display" className="text-white leading-[1.15]">
            Seguridad inteligente.
          </Heading>
          <Heading
            as="h2"
            size="display"
            color="brand"
            className="leading-[1.15] mb-8 lg:mb-10"
          >
            Control total.
          </Heading>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3.5">
              <Users className="h-5 w-5 text-brand-400 shrink-0" />
              <Text variant="body" className="text-slate-200 font-medium">
                Gestión de clientes y servicios
              </Text>
            </div>

            <div className="flex items-center gap-3.5">
              <ShieldCheck className="h-5 w-5 text-brand-400 shrink-0" />
              <Text variant="body" className="text-slate-200 font-medium">
                Monitoreo y seguridad 24/7
              </Text>
            </div>

            <div className="flex items-center gap-3.5">
              <Cpu className="h-5 w-5 text-brand-400 shrink-0" />
              <Text variant="body" className="text-slate-200 font-medium">
                Inteligencia artificial aplicada
              </Text>
            </div>

            <div className="flex items-center gap-3.5">
              <BarChart3 className="h-5 w-5 text-brand-400 shrink-0" />
              <Text variant="body" className="text-slate-200 font-medium">
                Reportes y auditoría
              </Text>
            </div>
          </div>
        </div>

        {/* Footer Inferior Izquierdo: Tagline con <Text> */}
        <div className="relative z-10 flex items-center gap-3 pt-6">
          <div className="w-[3px] h-9 bg-brand-500 rounded-full" />
          <Text variant="caption" className="text-slate-300 font-normal leading-snug">
            Tecnología que protege
            <br />
            lo que te importa.
          </Text>
        </div>
      </div>

      {/* ============================================================ */}
      {/* SECCIÓN DERECHA: PANEL DE LOGIN BLANCO FLOTANTE             */}
      {/* ============================================================ */}
      <div className="w-full lg:w-[480px] xl:w-[520px] bg-white flex flex-col justify-between p-8 sm:p-12 lg:p-14 shadow-[-20px_0_50px_rgba(0,0,0,0.45)] z-20 shrink-0">
        {/* Selector de Idioma Superior Derecho */}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => setLanguage(language === "ES" ? "EN" : "ES")}
            className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-slate-900 transition-colors font-medium cursor-pointer"
          >
            <Globe className="h-4 w-4 text-slate-400" />
            <Text as="span" variant="caption" className="font-medium text-slate-600">
              {language}
            </Text>
            <ChevronDown className="h-3.5 w-3.5 text-slate-400" />
          </button>
        </div>

        {/* Formulario de Login */}
        <div className="my-auto py-6">
          {/* Logo Titakín en panel derecho con <Logo uppercase /> */}
          <Logo
            variant="full"
            size="lg"
            color="brand"
            uppercase
            textClassName="text-2xl font-bold tracking-wider text-[#0A1A3B]"
            className="mb-8"
          />

          {/* Título y Subtítulo con <Heading> y <Text> */}
          <div className="mb-8">
            <Heading as="h2" size="h2" className="text-[#0A1A3B] font-bold">
              Portal de cliente
            </Heading>
            <Text variant="caption" className="text-slate-500 mt-2 leading-relaxed">
              Inicia sesión para acceder a la información y servicios de tu organización.
            </Text>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Campo Correo Electrónico con <Text> e <Input> */}
            <div className="flex flex-col gap-1.5">
              <Text
                as="label"
                variant="label"
                htmlFor="portal-email"
                className="text-slate-800 font-semibold text-xs"
              >
                Correo electrónico
              </Text>
              <Input
                id="portal-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nombre@empresa.com"
                leftIcon={<Mail className="h-4 w-4 text-slate-400" />}
                className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:border-brand-500 focus-visible:ring-brand-500/20"
              />
            </div>

            {/* Campo Contraseña con <Text> y <PasswordInput> */}
            <div className="flex flex-col gap-1.5">
              <Text
                as="label"
                variant="label"
                htmlFor="portal-password"
                className="text-slate-800 font-semibold text-xs"
              >
                Contraseña
              </Text>
              <PasswordInput
                id="portal-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa tu contraseña"
                leftIcon={<Lock className="h-4 w-4 text-slate-400" />}
                className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:border-brand-500 focus-visible:ring-brand-500/20"
              />
            </div>

            {/* Fila Recordarme con <Checkbox> y Enlace de recuperación con <Button variant="link"> */}
            <div className="flex items-center justify-between text-xs pt-1">
              <div className="inline-flex items-center gap-2">
                <Checkbox
                  id="remember"
                  checked={remember}
                  onCheckedChange={(checked) => setRemember(Boolean(checked))}
                  className="border-slate-300"
                />
                <Text
                  as="label"
                  variant="caption"
                  htmlFor="remember"
                  className="cursor-pointer select-none text-slate-600"
                >
                  Recordarme
                </Text>
              </div>

              <Button
                variant="link"
                size="sm"
                asChild
                className="text-xs h-auto p-0 font-medium"
              >
                <a href="#forgot-password">¿Olvidaste tu contraseña?</a>
              </Button>
            </div>

            {/* Botón Ingresar con <Button> */}
            <Button
              type="submit"
              disabled={!isFormValid}
              size="lg"
              className="w-full mt-2"
            >
              Ingresar
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </form>
        </div>

        {/* Footer Inferior Derecho con <Text> */}
        <div className="border-t border-slate-100 pt-6 text-center">
          <Text variant="caption" className="text-[11px] text-slate-400 font-normal">
            © 2026 Titakín. .
          </Text>
        </div>
      </div>
    </div>
  );
};
