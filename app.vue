<script setup lang="ts">
import "@fontsource-variable/inter";
import "@fontsource/poppins/700.css";

const { locale } = useI18n();

const i18nHead = useLocaleHead({
  addSeoAttributes: true,
  addDirAttribute: true,
});

useHead({
  ...i18nHead.value,
  titleTemplate: (title: str) => !title ? "it's vic!" : `${title} - it's vic!`,
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
