module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/destructuring-assignment": "off",
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    "react/prop-types": "off",
    "no-unused-expressions": "off",
    "react/jsx-no-bind": "off",
    "import/no-extraneous-dependencies": "off",
    "no-unused-vars": "off",
  },
};
