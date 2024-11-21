<template>
  <div
    ref="parent"
    class="item relative overflow-hidden"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @mousemove="onMouseMove"
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
const updateCursor = () => {
  gsap.to(el.value, { x: elementX.value, y: elementY.value, duration: 0, ease: 'none' })
}

const onMouseEnter = () => {
  gsap.to(el.value, { x: elementX.value, y: elementY.value, duration: 0 })
  tween.play()
}

const onMouseLeave = () => {
  tween.reverse()
}

const onMouseMove = (e: MouseEvent) => {
  updateCursor()
}

onMounted(() => {
  gsap.set(el.value, { xPercent: -50, yPercent: -50 })

  tween = gsap.to(el.value, { scale: 20, paused: true, duration: 0.3, ease: 'power1.inOut' })
})

onBeforeUnmount(() => {
  gsap.killTweensOf(el.value)
})
</script>

<style lang="scss" scoped>
.spotlight {
  position: absolute;
  background-color: var(--color-text);
  border-radius: 50%;
  height: 10px;
  width: 10px;
  transform: scale(0);
  z-index: -1;
}
.item {
  color: var(--color-text);
  transition: color 0.3s;
  &:hover {
    color: var(--color-text-invert);
  }
}
</style>
