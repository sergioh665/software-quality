import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,vue}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    plugins: { vue: pluginVue },
    rules: {
      'vue/no-deprecated-slot-attribute': 'warn',
      'vue/no-deprecated-v-bind-sync': 'warn',
      'vue/no-deprecated-filter': 'warn',
      'vue/no-deprecated-functional-template': 'warn',
      'vue/no-deprecated-html-element-is': 'warn',
      'vue/no-deprecated-v-is': 'warn',
      'vue/no-deprecated-v-on-native-modifier': 'warn',
      'vue/no-deprecated-v-bind-sync': 'warn',
      'vue/multi-word-component-names': 'off',
      'no-unused-vars': 'off',
      'vue/no-reserved-component-names': 'off',
    },
  },
];