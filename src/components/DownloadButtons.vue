<script setup lang="ts">
import { computed } from 'vue'
import { STORE_URLS, detectPlatform } from '@/config'
import appStoreBadge from '@/assets/store-app-store.avif'
import googlePlayBadge from '@/assets/store-google-play.avif'

interface StoreBadge {
  key: 'ios' | 'android'
  label: string
  url: string
  image: { src: string; width: number; height: number }
}

const badges = computed<StoreBadge[]>(() => {
  const appStore: StoreBadge = {
    key: 'ios',
    label: 'Download on the App Store',
    url: STORE_URLS.ios,
    image: { src: appStoreBadge, width: 256, height: 84 },
  }
  const googlePlay: StoreBadge = {
    key: 'android',
    label: 'Get it on Google Play',
    url: STORE_URLS.android,
    image: { src: googlePlayBadge, width: 256, height: 84 },
  }

  return detectPlatform() === 'ios' ? [appStore, googlePlay] : [googlePlay, appStore]
})
</script>

<template>
  <div class="download-buttons">
    <a
      v-for="badge in badges"
      :key="badge.key"
      :href="badge.url"
      class="download-buttons__link"
      rel="noopener"
    >
      <img
        class="download-buttons__badge"
        :src="badge.image.src"
        :alt="badge.label"
        :width="badge.image.width"
        :height="badge.image.height"
      />
    </a>
  </div>
</template>

<style scoped lang="scss">
.download-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  align-items: center;
}

.download-buttons__link {
  display: inline-flex;
  border-radius: var(--radius-button);
  transition: opacity var(--motion-quick) var(--motion-curve);

  &:hover {
    opacity: 0.85;
  }
}

.download-buttons__badge {
  display: block;
  width: auto;
  height: 60px;
}
</style>
