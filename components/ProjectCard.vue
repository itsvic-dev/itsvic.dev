<script setup lang="ts">
import {
  GlobeAltIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/vue/20/solid";
import { siGithub, siGoogleplay } from "simple-icons";

defineProps<{
  project: Project;
}>();
</script>

<template>
  <div
    class="flex flex-col justify-between rounded-lg border-t border-zinc-700 bg-zinc-800 p-4 shadow"
  >
    <div>
      <h3 class="mb-2 flex items-center gap-2 font-display text-2xl font-bold">
        <img :src="project.icon" class="size-7 rounded-full" />
        {{ project.name }}
      </h3>

      <div
        class="mb-2 flex flex-wrap gap-2"
        v-if="project.languages.length !== 0"
      >
        <p
          v-for="language in project.languages"
          class="rounded-full border border-zinc-600 bg-zinc-700 px-2.5 py-0.5 text-xs"
        >
          {{ language }}
        </p>
      </div>

      {{ $t(project.descKey) }}
    </div>

    <div class="__project_links mt-4 space-y-1">
      <a
        v-for="link of project.links"
        :href="link.href"
        target="_blank"
        rel="noreferrer noopener"
      >
        <GlobeAltIcon v-if="link.icon === 'globe'" />
        <InformationCircleIcon v-else-if="link.icon === 'info'" />
        <Icon :icon="siGithub" v-else-if="link.icon === 'github'" />
        <Icon :icon="siGoogleplay" v-else-if="link.icon === 'gplay'" />
        <QuestionMarkCircleIcon v-else />

        {{ $t(link.nameKey) }}
      </a>
    </div>
  </div>
</template>

<style lang="postcss">
.__project_links a {
  @apply flex items-center gap-1.5 font-semibold hover:underline;

  & > svg {
    @apply size-5;
  }
}
</style>
