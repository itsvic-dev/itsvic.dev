// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxtjs/i18n",
  ],

  i18n: {
    locales: [
      {
        code: "en",
        language: "en-US",
        name: "English",
        file: "en.yml",
      },
    ],
    defaultLocale: "en",
    baseUrl: "https://itsvic.dev",
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: "root",
    },
  },

  compatibilityDate: "2025-01-11",
});
