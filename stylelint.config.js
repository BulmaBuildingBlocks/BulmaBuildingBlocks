module.exports = {
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  extends: 'stylelint-config-recommended',
  syntax: 'scss',
  plugins: ['stylelint-scss'],
  rules: {
    'at-rule-no-unknown': null,
    'no-descending-specificity': null,
    'scss/at-rule-no-unknown': true
  }
};
