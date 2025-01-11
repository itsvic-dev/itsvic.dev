<script setup>
useHead({
  bodyAttrs: {
    class: "bg-zinc-900 text-zinc-50",
  },
});
</script>

<template>
  <NavBar />

  <slot />
</template>
