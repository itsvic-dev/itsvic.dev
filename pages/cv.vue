<script setup>
import { CakeIcon, EnvelopeIcon } from "@heroicons/vue/24/solid";

const education = ["technical"];
const jobs = ["tmobile-intern"];
const tasks = {
  "tmobile-intern": ["testLab", "ad", "vms", "sccm"],
};
const languages = ["polish", "english"];

const bday = new Date(2005, 4, 23);

const { data: projects } = await useAsyncData("projects", () =>
  $fetch("/api/projects"),
);
</script>

<template>
  <main
    class="mx-auto max-w-5xl space-y-8 px-4 py-16 print:p-2 print:text-black"
  >
    <div class="flex items-start gap-6">
      <div class="space-y-1">
        <h1 class="font-display text-4xl font-bold">Wiktor Bryk</h1>
        <p class="flex items-center gap-2">
          <CakeIcon class="h-6 w-6" />
          {{ $t("cv.birthday", { date: $d(bday, "short") }) }}
        </p>
        <p class="flex items-center gap-2">
          <EnvelopeIcon class="h-6 w-6" />
          {{ $t("cv.email", { email: "contact@itsvic.dev" }) }}
        </p>
      </div>
    </div>

    <div>
      <h2 class="font-display text-2xl font-bold">
        {{ $t("cv.education.title") }}
      </h2>
      <ul class="ml-8 list-disc">
        <li v-for="item of education">
          <span class="font-semibold">
            {{ $t(`cv.education.${item}.name`) }}
          </span>
          <span class="ml-2 italic">
            {{ $t(`cv.education.${item}.status`) }}
          </span>
          <br />
          {{ $t(`cv.education.${item}.class`) }}
        </li>
      </ul>
    </div>

    <div>
      <h2 class="font-display text-2xl font-bold">
        {{ $t("cv.skills.title") }}
      </h2>
      <h3 class="text-lg font-semibold">{{ $t("cv.skills.fullstack") }}</h3>
      <p>
        React, Nuxt.js (Vue), TypeScript, Node.js (Express), Go, PHP (Laravel),
        Python (Flask, aiohttp)
      </p>

      <h3 class="mt-4 text-lg font-semibold">{{ $t("cv.skills.ui") }}</h3>
      <p>Figma, GIMP</p>

      <h3 class="mt-4 text-lg font-semibold">
        {{ $t("cv.skills.native") }}
      </h3>
      <p>C, C++, Qt Quick, SDL2, GLFW, OpenGL 3.2+</p>

      <h3 class="mt-4 text-lg font-semibold">
        {{ $t("cv.skills.mobile") }}
      </h3>
      <p>Android, Jetpack Compose, Kotlin</p>
    </div>

    <div>
      <h2 class="font-display text-2xl font-bold">
        {{ $t("cv.jobs.title") }}
      </h2>
      <ul class="ml-8 list-disc space-y-4">
        <li v-for="item of jobs">
          <p>
            <span class="font-bold">{{ $t(`cv.jobs.${item}.name`) }}</span>
            ({{ $t(`cv.jobs.${item}.period`) }})
          </p>
          <p class="italic">
            {{ $t(`cv.jobs.${item}.title`) }}
          </p>

          <p class="mt-2">{{ $t("cv.jobs.tasks") }}</p>
          <ul class="ml-6 list-[circle]">
            <li v-for="task of tasks[item]">
              {{ $t(`cv.jobs.${item}.tasks.${task}`) }}
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <div>
      <h2 class="font-display text-2xl font-semibold">
        {{ $t("projects.title") }}
      </h2>

      <ul class="ml-8 list-disc space-y-4">
        <li v-for="project of projects" class="space-y-1">
          <p>
            <b>{{ project.name }}</b
            >: {{ $t(project.descKey) }}
          </p>

          <p>
            {{
              $t("cv.projectLanguages", { langs: project.languages.join(", ") })
            }}
          </p>

          <p v-for="link of project.links">
            {{ $t(link.nameKey) }}:
            <a
              class="underline"
              :href="link.href"
              target="_blank"
              rel="noreferrer noopener"
              >{{ link.href }}</a
            >
          </p>
        </li>
      </ul>
    </div>

    <div>
      <h2 class="font-display text-2xl font-bold">
        {{ $t("cv.languages.title") }}
      </h2>
      <ul class="ml-8 list-disc">
        <li v-for="item of languages">
          {{ $t(`cv.languages.${item}`) }}
        </li>
      </ul>
    </div>
  </main>
</template>
