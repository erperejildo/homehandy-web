<script setup lang="ts">
import { APP_NAME } from '@/config'
import iconUrl from '@/assets/icon.png'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Tasks & Reminders', to: '/tasks/' },
  { label: 'Service History', to: '/history/' },
  { label: 'Starter Packs', to: '/packs/' },
  { label: 'Download', to: '/download/' },
]
</script>

<template>
  <header class="site-header">
    <div class="container site-header__inner">
      <RouterLink class="site-header__brand" to="/">
        <img class="site-header__logo" :src="iconUrl" alt="" width="36" height="36" />
        <span class="site-header__name">{{ APP_NAME }}</span>
      </RouterLink>

      <nav class="site-header__nav" aria-label="Main navigation">
        <RouterLink v-for="link in links" :key="link.to" :to="link.to" class="site-header__link">
          {{ link.label }}
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.site-header {
  position: sticky;
  top: 0;
  z-index: 10;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-outline);
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-lg);
  min-height: var(--header-height);
}

.site-header__brand {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  font-family: var(--font-display);
  font-weight: var(--font-weight-display);
  font-size: var(--font-size-title);
  color: var(--color-ink);
  letter-spacing: var(--letter-spacing-tight);
  flex-shrink: 0;

  &:hover {
    color: var(--color-ink-active);
  }
}

.site-header__logo {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  object-fit: cover;
}

.site-header__nav {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  overflow-x: auto;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
}

.site-header__link {
  padding: var(--space-xs) var(--space-md);
  border-radius: var(--radius-sm);
  color: var(--color-ink-active);
  font-size: var(--font-size-body-small);
  font-weight: var(--font-weight-body-medium);
  white-space: nowrap;
  transition:
    background-color var(--motion-quick) var(--motion-curve),
    color var(--motion-quick) var(--motion-curve);

  &:hover {
    background: var(--color-ink-ghost);
    color: var(--color-ink);
  }

  &.router-link-active {
    background: var(--color-ink);
    color: var(--color-on-dark);
  }
}
</style>
