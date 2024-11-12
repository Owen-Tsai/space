<template>
  <div ref="blob" class="blob" />
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const { color, size, blur, animated } = defineProps<{
  color: string
  size: string
  blur: string
  animated?: boolean
}>()

const blob = useTemplateRef('blob')

onMounted(() => {
  if (animated) {
    gsap.to(blob.value, {
      x: 'random(-1vw, 1vw)',
      y: 'random(-1vh, 1vh)',
      scale: 'random(0.9, 1.1)',
      repeat: -1,
      repeatRefresh: true,
      ease: 'none',
      duration: 2
    })
  }
})

onBeforeUnmount(() => {
  gsap.killTweensOf(blob.value)
})
</script>

<style lang="scss" scoped>
.blob {
  position: absolute;
  width: v-bind(size);
  height: v-bind(size);
  overflow: hidden;
  background-color: v-bind(color);
  border-radius: 50%;
  filter: blur(v-bind(blur));
}
</style>
