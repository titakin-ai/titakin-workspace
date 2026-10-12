import { addons } from "storybook/manager-api";
import { create } from "storybook/theming";

const titakinDarkTheme = create({
  base: "dark",
  brandTitle: "Titakin UI",
  brandTarget: "_self",
  colorPrimary: "#2F80FF",
  colorSecondary: "#5AA7FF",
  appBg: "#0B1D36",
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

addons.setConfig({
  theme: titakinDarkTheme,
});
