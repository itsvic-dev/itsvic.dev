<script setup lang="ts">
import "~/assets/blogStyle.css";
const { params } = useRoute();
const project = await queryContent()
  .where({
    _id: `content:projects:${params.item}.md`,
  })
  .findOne();
</script>
<template>
  <Header :title="project.title!" :tagline="project.shortDescription" />

  <ContentRenderer :value="project">
    <article class="blog">
      <ContentRendererMarkdown :value="project" />
    </article>
  </ContentRenderer>
</template>
