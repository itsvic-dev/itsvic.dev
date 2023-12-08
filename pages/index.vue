<script setup lang="ts">
useHead({
	title: "it's vic!",
	bodyAttrs: {
		'class': 'flex flex-col text-mainText',
	},
});
</script>

<template>
	<!-- navbar -->
	<nav class="top-0 fixed w-full px-8 py-4 backdrop-blur-lg bg-bgs-black/70">
		<p class="italic font-bold text-contrastText">it's vic!</p>
	</nav>
	<!-- hero -->
	<header class="bg-gradient-to-b from-bgs-black to-bgs-heroShine text-white flex flex-col items-center py-48">
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
			I work on various projects, and like to write about them on my blog. you can check them out below!
		</p>

		<hr class="h-1 mx-8 my-12 bg-black/10 rounded-full" />

		<div class="flex justify-between items-center">
			<div>
				<h1 class="text-4xl font-bold italic text-headerText">Latest blog posts</h1>
				<p>[CHANGEME] the ramblings of a deranged mind.</p>
			</div>
			<Button>Show all</Button>
		</div>
		<div class="grid sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-8">
			<BlogCard title="Blog post" shortDesc="Indeed a blog post." image="" />
			<BlogCard title="Blog post" shortDesc="Indeed a blog post." image="" />
			<BlogCard title="Blog post" shortDesc="Indeed a blog post." image="" />
		</div>

		<hr class="h-1 mx-8 my-12 bg-black/10 rounded-full" />

		<div class="flex justify-between items-center">
			<div>
				<h1 class="text-4xl font-bold italic text-headerText">Latest projects</h1>
				<p>some of the stuff I work on.</p>
			</div>
			<Button>Show all</Button>
		</div>
		<div class="grid sm:grid-cols-2 lg:grid-cols-3 mt-4 gap-8">
			<ProjectCard title="Blog post" shortDesc="Indeed a blog post." image="" framework="Python" />
			<ProjectCard title="Blog post" shortDesc="Indeed a blog post." image="" framework="Python" />
			<ProjectCard title="Blog post" shortDesc="Indeed a blog post." image="" framework="Python" />
		</div>

		<hr class="h-1 mx-8 my-12 bg-black/10 rounded-full" />

		<h1 class="text-4xl font-bold italic text-headerText">Social media</h1>
		<p>you can find my thoughts in lots of places.</p>
		<!-- TODO -->
	</main>

	<footer class="py-6 px-4 text-center mt-16 bg-bgs-black text-contrastText">
		Copyright &copy; {{ new Date().getFullYear() }} it's vic!
	</footer>
</template>
