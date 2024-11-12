import { type Ref } from 'vue'
import { gsap } from 'gsap'

export const useTitleMotion = (lines: Ref<HTMLElement | null>[], height: Ref<number>) => {
  let ctx: gsap.Context

  const getAnimParams = (idx: number) => {
    return {
      y: -height.value * idx
    }
  }

  onMounted(() => {
    ctx = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { duration: 0.6, ease: 'power1.inOut' } })
      timeline
        .addLabel('start')
        .to(lines[0].value, { ...getAnimParams(1), delay: 4 })
        .to(lines[1].value, { ...getAnimParams(1) }, '>-0.4')
        .to(lines[0].value, { ...getAnimParams(2), delay: 4 })
        .to(lines[1].value, { ...getAnimParams(2) }, '>-0.4')
        .to(lines[0].value, { ...getAnimParams(3), delay: 4 })
        .to(lines[1].value, { ...getAnimParams(3) }, '>-0.4')
        .to(lines[0].value, { ...getAnimParams(0), duration: 0, ease: 'none' })
        .to(lines[1].value, { ...getAnimParams(0), duration: 0, ease: 'none' })
        .addLabel('end')

      timeline.tweenFromTo('start', 'end', { repeat: -1 })
    })
  })

  onBeforeUnmount(() => {
    ctx.revert()
  })
}
