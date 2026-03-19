// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxtjs/i18n"],

  content: {
    build: {
      markdown: {
        highlight: {
          theme: "catppuccin-mocha",
          langs: ["py", "asm"],
        },
      },
    },
    database: {
      type: "d1",
      bindingName: "DB",
    },
  },

  i18n: {
    locales: [
      {
        code: "en",
        language: "en-US",
        name: "English",
        file: "en.yml",
      },
      {
        code: "pl",
        language: "pl-PL",
        name: "English",
        file: "pl.yml",
      },
    ],
    defaultLocale: "en",
    baseUrl: "https://itsvic.dev",
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: "root",
    },
  },

  vite: {
    optimizeDeps: {
      include: [
        "simple-icons",
        "@heroicons/vue/20/solid",
        "@heroicons/vue/24/solid",
      ],
    },
  },

  experimental: {
    viewTransition: true,
  },

  compatibilityDate: "2026-03-19",
});
