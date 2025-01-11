<template>
  <div
    class="grid h-screen w-full grid-rows-2 items-center justify-center bg-violet-700 text-purple-50 lg:grid-cols-2 lg:grid-rows-1"
  >
    <div class="relative flex h-full items-center justify-center">
      <div class="px-8">
        <h1 class="font-display text-4xl font-bold">it's vic!</h1>
        <p class="text-2xl text-purple-200">Software developer and designer.</p>
      </div>

      <!-- >=1024px right-side cut -->
      <svg
        viewBox="0 0 10 10"
        class="absolute -right-16 hidden h-full w-16 lg:block"
        preserveAspectRatio="none"
      >
        <polygon points="0 0, 10 0, 0 10" class="fill-violet-700" />
      </svg>

      <!-- <1024px bottom cut -->
      <svg
        viewBox="0 0 10 10"
        class="absolute -bottom-16 h-16 w-full lg:hidden"
        preserveAspectRatio="none"
      >
        <polygon points="0 0, 10 0, 0 10" class="fill-violet-700" />
      </svg>
    </div>

    <div
      class="flex h-full w-screen items-center justify-center bg-zinc-900 lg:w-auto"
    >
      <p>content content content</p>
    </div>
  </div>
</template>
