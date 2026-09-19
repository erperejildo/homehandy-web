<script setup lang="ts">
import DownloadButtons from '@/components/DownloadButtons.vue'
import FeatureCard from '@/components/FeatureCard.vue'

const recurrenceCards = [
  {
    chip: 'Intervals',
    title: 'Days, months or years',
    description:
      'Replace the HVAC filter every 90 days, flush the water heater yearly. Any interval your home needs.',
    tint: 'info' as const,
  },
  {
    chip: 'Seasonal',
    title: 'Seasonal windows',
    description:
      'Some jobs only make sense at a certain time of year. Clean gutters in autumn, pressure wash in spring.',
    tint: 'warm' as const,
  },
  {
    chip: 'Real-world',
    title: 'Cadences that make sense',
    description:
      'Water softener salt every six weeks, not a rigid monthly reminder that drifts out of sync.',
    tint: 'tint' as const,
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
          HomeHandy schedules every task around your home, not around a one-size-fits-all template.
          Each task gets a recurrence, a priority and a reminder lead time.
        </p>
      </div>
    </section>

    <section class="section tasks-page__recurrence">
      <div class="container">
        <h2 class="section-title">Recurrence your way</h2>
        <div class="tasks-page__grid">
          <FeatureCard
            v-for="card in recurrenceCards"
            :key="card.title"
            v-reveal
            :chip="card.chip"
            :title="card.title"
            :description="card.description"
            :tint="card.tint"
            class="tasks-page__feature"
          />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title">What a plan looks like</h2>
        <div v-reveal class="card card--outline tasks-page__table">
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
                <td>
                  <span
                    class="tasks-page__priority"
                    :class="{ 'is-critical': task.priority === 'Critical' }"
                  >
                    {{ task.priority }}
                  </span>
                </td>
                <td class="tasks-page__cost">{{ task.cost ?? '–' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div v-reveal class="tasks-page__cta card--dark">
          <h2 class="tasks-page__cta-title">Get reminded before it's a problem</h2>
          <p class="tasks-page__cta-text">Set it once and HomeHandy keeps the rhythm for you.</p>
          <DownloadButtons dark />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.tasks-page__title {
  margin-bottom: var(--space-md);
}

.tasks-page__recurrence {
  padding-top: 0;
}

.tasks-page__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-lg);
  align-items: start;
}

.tasks-page__feature:nth-child(2) {
  margin-top: var(--space-2xl);
}

.tasks-page__feature:nth-child(3) {
  margin-top: var(--space-4xl);
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
    letter-spacing: var(--letter-spacing-kicker);
  }

  tr:last-child td {
    border-bottom: none;
  }

  td:first-child {
    font-weight: var(--font-weight-body-bold);
    color: var(--color-ink);
  }
}

.tasks-page__priority {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  font-weight: var(--font-weight-body-medium);

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: var(--radius-pill);
    background: var(--color-tertiary);
  }

  &.is-critical::before {
    background: var(--color-danger);
  }
}

.tasks-page__cost {
  color: var(--color-muted);
}

.tasks-page__cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-md);
  padding: var(--space-3xl) var(--space-2xl);
}

.tasks-page__cta-title {
  color: var(--color-on-dark);
}

.tasks-page__cta-text {
  color: var(--color-on-dark-muted);
}

@media (max-width: 720px) {
  .tasks-page__grid {
    grid-template-columns: 1fr;
  }

  .tasks-page__feature:nth-child(2),
  .tasks-page__feature:nth-child(3) {
    margin-top: 0;
  }

  .tasks-page__cta {
    padding: var(--space-2xl) var(--space-lg);
  }
}
</style>
