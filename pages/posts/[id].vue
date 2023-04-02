<template>
  <PostsTheMaximizedPost v-bind="post" />
</template>

<script setup lang="ts">
const { id } = useRoute().params;
const { data: post } = await useFetch("/api/posts/" + id);
</script>

<style scoped></style>
