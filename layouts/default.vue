<script setup>
useHead({
  bodyAttrs: {
    class: "bg-zinc-900 text-zinc-50",
  },
});
</script>

<template>
  <slot />

  <ClientOnly>
    <FloatingSidebar />
  </ClientOnly>

  <footer class="mt-16 py-4 text-center text-xs text-zinc-300 print:hidden">
    it's vic! &copy; {{ new Date().getFullYear() }}
  </footer>
</template>
