<template>
  <div
    ref="parent"
    class="relative overflow-hidden"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div ref="el" class="spotlight"></div>
    <span>{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'

const { label } = defineProps<{
  label: string
}>()

const parent = useTemplateRef('parent')
const el = useTemplateRef('el')

const { elementX, elementY, isOutside } = useMouseInElement(parent)
let tween: gsap.core.Tween

const onMouseEnter = () => {
  tween.play()
}

const onMouseLeave = () => {
  tween.reverse()
}

onMounted(() => {
  tween = gsap.to(el.value, { top: elementX.value, left: elementY.value, scale: 30, paused: true })
})

onBeforeUnmount(() => {
  tween.kill()
})
</script>

<style lang="scss" scoped>
.spotlight {
  position: absolute;
  background-color: red;
  border-radius: 50%;
  height: 10px;
  width: 10px;
  top: 0;
  left: 0;
  transform: scale(0);
}
</style>
