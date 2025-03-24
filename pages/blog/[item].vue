<script setup>
import "~/assets/blogStyle.css";
const { params } = useRoute();
const { data: blogPost } = await useAsyncData("blogPost", () =>
  queryContent()
    .where({
      _id: `content:blog:${params.item}.md`,
    })
    .findOne()
);

const rtf = new Intl.RelativeTimeFormat("en", {
  style: "long",
  numeric: "auto",
});
const dayDiff = Math.ceil(
  (+new Date(blogPost.value?.pubDate) - +new Date()) / (24 * 60 * 60 * 1000)
);

useSeoMeta({
  title: `${blogPost.value?.title} - Blog - it's vic!`,
  ogTitle: `${blogPost.value?.title} - it's vic! Blog`,
  description: blogPost.value?.shortDescription,
  ogDescription: blogPost.value?.shortDescription,
  ogImage: blogPost.value?.image,
  twitterCard: "summary_large_image",
});
</script>
<template>
  <Header
    :title="blogPost?.title"
    :tagline="blogPost?.shortDescription"
    :image="blogPost?.image"
  />

  <ContentRenderer v-if="blogPost" :value="blogPost">
    <article class="blog">
      <p class="text-sm italic mb-2">
        Published {{ rtf.format(dayDiff, "day") }}
      </p>
      <ContentRendererMarkdown :value="blogPost" />
    </article>
  </ContentRenderer>
</template>
