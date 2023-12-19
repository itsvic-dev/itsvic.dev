<script setup lang="tsx">
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import type { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables";
import { useWindowSize } from "@vueuse/core";

const localePath = useLocalePath();

const isOpen = ref(false);
const { locale, locales, setLocale } = useI18n();

const { width } = useWindowSize();
watch([width], ([width]) => {
  if (width >= 640) isOpen.value = false;
});
</script>

<template>
  <div class="flex text-contrastText w-full justify-between mx-auto max-w-7xl">
    <p class="italic font-bold">
      <NuxtLink :to="localePath('/')">it's vic!</NuxtLink>
    </p>
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
      <NuxtLink :to="localePath('/blog')">{{ $t("blog.title") }}</NuxtLink>
      <NuxtLink :to="localePath('/projects')">{{
        $t("projects.title")
      }}</NuxtLink>
      <NuxtLink :to="localePath('/work')">Commissions</NuxtLink>
      <select
        v-model="locale"
        @change.prevent.stop="
        'value' in $event.target! && setLocale($event.target!.value as string)
      "
        class="bg-black w-28 rounded px-1"
      >
        <option
          v-for="locale in (locales as LocaleObject[])"
          :value="locale.code"
        >
          {{ locale.name }}
        </option>
      </select>
    </div>
  </div>
  <div
    :class="[
      'text-contrastText text-right flex flex-col gap-2',
      'transition-all duration-300',
      !isOpen
        ? 'pointer-events-none opacity-0 -translate-y-6 max-h-0'
        : 'max-h-26  mt-4',
    ]"
  >
    <NuxtLink to="/blog">Blog</NuxtLink>
    <NuxtLink to="/projects">Projects</NuxtLink>
    <NuxtLink to="/work">Commissions</NuxtLink>
    <select
      v-model="locale"
      @change.prevent.stop="
        'value' in $event.target! && setLocale($event.target!.value as string)
      "
      class="bg-black w-28 rounded px-1 self-end"
    >
      <option
        v-for="locale in (locales as LocaleObject[])"
        :value="locale.code"
      >
        {{ locale.name }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="postcss">
a:hover {
  text-decoration: underline;
}
</style>
