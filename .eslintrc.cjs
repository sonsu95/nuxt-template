module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true

  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  extends: [
    'plugin:nuxt/recommended',
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    '@nuxtjs/eslint-config-typescript'
  ]
}
