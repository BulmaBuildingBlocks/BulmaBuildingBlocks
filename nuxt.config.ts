import { Configuration } from '@nuxt/types';
import menu from './docs/data/menu.json';

const port = process.env.PORT || '3000';
const host = process.env.HOST || 'localhost';

const nuxtConfig: Configuration = {
  mode: 'universal',
  srcDir: 'docs',
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
    title: 'Bulma Building Blocks',
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
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat'
      }
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
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt/typescript
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/analytics-module
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-166921741-1'
      }
    ],
    // Doc: https://github.com/nuxt-community/robots-module
    [
      '@nuxtjs/robots',
      {
        robots: {
          UserAgent: '*',
          Allow: '/',
          Sitemap: 'https://www.bulmabuildingblocks.com/sitemap.xml'
        }
      }
    ],
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
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
    extend(config, ctx): void {
      config.devtool = ctx.isClient ? 'eval-source-map' : 'inline-source-map';

      if (config.module) {
        config.module.rules.push({
          test: /\.html$/i,
          loader: 'html-loader'
        });
      }
    }
  },

  pwa: {
    meta: {
      /* meta options */
      name: 'Bulma Building Blocks'
    }
  },

  sitemap: {
    hostname: 'https://www.bulmabuildingblocks.com',
    gzip: true,
    exclude: ['/html-blocks/all'],
    routes: [...menu]
  },

  serverMiddleware: ['redirect-ssl']
};

export default nuxtConfig;
