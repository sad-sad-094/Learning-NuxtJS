// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app:
  {
    head: {
      title: 'Nuxt Commerce App',
      meta: [
        { name: 'description', content: 'Everything about Nuxt 3', }
      ],
      link: [
        { rel: 'stylesheet', href: 'http://fonts.googleapis.com/icon?family=Material+Icons' }
      ],
    },
  }
})
