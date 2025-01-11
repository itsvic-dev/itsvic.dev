<script setup lang="ts">
import type { SimpleIcon } from "simple-icons";

defineProps<{
  icon: SimpleIcon;
  color: "purple" | "grey";
}>();
</script>

<template>
  <button
    :class="[
      'flex items-center gap-2 rounded-full px-4 py-1.5 transition-colors',
      'shadow-inner',
      color === 'purple' && 'bg-violet-800 hover:bg-violet-600',
    ]"
  >
    <Icon class="size-5" :icon="icon" />
    <slot />
  </button>
</template>
