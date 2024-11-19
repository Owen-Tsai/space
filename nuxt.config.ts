// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: false,
  app: {
    head: {
      title: "Owen's Space"
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    '@nuxt/fonts',
    '@nuxtjs/mdc',
    '@vueuse/nuxt',
    'nuxt-svgo',
    '@vueuse/motion/nuxt',
    '@nuxt/icon',
    '@nuxt/image'
  ],
  css: [
    '~/assets/styles/reset.scss',
    '~/assets/styles/global.scss',
    'custom-vue-scrollbar/dist/style.css'
  ],
  fonts: {
    defaults: {
      weights: [100, 400, 900],
      styles: ['normal'],
      subsets: ['latin']
    }
  },
  icon: {
    provider: 'server',
    customCollections: [
      {
        prefix: 'o',
        dir: './assets/icons'
      }
    ]
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler'
        }
      }
    }
  }
})

