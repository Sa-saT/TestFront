// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
