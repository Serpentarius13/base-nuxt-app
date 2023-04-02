// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // ...
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
  ],
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  css: ["@/static/main.scss"],
  runtimeConfig: {
    apiUrl: process.env.API_URL,
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/scss/mixins.scss";',
        },
      },
    },
  },
});
