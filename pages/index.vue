<template>
  <div class="view overflow-hidden">
    <div></div>
    <div class="title">
      <div>yet</div>
      <div>another</div>
      <div class="line-holder" ref="lineHolder">
        <div ref="line1">
          <span>web</span>
          <span>game</span>
          <span>fan of</span>
          <span>web</span>
        </div>
      </div>
      <div class="line-holder">
        <div ref="line2">
          <span>developer.</span>
          <span>enthusiast.</span>
          <span>harry potter.</span>
          <span>developer.</span>
        </div>
      </div>
    </div>

    <div class="footer flex items-center justify-between">
      <div>&copy; {{ new Date().getFullYear() }}</div>
      <div>
        <ThemeSwitch />
      </div>
      <div></div>
    </div>
    <!-- <div class="sider"></div> -->
    <div class="hidden xl:block intro absolute bottom-0 right-0">
      <p class="text-right">
        Hi, I'm
        <span class="name">Owen</span>
        , a web developer with a focus on frontend techniques.
      </p>
      <p class="text-right">
        Outside the coding, I spent a lot of time playing video games. My collection spans nearly
        all genres, from popular AAA titles to indie gems. I've even dabbled in developing a few
        prototypes and provided Chinese localization for an indie game.
      </p>
      <p class="text-right">I also love immersing myself in the worlds created within books.</p>
    </div>
  </div>

  <Blob blur="120px" color="#FB3706" size="50vw" animated class="-left-1/9 top-2/3" />
</template>

<script setup lang="ts">
import { useTitleMotion } from './use-animation'

const line = useTemplateRef('lineHolder')
const line1 = useTemplateRef('line1')
const line2 = useTemplateRef('line2')

const { height } = useElementBounding(line)

useTitleMotion([line1, line2], height)
</script>

<style lang="scss" scoped>
.view {
  position: relative;
  border-bottom: 1px solid var(--color-text);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Raleway', sans-serif;
  font-weight: 900;
}
.title {
  div {
    font-weight: 900;
    text-transform: uppercase;
    font-size: clamp(3rem, 5.6vw, 10vw);
    line-height: clamp(3rem, 5.6vw, 10vw);

    &.line-holder {
      height: clamp(3rem, 5.6vw, 10vw);
      overflow: hidden;
    }

    span {
      display: block;
    }
  }
}
.intro {
  font-weight: 600;
  width: clamp(400px, 40vw, 600px);
}
</style>
