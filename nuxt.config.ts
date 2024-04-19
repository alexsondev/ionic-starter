// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/ionic",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
    "@nuxt/eslint"
  ],
  css: ['animate.css/animate.min.css', './assets/css/styles.scss'],
  imports: {
     dirs: ['./store','./types']
  },
})
