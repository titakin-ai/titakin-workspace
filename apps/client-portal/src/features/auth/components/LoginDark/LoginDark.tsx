"use client";

import type React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Mail, Lock, ArrowRight } from "lucide-react";
import {
  Logo,
  Heading,
  Text,
  Input,
  PasswordInput,
  Checkbox,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  LanguageSelector,
} from "@titakin/ui";
import { useAppLocale, type SupportedLocale } from "@/providers/I18nProvider";
import { useLogin } from "./useLogin";
import {
  DEFAULT_BACKGROUND_SRC,
  DEFAULT_GLOBE_SRC,
  LOGIN_CAPABILITIES,
} from "./constants";
import type { LoginDarkProps } from "./types";

/**
 * Componente LoginDark (Versión 2: Card Oscuro y Logo Titakín en Title Case).
 * Implementa la experiencia de acceso dentro de un Card flotante de fondo oscuro
 * conforme al Design System de Titakin UI, evitando fondos blancos.
 */
export const LoginDark: React.FC<LoginDarkProps> = ({
  backgroundImageSrc = DEFAULT_BACKGROUND_SRC,
  globeImageSrc = DEFAULT_GLOBE_SRC,
  onLogin,
  className,
}) => {
  const t = useTranslations("auth");
  const { locale, setLocale } = useAppLocale();

  const {
    email,
    setEmail,
    password,
    setPassword,
    remember,
    setRemember,
    isFormValid,
    handleSubmit,
  } = useLogin({ onLogin });

  return (
    <div
      className={`dark min-h-screen w-full flex flex-col lg:flex-row bg-[#020A1D] text-white selection:bg-brand-500 selection:text-white relative overflow-hidden font-sans ${className ?? ""
        }`}
    >
      {/* Selector de Idioma Flotante directamente sobre el fondo */}
      <div className="absolute top-6 right-6 sm:top-8 sm:right-12 z-30">
        <LanguageSelector
          value={locale}
          onValueChange={(newLocale) => setLocale(newLocale as SupportedLocale)}
          variant="minimal"
        />
      </div>

      {/* Fondo con Cuadrícula Cybernetica de Pantalla Completa */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none opacity-60 mix-blend-screen"
        style={{ backgroundImage: `url(${backgroundImageSrc})` }}
      />

      {/* Resplandor radial atmosférico */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-brand-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] bg-brand-500/20 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[420px] h-[420px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Globo Holográfico Centrado */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-[820px] h-[86vh] max-h-[820px] pointer-events-none select-none opacity-90 z-0 flex items-center justify-center">
        <Image
          src={globeImageSrc}
          alt="Titakín Security Globe"
          width={820}
          height={820}
          className="w-full h-full object-contain filter drop-shadow-[0_0_60px_rgba(47,128,255,0.45)] drop-shadow-[0_0_25px_rgba(90,167,255,0.35)] animate-pulse-slow"
          priority
        />
      </div>

      {/* ============================================================ */}
      {/* SECCIÓN IZQUIERDA: HERO Y VALOR DE MARCA                     */}
      {/* ============================================================ */}
      <div className="flex-1 flex flex-col justify-between p-8 sm:p-12 lg:p-16 relative z-10 min-h-[440px] lg:min-h-screen">
        {/* Header Superior Izquierdo: Logotipo Oficial en Title Case */}
        <div className="flex items-center">
          <Logo
            variant="full"
            size="xl"
            color="brand"
            uppercase={false}
            label="Titakín"
            className="gap-3.5"
            textClassName="text-3xl font-bold tracking-tight text-white"
          />
        </div>

        {/* Bloque Central: Titulares y Capacidades */}
        <div className="relative z-10 my-auto py-10 max-w-lg">
          <Heading as="h1" size="display" className="text-white leading-[1.15]">
            {t("heroTitle1")}
          </Heading>
          <Heading
            as="h2"
            size="display"
            color="brand"
            className="leading-[1.15] mb-8 lg:mb-10"
          >
            {t("heroTitle2")}
          </Heading>

          <div className="flex flex-col gap-5">
            {LOGIN_CAPABILITIES.map(({ id, icon: Icon, translationKey }) => (
              <div key={id} className="flex items-center gap-3.5">
                <Icon className="h-5 w-5 text-brand-400 shrink-0" />
                <Text variant="body" className="text-slate-200 font-medium">
                  {t(translationKey)}
                </Text>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Inferior Izquierdo: Tagline de Marca */}
        <div className="flex items-center gap-3 pt-6">
          <div className="w-[3px] h-9 bg-brand-500 rounded-full" />
          <Text variant="caption" className="text-slate-300 font-normal leading-snug">
            {t("tagline.line1")}
            <br />
            {t("tagline.line2")}
          </Text>
        </div>
      </div>

      {/* ============================================================ */}
      {/* SECCIÓN DERECHA: CARD OSCURO FLOTANTE DIRECTO SOBRE EL FONDO */}
      {/* ============================================================ */}
      <div className="w-full lg:w-[480px] xl:w-[520px] flex items-center justify-center p-6 sm:p-10 lg:p-12 z-20 shrink-0">
        <Card className="w-full max-w-[440px] shadow-2xl border-border/80 bg-surface/90 backdrop-blur-xl">
          <CardHeader className="items-center text-center pb-2">
            <Logo variant="symbol" size="lg" color="brand" className="mb-2" />

            <Heading as="h2" size="h2" className="text-white font-bold text-2xl tracking-tight">
              {t("form.welcome")}
            </Heading>
            <Text variant="caption" color="muted" className="mt-1">
              {t("form.welcomeSubtitle")}
            </Text>
          </CardHeader>

          <CardContent className="flex flex-col gap-4 pt-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Campo: Correo Electrónico */}
              <div className="flex flex-col gap-1.5">
                <Text
                  as="label"
                  variant="label"
                  htmlFor="portal-email-dark"
                  className="text-slate-200 font-semibold text-xs"
                >
                  {t("form.emailLabel")}
                </Text>
                <Input
                  id="portal-email-dark"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t("form.emailPlaceholder")}
                  leftIcon={<Mail className="h-4 w-4" />}
                />
              </div>

              {/* Campo: Contraseña */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <Text
                    as="label"
                    variant="label"
                    htmlFor="portal-password-dark"
                    className="text-slate-200 font-semibold text-xs"
                  >
                    {t("form.passwordLabel")}
                  </Text>
                  <Button
                    variant="link"
                    size="sm"
                    asChild
                    className="p-0 h-auto text-xs font-medium"
                  >
                    <a href="#forgot-password">{t("form.forgotPassword")}</a>
                  </Button>
                </div>
                <PasswordInput
                  id="portal-password-dark"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={t("form.passwordPlaceholder")}
                  leftIcon={<Lock className="h-4 w-4" />}
                />
              </div>

              {/* Recordarme */}
              <div className="flex items-center gap-2.5 pt-1">
                <Checkbox
                  id="remember-dark"
                  checked={remember}
                  onCheckedChange={(checked) => setRemember(Boolean(checked))}
                />
                <Text
                  as="label"
                  variant="label"
                  htmlFor="remember-dark"
                  className="cursor-pointer select-none text-xs font-normal text-slate-300"
                >
                  {t("form.remember")}
                </Text>
              </div>

              {/* Botón de Enviar */}
              <Button
                type="submit"
                disabled={!isFormValid}
                size="lg"
                className="w-full mt-2"
              >
                {t("form.submit")}
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </form>
          </CardContent>

          {/* Footer de la Tarjeta con Enlace a Administrador y Copyright */}
          <CardFooter className="flex flex-col items-center justify-center border-t border-border/50 pt-5 text-center text-xs text-muted-foreground gap-3">
            <Text
              as="p"
              variant="caption"
              color="muted"
              className="inline-flex items-center gap-1.5 flex-wrap justify-center text-xs text-muted-foreground"
            >
              <span>{t("form.noAccount")}</span>
              <Button
                variant="link"
                size="sm"
                asChild
                className="p-0 h-auto font-medium text-xs"
              >
                <a href="#register">{t("form.contactMssp")}</a>
              </Button>
            </Text>
            <Text
              as="p"
              variant="caption"
              className="text-[11px] text-muted-foreground/75 font-normal pt-3 border-t border-border/30 w-full text-center"
            >
              {t("form.copyright")}
            </Text>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
