// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxt/content"],

  content: {
    highlight: {
      theme: "github-light",
      preload: ["py", "asm"],
    },
  },

  compatibilityDate: "2025-03-24",
});
