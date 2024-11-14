<template>
  <div class="card">
    <div class="row">
      <div>
        <NuxtImg :src="image" />
      </div>
      <div>
        <div>
          <h2>{{ title }}</h2>
          <p>{{ description }}</p>
        </div>
        <div class="icon">
          <Icon name="o:arrow-right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { image, description, title, tag } = defineProps<{
  image: string
  title: string
  description: string
  tag?: string
}>()
</script>

<style lang="scss" scoped>
.card {
  &:nth-child(2n) {
    .row {
      flex-direction: row-reverse;
    }
  }
}
</style>
