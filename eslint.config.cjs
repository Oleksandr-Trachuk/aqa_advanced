// eslint.config.cjs — ESLint v9 flat config (CommonJS)
const js = require('@eslint/js');
const prettier = require('eslint-plugin-prettier');
const globals = require('globals');

module.exports = [
  {
    ignores: ['**/node_modules/**', 'dist/**', 'coverage/**', '.husky/**'],
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'script', // CommonJS
      globals: {
        ...globals.node,
        fetch: true,
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
];
