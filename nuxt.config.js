import { resolve } from 'path'
import ioCofing from './io.config'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  ssr: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  // 순서대로 실행 되기 때문에 순서에 대해서 잘 고려되어야 할 필요가 있다.
  modules: [
    'nuxt-buefy',
    '@nuxtjs/axios/',
    'nuxt-socket-io'
  ],
  io: ioCofing,

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {

  },
  serverMiddleware: [
    '~/api/index.js'
  ],
  alias: {
    '@': resolve( __dirname ),
    '@LeftNav': resolve( __dirname, './components/LeftNav' ),
    '@MainContainer': resolve( __dirname, './components/MainContainer' ),
  }
}
