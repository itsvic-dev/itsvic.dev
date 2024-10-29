export default defineI18nConfig(() => ({
  fallbackLocale: "en",
  datetimeFormats: {
    en: {
      short: {
        day: "numeric",
        month: "short",
        year: "numeric",
      },
    },
    pl: {
      short: {
        day: "numeric",
        month: "long",
        year: "numeric",
      },
    },
  },
}));
