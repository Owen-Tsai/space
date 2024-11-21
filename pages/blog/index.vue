<template>
  <div>
    <div class="header h-90vh">
      <div class="pt-20vh text-center">
        <span class="title">blog</span>
        <div class="flex items-center justify-center mt-2rem">
          <Filter v-model:value="activeFilter" :options="filterOpts" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const activeFilter = ref(-1)

const filterOpts = [
  { label: 'ALL', value: -1 },
  { label: 'WEB', value: 'web' },
  { label: 'DESIGN', value: 'design' }
]
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
</style>
