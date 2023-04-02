<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <article>
      <h4 class="text-6xl font-bold">{{ title }}</h4>
      <p class="text-3xl">{{ body }}</p>
    </article>
  </div>
</template>

<script setup>
defineProps(["body", "title"]);
</script>

<style lang="scss" scoped>
article {
  max-width: 60rem;

  @apply flex flex-col gap-4;
}
</style>
