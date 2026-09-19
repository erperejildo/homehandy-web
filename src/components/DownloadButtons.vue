<script setup lang="ts">
import { computed } from 'vue'
import { STORE_URLS, detectPlatform } from '@/config'

const platform = computed(() => detectPlatform())

const primary = computed(() =>
  platform.value === 'ios'
    ? { label: 'Download on the App Store', url: STORE_URLS.ios }
    : { label: 'Get it on Google Play', url: STORE_URLS.android },
)

const secondary = computed(() =>
  platform.value === 'ios'
    ? { label: 'Google Play', url: STORE_URLS.android }
    : { label: 'App Store', url: STORE_URLS.ios },
)
</script>

<template>
  <div class="download-buttons">
    <a :href="primary.url" class="btn btn--primary btn--lg" rel="noopener">
      {{ primary.label }}
    </a>
    <a :href="secondary.url" class="btn btn--outline" rel="noopener">{{ secondary.label }}</a>
  </div>
</template>

<style scoped lang="scss">
.download-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  align-items: center;
}
</style>
