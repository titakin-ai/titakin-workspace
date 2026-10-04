import type { Preview } from "@storybook/react-vite";
import { withThemeByClassName } from "@storybook/addon-themes";
import "../src/styles/global.css";

const preview: Preview = {
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    controls: {
      expanded: true,
      matchers: { color: /(background|color)$/i },
    },
    // Fail a11y checks (e.g. colour contrast) instead of only reporting them.
    a11y: { test: "error" },
  },
  decorators: [
    // Toggles the `.dark` class on <html>, the same mechanism the apps use.
    withThemeByClassName({
      themes: { light: "", dark: "dark" },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
