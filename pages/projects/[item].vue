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
const dayDiff = Math.round(
  (+new Date(project.value?.pubDate) - +new Date()) / (24 * 60 * 60 * 60)
);
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
