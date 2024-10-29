<script setup>
import { CakeIcon, EnvelopeIcon } from "@heroicons/vue/24/solid";

const education = ["technical"];
const jobs = ["itsvic", "tmobile-intern"];
const tasks = {
  itsvic: ["productDev", "support", "contract"],
  "tmobile-intern": ["testLab", "ad", "vms", "sccm"],
};
const languages = ["english", "polish"];
</script>

<template>
  <main
    class="py-16 px-4 print:p-4 max-w-5xl space-y-8 mx-auto print:text-black"
  >
    <div class="flex items-start gap-6">
      <img src="/imgs/icon.png" class="w-24 h-24" />
      <div class="space-y-1">
        <h1 class="text-4xl font-bold font-display">Wiktor Bryk</h1>
        <p class="flex gap-2 items-center">
          <CakeIcon class="w-6 h-6" :title="$t('cv.birthday')" />
          {{ $d(new Date(2005, 4, 23), "short") }}
        </p>
        <p class="flex gap-2 items-center">
          <EnvelopeIcon class="w-6 h-6" title="E-mail" /> contact@itsvic.dev
        </p>
      </div>
    </div>

    <div>
      <h2 class="font-display text-2xl font-bold">
        {{ $t("cv.education.title") }}
      </h2>
      <ul class="list-disc ml-8">
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
      <h3 class="text-xl font-semibold">{{ $t("cv.skills.fullstack") }}</h3>
      <p>
        React, Nuxt.js (Vue), TypeScript, Node.js (Express), Go, PHP (Laravel),
        Python (Flask, aiohttp)
      </p>

      <h3 class="text-xl font-semibold mt-4">{{ $t("cv.skills.ui") }}</h3>
      <p>Figma, GIMP</p>

      <h3 class="text-xl font-semibold mt-4">
        {{ $t("cv.skills.native") }}
      </h3>
      <p>C, C++, Qt Quick, SDL2, GLFW, OpenGL 3.2+</p>
    </div>

    <div>
      <h2 class="font-display text-2xl font-bold">
        {{ $t("cv.jobs.title") }}
      </h2>
      <ul class="list-disc ml-8 space-y-4">
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
      <h2 class="font-display text-2xl font-bold">
        {{ $t("cv.languages.title") }}
      </h2>
      <ul class="list-disc ml-8">
        <li v-for="item of languages">
          {{ $t(`cv.languages.${item}`) }}
        </li>
      </ul>
    </div>
  </main>
</template>
