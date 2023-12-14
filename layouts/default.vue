<template>
  <nav class="top-0 sticky w-full px-8 py-4 backdrop-blur-lg bg-bgs-black/70">
    <p class="italic font-bold text-contrastText">it's vic!</p>
  </nav>
  <slot />
  <footer class="py-6 px-4 text-center mt-16 bg-bgs-black text-contrastText">
    Copyright &copy; {{ new Date().getFullYear() }} it's vic!
  </footer>
</template>
