<template>
  <NuxtLink :to="`/posts/${id}`" class="post">
    <h4>{{ title }}</h4>
    <p>{{ body }}</p>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps(["body", "title", "id"]);
</script>

<style scoped lang="scss">
.post {
  max-width: 40rem;
  @apply flex flex-col gap-4 p-2;

  @include borderline;


  h4 {
    @apply text-4xl;
  }

  p {
    @apply text-xl;
  }
}
</style>
