// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/image", 
    "@nuxt/ui", 
    "@formkit/auto-animate"
  ],
  css: ["@/assets/scss/global.scss"]
})