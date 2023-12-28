// .eslintrc.js
module.exports = {
    extends: ['eslint:recommended'],
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
      // Your ESLint rules go here
    },
  };
  