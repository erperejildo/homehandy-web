<script setup lang="ts">
import { APP_NAME, APP_DESCRIPTION, STORE_URLS } from '@/config'

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
        <p class="site-footer__heading">Pages</p>
        <RouterLink v-for="link in links" :key="link.to" :to="link.to" class="site-footer__link">
          {{ link.label }}
        </RouterLink>
        <a :href="STORE_URLS.ios" class="site-footer__link" rel="noopener">App Store</a>
        <a :href="STORE_URLS.android" class="site-footer__link" rel="noopener">Google Play</a>
      </nav>
    </div>

    <div class="container site-footer__legal">
      <p>© {{ year }} {{ APP_NAME }}. All rights reserved.</p>
      <a href="https://axislabs.eu" rel="noopener">Created by Axis Labs</a>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.site-footer {
  background: var(--color-ink);
  color: var(--color-on-dark);
  padding-block: var(--space-4xl) var(--space-2xl);
  margin-top: var(--space-5xl);
}

.site-footer__inner {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2xl);
  justify-content: space-between;
  align-items: flex-start;
}

.site-footer__brand {
  max-width: 520px;
}

.site-footer__name {
  font-family: var(--font-display);
  font-weight: var(--font-weight-display);
  font-size: clamp(48px, 8vw, 96px);
  line-height: var(--line-height-display);
  letter-spacing: var(--letter-spacing-display);
  color: var(--color-on-dark);
  margin-bottom: var(--space-lg);
}

.site-footer__description {
  font-size: var(--font-size-body-small);
  color: var(--color-on-dark-muted);
  max-width: 420px;
}

.site-footer__nav {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  min-width: 200px;
}

.site-footer__heading {
  font-size: var(--font-size-kicker);
  font-weight: var(--font-weight-body-bold);
  letter-spacing: var(--letter-spacing-kicker);
  text-transform: uppercase;
  color: var(--color-on-dark-faint);
  margin-bottom: var(--space-sm);
}

.site-footer__link {
  color: var(--color-on-dark-muted);
  font-size: var(--font-size-body-small);
  padding-block: var(--space-xs);
  transition: color var(--motion-quick) var(--motion-curve);

  &:hover {
    color: var(--color-primary-light);
  }
}

.site-footer__legal {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-md);
  justify-content: space-between;
  margin-top: var(--space-3xl);
  padding-top: var(--space-lg);
  border-top: 1px solid var(--color-outline-dark);
  font-size: var(--font-size-caption);
  color: var(--color-on-dark-faint);

  a {
    color: var(--color-on-dark-faint);

    &:hover {
      color: var(--color-primary-light);
    }
  }
}
</style>
