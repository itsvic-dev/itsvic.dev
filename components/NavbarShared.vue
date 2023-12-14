<script setup lang="tsx">
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import { useWindowSize } from "@vueuse/core";

const isOpen = ref(false);

const { width } = useWindowSize();
watch([width], ([width]) => {
  if (width >= 640) isOpen.value = false;
});
</script>

<template>
  <div class="flex text-contrastText w-full justify-between mx-auto max-w-7xl">
    <p class="italic font-bold">it's vic!</p>
    <button
      :class="[
        'w-6 h-6 sm:hidden relative transition-transform duration-300',
        isOpen && 'rotate-90',
      ]"
      @click="isOpen = !isOpen"
    >
      <Bars3Icon
        :class="[
          'transition-opacity duration-300 absolute top-0 left-0',
          isOpen ? 'opacity-0' : 'opacity-100',
        ]"
      />
      <XMarkIcon
        :class="[
          'transition-opacity duration-300 absolute top-0 left-0',
          isOpen ? 'opacity-100' : 'opacity-0',
        ]"
      />
    </button>
    <div class="hidden sm:flex items-center gap-4">
      <NuxtLink to="/blog">Blog</NuxtLink>
      <NuxtLink to="/projects">Projects</NuxtLink>
      <NuxtLink to="/work">Commissions</NuxtLink>
    </div>
  </div>
  <div
    :class="[
      'text-contrastText text-right flex flex-col gap-2',
      'transition-all duration-300',
      !isOpen
        ? 'pointer-events-none opacity-0 -translate-y-6 max-h-0'
        : 'max-h-24  mt-4',
    ]"
  >
    <NuxtLink to="/blog">Blog</NuxtLink>
    <NuxtLink to="/projects">Projects</NuxtLink>
    <NuxtLink to="/work">Commissions</NuxtLink>
  </div>
</template>

<style scoped lang="postcss">
a:hover {
  text-decoration: underline;
}
</style>
