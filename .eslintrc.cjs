module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  extends: [
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    '@nuxtjs/eslint-config-typescript',
  ],
  rules: {
    'prettier/prettier': 'error',
    'comma-dangle': 0,
  },
}
