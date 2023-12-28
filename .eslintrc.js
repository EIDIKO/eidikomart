// .eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends:  [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    node: true,
    es2021: true,
    jest: true, // Add the Jest environment
  },
  rules: {
    'semi': ['error', 'always'], // Enforce the use of semicolons
    'indent': ['error', 2], // Enforce 2 spaces indentation
    'no-console': 'warn', // Disallow the use of console.log
    //'no-console-debug': 'error', 
    'quotes': ['error', 'single']
  },
};
  