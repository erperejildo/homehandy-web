<script setup lang="ts">
import SiteHeader from '@/components/SiteHeader.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <SiteHeader />
  <main class="app-main">
    <RouterView />
  </main>
  <SiteFooter />
</template>

<style scoped lang="scss">
.app-main {
  min-height: 60vh;
}
</style>
