<template>
  <div class="card">
    <div class="row flex gap-8">
      <div class="w-1/3">
        <img :src="image" />
      </div>
      <div class="w-2/3">
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

  img {
    width: 100%;
  }
}
</style>
