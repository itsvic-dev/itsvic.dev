<script setup lang="ts">
import projects from "~/assets/projectsTemp.json";
import blog from "~/assets/blogTemp.json";

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
      hi there! I'm an 18 year old software developer and designer from Poland.
    </p>
    <p class="mt-1">
      I work on various projects, and like to write about them on my blog. you
      can check them out below!
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
      <NuxtLink
        :to="`/blog/${blogPost.id}`"
        v-for="blogPost in blog.slice(0, 3)"
      >
        <BlogCard
          :title="blogPost.title"
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
      <NuxtLink
        v-for="project in projects.slice(0, 3)"
        :to="`/projects/${project.id}`"
      >
        <ProjectCard
          :title="project.title"
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
