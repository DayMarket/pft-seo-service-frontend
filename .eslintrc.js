const isProduction = process.env.NODE_ENV === 'production';
const commonEslintConfig = require('@market-tech/frontend-common-linters/eslint-config.json');

module.exports = {
  ...commonEslintConfig,
  rules: {
    ...commonEslintConfig.rules,
    'no-console': isProduction ? ['error', { allow: ['error'] }] : 'off',
    'no-debugger': isProduction ? 'error' : 'off',
    'vue/v-on-event-hyphenation': ['error', 'never', { 'ignore': ['map-was-initialized'] }],
  },
};
