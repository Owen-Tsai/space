<template>
  <div class="page h-full w-full overflow-hidden relative">
    <div class="nav flex items-center justify-between z-10">
      <NuxtLink class="link" to="/">Home</NuxtLink>
      <NuxtLink class="link" to="/projects">Projects</NuxtLink>
      <NuxtLink class="link" to="/blog">Blog</NuxtLink>
    </div>
    <NuxtPage />

    <Cursor />

    <Blob blur="1600px" color="#FB3706" size="120vh" class="-right-1/3 top-1/2 -translate-y-1/2" />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.page {
  padding: clamp(2rem, 64px, 2vw);
}
.link {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 900;
  text-transform: uppercase;
  font-size: clamp(1vw, 1rem, 1.5rem);
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

