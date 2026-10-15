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
  LanguageSelector,
} from "@titakin/ui";
import { useAppLocale, type SupportedLocale } from "@/providers/I18nProvider";
import { useLogin } from "./useLogin";
import {
  DEFAULT_BACKGROUND_SRC,
  DEFAULT_GLOBE_SRC,
  LOGIN_CAPABILITIES,
} from "./constants";
import type { LoginProps } from "./types";

/**
 * Componente oficial de Login para el Portal de Cliente de Titakín.
 * Internacionalizado con `next-intl` y el componente `LanguageSelector` del Design System.
 */
export const Login: React.FC<LoginProps> = ({
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
      className={`min-h-screen w-full flex flex-col lg:flex-row bg-[#020A1D] overflow-hidden select-none font-sans ${className ?? ""}`}
    >
      {/* ============================================================ */}
      {/* SECCIÓN IZQUIERDA: HERO VISUAL CON BACKGROUND Y GLOBO 3D     */}
      {/* ============================================================ */}
      <div
        className="relative flex-1 flex flex-col justify-between p-8 lg:p-14 min-h-[500px] lg:min-h-screen overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImageSrc})` }}
      >
        {/* Globo Holográfico */}
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

        {/* Header Superior Izquierdo: Logotipo */}
        <div className="relative z-10">
          <Logo
            variant="full"
            size="lg"
            color="brand"
            uppercase
            textClassName="text-xl lg:text-2xl font-bold tracking-widest text-white"
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
        <div className="relative z-10 flex items-center gap-3 pt-6">
          <div className="w-[3px] h-9 bg-brand-500 rounded-full" />
          <Text variant="caption" className="text-slate-300 font-normal leading-snug">
            {t("tagline.line1")}
            <br />
            {t("tagline.line2")}
          </Text>
        </div>
      </div>

      {/* ============================================================ */}
      {/* SECCIÓN DERECHA: PANEL DE FORMULARIO DE ACCESO               */}
      {/* ============================================================ */}
      <div className="w-full lg:w-[480px] xl:w-[520px] bg-white flex flex-col justify-between p-8 sm:p-12 lg:p-14 shadow-[-20px_0_50px_rgba(0,0,0,0.45)] z-20 shrink-0">
        {/* Selector de Idioma Reutilizable de @titakin/ui */}
        <div className="flex justify-end">
          <LanguageSelector
            value={locale}
            onValueChange={(newLocale) => setLocale(newLocale as SupportedLocale)}
            variant="minimal"
          />
        </div>

        {/* Formulario de Login */}
        <div className="my-auto py-6">
          <Logo
            variant="full"
            size="lg"
            color="brand"
            uppercase
            textClassName="text-2xl font-bold tracking-wider text-[#0A1A3B]"
            className="mb-8"
          />

          <div className="mb-8">
            <Heading as="h2" size="h2" className="text-[#0A1A3B] font-bold">
              {t("form.title")}
            </Heading>
            <Text variant="caption" className="text-slate-500 mt-2 leading-relaxed">
              {t("form.subtitle")}
            </Text>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Campo: Correo Electrónico */}
            <div className="flex flex-col gap-1.5">
              <Text
                as="label"
                variant="label"
                htmlFor="portal-email"
                className="text-slate-800 font-semibold text-xs"
              >
                {t("form.emailLabel")}
              </Text>
              <Input
                id="portal-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("form.emailPlaceholder")}
                leftIcon={<Mail className="h-4 w-4 text-slate-400" />}
                className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:border-brand-500 focus-visible:ring-brand-500/20"
              />
            </div>

            {/* Campo: Contraseña */}
            <div className="flex flex-col gap-1.5">
              <Text
                as="label"
                variant="label"
                htmlFor="portal-password"
                className="text-slate-800 font-semibold text-xs"
              >
                {t("form.passwordLabel")}
              </Text>
              <PasswordInput
                id="portal-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t("form.passwordPlaceholder")}
                leftIcon={<Lock className="h-4 w-4 text-slate-400" />}
                className="bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus-visible:border-brand-500 focus-visible:ring-brand-500/20"
              />
            </div>

            {/* Opciones: Recordarme y Olvidé Contraseña */}
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
                  {t("form.remember")}
                </Text>
              </div>

              <Button
                variant="link"
                size="sm"
                asChild
                className="text-xs h-auto p-0 font-medium"
              >
                <a href="#forgot-password">{t("form.forgotPassword")}</a>
              </Button>
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
        </div>

        {/* Footer: Copyright */}
        <div className="border-t border-slate-100 pt-6 text-center">
          <Text variant="caption" className="text-[11px] text-slate-400 font-normal">
            {t("form.copyright")}
          </Text>
        </div>
      </div>
    </div>
  );
};
