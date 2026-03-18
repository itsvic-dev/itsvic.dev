<script setup lang="ts">
import { ArrowRightIcon } from "@heroicons/vue/24/outline";
</script>

<template>
  <NuxtLink to="/">
    <button
      :class="[
        'mt-8',
        'inline-flex items-center gap-2 rounded-full px-4 py-1.5 transition-colors',
        'shadow-inner shadow-violet-900/30 hover:shadow-md',
        'bg-violet-800 hover:bg-violet-600',
      ]"
    >
      <ArrowRightIcon class="size-6" />
      Go back
    </button>
  </NuxtLink>
</template>
