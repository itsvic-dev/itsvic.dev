<script setup lang="ts">
import projects from "~/assets/projectsTemp.json";

definePageMeta({
  layout: "nav-fixed",
});

useHead({
  title: "it's vic!",
  bodyAttrs: {
    class: "flex flex-col text-mainText",
  },
});
</script>

<template>
  <!-- hero -->
  <header
    class="bg-gradient-to-b from-bgs-black to-bgs-heroShine text-white flex flex-col items-center py-48 px-16 text-center"
  >
    <p class="text-2xl italic text-contrastSecondaryText">hey,</p>
    <h1 class="font-display text-5xl italic font-black">it's vic!</h1>
    <p class="text-xl mt-1">a software developer and designer.</p>
  </header>
  <main class="mx-auto max-w-7xl mt-20 px-16">
    <h1 class="text-4xl font-bold italic text-headerText">About me</h1>
    <p class="mt-2">
      hi there! I'm an 18 year old software developer and designer from Poland.
    </p>
    <p class="mt-1">
      I work on various projects, and like to write about them on my blog. you
      can check them out below!
    </p>

    <hr class="h-1 my-12 bg-black/10 rounded-full" />

    <div class="flex justify-between items-center gap-6 flex-wrap">
      <div>
        <h1 class="text-4xl font-bold italic text-headerText">
          Latest blog posts
        </h1>
        <p class="mt-1">[CHANGEME] the ramblings of a deranged mind.</p>
      </div>
      <NuxtLink to="/blog">
        <Button>Show all</Button>
      </NuxtLink>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-8">
      <BlogCard title="Blog post" shortDesc="Indeed a blog post." image="" />
      <BlogCard title="Blog post" shortDesc="Indeed a blog post." image="" />
      <BlogCard title="Blog post" shortDesc="Indeed a blog post." image="" />
    </div>

    <hr class="h-1 my-12 bg-black/10 rounded-full" />

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
      <ProjectCard
        v-for="project in projects.slice(0, 3)"
        :title="project.title"
        :framework="project.framework"
        :short-desc="project.shortDescription"
        :image="project.image"
      />
    </div>

    <hr class="h-1 my-12 bg-black/10 rounded-full" />

    <h1 class="text-4xl font-bold italic text-headerText">Social media</h1>
    <p class="mt-1">you can find my thoughts in lots of places.</p>
    <!-- TODO -->
  </main>
</template>
