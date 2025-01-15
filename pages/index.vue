<script setup lang="ts">
import { siBluesky, siMastodon, siGithub } from "simple-icons";
import {
  InformationCircleIcon,
  ArrowLeftEndOnRectangleIcon,
} from "@heroicons/vue/20/solid";
import ParcelIcon from "~/assets/parcel.png";

const localePath = useLocalePath();

const secretProgress = ref(0);

onMounted(() => {
  window.addEventListener("keyup", function (ev) {
    if (ev.key == "y" && secretProgress.value == 0) secretProgress.value++;
    if (ev.key == "u" && secretProgress.value == 1) secretProgress.value++;
    if (ev.key == "m" && secretProgress.value == 2) secretProgress.value++;
    if (ev.key == "e" && secretProgress.value == 3)
      navigateTo(localePath("/dreams"));
  });
});
</script>

<template>
  <header class="relative mb-32 bg-violet-700">
    <div class="mx-auto px-8 py-24 text-center lg:py-32">
      <h1 class="font-display text-5xl font-bold text-violet-50">it's vic!</h1>
      <p class="text-xl text-violet-200">{{ $t("home.tagline") }}</p>

      <div class="mt-8 flex flex-wrap justify-center gap-3">
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

    <svg
      viewBox="0 0 10 10"
      class="absolute -bottom-16 h-16 w-full"
      preserveAspectRatio="none"
    >
      <polygon points="0 0, 10 0, 0 10" class="fill-violet-700" />
    </svg>
  </header>

  <section class="mx-auto w-full max-w-5xl px-8">
    <h2 class="font-display text-3xl font-bold">Projects</h2>

    <div class="mt-6 grid w-full gap-4 md:grid-cols-2 lg:grid-cols-3">
      <ProjectCard
        title="Parcel"
        :iconPath="ParcelIcon"
        :languages="['Jetpack Compose', 'Kotlin']"
      >
        Parcel is an Android app for tracking parcels. It is currently in closed
        beta.

        <template #links>
          <NuxtLink :to="localePath('/parcel')">
            <InformationCircleIcon />
            Learn more
          </NuxtLink>
          <a
            href="https://groups.google.com/g/parcel-closed-beta-testing"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ArrowLeftEndOnRectangleIcon />
            Join the beta
          </a>
        </template>
      </ProjectCard>
    </div>
  </section>
</template>
