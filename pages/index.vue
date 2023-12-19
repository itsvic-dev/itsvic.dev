<script setup lang="ts">
const { data: projects } = useAsyncData("projects", () =>
  queryContent("/projects")
    .sort({ pubDate: -1 })
    .limit(3)
    .only(["title", "shortDescription", "image", "framework", "_path"])
    .find()
);
const { data: blog } = useAsyncData("blog", () =>
  queryContent("/blog")
    .sort({ pubDate: -1 })
    .limit(3)
    .only(["title", "shortDescription", "image", "_path"])
    .find()
);
useSeoMeta({
  title: "it's vic!",
  ogTitle: "it's vic!",
  description: "A software developer and designer from Poland.",
  ogDescription: "A software developer and designer from Poland.",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <!-- hero -->
  <Header
    pre-title="hey,"
    title="it's vic!"
    :tagline="$t('index.header.tagline')"
  />

  <main class="mx-auto max-w-7xl my-16 px-8 md:px-16">
    <h1 class="text-4xl font-bold italic text-headerText">
      {{ $t("index.about-me") }}
    </h1>
    <p class="mt-2">{{ $t("index.about-text-1") }}</p>
    <p class="mt-1">{{ $t("index.about-text-2") }}</p>

    <Separator />

    <div class="flex justify-between items-center gap-6 flex-wrap">
      <div>
        <h1 class="text-4xl font-bold italic text-headerText">
          {{ $t("index.latest-blog") }}
        </h1>
        <p class="mt-1">{{ $t("blog.tagline") }}</p>
      </div>
      <NuxtLink to="/blog">
        <Button>{{ $t("general.show-all") }}</Button>
      </NuxtLink>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-8">
      <NuxtLink v-for="blogPost in blog" :to="blogPost._path">
        <BlogCard
          :title="blogPost.title!"
          :short-desc="blogPost.shortDescription"
          :image="blogPost.image"
        />
      </NuxtLink>
    </div>

    <Separator />

    <div class="flex justify-between items-center gap-6 flex-wrap">
      <div>
        <h1 class="text-4xl font-bold italic text-headerText">
          {{ $t("index.latest-projects") }}
        </h1>
        <p class="mt-1">{{ $t("projects.tagline") }}</p>
      </div>
      <NuxtLink to="/projects">
        <Button>{{ $t("general.show-all") }}</Button>
      </NuxtLink>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-8">
      <NuxtLink v-for="project in projects" :to="project._path">
        <ProjectCard
          :title="project.title!"
          :framework="project.framework"
          :short-desc="project.shortDescription"
          :image="project.image"
        />
      </NuxtLink>
    </div>

    <!-- TODO: social media section
    <Separator />
    <h1 class="text-4xl font-bold italic text-headerText">Social media</h1>
    <p class="mt-1">you can find my thoughts in lots of places.</p>
    -->
  </main>
</template>
