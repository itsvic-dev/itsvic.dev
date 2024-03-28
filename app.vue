<script setup lang="ts">
import "@fontsource-variable/inter/slnt.css";
import "@fontsource-variable/inter-tight/index.css";
import "@fontsource-variable/inter-tight/wght-italic.css";

const { locale } = useI18n();

const i18nHead = useLocaleHead({
  addSeoAttributes: true,
  addDirAttribute: true,
});

useHead({
  ...i18nHead.value,
  htmlAttrs: {
    lang: locale.value,
  },
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
