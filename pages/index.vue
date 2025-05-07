<script setup lang="ts">
import { siBluesky, siMastodon, siGithub, siX } from "simple-icons";

const { data: projects } = await useAsyncData("projects", () =>
  $fetch("/api/projects"),
);
</script>

<template>
  <header class="relative mb-32 bg-violet-700">
    <div class="mx-auto px-8 py-24 text-center lg:py-32">
      <h1 class="font-display text-5xl font-bold text-violet-50">it's vic!</h1>
      <p class="text-xl text-violet-200">{{ $t("home.tagline") }}</p>

      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="https://x.com/@vic_hates_x"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconButton :icon="siX" color="purple">Twitter</IconButton>
        </a>
        <a
          href="https://bsky.app/profile/itsvic.dev"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconButton :icon="siBluesky" color="purple">Bluesky</IconButton>
        </a>
        <a
          href="https://social.itsvic.dev/@vic"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconButton :icon="siMastodon" color="purple">Fediverse</IconButton>
        </a>
        <a
          href="https://github.com/itsvic-dev"
          target="_blank"
          rel="noreferrer noopener"
        >
          <IconButton :icon="siGithub" color="purple">GitHub</IconButton>
        </a>
      </div>
    </div>

    <VioletSlice />
  </header>

  <section class="mx-auto w-full max-w-5xl px-8">
    <h2 class="font-display text-3xl font-bold">Projects</h2>

    <div class="mt-6 grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard v-for="project of projects" :project="project" />
    </div>
  </section>
</template>
