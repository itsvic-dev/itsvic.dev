<script setup lang="ts">
const props = defineProps<{
  title: string;
  shortDesc: string;
  image: string;
}>();
</script>

<template>
  <div
    class="flex flex-col aspect-video p-6 justify-end rounded-2xl bg-cover"
    :style="{
      backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.95) 100%)${
        image ? `, url(${image})` : ''
      }`,
    }"
  >
    <h2 class="text-white text-2xl font-bold italic">{{ props.title }}</h2>
    <p class="text-contrastSecondaryText">{{ props.shortDesc }}</p>
  </div>
</template>
