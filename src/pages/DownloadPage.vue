<script setup lang="ts">
import DownloadButtons from '@/components/DownloadButtons.vue'
import { STORE_URLS } from '@/config'
</script>

<template>
  <div class="download-page">
    <section class="section">
      <div class="container download-page__inner">
        <span class="eyebrow">Download</span>
        <h1 class="download-page__title">Get HomeHandy for free</h1>
        <p class="section-subtitle">
          Available on both app stores. Pick your platform — or use the big button, it already knows
          which device you're on.
        </p>

        <DownloadButtons />

        <div class="download-page__stores">
          <a
            :href="STORE_URLS.android"
            class="btn btn--outline download-page__store"
            rel="noopener"
          >
            Android on Google Play
          </a>
          <a :href="STORE_URLS.ios" class="btn btn--outline download-page__store" rel="noopener">
            iPhone &amp; iPad on the App Store
          </a>
        </div>

        <p class="download-page__note">
          HomeHandy is a companion to your home — set up your first plan in minutes, no account
          required to start.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.download-page__inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-lg);
  padding-block: var(--space-4xl);
}

.download-page__title {
  margin-bottom: var(--space-md);
}

.download-page__stores {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  justify-content: center;
}

.download-page__store {
  min-width: 220px;
}

.download-page__note {
  color: var(--color-muted);
  font-size: var(--font-size-body-small);
  max-width: 480px;
}
</style>
