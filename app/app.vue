<script setup lang="ts">
import "@fontsource-variable/inter";
import "@fontsource/poppins/700.css";
import IconRound from "~/assets/icon round.png";

const { locale } = useI18n();

const i18nHead = useLocaleHead({
  dir: true,
  seo: true,
});

useHead({
  ...i18nHead.value,
  titleTemplate: (title?: string) => !title ? "it's vic!" : `${title} - it's vic!`,
  htmlAttrs: {
    lang: locale.value,
  },

  link: [{
    rel: 'icon',
    href: IconRound,
    type: 'image/png',
  }],
});

useSeoMeta({
  themeColor: '#6d28d9'
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
