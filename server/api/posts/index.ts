export default defineEventHandler(async (event) => {
  const { apiUrl } = useRuntimeConfig();
  const data = await $fetch(apiUrl);
  return data;
});
