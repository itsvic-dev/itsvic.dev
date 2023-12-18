<script setup lang="ts">
import projects from "~/assets/projectsTemp.json";
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
          <h2 class="text-2xl font-bold italic">{{ project.title }}</h2>
          <p>{{ project.shortDescription }}</p>
        </div>
        <div>
          <NuxtLink :to="`/projects/${project.id}`">
            <Button>Learn more</Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>
