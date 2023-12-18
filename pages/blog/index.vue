<script setup lang="ts">
import blog from "~/assets/blogTemp.json";
</script>
<template>
  <Header title="Blog" tagline="some of the stuff I write about." />

  <main class="mx-auto max-w-7xl my-16 px-8 sm:px-16 gap-16 flex flex-col">
    <div
      v-for="blogPost in blog"
      class="flex gap-4 sm:gap-8 flex-col sm:flex-row"
    >
      <NuxtPicture
        :src="blogPost.image"
        :img-attrs="{ class: 'w-full sm:max-w-xs rounded-lg shadow-sm' }"
      />
      <div class="flex flex-col justify-between sm:py-4 gap-4">
        <div>
          <h2 class="text-2xl font-bold italic">{{ blogPost.title }}</h2>
          <p>{{ blogPost.shortDescription }}</p>
        </div>
        <div>
          <NuxtLink :to="`/blog/${blogPost.id}`">
            <Button>Read more</Button>
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>
