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
    tagline="a software developer and designer."
  />

  <main class="mx-auto max-w-7xl my-16 px-8 md:px-16">
    <h1 class="text-4xl font-bold italic text-headerText">About me</h1>
    <p class="mt-2">
      hi there! I'm a 19 year old software developer and designer from Poland.
    </p>
    <p class="mt-1">
      I work on various projects, and like to write about them on my blog. you
      can check them out below!
    </p>

    <p class="mt-4">
      this website sucks ass jesus christ please yell at me to finish the
      redesign
    </p>

    <Separator />

    <div class="flex justify-between items-center gap-6 flex-wrap">
      <div>
        <h1 class="text-4xl font-bold italic text-headerText">
          Latest blog posts
        </h1>
        <p class="mt-1">some of the stuff I write about.</p>
      </div>
      <NuxtLink to="/blog">
        <Button>Show all</Button>
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
          Latest projects
        </h1>
        <p class="mt-1">some of the stuff I work on.</p>
      </div>
      <NuxtLink to="/projects">
        <Button>Show all</Button>
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
