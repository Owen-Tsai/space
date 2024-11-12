<template>
  <div class="button flex items-center translate-y-1/2" @click="toggleDark()">
    <div class="dot"></div>
    <div class="dot inverted -translate-x-1/3"></div>
  </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
  selector: 'html'
})
const toggleDark = useToggle(isDark)
</script>

<style lang="scss" scoped>
.button {
  transition: all 0.2s ease-out;
  cursor: pointer;
  &:hover {
    transform: translateY(0) scale(1.2);
  }
}
.dot {
  --size: clamp(1vw, 1rem, 2rem);
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  border: 1px solid var(--color-text);

  &.inverted {
    background-color: var(--color-text);
  }
}
</style>
