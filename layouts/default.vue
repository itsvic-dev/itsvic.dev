<template>
  <div class="flex flex-col text-mainText min-h-screen">
    <nav class="top-0 fixed w-full px-8 py-4 backdrop-blur-lg bg-bgs-black/70">
      <NavbarShared />
    </nav>

    <div class="flex-1">
      <slot />
    </div>

    <footer class="py-6 px-4 text-center bg-bgs-black text-contrastText">
      Copyright &copy; {{ new Date().getFullYear() }} it's vic!
    </footer>
  </div>
</template>
