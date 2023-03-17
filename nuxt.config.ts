// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Learn Nuxt',
      meta: [
        { charset: 'utf-8' }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  tailwindcss: {
    exposeConfig: true
  }
})
