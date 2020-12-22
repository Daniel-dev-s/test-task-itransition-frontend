module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/destructuring-assignment': 'off',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'react/prop-types': 'off',
    'no-unused-expressions': 'off',
    'react/jsx-no-bind': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-use-before-define' : 'off'
  },
};
