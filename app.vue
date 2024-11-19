<template>
  <div class="page h-full">
    <AppHeader />

    <NuxtPage />

    <Cursor />

    <Blob blur="120px" :color="blobColor" size="50vw" animated class="-left-1/9 top-2/3" />
    <Blob
      blur="1600px"
      :color="blobColor"
      size="120vh"
      class="-right-1/3 top-1/2 -translate-y-1/2 -z-1"
    />

    <AppFooter class="footer" />
  </div>
</template>

<script setup lang="ts">
const isDark = useDark()

const blobColor = computed(() => (!isDark.value ? '#fb3706' : '#114b77'))
</script>

<style lang="scss" scoped>
.page {
  padding: clamp(2rem, 64px, 2vw);
}
:deep(html.dark) {
  .page {
    filter: brightness(0.86);
  }
}
.footer {
  position: fixed;
  bottom: clamp(2rem, 64px, 2vw);
  left: clamp(2rem, 64px, 2vw);
  right: clamp(2rem, 64px, 2vw);
  border-bottom: 1px solid var(--color-text);
  overflow: hidden;
  z-index: 0;
}
</style>
