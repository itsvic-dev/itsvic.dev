<script setup lang="ts">
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
const dayDiff = Math.round(
  (+new Date(blogPost.value?.pubDate) - +new Date()) / (24 * 60 * 60 * 60)
);
</script>
<template>
  <Header :title="blogPost?.title!" :tagline="blogPost?.shortDescription" />

  <ContentRenderer v-if="blogPost" :value="blogPost">
    <article class="blog">
      <p class="text-sm italic mb-2">
        Published {{ rtf.format(dayDiff, "day") }}
      </p>
      <ContentRendererMarkdown :value="blogPost" />
    </article>
  </ContentRenderer>
</template>
