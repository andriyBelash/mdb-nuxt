// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/color-mode', "@nuxtjs/i18n", '@nuxt/image'],
  runtimeConfig: {
    public: {
      baseURL: 'https://api.themoviedb.org/3',
      apiKey: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWYxNzliMDdjMDY2OTk5ZmIxNWFlYTRhMDM3N2NmYSIsInN1YiI6IjYzNGIwNTc0YzhhMmQ0MDA3YTJmZGY0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.33M55WBIFE75LqZh_0jmFOiB0STSM8Y8NSFJuiWYUmA'
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