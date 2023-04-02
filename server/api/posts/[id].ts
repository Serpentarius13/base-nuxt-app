export default defineEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig();
  const id = event.context.params?.id as string;

  const post = await $fetch(apiUrl + id);

  return post;
});
