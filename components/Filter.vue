<template>
  <div class="filter-group flex gap-4">
    <div
      v-for="(option, index) in options"
      :key="index"
      class="filter"
      :class="option.value == value ? 'active' : ''"
    >
      {{ option.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
const { options } = defineProps<{
  options: Array<{
    label: string
    value: string | number
  }>
  value: string | number
}>()
</script>

<style lang="scss" scoped>
.filter {
  cursor: pointer;
  font-weight: 900;
  text-transform: uppercase;
  font-size: clamp(1rem, 1vw, 3.2vw);
  border: 2px solid var(--color-text);
  border-radius: 9999px;
  padding: 0.5em 1em;
}
</style>
