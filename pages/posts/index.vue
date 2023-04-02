<template>
  <section class="posts">
    <PostsThePost v-for="post in posts" :key="post.id" v-bind="post" />
  </section>
</template>

<script setup lang="ts">
import PostModel from "~/features/types/PostModel";

const { data: posts } = await useFetch<PostModel[]>("/api/posts");
</script>

<style scoped lang="scss">
.posts {
  @apply grid gap-4 m-4;

  max-width: 95%;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
