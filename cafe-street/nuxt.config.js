export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  target: 'static',
  ssr: false,
  generate: {
    fallback: true
  },
  
  head: {
    title: 'cafe-street',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/coffee icon.png' }
    ],
    script: [
      { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js" },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/ScrollTrigger.min.js"},
      { src: '/vender/SplitText.min.js'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~/plugins/carousel.js', ssr: false},
    {src: '~/plugins/calender.js', ssr: false}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [

  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
     /*
         ** You can extend webpack config here
         */
         extend() {},
         transpile: ['gsap'],
  }
}
