// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/color-mode', "@nuxtjs/i18n", '@nuxt/image'],
  runtimeConfig: {
    public: {
      baseURL: 'https://api.themoviedb.org/3',
    },
  },
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