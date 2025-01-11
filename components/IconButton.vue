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
      'flex items-center gap-2 rounded-full px-4 py-2 transition-colors',
      'shadow-inner',
      color === 'purple' && 'bg-violet-800 hover:bg-violet-600',
    ]"
  >
    <svg viewBox="0 0 24 24" class="size-5">
      <path :d="icon.path" fill="currentColor" />
    </svg>
    <slot />
  </button>
</template>
