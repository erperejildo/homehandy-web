<script setup lang="ts">
import { APP_NAME, APP_DESCRIPTION, REPO_URL, STORE_URLS } from '@/config'

const year = new Date().getFullYear()

const links = [
  { label: 'Tasks & Reminders', to: '/tasks/' },
  { label: 'Service History', to: '/history/' },
  { label: 'Starter Packs', to: '/packs/' },
  { label: 'Download', to: '/download/' },
]
</script>

<template>
  <footer class="site-footer">
    <div class="container site-footer__inner">
      <div class="site-footer__brand">
        <p class="site-footer__name">{{ APP_NAME }}</p>
        <p class="site-footer__description">{{ APP_DESCRIPTION }}</p>
      </div>

      <nav class="site-footer__nav" aria-label="Footer navigation">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to" class="site-footer__link">
          {{ link.label }}
        </RouterLink>
        <a :href="STORE_URLS.ios" class="site-footer__link" rel="noopener">App Store</a>
        <a :href="STORE_URLS.android" class="site-footer__link" rel="noopener">Google Play</a>
      </nav>
    </div>

    <div class="container site-footer__legal">
      <p>© {{ year }} {{ APP_NAME }}. All rights reserved.</p>
      <a :href="REPO_URL" rel="noopener">Source code</a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.site-footer {
  background: var(--color-ink);
  color: var(--color-background-top);
  padding-block: var(--space-2xl);
  margin-top: var(--space-3xl);
}

.site-footer__inner {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2xl);
  justify-content: space-between;
}

.site-footer__brand {
  max-width: 480px;
}

.site-footer__name {
  font-family: var(--font-display);
  font-weight: var(--font-weight-display);
  font-size: var(--font-size-h3);
  margin-bottom: var(--space-sm);
  color: var(--color-surface);
}

.site-footer__description {
  font-size: var(--font-size-body-small);
  color: var(--color-background-top);
  opacity: 0.8;
}

.site-footer__nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.site-footer__link {
  color: var(--color-background-top);
  font-size: var(--font-size-body-small);
  opacity: 0.8;
  transition: opacity var(--motion-quick) var(--motion-curve);

  &:hover {
    color: var(--color-primary-light);
    opacity: 1;
  }
}

.site-footer__legal {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  justify-content: space-between;
  margin-top: var(--space-2xl);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--color-ink-active);
  font-size: var(--font-size-caption);
  color: var(--color-background-top);
  opacity: 0.7;

  a {
    color: var(--color-background-top);

    &:hover {
      color: var(--color-primary-light);
    }
  }
}
</style>
