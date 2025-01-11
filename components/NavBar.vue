<script setup>
const localePath = useLocalePath();
const { locales, locale, setLocale } = useI18n();

console.log(locale.value);
</script>

<template>
  <nav
    class="pointer-events-none fixed top-0 z-20 flex w-full justify-center py-4"
  >
    <div
      class="pointer-events-auto flex gap-3 rounded-full border-t border-zinc-600/50 bg-zinc-800/50 p-3 shadow-md backdrop-blur-lg"
    >
      <NuxtLink
        :to="localePath('/')"
        exact-active-class="active"
        class="button"
      >
        {{ $t("navigation.home") }}
      </NuxtLink>

      <select class="button" @change="setLocale($event.target.value)">
        <option
          v-for="l in locales"
          :value="l.code"
          :selected="l.code === locale"
        >
          {{ l.name }}
        </option>
      </select>
    </div>
  </nav>
</template>

<style scoped lang="postcss">
.button {
  @apply rounded-full bg-zinc-800/80 px-5 py-1.5 shadow;
  @apply hover:bg-violet-600;
  @apply transition-colors;

  &.active {
    @apply bg-violet-800;
  }
}

select.button {
  @apply appearance-none text-center;
}
</style>
