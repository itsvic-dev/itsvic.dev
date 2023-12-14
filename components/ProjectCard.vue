<script setup lang="ts">
import { useResizeObserver } from "@vueuse/core";

const props = defineProps<{
  title: string;
  shortDesc: string;
  image: string;
  framework?: string;
}>();

const el = ref<HTMLElement | undefined>();
const width = ref(0);
const height = ref(0);

useResizeObserver(el, (entries) => {
  width.value = Math.round(entries[0].borderBoxSize![0].inlineSize);
  height.value = Math.round(entries[0].borderBoxSize![0].blockSize);
});

const img = useImage();
const backgroundStyles = computed(() => {
  if (!props.image || !width.value)
    return {
      backgroundImage:
        "linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.95) 100%)",
    };

  const imgUrl = img(props.image, { width: width.value, height: height.value });
  return {
    backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.95) 100%), url(${imgUrl})`,
  };
});
</script>

<template>
  <div
    ref="el"
    class="flex flex-col gap-4 aspect-video p-6 justify-between items-start rounded-2xl bg-cover"
    :style="backgroundStyles"
  >
    <div
      class="bg-sky-600 shadow px-3 py-1 rounded text-xs font-bold text-white"
    >
      {{ props.framework }}
    </div>
    <div>
      <h2 class="text-white text-2xl font-bold italic">
        {{ props.title }}
      </h2>
      <p class="text-contrastSecondaryText">
        {{ props.shortDesc }}
      </p>
    </div>
  </div>
</template>
