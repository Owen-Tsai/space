import { defineNuxtModule, addComponent } from 'nuxt/kit'

export default defineNuxtModule({
  setup() {
    addComponent({
      name: 'Scrollbar',
      filePath: 'custom-vue-scrollbar'
    })
  }
})
