<script setup lang="ts">
import DownloadButtons from '@/components/DownloadButtons.vue'

const packs = [
  {
    name: 'HVAC & Air',
    chip: 'hvac',
    tint: 'info',
    description: 'Keep the air clean and the system humming.',
    tasks: [
      { name: 'Replace HVAC filter', detail: 'Every 90 days · critical · about $80 a year' },
      { name: 'Schedule HVAC tune-up', detail: 'Every year · critical · about $180 a year' },
      { name: 'Vacuum supply and return vents', detail: 'Every 6 months' },
    ],
  },
  {
    name: 'Kitchen & Appliances',
    chip: 'kitchen',
    tint: 'warm',
    description: 'Water filters, coils and coffee machines that need love.',
    tasks: [
      { name: 'Replace refrigerator water filter', detail: 'Every 6 months · about $60 a year' },
      { name: 'Clean refrigerator coils', detail: 'Every 6 months' },
      { name: 'Descale coffee machine', detail: 'Every 60 days · about $24 a year' },
    ],
  },
  {
    name: 'Plumbing & Water',
    chip: 'plumbing',
    tint: 'tint',
    description: 'Catch leaks early and keep water running clean.',
    tasks: [
      { name: 'Inspect under-sink leaks', detail: 'Every 30 days · critical' },
      { name: 'Flush water heater', detail: 'Every year · critical' },
      { name: 'Refill water softener salt', detail: 'Every 6 weeks · about $120 a year' },
    ],
  },
  {
    name: 'Safety & Electrical',
    chip: 'safety',
    tint: 'sand',
    description: 'The jobs that protect everyone under your roof.',
    tasks: [
      { name: 'Test smoke and CO alarms', detail: 'Every 30 days · critical' },
      { name: 'Replace alarm backup batteries', detail: 'Every autumn · critical' },
      { name: 'Inspect fire extinguisher', detail: 'Every 6 months · critical' },
    ],
  },
  {
    name: 'Exterior & Seasonal',
    chip: 'exterior',
    tint: 'sky',
    description: 'Seasonal jobs that keep the outside looking sharp.',
    tasks: [
      { name: 'Clean gutters', detail: 'Every autumn · critical' },
      { name: 'Winterize hose bibs', detail: 'Every autumn · critical' },
      { name: 'Pressure wash patio and entry', detail: 'Every spring' },
    ],
  },
]
</script>

<template>
  <div class="packs-page">
    <section class="section">
      <div class="container">
        <span class="eyebrow">Starter Packs</span>
        <h1 class="packs-page__title">Plans built from real home experience</h1>
        <p class="section-subtitle">
          Choose the packs that match your home and HomeHandy seeds your plan instantly. Every task
          is editable, so adjust intervals, priorities and costs until they fit your house
          perfectly.
        </p>
      </div>
    </section>

    <section class="section packs-page__packs">
      <div class="container packs-page__grid">
        <article
          v-for="(pack, i) in packs"
          :key="pack.name"
          v-reveal
          class="card pack-card"
          :class="{ 'pack-card--featured': i === 0 }"
        >
          <div class="pack-card__body">
            <span class="chip" :class="pack.tint !== 'tint' ? `chip--${pack.tint}` : null">
              {{ pack.chip }}
            </span>
            <h2 class="pack-card__name">{{ pack.name }}</h2>
            <p class="pack-card__description">{{ pack.description }}</p>
          </div>
          <ul class="pack-card__tasks">
            <li v-for="task in pack.tasks" :key="task.name" class="pack-card__task">
              <span class="pack-card__task-name">{{ task.name }}</span>
              <span class="pack-card__task-detail">{{ task.detail }}</span>
            </li>
          </ul>
        </article>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div v-reveal class="packs-page__cta card--dark">
          <h2 class="packs-page__cta-title">All packs included, fully editable</h2>
          <p class="packs-page__cta-text">Five packs, one tap to start, nothing locked down.</p>
          <DownloadButtons dark />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.packs-page__title {
  margin-bottom: var(--space-md);
}

.packs-page__packs {
  padding-top: 0;
}

.packs-page__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-lg);
  align-items: start;
}

.pack-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.pack-card--featured {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: var(--space-2xl);
  align-items: start;
}

.pack-card__body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-sm);
}

.pack-card--featured .pack-card__name {
  font-size: var(--font-size-h2);
}

.pack-card__name {
  font-size: var(--font-size-h3);
}

.pack-card__description {
  color: var(--color-muted);
  font-size: var(--font-size-body-small);
}

.pack-card__tasks {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.pack-card__task {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: var(--space-sm) var(--space-md);
  border-radius: var(--radius-md);
  background: var(--color-surface);
  border: 1px solid var(--color-outline);
}

.pack-card__task-name {
  font-weight: var(--font-weight-body-bold);
  font-size: var(--font-size-body-small);
}

.pack-card__task-detail {
  color: var(--color-muted);
  font-size: var(--font-size-caption);
}

.packs-page__cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-md);
  padding: var(--space-3xl) var(--space-2xl);
}

.packs-page__cta-title {
  color: var(--color-on-dark);
}

.packs-page__cta-text {
  color: var(--color-on-dark-muted);
}

@media (max-width: 720px) {
  .packs-page__grid {
    grid-template-columns: 1fr;
  }

  .pack-card--featured {
    grid-column: auto;
    display: flex;
  }

  .pack-card--featured .pack-card__name {
    font-size: var(--font-size-h3);
  }

  .packs-page__cta {
    padding: var(--space-2xl) var(--space-lg);
  }
}
</style>
