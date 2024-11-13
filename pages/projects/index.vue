<template>
  <div class="">
    <div class="flex items-center justify-between my-16vh">
      <div class="title">
        PROJECTS
        <span ref="loader" class="loader">\</span>
      </div>
      <div>
        <p>珍道具</p>
      </div>
    </div>

    <div class="list">LIST</div>
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
}
.loader {
  font-family: 'font-mono', monospace;
  opacity: 0.24;
}
.list {
  border-top: 1px solid var(--color-text);
}
</style>
