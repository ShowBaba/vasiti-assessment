module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'linebreak-style': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'no-unused-vars': 'warn',
    'comma-dangle': 'off',
    'no-unused-expressions': 0,
    'no-use-before-define': 0,
    'no-shadow': 0,
    'no-nested-ternary': 0,
    'no-undef': 0,
    'no-console': 0,
  },
};
