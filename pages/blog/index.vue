<template>
  <div class="relative">
    <div class="title mt-8vh mb-6vh">
      BLOG
      <span ref="loader" class="loader">\</span>
    </div>
    <div class="list">
      <div class="flex items-center justify-between gap-2vw"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

const loader = useTemplateRef('loader')
const tl = gsap.timeline({ defaults: { value: '|', speed: 2 } })

onMounted(() => {
  tl.add('start')
    .to(loader.value, { text: { value: '|', speed: 20 } })
    .to(loader.value, { text: { value: '/', speed: 20 } })
    .to(loader.value, { text: { value: '—', speed: 20 } })
    .to(loader.value, { text: { value: '\\', speed: 20 } })
    .add('end')

  tl.repeat(-1)
})

onBeforeUnmount(() => {
  tl.kill()
})
</script>

<style lang="scss" scoped>
.title {
  font-weight: 900;
  text-transform: uppercase;
  font-size: clamp(3rem, 5.6vw, 10vw);
  line-height: clamp(3rem, 5.6vw, 10vw);
  font-family: 'Raleway', serif;
  // -webkit-text-stroke: 3px var(--color-text);
  // color: transparent;
}
.loader {
  font-family: 'font-mono', monospace;
  opacity: 0.24;
  transform: scale(0.85);
}
</style>
