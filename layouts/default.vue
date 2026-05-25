<script setup>
useHead({
  bodyAttrs: {
    class: "bg-zinc-900 text-zinc-50",
  },
});
</script>

<template>
  <slot />

  <ClientOnly>
    <FloatingSidebar />
  </ClientOnly>

  <footer class="mt-16 py-4 text-center text-xs text-zinc-300 print:hidden">
    <a
      href="https://www.abuseipdb.com/user/55544"
      title="AbuseIPDB is an IP address blacklist for webmasters and sysadmins to report IP addresses engaging in abusive behavior on their networks"
    >
      <img
        src="https://www.abuseipdb.com/contributor/55544.svg"
        alt="AbuseIPDB Contributor Badge"
        class="mx-auto mb-4 h-16 rounded bg-white p-2"
      />
    </a>

    it's vic! &copy; {{ new Date().getFullYear() }}
  </footer>
</template>
