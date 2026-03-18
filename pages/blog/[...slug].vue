<script lang="ts" setup>
const route = useRoute();
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("content")
    .path(`/blog/${route.params["slug"][0]}`)
    .first();
});
</script>

<template>
  <header class="relative mb-32 bg-violet-700">
    <div class="mx-auto px-8 py-24 text-center lg:py-32">
      <h1 class="font-display text-4xl font-bold text-violet-50">
        {{ page?.title }}
      </h1>
      <p class="mt-4 text-xl text-violet-200" v-if="page">
        {{ $t("blog.publishedOn", { date: $d(page.date) }) }}
      </p>
      <BackButton />
    </div>
    <VioletSlice />
  </header>

  <article class="mx-auto w-full max-w-6xl px-8">
    <ContentRenderer v-if="page" :value="page" />
  </article>
</template>

<style lang="postcss">
article {
  h1 {
    @apply hidden;
  }

  p {
    @apply my-4;
  }

  h2 {
    @apply relative mb-4 mt-10 font-display text-2xl before:absolute before:-left-8 before:opacity-0 before:transition-opacity before:content-["🔗"] hover:before:opacity-100;
  }

  strong {
    @apply text-black;
  }

  :not(h2) > a {
    @apply text-blue-400 underline;
  }

  pre {
    @apply whitespace-pre-wrap rounded-lg border border-zinc-600 bg-zinc-800 p-4 text-sm shadow-inner;
  }

  :not(pre) > code {
    @apply rounded border border-zinc-600 bg-zinc-800 px-1.5 py-0.5 text-[0.875em];
  }

  img {
    @apply rounded-xl shadow-md;
  }

  table {
    td {
      @apply border-collapse border border-zinc-600 px-4 py-2;
    }

    tr:nth-child(even) {
      @apply bg-zinc-800;
    }
  }
}
</style>
