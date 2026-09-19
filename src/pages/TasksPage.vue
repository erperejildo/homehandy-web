<script setup lang="ts">
import DownloadButtons from '@/components/DownloadButtons.vue'
import FeatureCard from '@/components/FeatureCard.vue'

const recurrenceCards = [
  {
    chip: 'Intervals',
    title: 'Days, months or years',
    description:
      'Replace the HVAC filter every 90 days, flush the water heater yearly. Any interval your home needs.',
  },
  {
    chip: 'Seasonal',
    title: 'Seasonal windows',
    description:
      'Some jobs only make sense at a certain time of year. Clean gutters in autumn, pressure wash in spring.',
  },
  {
    chip: 'Real-world',
    title: 'Cadences that make sense',
    description:
      'Water softener salt every six weeks, not a rigid monthly reminder that drifts out of sync.',
  },
]

const exampleTasks = [
  {
    name: 'Replace HVAC filter',
    recurrence: 'Every 90 days',
    priority: 'Critical',
    cost: '$80 / year',
  },
  {
    name: 'Inspect under-sink leaks',
    recurrence: 'Every 30 days',
    priority: 'Critical',
    cost: null,
  },
  {
    name: 'Test smoke and CO alarms',
    recurrence: 'Every 30 days',
    priority: 'Critical',
    cost: null,
  },
  { name: 'Clean gutters', recurrence: 'Every autumn', priority: 'Critical', cost: null },
  {
    name: 'Descale coffee machine',
    recurrence: 'Every 60 days',
    priority: 'Routine',
    cost: '$24 / year',
  },
  { name: 'Flush water heater', recurrence: 'Every year', priority: 'Critical', cost: null },
]
</script>

<template>
  <div class="tasks-page">
    <section class="section">
      <div class="container">
        <span class="eyebrow">Tasks &amp; Reminders</span>
        <h1 class="tasks-page__title">Reminders that fit how homes actually work</h1>
        <p class="section-subtitle">
          HomeHandy schedules every task around your home — not around a one-size-fits-all template.
          Each task gets a recurrence, a priority and a reminder lead time.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">Recurrence your way</h2>
        <div class="tasks-page__grid">
          <FeatureCard
            v-for="card in recurrenceCards"
            :key="card.title"
            :chip="card.chip"
            :title="card.title"
            :description="card.description"
          />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">What a plan looks like</h2>
        <div class="card tasks-page__table">
          <table class="tasks-page__examples">
            <thead>
              <tr>
                <th>Task</th>
                <th>Recurrence</th>
                <th>Priority</th>
                <th>Est. cost</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="task in exampleTasks" :key="task.name">
                <td>{{ task.name }}</td>
                <td>{{ task.recurrence }}</td>
                <td>{{ task.priority }}</td>
                <td>{{ task.cost ?? '—' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container tasks-page__cta card">
        <h2 class="section-title">Get reminded before it's a problem</h2>
        <DownloadButtons />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.tasks-page__title {
  margin-bottom: var(--space-md);
}

.tasks-page__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-lg);
}

.tasks-page__table {
  padding: 0;
  overflow-x: auto;
}

.tasks-page__examples {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-body-small);

  th,
  td {
    text-align: left;
    padding: var(--space-md) var(--space-lg);
    border-bottom: 1px solid var(--color-outline);
  }

  th {
    color: var(--color-muted);
    font-weight: var(--font-weight-body-medium);
    font-size: var(--font-size-caption);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-tight);
  }

  tr:last-child td {
    border-bottom: none;
  }

  td:first-child {
    font-weight: var(--font-weight-body-bold);
    color: var(--color-ink);
  }
}

.tasks-page__cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-md);
}
</style>
