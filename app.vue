<script setup lang="ts">
import "@fontsource-variable/inter/slnt.css";
import "@fontsource-variable/inter-tight/wght-italic.css";
useHead({
  htmlAttrs: {
    lang: "en",
  },
  title: "it's vic!",
  script: [
    {
      src: "https://plausible.itsvic.dev/js/script.js",
      defer: true,
      "data-domain": "itsvic.dev",
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
