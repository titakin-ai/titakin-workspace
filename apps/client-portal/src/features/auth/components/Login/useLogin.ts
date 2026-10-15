"use client";

import * as React from "react";
import type { UseLoginOptions, UseLoginReturn } from "./types";

/**
 * Hook para gestionar el estado, validación y envío del formulario de Login.
 */
export const useLogin = (options: UseLoginOptions = {}): UseLoginReturn => {
  const { onLogin, initialEmail = "", initialRemember = true } = options;

  const [email, setEmail] = React.useState(initialEmail);
  const [password, setPassword] = React.useState("");
  const [remember, setRemember] = React.useState(initialRemember);

  const isFormValid = email.trim().length > 0 && password.trim().length > 0;

  const handleSubmit = React.useCallback(
    (e: React.FormEvent): void => {
      e.preventDefault();
      if (isFormValid && onLogin) {
        onLogin({ email: email.trim(), password, remember });
      }
    },
    [email, password, remember, isFormValid, onLogin]
  );

  return {
    email,
    setEmail,
    password,
    setPassword,
    remember,
    setRemember,
    isFormValid,
    handleSubmit,
  };
};
