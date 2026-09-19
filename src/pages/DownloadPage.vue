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
          Available on both app stores. Pick your platform, or use the big button: it already knows
          which device you're on.
        </p>

        <DownloadButtons />

        <div class="download-page__stores">
          <a :href="STORE_URLS.android" v-reveal class="card download-page__store" rel="noopener">
            <span class="download-page__store-name">Google Play</span>
            <span class="download-page__store-sub">Android, phones and tablets</span>
          </a>
          <a
            :href="STORE_URLS.ios"
            v-reveal="'right'"
            class="card download-page__store"
            rel="noopener"
          >
            <span class="download-page__store-name">App Store</span>
            <span class="download-page__store-sub">iPhone and iPad</span>
          </a>
        </div>

        <p class="download-page__note">
          HomeHandy is a companion to your home. Set up your first plan in minutes, no account
          required to start.
        </p>
        <p class="download-page__reassurance">Free forever. No account required.</p>
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

.download-page__stores {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  justify-content: center;
  margin-top: var(--space-xl);
}

.download-page__store {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-xs);
  min-width: 240px;
  text-align: left;
  transition: background-color var(--motion-quick) var(--motion-curve);

  &:hover {
    background: var(--color-surface-tint);
  }
}

.download-page__store-name {
  font-family: var(--font-display);
  font-weight: var(--font-weight-display);
  font-size: var(--font-size-h3);
  letter-spacing: var(--letter-spacing-heading);
  color: var(--color-ink);
}

.download-page__store-sub {
  color: var(--color-muted);
  font-size: var(--font-size-body-small);
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
