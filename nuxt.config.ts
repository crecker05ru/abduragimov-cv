// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    baseUrl: '', // can be overridden by NUXT_API_SECRET environment variable
    
    public: {
      apiBase: '', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
      baseWS: process.env.NUXT_PUBLIC_API_WS || '',
    }
  },
  app: {
    baseURL: process.env.BASE_URL || '',
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
  modules: [
    // ['nuxt-use-sound', 
    //   // {
    //   //   sound: {
    //   //     back: {
    //   //       src: "./assets/sounds/pop_sound.mp3",
    //   //       options: {
    //   //         volume: 0.25
    //   //       }
    //   //     }
    //   //   },
    //   // }
    //   {
    //     sound: {
    //       sounds: {
    //         back: {
    //           src: "/back.wav",
    //           options: {
    //             volume: 0.25
    //           }
    //         }
    //       }
    //     }
    //   }
    // ]
  ],
  vite: {
    plugins: [
      svgLoader(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
            additionalData: '@import "./assets/styles/variables.scss";',
        },
    },
    },
  }
})
