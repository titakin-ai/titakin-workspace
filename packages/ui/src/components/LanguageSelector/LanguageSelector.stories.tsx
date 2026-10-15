import type { ReactElement } from "react";
import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  LanguageSelector,
  DEFAULT_LANGUAGES,
  type LanguageOption,
} from "./LanguageSelector";

const meta = {
  title: "Components/LanguageSelector",
  component: LanguageSelector,
  parameters: {
    layout: "centered",
  },
  args: {
    value: "es",
    variant: "minimal",
    size: "sm",
    showNativeName: false,
    menuAlign: "right",
  },
  argTypes: {
    variant: {
      control: "inline-radio",
      options: ["minimal", "outline", "ghost"],
      description: "Variante visual del selector.",
      table: { defaultValue: { summary: "minimal" } },
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md"],
      description: "Tamaño y espaciado del trigger.",
      table: { defaultValue: { summary: "sm" } },
    },
    showNativeName: {
      control: "boolean",
      description: "Si es verdadero, muestra el nombre completo nativo ('Español') en lugar del código ('ES').",
      table: { defaultValue: { summary: "false" } },
    },
    menuAlign: {
      control: "inline-radio",
      options: ["left", "right"],
      description: "Alineación del menú desplegable.",
      table: { defaultValue: { summary: "right" } },
    },
  },
} satisfies Meta<typeof LanguageSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

function InteractiveSelector(props: React.ComponentProps<typeof LanguageSelector>): ReactElement {
  const [lang, setLang] = React.useState(props.value ?? "es");
  return <LanguageSelector {...props} value={lang} onValueChange={setLang} />;
}

export const Minimal: Story = {
  name: "Minimal (Figma Desktop - Principal)",
  render: (args): ReactElement => <InteractiveSelector {...args} />,
  args: {
    variant: "minimal",
  },
};

export const Outline: Story = {
  name: "Outline Variant",
  render: (args): ReactElement => <InteractiveSelector {...args} />,
  args: {
    variant: "outline",
    size: "md",
  },
};

export const Ghost: Story = {
  name: "Ghost Variant",
  render: (args): ReactElement => <InteractiveSelector {...args} />,
  args: {
    variant: "ghost",
    size: "md",
  },
};

const extendedLanguages: LanguageOption[] = [
  ...DEFAULT_LANGUAGES,
  { code: "pt", label: "PT", nativeLabel: "Português" },
  { code: "fr", label: "FR", nativeLabel: "Français" },
];

export const MultipleLanguages: Story = {
  name: "Multiple Languages (ES, EN, PT, FR)",
  render: (args): ReactElement => (
    <InteractiveSelector {...args} languages={extendedLanguages} showNativeName />
  ),
  args: {
    variant: "outline",
    size: "md",
  },
};
