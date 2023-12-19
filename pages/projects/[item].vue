<script setup lang="ts">
import "~/assets/blogStyle.css";
const { params } = useRoute();
const { data: project } = await useAsyncData("project", () =>
  queryContent()
    .where({
      _id: `content:projects:${params.item}.md`,
    })
    .findOne()
);

const rtf = new Intl.RelativeTimeFormat("en", {
  style: "long",
  numeric: "auto",
});
const dayDiff = Math.ceil(
  (+new Date(project.value?.pubDate) - +new Date()) / (24 * 60 * 60 * 1000)
);

useSeoMeta({
  title: `${project.value?.title} - Projects - it's vic!`,
  ogTitle: `${project.value?.title} - it's vic! Projects`,
  description: project.value?.shortDescription,
  ogDescription: project.value?.shortDescription,
  ogImage: project.value?.image,
  twitterCard: "summary_large_image",
});
</script>
<template>
  <Header :title="project?.title!" :tagline="project?.shortDescription" />

  <ContentRenderer v-if="project" :value="project">
    <article class="blog">
      <p class="text-sm italic mb-2">
        Published {{ rtf.format(dayDiff, "day") }}
      </p>
      <ContentRendererMarkdown :value="project" />
    </article>
  </ContentRenderer>
</template>
