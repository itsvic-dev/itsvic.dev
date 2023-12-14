<template>
  <nav class="top-0 fixed w-full px-8 py-4 backdrop-blur-lg bg-bgs-black/70">
    <NavbarShared />
  </nav>

  <slot />

  <footer class="py-6 px-4 text-center bg-bgs-black text-contrastText">
    Copyright &copy; {{ new Date().getFullYear() }} it's vic!
  </footer>
</template>
