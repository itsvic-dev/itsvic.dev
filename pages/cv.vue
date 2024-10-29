<script setup>
import { CakeIcon, EnvelopeIcon } from "@heroicons/vue/24/solid";
</script>

<template>
  <div class="py-16 px-4 print:p-4 max-w-5xl mx-auto print:text-black">
    <div class="flex items-start gap-6">
      <img src="/imgs/icon.png" class="w-24 h-24" />
      <div class="space-y-1">
        <h1 class="text-4xl font-bold font-display">Wiktor Bryk</h1>
        <p class="flex gap-2 items-center">
          <CakeIcon class="w-6 h-6" title="Birthday" /> 23 May 2005
        </p>
        <p class="flex gap-2 items-center">
          <EnvelopeIcon class="w-6 h-6" title="E-mail" /> contact@itsvic.dev
        </p>
      </div>
    </div>

    <div class="mt-8">
      <h2 class="font-display text-2xl font-bold">Education</h2>
      <ul class="list-disc ml-8">
        <li>
          <span class="font-semibold">
            Technikum nr 8 im. Jana Karskiego w Warszawie
          </span>
          <span class="ml-2 italic">Complete</span>
          <br />
          IT Systems Administrator and Webmaster
        </li>
      </ul>
    </div>

    <div class="mt-8">
      <h2 class="font-display text-2xl font-bold">Professional Experience</h2>
      <h3 class="text-xl font-semibold">Full-stack web development</h3>
      <p>
        React, Nuxt.js (Vue), TypeScript, Node.js, Go, PHP (Laravel), Python
        (Flask, aiohttp)
      </p>

      <h3 class="text-xl font-semibold mt-4">User interface design</h3>
      <p>Figma, GIMP</p>

      <h3 class="text-xl font-semibold mt-4">
        Native app and game development
      </h3>
      <p>C, C++, Qt Quick, SDL2, GLFW, OpenGL 3.2+</p>
    </div>

    <div class="mt-8">
      <h2 class="font-display text-2xl font-bold">Work Experience</h2>
      <ul class="list-disc ml-8">
        <li>
          <span class="font-bold">it's vic!</span> (February 2024 &ndash; now)
          <br />
          <i>Full-stack web development, web design</i>
          <br />
          Creating paid Pterodactyl themes and extensions such as
          <a
            href="https://builtbybit.com/resources/nova.40094/"
            class="text-blue-500 underline"
          >
            Nova
          </a>
          <span class="hidden print:inline">
            (https://builtbybit.com/resources/nova.40094/)
          </span>
          or
          <a
            href="https://builtbybit.com/resources/trash-bin-for-pterodactyl.38583/"
            class="text-blue-500 underline"
          >
            Trash Bin for Pterodactyl®
          </a>
          <span class="hidden print:inline">
            (https://builtbybit.com/resources/trash-bin-for-pterodactyl.38583/)
          </span>
        </li>
        <li>
          <span class="font-bold">T-Mobile Polska S.A.</span> (January 2023)
          <br />
          <i>Internship as a System Administrator</i>
          <br />
          Installation and configuration of Windows Server inside of Hyper-V,
          managing a test lab composed of two Windows 10 virtual machines and a
          Windows Server virtual machine
        </li>
        <li>
          <span class="font-bold">Contract work</span> (December 2021 &ndash;
          now)
          <br />
          <i>Full-stack web development, web design</i>
          <br />
          Modifying the Pterodactyl game server panel, adding custom-built
          features to it, creating new panel designs
        </li>
      </ul>
    </div>

    <div class="mt-8">
      <h2 class="font-display text-2xl font-bold">Language skills</h2>
      <ul class="list-disc ml-8">
        <li>Polish: native</li>
        <li>English: conversational</li>
      </ul>
    </div>
  </div>
</template>
