<template>
  <div class="page h-full w-full overflow-hidden relative">
    <div class="view overflow-hidden">
      <div class="nav flex items-center justify-between z-10">
        <NuxtLink class="link" to="/">Home</NuxtLink>
        <NuxtLink class="link" to="/projects">Projects</NuxtLink>
        <NuxtLink class="link" to="/blog">Blog</NuxtLink>
      </div>
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
        <div></div>
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
          , a web developer with focusing on frontend techniques.
        </p>
        <p class="text-right">
          Outside the coding, I spent a lot of time playing video games. My collection spans almost
          all genres, from the most famous triple A titles to indie gems. I even tried my hand at
          developing several prototypes and providing Chinese localisation for an indie game.
        </p>
        <p class="text-right">
          And I do like J.K Rowling's Harry Potter series. Like, I really do.
        </p>
      </div>
    </div>

    <Blob blur="1600px" color="#FB3706" size="120vh" class="-right-1/3 top-1/2 -translate-y-1/2" />
    <Blob blur="120px" color="#FB3706" size="50vw" animated class="-left-1/9 top-2/3" />
  </div>

  <Cursor />
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
.page {
  padding: clamp(2rem, 64px, 2vw);
}
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
.link {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 900;
  text-transform: uppercase;
  font-size: clamp(1vw, 1rem, 1.5rem);
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
.nav {
  .link {
    &::after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: var(--color-text);
      transition: width 0.2s ease-out;
    }
    &.router-link-active {
      &::after {
        width: 100%;
      }
    }
    &:hover {
      &::after {
        width: 100%;
      }
    }
  }
}
:deep(html.dark) {
  .page {
    filter: brightness(0.86);
  }
}
</style>
