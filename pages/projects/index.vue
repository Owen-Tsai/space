<template>
  <div class="relative h-full">
    <div class="flex items-start justify-between gap-2vw h-full">
      <div class="w-1/2 h-full">
        <div class="fixed top-10vh">
          <div class="title mt-8vh mb-6vh">
            PROJECTS
            <span ref="loader" class="loader">\</span>
          </div>
          <div class="leading-relaxed intro">
            <p>
              珍道具（Chindogu）指一类具有天马行空般奇思妙想的日常发明——它们被设计用于解决特定领域的问题，但往往引入了更多新的问题。由于这样的特性，珍道具几乎无法使用，但似乎又并非完全没用，在确实达到其设计目的的同时让人忍俊不禁。
            </p>
            <p>
              珍道具协会的创始人川上贤司将珍道具视为一剂解药，以针对消费主义催生下的现代产品。“珍应用”是试图贯彻珍道具宗旨的一系列应用程序，希望实现
              unuseless 的创造目的。
            </p>
            <p class="quote">
              “在这个星球的某个地方，几十亿人之外，一定有差不多十个人在琢磨怎么让蚂蚁抽烟吧？”
            </p>
          </div>
        </div>
      </div>

      <div class="list w-1/2 pt-20vh">
        <ProjectCard :image="cover" title="Yesterday Weather Report" description="" />
        <ProjectCard :image="cover" title="Yesterday Weather Report" description="" />
        <ProjectCard :image="cover" title="Yesterday Weather Report" description="" />
        <ProjectCard :image="cover" title="Yesterday Weather Report" description="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import cover from '~/assets/img/project-ywr.png'

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
.list {
  border-top: 1px solid var(--color-text);
}
.intro {
  font-size: clamp(14px, 0.9rem, 2vw);
  width: clamp(400px, 32vw, 800px);
}
</style>
