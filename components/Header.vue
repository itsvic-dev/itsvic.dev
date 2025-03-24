<script setup lang="ts">
const props = defineProps<{
  preTitle?: string;
  title: string;
  tagline?: string;
  image?: string;
}>();
</script>

<template>
  <header
    :class="[
      ' text-white flex flex-col items-center py-48 px-16 text-center relative',
      props.image
        ? 'bg-bgs-heroShine'
        : 'bg-gradient-to-b from-bgs-black to-bgs-heroShine',
    ]"
  >
    <div
      v-if="props.image"
      class="absolute w-full h-full top-0 z-0"
      :style="{
        backgroundImage: `url(${props.image})`,
        maskImage: 'linear-gradient(to bottom, #fff, #fff0)',
      }"
    />
    <p v-if="preTitle" class="text-2xl italic text-contrastSecondaryText z-10">
      {{ preTitle }}
    </p>
    <h1 class="font-display text-5xl italic font-black z-10">{{ title }}</h1>
    <p v-if="tagline" class="text-xl mt-1 z-10">{{ tagline }}</p>
  </header>
</template>
