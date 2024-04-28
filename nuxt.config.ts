// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/color-mode', "@nuxtjs/i18n"],
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      fallbackLocale: 'en',
    },
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'uk',
        name: 'Ukrainian',
        file: 'uk.json',
      }
    ],
    lazy: true,
    langDir: 'internationalization',
    defaultLocale: 'en',
  },
})