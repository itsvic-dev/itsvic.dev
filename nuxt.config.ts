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
        file: "en-US.yml",
        name: "🇺🇸 English",
      },
      {
        code: "pl",
        iso: "pl-PL",
        file: "pl.yml",
        name: "🇵🇱 Polski",
      },
    ],
    defaultLocale: "en",

    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: "root",
    },
  },
});
