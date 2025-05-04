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
    lazy: false,
    langDir: "lang",
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "🇬🇧 English",
        file: "en.yml",
      },
      {
        code: "pl",
        iso: "pl-PL",
        name: "🇵🇱 Polski",
        file: "pl.yml",
      },
    ],
    defaultLocale: "en",

    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: "root",
    },
  },

  compatibilityDate: "2025-01-11",
});
