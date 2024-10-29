// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxtjs/i18n",
    "@vueuse/motion/nuxt",
  ],
  i18n: {
    lazy: false,
    langDir: "lang",
    locales: [
      {
        code: "en",
        iso: "en-US",
        file: "en.yml",
      },
      {
        code: "pl",
        iso: "pl-PL",
        file: "pl.yml",
      },
    ],
    defaultLocale: "en",

    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: "root",
    },
  },
});
