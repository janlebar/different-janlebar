export default {
  bootstrapVue: {
    bootstrapCSS: true,
    bootstrapVueCSS: true,
    css: ['~/assets/css/tailwind.css'],
    
  },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss', '@nuxt/image'], 
  buildModules: ['@nuxt/content'],
}

