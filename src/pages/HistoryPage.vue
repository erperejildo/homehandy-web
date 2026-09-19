<script setup lang="ts">
import DownloadButtons from '@/components/DownloadButtons.vue'
import FeatureCard from '@/components/FeatureCard.vue'

const historyFeatures = [
  {
    chip: 'Automatic',
    title: 'Every job, recorded',
    description:
      'The moment you mark a task done, it lands in your service history with the date — no extra work required.',
  },
  {
    chip: 'Photos',
    title: 'Receipts and proof',
    description:
      'Attach photos of receipts, filters or finished work so you always know exactly what was done.',
  },
  {
    chip: 'Export',
    title: 'PDF maintenance report',
    description:
      'Generate a clean PDF report of your home\u2019s upkeep. Perfect for warranties, insurers or a future buyer.',
  },
  {
    chip: 'Vendors',
    title: 'Know who to call',
    description:
      'Keep a list of trusted vendors and see which jobs each one has done for you over the years.',
  },
]
</script>

<template>
  <div class="history-page">
    <section class="section">
      <div class="container">
        <span class="eyebrow">Service History</span>
        <h1 class="history-page__title">A maintenance history you can rely on</h1>
        <p class="section-subtitle">
          Homes run on thousands of small jobs. HomeHandy remembers them all, so you can prove your
          home has been cared for — and never re-buy a part you already replaced.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container history-page__grid">
        <FeatureCard
          v-for="feature in historyFeatures"
          :key="feature.title"
          :chip="feature.chip"
          :title="feature.title"
          :description="feature.description"
        />
      </div>
    </section>

    <section class="section">
      <div class="container history-page__cta card">
        <h2 class="section-title">Start building your home's story</h2>
        <DownloadButtons />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.history-page__title {
  margin-bottom: var(--space-md);
}

.history-page__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-lg);
}

.history-page__cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-md);
}
</style>
