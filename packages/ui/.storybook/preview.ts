import type { Preview } from "@storybook/react-vite";
import { withThemeByClassName } from "@storybook/addon-themes";
import { create } from "storybook/theming";
import "../src/styles/global.css";

const titakinDarkTheme = create({
  base: "dark",
  brandTitle: "Titakin UI",
  brandTarget: "_self",
  colorPrimary: "#2F80FF",
  colorSecondary: "#5AA7FF",
  appBg: "#0F2748",
  appContentBg: "#0F2748",
  appPreviewBg: "#0F2748",
  appBorderColor: "#243149",
  appBorderRadius: 8,
  fontBase: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontCode: 'ui-monospace, Menlo, Monaco, "Roboto Mono", monospace',
  textColor: "#F4F7FB",
  textInverseColor: "#0F2748",
  textMutedColor: "#8D9AAF",
  barTextColor: "#8D9AAF",
  barSelectedColor: "#2F80FF",
  barHoverColor: "#5AA7FF",
  barBg: "#0F2748",
  inputBg: "#111A2B",
  inputBorder: "#243149",
  inputTextColor: "#F4F7FB",
  inputBorderRadius: 6,
  buttonBg: "#111A2B",
  buttonBorder: "#243149",
  booleanBg: "#111A2B",
  booleanSelectedBg: "#2F80FF",
});

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        { name: "dark", value: "#0F2748" },
        { name: "surface", value: "#111A2B" },
      ],
    },
    docs: {
      theme: titakinDarkTheme,
    },
    controls: {
      expanded: true,
      matchers: { color: /(background|color)$/i },
    },
    a11y: { test: "error" },
  },
  decorators: [
    withThemeByClassName({
      themes: { light: "light", dark: "dark" },
      defaultTheme: "dark",
    }),
  ],
};

export default preview;
