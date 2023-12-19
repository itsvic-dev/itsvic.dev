<script setup lang="ts">
const projects = await queryContent("/projects").sort({ pubDate: -1 }).find();
</script>
<template>
  <Header title="Projects" tagline="some of the stuff I work on." />

  <main class="mx-auto max-w-7xl my-16 px-8 sm:px-16 gap-16 flex flex-col">
    <div
      v-for="project in projects"
      class="flex gap-4 sm:gap-8 flex-col sm:flex-row"
    >
      <NuxtPicture
        :src="project.image"
        :img-attrs="{ class: 'w-full sm:max-w-xs rounded-lg shadow-sm' }"
      />
      <div class="flex flex-col justify-between sm:py-4 gap-4">
        <div>
          <h2 class="text-2xl font-bold italic flex items-center gap-4">
            {{ project.title }}
            <span
              class="not-italic text-xs bg-sky-700 text-white rounded-full px-2 py-1"
              >{{ project.framework }}</span
            >
          </h2>
          <p>{{ project.shortDescription }}</p>
        </div>
        <div>
          <NuxtLink :to="project._path">
            <Button>Learn more</Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>
