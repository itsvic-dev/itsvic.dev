<script setup lang="ts">
import PolandFlag from "circle-flags/flags/pl.svg";
import EnglishFlag from "circle-flags/flags/gb.svg";
const i18n = useI18n();

const langFlags: Record<typeof i18n.locale.value, string> = {
  en: EnglishFlag,
  pl: PolandFlag,
};

const showAll = ref(false);

const gapSize = 16;
const smallSize = 6 * 4;
const bigSize = 8 * 4;
const smallPadding = 3 * 4;
const bigPadding = 3 * 4;
const bigThreshold = 640;

const dynamicMaxWidth = (items: number): string => {
  const useBig = window.innerWidth >= bigThreshold;
  const size = useBig ? bigSize : smallSize;
  const padding = useBig ? bigPadding : smallPadding;

  return `${size * items + padding * 2 + (items - 1) * gapSize}px`;
};
</script>

<template>
  <div
    class="fixed right-6 top-6 flex flex-row-reverse gap-4 rounded-full bg-black/50 p-3 backdrop-blur-md transition-all duration-300 sm:right-8 sm:top-8 print:hidden"
    :style="{
      width: dynamicMaxWidth(showAll ? i18n.locales.value.length : 1),
    }"
  >
    <button @click="showAll = !showAll" class="button-container">
      <img
        :class="['button', showAll && 'opacity-50']"
        :src="langFlags[i18n.locale.value]"
      />
    </button>

    <template v-if="showAll">
      <button
        v-for="(lang, i) of i18n.locales.value.filter(
          (lang) => lang.code != i18n.locale.value,
        )"
        class="show-all-animate button-container"
        :style="`--index: ${i + 1};`"
        @click="
          showAll = false;
          i18n.setLocale(lang.code);
        "
      >
        <img class="button" :src="langFlags[lang.code]" />
      </button>
    </template>
  </div>
</template>

<style scoped>
.button-container {
  @apply size-6 flex-none sm:size-8;
}

.button {
  @apply size-6 rounded-full transition-all duration-300 hover:scale-125 sm:size-8;
}

.show-all-animate {
  @apply transition-all duration-300;

  @starting-style {
    transform: translate(calc(4rem * var(--index)), 0);
    opacity: 0;
  }
}
</style>
