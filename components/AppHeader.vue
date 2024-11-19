<template>
  <div class="nav flex items-center justify-between z-10 fixed">
    <NuxtLink class="link" to="/">Home</NuxtLink>
    <NuxtLink class="link" to="/projects">Projects</NuxtLink>
    <NuxtLink class="link" to="/blog">Blog</NuxtLink>
    <ThemeSwitch class="link" />
  </div>
</template>

<style lang="scss" scoped>
.link {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 900;
  text-transform: uppercase;
  font-size: clamp(1vw, 1rem, 1.5rem);
  line-height: 1;
}
.nav {
  top: clamp(2rem, 64px, 2vw);
  width: calc(100vw - clamp(2rem, 64px, 2vw) * 2);
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
</style>
