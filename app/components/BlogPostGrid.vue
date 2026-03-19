<script setup lang="ts">
const props = defineProps<{ limit?: number }>();

const { data: pages } = useAsyncData(`posts-${props.limit}`, () =>
  queryCollection("content")
    .select("title", "image", "date", "description", "path")
    .order("date", "DESC")
    .limit(props.limit ?? 0)
    .all(),
);
</script>

<template>
  <div class="mt-6 grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3">
    <NuxtLink
      v-for="page in pages"
      :to="page.path"
      class="flex min-h-52 flex-col justify-end rounded-lg border-t border-zinc-700 bg-contain shadow transition-transform hover:scale-105"
      :style="{
        backgroundImage: `url(${page.image})`,
      }"
    >
      <div
        class="rounded-b-lg p-4"
        :style="{
          backgroundImage:
            'linear-gradient(to bottom, rgb(0 0 0 / 0) 0%, rgb(0 0 0 / 0.2) 10%, rgb(0 0 0 / 1) 100%)',
        }"
      >
        <p class="text-xs opacity-80">{{ $d(new Date(page.date)) }}</p>
        <h3
          class="mb-1 flex items-center gap-2 font-display text-2xl font-bold"
        >
          {{ page.title }}
        </h3>
        <p class="text-sm">{{ page.description }}</p>
      </div>
    </NuxtLink>
  </div>
</template>
