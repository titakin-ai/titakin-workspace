import type React from "react";

export interface LoginCredentials {
  readonly email: string;
  readonly password: string;
  readonly remember: boolean;
}

export interface FeatureCapability {
  readonly id: string;
  readonly icon: React.ComponentType<{ readonly className?: string }>;
  readonly translationKey: string;
}

export interface LoginProps {
  readonly backgroundImageSrc?: string;
  readonly globeImageSrc?: string;
  readonly onLogin?: (credentials: LoginCredentials) => void;
  readonly className?: string;
}

export interface UseLoginOptions {
  readonly onLogin?: (credentials: LoginCredentials) => void;
  readonly initialEmail?: string;
  readonly initialRemember?: boolean;
}

export interface UseLoginReturn {
  readonly email: string;
  readonly setEmail: (value: string) => void;
  readonly password: string;
  readonly setPassword: (value: string) => void;
  readonly remember: boolean;
  readonly setRemember: (value: boolean) => void;
  readonly isFormValid: boolean;
  readonly handleSubmit: (e: React.FormEvent) => void;
}
