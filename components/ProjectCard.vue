<script setup lang="ts">
const props = defineProps<{
  title: string;
  shortDesc: string;
  image: string;
  framework?: string;
}>();
</script>

<template>
  <div
    class="flex flex-col gap-4 aspect-video p-6 justify-between items-start rounded-2xl bg-cover"
    :style="{
      backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.95) 100%)${
        image ? `, url(${image})` : ''
      }`,
    }"
  >
    <div
      class="bg-sky-600 shadow px-3 py-1 rounded text-xs font-bold text-white"
    >
      {{ props.framework }}
    </div>
    <div>
      <h2 class="text-white text-2xl font-bold italic">
        {{ props.title }}
      </h2>
      <p class="text-contrastSecondaryText">
        {{ props.shortDesc }}
      </p>
    </div>
  </div>
</template>
