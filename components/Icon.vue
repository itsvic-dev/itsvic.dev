<script setup lang="ts">
import type { SimpleIcon } from "simple-icons";

defineProps<{
  icon: SimpleIcon;
  class?: string;
}>();
</script>

<template>
  <svg viewBox="0 0 24 24" :class="$props.class">
    <path :d="icon.path" fill="currentColor" />
  </svg>
</template>
