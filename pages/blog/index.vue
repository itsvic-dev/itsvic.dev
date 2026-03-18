<script setup>
useHead({ title: $t("blog.allPosts") });
</script>

<template>
  <header class="relative mb-32 bg-violet-700">
    <div class="mx-auto px-8 py-16 text-center lg:py-24">
      <h1 class="font-display text-4xl font-bold text-violet-50">
        {{ $t("blog.allPosts") }}
      </h1>
      <BackButton />
    </div>
    <VioletSlice />
  </header>

  <section class="mx-auto mt-16 w-full max-w-5xl px-8">
    <BlogPostGrid />
  </section>
</template>
