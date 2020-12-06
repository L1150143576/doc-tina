module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-use-before-define': 'off',
    'no-prototype-builtins': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'vue/no-mutating-props': 'off',
    "@typescript-eslint/member-delimiter-style": ["error", {
      multiline: {
        delimiter: 'none',    // 'none' or 'semi' or 'comma'
        requireLast: true,
      },
      singleline: {
        delimiter: 'semi',    // 'semi' or 'comma'
        requireLast: false,
      },
    }]
  }
}
