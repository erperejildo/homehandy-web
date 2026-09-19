<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    description: string
    chip?: string
    tint?: 'tint' | 'info' | 'warm' | 'sky' | 'sand'
  }>(),
  { tint: 'tint' },
)
</script>

<template>
  <article class="feature-card card">
    <span v-if="chip" class="chip" :class="tint !== 'tint' ? `chip--${tint}` : null">{{
      chip
    }}</span>
    <h3 class="feature-card__title">{{ title }}</h3>
    <p class="feature-card__description">{{ description }}</p>
  </article>
</template>

<style scoped lang="scss">
.feature-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  height: 100%;
}

.feature-card__title {
  font-size: var(--font-size-h3);
  letter-spacing: var(--letter-spacing-heading);
}

.feature-card__description {
  color: var(--color-muted);
  font-size: var(--font-size-body-small);
}
</style>
