<script setup lang="ts">
import DownloadButtons from '@/components/DownloadButtons.vue'

const packs = [
  {
    name: 'HVAC & Air',
    chip: 'hvac',
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
          is editable — adjust intervals, priorities and costs until they fit your house perfectly.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container packs-page__grid">
        <article v-for="pack in packs" :key="pack.name" class="card pack-card">
          <span class="chip">{{ pack.chip }}</span>
          <h2 class="pack-card__name">{{ pack.name }}</h2>
          <p class="pack-card__description">{{ pack.description }}</p>
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
      <div class="container packs-page__cta card">
        <h2 class="section-title">All packs included, fully editable</h2>
        <DownloadButtons />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.packs-page__title {
  margin-bottom: var(--space-md);
}

.packs-page__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-lg);
}

.pack-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
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
  border-radius: var(--radius-button-form);
  background: var(--color-background-top);
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
}
</style>
