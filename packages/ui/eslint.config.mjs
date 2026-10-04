import storybook from "eslint-plugin-storybook";
import { reactLibraryConfig } from "@titakin/config/eslint/react-library";

export default [...reactLibraryConfig, ...storybook.configs["flat/recommended"]];
