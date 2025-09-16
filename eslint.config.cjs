// eslint.config.cjs — ESLint v9 flat config (CommonJS)
const js = require('@eslint/js');
const prettier = require('eslint-plugin-prettier');
const globals = require('globals');

module.exports = [
  // Ігнор (замість .eslintignore)
  {
    ignores: ['**/node_modules/**', 'dist/**', 'coverage/**', '.husky/**'],
  },

  // Загальні правила для всіх *.js (Node + fetch)
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script', // CommonJS; для ESM можна зробити окремий блок із 'module'
      globals: {
        ...globals.node, // console, require, module, setTimeout, process, __dirname, ...
        fetch: true, // Node 18+ має глобальний fetch
      },
    },
    plugins: { prettier },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      'prefer-const': 'warn',
      'prettier/prettier': 'error',
    },
  },

  // ОКРЕМИЙ БЛОК ДЛЯ ТЕСТІВ (Jest)
  {
    files: ['**/*.test.js', '**/__tests__/**/*.js'],
    languageOptions: {
      // додаємо jest-глобалі: describe, test, expect, jest, beforeEach, afterEach, ...
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      // приклад: дозволити console в тестах
      'no-console': 'off',
    },
  },
];
