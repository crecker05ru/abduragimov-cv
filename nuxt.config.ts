// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    baseURL: '/abduragimov-cv/',
    buildAssetsDir: 'assets', 
    head: {
      title: 'Frontend Developer Anvar Abduragimov',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'My CV - Anvar Abduragimov.Frontend developer' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },
  css: ["./assets/styles/global.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
            additionalData: '@import "./assets/styles/variables.scss";',
        },
    },
    },
  }
})
