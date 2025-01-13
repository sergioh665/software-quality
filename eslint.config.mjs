// eslint.config.mjs
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

// Usando require ao invés de import
const globals = require("globals");

/** @type {import('eslint').Linter.Config} */
export default {
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,ts,vue}"],
      languageOptions: {
        globals: globals.browser,  // Utiliza globals diretamente
      },
      plugins: [
        pluginJs,
        pluginVue
      ],
      extends: [
        pluginJs.configs.recommended,
        ...tseslint.configs.recommended,
        ...pluginVue.configs["flat/essential"],
      ],
      rules: {
        "no-unused-vars": "warn",
        "vue/multi-word-component-names": "off",
      },
    },
    {
      files: ["**/*.vue"],
      languageOptions: {
        parserOptions: { parser: tseslint.parser },
      },
    },
    {
      files: ["src/views/**/*.js"],
      rules: {
        "no-console": "error",
      },
    },
  ],
  ignorePatterns: [
    "node_modules/",
    "config/*.js",
    "src/specific-folder/",
    "src/**",  // Ignora todos os arquivos e pastas dentro de src
  ],
};