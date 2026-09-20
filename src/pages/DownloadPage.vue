<script setup lang="ts">
import DownloadButtons from '@/components/DownloadButtons.vue'
</script>

<template>
  <div class="download-page">
    <section class="section">
      <div class="container download-page__inner">
        <span class="eyebrow">Download Free Home Maintenance App</span>
        <h1 class="download-page__title">Get HomeHandy for free</h1>
        <p class="section-subtitle">
          The complete home maintenance tracker for iOS and Android. Available on both app stores
          with zero ads and offline-first privacy.
        </p>

        <div class="download-page__badges">
          <span class="chip">100% Free Forever</span>
          <span class="chip chip--warm">Offline-First Privacy</span>
          <span class="chip chip--sky">PDF Maintenance Reports</span>
        </div>

        <DownloadButtons />

        <p class="download-page__note">
          HomeHandy is a companion to your home. Set up your first plan in minutes.
        </p>
        <p class="download-page__reassurance">Free forever.</p>
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
  padding-block: var(--space-4xl) var(--space-5xl);
}

.download-page__title {
  margin-bottom: var(--space-md);
}

.download-page__badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--space-xs);
}

.download-page__note {
  color: var(--color-muted);
  font-size: var(--font-size-body-small);
  max-width: 480px;
}

.download-page__reassurance {
  color: var(--color-muted);
  font-size: var(--font-size-caption);
}
</style>
