// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    css: "/<rootDir>/assets/css"
  },
  app: {
    head: {
      link: [{ rel: 'stylesheet', href:'https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css'}]
    }
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
