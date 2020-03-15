import { Configuration } from '@nuxt/types';

import { I18N } from './shared/config';

const port = process.env.PORT || '3000';
const host = process.env.HOST || 'localhost';

const nuxtConfig: Configuration = {
  mode: 'universal',

  env: {
    host,
    port
  },

  server: {
    host,
    port
  },

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/styles/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-imports'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/buefy/nuxt-buefy
    'nuxt-buefy',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt/typescript
    '@nuxt/typescript-build'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/nuxt-community/nuxt-i18n
    ['nuxt-i18n', I18N],
    // Doc: https://github.com/webcore-it/nuxt-clipboard2
    'nuxt-clipboard2'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true // Can be also an object with default options
  },

  router: {
    linkActiveClass: 'is-active-secondary',
    linkExactActiveClass: 'is-active'
  },

  /*
   ** Build configuration
   */
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-decorators', { legacy: true }],
        ['@babel/plugin-proposal-class-properties', { loose: true }]
      ]
    },
    extend(config: any) {
      // ..
      config.module.rules.push({
        test: /\.html$/i,
        loader: 'html-loader'
      });
    }
  },

  serverMiddleware: ['redirect-ssl']
};

export default nuxtConfig;
