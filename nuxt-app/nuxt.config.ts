// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // hooks: {
  //   'pages:extend' (pages) {
  //     // add a route
  //     pages.push({
  //       name: 'browse',
  //       path: '/browse',
  //       file: '~/browse/index.vue'
  //     })
  //   }
  // },
  plugins: [
    '~/plugins/useIFetch.ts',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:8000',
    },
  },
  modules: [
    '@pinia/nuxt',
  ],
  // pinia: {
  //   autoImports: [
  //     "defineStore",
  //     "storeToRefs"
  //   ],
  // }
  // ページディレクトリ有効化
  // pages: true,

})
