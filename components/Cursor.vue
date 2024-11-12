<template>
  <div class="cursor" :style="style"></div>
</template>

<script setup lang="ts">
import type { CSSProperties } from 'vue'

const { fullPath } = useRoute()

const { x, y } = useMouse({ touch: false })

const style = computed<CSSProperties>(() => ({
  left: x.value + 'px',
  top: y.value + 'px'
}))

watch(
  () => fullPath,
  () => {
    const interactivables = document.querySelectorAll('a, button')
    console.log(interactivables)
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
.cursor {
  position: absolute;
  background-color: var(--color-text);
  border-radius: 50%;
  height: clamp(1vw, 1rem, 2rem);
  width: clamp(1vw, 1rem, 2rem);
  will-change: transform, top, left;
  transform: scale(1);
  transition: none;
}
</style>
