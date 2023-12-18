<script setup lang="ts">
import { siDiscord } from "simple-icons";

useSeoMeta({
  title: "Commissions - it's vic!",
  ogTitle: "it's vic! Commissions",
  description: "Elevate your brand with a touch of uniqueness and style. ",
  ogDescription: "Elevate your brand with a touch of uniqueness and style. ",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <Header title="it's vic!" tagline="Full-stack web developer and designer." />

  <main class="mx-auto max-w-5xl mt-20 px-8 md:px-16">
    <section class="flex gap-8 flex-col md:flex-row">
      <div>
        <h2 class="text-3xl font-bold text-black">Creative design</h2>
        <p>
          Elevate your brand with a touch of uniqueness and style. Let's create
          a design that will truly resonate with your brand and your customers.
        </p>
      </div>
      <NuxtPicture
        :img-attrs="{
          class: 'w-full md:max-w-sm rounded-lg shadow-md',
        }"
        src="/imgs/dream.png"
      />
    </section>

    <Separator />

    <section class="flex gap-8 flex-col md:flex-row-reverse">
      <div>
        <h2 class="text-3xl font-bold text-black">Robust code quality</h2>
        <p>
          Never let your customers down with rigorously tested and stable code
          to ensure your product runs smoothly, no matter the circumstance.
        </p>
      </div>
      <NuxtPicture
        :img-attrs="{
          class: 'w-full md:max-w-sm rounded-lg shadow-md',
        }"
        src="/imgs/codesss.png"
      />
    </section>

    <Separator />

    <h2 class="text-3xl font-bold text-black text-center">
      Counted on by many
    </h2>
    <p class="text-center">
      Your brand is in good hands, no matter how big or small.
    </p>

    <div class="flex justify-evenly gap-6 items-center flex-wrap mt-4">
      <NuxtImg class="max-h-[64px]" src="/imgs/strawber.png" />
      <NuxtImg class="max-h-[76px]" src="/imgs/realms.png" />
      <NuxtImg class="max-h-[48px]" src="/imgs/stellanode.svg" />
    </div>
  </main>

  <footer
    class="bg-gradient-to-t from-bgs-black to-bgs-heroShine text-white flex flex-col items-center mt-16 py-24 px-16 text-center"
  >
    <p class="text-2xl italic text-contrastSecondaryText">
      What are you waiting for?
    </p>
    <h1 class="font-display text-5xl italic font-black">Let's get in touch.</h1>
    <div class="flex mt-6">
      <a
        class="flex items-center gap-2 hover:underline"
        href="https://discord.gg/CkYF9Jm8rB"
      >
        <svg view-box="0 0 24 24" width="24" height="24">
          <path :d="siDiscord.path" fill="currentColor" />
        </svg>

        discord.gg/CkYF9Jm8rB
      </a>
    </div>
  </footer>
</template>
