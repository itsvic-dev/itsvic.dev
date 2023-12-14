<script setup lang="ts">
import "@fontsource-variable/inter/slnt.css";
import "@fontsource-variable/inter-tight/wght-italic.css";
useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "it's vic!",
  bodyAttrs: {
    class: "flex flex-col text-mainText",
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
