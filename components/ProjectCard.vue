<script setup lang="ts">
defineProps<{
  title: string;
  iconPath: string;
}>();
</script>

<template>
  <div class="rounded-lg border-t border-zinc-700 bg-zinc-800 p-4 shadow">
    <h3 class="mb-2 flex items-center gap-2 font-display text-2xl font-bold">
      <img :src="iconPath" class="size-7 rounded-full" />
      {{ title }}
    </h3>

    <slot />
    <div class="__project_links mt-2 space-y-1">
      <slot name="links" />
    </div>
  </div>
</template>

<style lang="postcss">
.__project_links a {
  @apply flex items-center gap-1 hover:underline;

  & > svg {
    @apply size-5;
  }
}
</style>
