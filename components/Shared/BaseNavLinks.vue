<template>
  <div class="links">
    <NuxtLink v-for="({ name, to }, ix) in links" :to="to" class="link">
      {{ name }}</NuxtLink
    >
  </div>
</template>

<script setup lang="ts">
type Link = { to: string; name: string };

const links: Link[] = [
  { to: "/", name: "Главная" },
  { to: "/posts", name: "Посты" },
  { to: "/about", name: "О нас" },
  { to: "/faq", name: "FAQ" },
];
</script>

<style scoped lang="scss">
.link {
  @apply text-3xl text-green-600 font-semibold;

  &:hover {
    @apply text-green-500;
  }
}

.links {
  @apply flex items-center gap-4;
}
</style>
