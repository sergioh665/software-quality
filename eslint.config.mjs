import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts,vue}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {files: ["**/*.vue"], languageOptions: {parserOptions: {parser: tseslint.parser}}},
  {
    extends: ['airbnb'],
    rules: {
      // Regras globais
      "no-unused-vars": "warn",
      "vue/multi-word-component-names": "off",
    },
  },
  {
    files: ["src/views/**/*.js"], // Especifica a pasta
    rules: {
      // Regras específicas para arquivos na pasta src/views
      "no-console": "error",
    },
  },
  {
    ignorePatterns: [
      "node_modules/",
      "config/*.js",
      "src/specific-folder/",
      "src/**", // Ignora todos os arquivos e pastas dentro de src
    ],
  },
];