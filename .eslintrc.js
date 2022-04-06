module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {},
  overrides: [
    {
      files: ['*.stories.jsx'],
      rules: {
        'react/jsx-props-no-spreading': 0,
        'react/function-component-definition': 0,
        'import/no-extraneous-dependencies': 0,
      },
    },
  ],
};
