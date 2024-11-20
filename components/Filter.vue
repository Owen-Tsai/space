<template>
  <div class="filter-group flex gap-4">
    <FilterItem
      v-for="(option, index) in options"
      :key="index"
      class="filter"
      :class="option.value == value ? 'active' : ''"
      :label="option.label"
      @click="onClick(option.value)"
    />
  </div>
</template>

<script setup lang="ts">
const { options, value } = defineProps<{
  options: Array<{
    label: string
    value: string | number
  }>
  value: string | number
}>()

const emit = defineEmits(['update:value'])

const onClick = (newVal: number | string) => {
  if (value !== newVal) {
    emit('update:value', newVal)
  }
}
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
  position: relative;

  &.active {
    background-color: var(--color-text);
    color: var(--color-text-invert);
  }

  .spotlight {
    position: absolute;
  }
}
</style>
