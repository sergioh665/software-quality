// eslint.config.mjs
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginVue from "eslint-plugin-vue";
import pkg from "@eslint/js";
const { ESLint } = pkg;

// Usando require ao invés de import
const globals = require("globals");

/** @type {import('eslint').Linter.Config} */
export default {
  ignores: [
    "node_modules/**",
    "dist/**",
    "build/**",
  ],
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      languageOptions: {
        parser: tseslint.parser,
      },
      plugins: {
        "@typescript-eslint": tseslint,
        vue: pluginVue,
      },
      rules: {
        ...tseslint.configs.recommended,
        ...pluginVue.configs["flat/essential"],
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