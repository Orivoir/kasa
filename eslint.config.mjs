import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { version } from "react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}", "./app.jsx"]},
  {languageOptions: { globals: globals.browser }},
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version
      }
    }
  }
];