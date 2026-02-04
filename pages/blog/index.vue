<script lang="ts" setup>
const { data: pages } = await useAsyncData("posts", () =>
  queryCollection("content")
    .select("title", "image", "date", "description", "path")
    .all(),
);
</script>

<template>
  <header class="relative mb-32 bg-violet-700">
    <div class="mx-auto px-8 py-24 text-center lg:py-32">
      <h1 class="font-display text-4xl font-bold text-violet-50">My blog</h1>
    </div>

    <VioletSlice />
  </header>
  {{ pages }}
</template>
