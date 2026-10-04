# Titakin - Cybersecurity B2B SaaS Monorepo

Bienvenido al repositorio principal de **Titakin**, una plataforma SaaS B2B de ciberseguridad. Este proyecto está construido utilizando una arquitectura moderna de monorepo gestionada por **Turborepo** y **pnpm workspaces**, diseñada para escalar, compartir código de manera eficiente y mantener estándares de ingeniería innegociables.

## 🏗️ Estructura del Monorepo

El repositorio está dividido en aplicaciones (`apps/`) y paquetes compartidos (`packages/`).

```text
titakin-workspace/
├── apps/
│   ├── client-portal/    # Portal del Cliente (Next.js App Router)
│   └── mssp-console/     # Consola de Administración MSSP (Next.js App Router)
├── packages/
│   ├── ui/               # Sistema de Diseño y Componentes Base (React, Tailwind, Radix, Storybook)
│   └── config/           # Configuraciones Globales Compartidas (ESLint, TSConfig, Tailwind Preset)
└── turbo.json            # Configuración del pipeline de Turborepo
```

## 🚀 Cómo Empezar

### Prerrequisitos
- Node.js (v20+)
- [pnpm](https://pnpm.io/) (v10+)

### Instalación y Ejecución
1. Instala las dependencias desde la raíz:
   ```bash
   pnpm install
   ```
2. Levanta los servidores de desarrollo de las aplicaciones (Client Portal y MSSP Console):
   ```bash
   pnpm dev
   ```
3. Para desarrollar o previsualizar componentes de UI de forma aislada, levanta Storybook:
   ```bash
   pnpm storybook
   ```

### Scripts Disponibles (Root)
- `pnpm build`: Construye todas las apps y paquetes.
- `pnpm typecheck`: Ejecuta validación estricta de TypeScript en todo el monorepo.
- `pnpm lint`: Ejecuta las reglas personalizadas de ESLint.

---

## 🏛️ Reglas Arquitectónicas y de Ingeniería

Para mantener la calidad y escalabilidad del código, este proyecto **aplica de forma innegociable** principios SOLID y prácticas de Clean Code. Cualquier PR que viole estas reglas será rechazado.

### 1. Tipado Estricto (TypeScript)
- **Cero Tolerancia a `any`:** Prohibido el uso de `any`. Si el tipo es desconocido, usar `unknown` o genéricos.
- **Sin Prefijo "I" en Interfaces:** Las interfaces se nombran de forma limpia (ej. usar `BadgeProps` en lugar de `IBadgeProps`).
- **Retornos Explícitos:** Toda función, componente o custom hook debe declarar explícitamente su tipo de retorno (ej. `(): React.ReactElement =>`).

### 2. Principios SOLID en UI
- **Liskov Substitution Principle (LSP):** Todos los componentes base de UI deben extender los atributos nativos de HTML (ej. `interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>`).
- **Single Responsibility (SRP):** Los componentes en `packages/ui` deben ser puramente presentacionales (Dumb Components). La lógica de negocio reside en las `apps/`.
- **Open/Closed Principle (OCP):** Favorecer la composición. En lugar de pasar múltiples props booleanas de configuración (anti-patrones como `withIcon` o `hasDot`), usar `children` o el patrón **`asChild` de Radix UI** (`@radix-ui/react-slot`) para polimorfismo.

### 3. Estructura de Componentes
- **Refs:** Uso obligatorio de `React.forwardRef` en todos los componentes que renderizan elementos del DOM.
- **Exportaciones Nombradas:** Se prohíbe el uso de `export default` (excepto donde sea estrictamente requerido por Next.js o Storybook).
- **Variantes y Clases:** Gestión estricta mediante `class-variance-authority` (`cva`) y la utilidad `cn` (fusión de `clsx` y `tailwind-merge`). Prohibida la concatenación manual de strings para Tailwind.
- **Storybook:** Todo componente creado en `packages/ui` debe estar acompañado de su archivo `.stories.tsx`.

### 4. Ecosistema y Estilos
- **Compatibilidad Next.js:** Todo componente interactivo en `packages/ui` (que use hooks, estado o primitivos interactivos de Radix) debe incluir la directiva `"use client"` en su primera línea. Los componentes puramente presentacionales y estáticos deben omitirla para renderizarse como Server Components.
- **Theming Multi-Tenant:** El sistema de diseño maneja los colores semánticos a través de variables CSS (`--primary`, `--destructive`, `--background`) para permitir inyección dinámica de temas claros/oscuros.
- **Tipografía:** Se emplea una pila Sans-Serif moderna inyectada en la capa base de Tailwind para consistencia corporativa en todo el ecosistema.
