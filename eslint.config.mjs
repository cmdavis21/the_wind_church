import { fixupConfigRules, fixupPluginRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import _import from 'eslint-plugin-import';
import tailwind from 'eslint-plugin-tailwindcss';
import { defineConfig } from 'eslint/config';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default defineConfig([
  {
    extends: fixupConfigRules(
      compat.extends(
        'next/core-web-vitals',
        'next',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript'
      )
    ),

    plugins: {
      '@typescript-eslint': fixupPluginRules(typescriptEslint),
      import: fixupPluginRules(_import),
      tailwindcss: tailwind,
    },

    rules: {
      /* -----------------------------
       * IMPORT ORDER
       * ----------------------------- */
      'import/order': [
        'warn',
        {
          groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index', 'object'],
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always',
        },
      ],

      /* -----------------------------
       * QUOTES — enforce single quotes
       * ----------------------------- */
      quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
      '@typescript-eslint/quotes': [
        'error',
        'single',
        { avoidEscape: true, allowTemplateLiterals: true },
      ],

      /* -----------------------------
       * TAILWIND CLASSNAME SORTING
       * ----------------------------- */
      'tailwindcss/classnames-order': [
        'warn',
        {
          customRegex: {
            colors: [
              '^brand-', // brand.primary, brand.dark, etc.
              '^light-', // light.bg0, light.text1
              '^dark-', // dark.bg0, dark.text1
              '^semantic-', // semantic.success, semantic.error
            ],
          },
        },
      ],
      'tailwindcss/no-custom-classname': 'off', // optional: allows your own class names
    },
  },
]);
