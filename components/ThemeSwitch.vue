<template>
  <div
    role="button"
    class="flex items-center relative overflow-hidden"
    @click="toggleDark()"
    @mouseenter="tween.play()"
    @mouseleave="tween.reverse()"
  >
    <div ref="el">
      <div class="text-right">{{ isDark ? 'N' : 'L' }}</div>
      <div class="text-right">{{ isDark ? 'L' : 'N' }}</div>
    </div>
    <span>IGHT</span>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import gsap from 'gsap'

const el = useTemplateRef('el')

const isDark = useDark({
  selector: 'html'
})

const toggleDark = useToggle(isDark)

let tween: gsap.core.Tween

onMounted(() => {
  tween = gsap.to(el.value, {
    y: -16,
    duration: 0.5,
    paused: true,
    ease: 'power1.inOut'
  })
})

onBeforeUnmount(() => {
  tween.kill()
})
</script>

<style lang="scss" scoped>
div {
  cursor: pointer;
  height: clamp(1vw, 1rem, 1.5rem);
}
</style>
