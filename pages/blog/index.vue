<script setup lang="ts">
const { data: blog } = useAsyncData("blog", () =>
  queryContent("/blog")
    .sort({ pubDate: -1 })
    .limit(3)
    .only(["title", "shortDescription", "image", "_path"])
    .find()
);

useSeoMeta({
  title: "Blog - it's vic!",
  ogTitle: "it's vic! Blog",
  description: "Some of the stuff I write about.",
  ogDescription: "Some of the stuff I write about.",
  twitterCard: "summary_large_image",
});
</script>
<template>
  <Header title="Blog" tagline="some of the stuff I write about." />

  <main class="mx-auto max-w-7xl my-16 px-8 sm:px-16 gap-16 flex flex-col">
    <div
      v-for="blogPost in blog"
      class="flex gap-4 sm:gap-8 flex-col sm:flex-row"
    >
      <NuxtPicture
        :src="blogPost.image"
        :img-attrs="{ class: 'w-full sm:max-w-xs rounded-lg shadow-sm' }"
      />
      <div class="flex flex-col justify-between sm:py-4 gap-4">
        <div>
          <h2 class="text-2xl text-black font-bold italic">
            {{ blogPost.title }}
          </h2>
          <p>{{ blogPost.shortDescription }}</p>
        </div>
        <div>
          <NuxtLink :to="blogPost._path">
            <Button>Read more</Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>
