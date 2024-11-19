<template>
  <div ref="cursor" class="cursor"></div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const cursor = useTemplateRef('cursor')
const route = useRoute()
const interactivables = ref<NodeListOf<HTMLElement>>()

let updateCursor: (e: MouseEvent) => void
let zoomCursor: gsap.core.Tween

onMounted(() => {
  gsap.set(cursor.value, { xPercent: -50, yPercent: -50 })

  let xTo = gsap.quickTo(cursor.value, 'x', { duration: 0.2, ease: 'power4' }),
    yTo = gsap.quickTo(cursor.value, 'y', { duration: 0.2, ease: 'power4' })

  updateCursor = (e) => {
    xTo(e.clientX)
    yTo(e.clientY)
  }

  zoomCursor = gsap.fromTo(
    cursor.value,
    { scale: 1 },
    {
      scale: 6,
      paused: true,
      duration: 0.3,
      ease: 'back.inOut'
    }
  )

  window.addEventListener('mousemove', updateCursor)
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', updateCursor)
  gsap.killTweensOf(cursor.value)
})

watch(
  () => route.fullPath,
  () => {
    nextTick(() => {
      zoomCursor.reverse()
      interactivables.value = document.querySelectorAll('a, button, [role="button"]')
      interactivables.value.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          zoomCursor.play()
        })
        el.addEventListener('mouseleave', () => {
          zoomCursor.reverse()
        })
      })
    })
  },
  { immediate: true }
)
</script>

<style lang="scss" scoped>
.cursor {
  position: fixed;
  background-color: #fff;
  border-radius: 50%;
  height: clamp(1vw, 1rem, 2rem);
  width: clamp(1vw, 1rem, 2rem);
  will-change: top, left;
  transform: scale(1);
  pointer-events: none;
  top: 0;
  left: 0;
  mix-blend-mode: difference;
  backface-visibility: hidden;
  z-index: 9999;
}
</style>
