<script setup lang="ts">
import { siBluesky, siMastodon, siGithub } from "simple-icons";
</script>

<template>
  <div class="relative mb-32 bg-violet-700">
    <div class="mx-auto px-8 py-32 text-center">
      <h1 class="font-display text-5xl font-bold text-violet-50">it's vic!</h1>
      <p class="text-xl text-violet-200">{{ $t("home.tagline") }}</p>

      <div class="mt-4 flex flex-wrap justify-center gap-4">
        <a
          href="https://bsky.app/profile/itsvic.dev"
          target="_blank"
          rel="noreferer noopener"
        >
          <IconButton :icon="siBluesky" color="purple">Bluesky</IconButton>
        </a>
        <a
          href="https://social.itsvic.dev/@vic"
          target="_blank"
          rel="noreferer noopener"
        >
          <IconButton :icon="siMastodon" color="purple">Fediverse</IconButton>
        </a>
        <a
          href="https://github.com/itsvic-dev"
          target="_blank"
          rel="noreferer noopener"
        >
          <IconButton :icon="siGithub" color="purple">GitHub</IconButton>
        </a>
      </div>
    </div>

    <svg
      viewBox="0 0 10 10"
      class="absolute -bottom-16 h-16 w-full"
      preserveAspectRatio="none"
    >
      <polygon points="0 0, 10 0, 0 10" class="fill-violet-700" />
    </svg>
  </div>

  <p>other content</p>
</template>
