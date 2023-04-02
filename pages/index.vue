<template>
  <section>
    <button @click="store.decrement">-</button>
    {{ store.counter }}
    <button @click="store.increment">+</button>
  </section>
</template>

<script setup lang="ts">
import useBasicStore from "~~/stores/useBasicStore";

const store = useBasicStore();
</script>

<style lang="scss" scoped>
section {
  min-height: 100vh;

  @apply text-4xl m-6;

 
}
</style>
