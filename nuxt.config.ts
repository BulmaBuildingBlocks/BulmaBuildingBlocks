import { Configuration } from '@nuxt/types';
import menu from './docs/data/blocks-menu.json';

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
        content:
          'Bulma Building Blocks allows you to generate websites using snippets based on the Bulma CSS Frameworks. ' +
          'A tool for creating beautiful websites or improving an existing website by copying styled snippets directing into your code.'
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
    // Doc: https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
    // Doc: https://github.com/nuxt-community/sitemap-module
    '@nuxtjs/sitemap',
    // Doc: https://github.com/nuxt-community/analytics-module
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-166921741-1'
      }
    ]
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

  robots: {
    UserAgent: '*',
    Allow: '/',
    Sitemap: 'https://www.bulmabuildingblocks.com/sitemap.xml'
  },

  sitemap: {
    gzip: true,
    exclude: ['/html-blocks/all'],
    routes: menu.map((route) => ({
      url: route,
      changefreq: 'weekly',
      priority: 1,
      lastmodISO: new Date().toISOString().split('T')[0]
    }))
  },

  serverMiddleware: ['redirect-ssl']
};

export default nuxtConfig;
