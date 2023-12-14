<script setup lang="ts">
const props = defineProps<{
  preTitle?: string;
  title: string;
  tagline: string;
}>();
</script>

<template>
  <header
    class="bg-gradient-to-b from-bgs-black to-bgs-heroShine text-white flex flex-col items-center py-48 px-16 text-center"
  >
    <p v-if="preTitle" class="text-2xl italic text-contrastSecondaryText">
      {{ preTitle }}
    </p>
    <h1 class="font-display text-5xl italic font-black">{{ title }}</h1>
    <p class="text-xl mt-1">{{ tagline }}</p>
  </header>
</template>
