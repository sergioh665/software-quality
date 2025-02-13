// eslint.config.mjs
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginVue from "eslint-plugin-vue";
import globals from "globals";

/** @type {import('eslint').Linter.Config} */
export default {
  ignores: [
    "node_modules/**",
    "dist/**",
    "build/**",
  ],
  languageOptions: {
    globals: globals.browser,
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      languageOptions: {
        parser: "@typescript-eslint/parser",
      },
      plugins: {
        "@typescript-eslint": tseslint,
        vue: pluginVue,
      },
      rules: {
        ...tseslint.configs.recommended.rules,
        ...pluginVue.configs["essential"].rules,
        "no-unused-vars": "warn",
        "vue/multi-word-component-names": "off",
      },
    },
    {
      files: ["**/*.vue"],
      languageOptions: {
        parser: "vue-eslint-parser",
        parserOptions: {
          parser: "@typescript-eslint/parser",
        },
      },
      plugins: {
        vue: pluginVue,
      },
      rules: {
        ...pluginVue.configs["essential"].rules,
      },
    },
    {
      files: ["src/views/**/*.js"],
      rules: {
        "no-deprecated-api": "warn",
      },
    },
  ],
  ignorePatterns: [
    "node_modules/",
    "config/*.js",
    "src/specific-folder/",
  ],
};
