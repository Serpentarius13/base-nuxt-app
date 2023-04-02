<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import useBasicStore from "./stores/useBasicStore";

const store = useBasicStore();
</script>

<style scoped></style>
