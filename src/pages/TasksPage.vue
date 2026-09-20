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
        <span class="eyebrow">Home Maintenance Schedule</span>
        <h1 class="tasks-page__title">Home maintenance schedule &amp; task reminders</h1>
        <p class="section-subtitle">
          Reminders that fit how homes actually work. HomeHandy schedules every task around your
          home, not around a one-size-fits-all template. Each task gets a flexible recurrence,
          priority level, and reminder lead time.
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

    <!-- Step-by-Step Guide -->
    <section class="section tasks-page__steps">
      <div class="container">
        <span class="eyebrow">Step-by-Step Planner</span>
        <h2 class="section-title">How to build a realistic home maintenance schedule</h2>
        <p class="section-subtitle">
          Prevent unexpected breakdown costs by organizing your routine home upkeep into four
          practical steps.
        </p>
        <div class="tasks-page__steps-grid">
          <div v-reveal class="card step-card">
            <span class="step-card__num">01</span>
            <h3 class="step-card__title">Audit essential systems</h3>
            <p class="step-card__text">
              Identify appliances and building elements requiring active upkeep: HVAC furnace
              filters, water heaters, plumbing supply lines, and smoke/CO alarms.
            </p>
          </div>
          <div v-reveal class="card step-card">
            <span class="step-card__num">02</span>
            <h3 class="step-card__title">Assign true operating intervals</h3>
            <p class="step-card__text">
              Avoid rigid monthly calendars. Use real-world cycles like 90 days for air filters, 6
              weeks for water softener salt, or 6 months for refrigerator coils.
            </p>
          </div>
          <div v-reveal class="card step-card">
            <span class="step-card__num">03</span>
            <h3 class="step-card__title">Group seasonal upkeep</h3>
            <p class="step-card__text">
              Bundle weather-dependent jobs into seasonal windows: autumn for gutter cleaning and
              pipe winterization; spring for siding wash and AC checkups.
            </p>
          </div>
          <div v-reveal class="card step-card">
            <span class="step-card__num">04</span>
            <h3 class="step-card__title">Configure reminder lead times</h3>
            <p class="step-card__text">
              Set alerts days ahead of due dates so you have replacement filters, tools, and
              supplies in hand before the weekend.
            </p>
          </div>
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
          <DownloadButtons />
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

.tasks-page__steps {
  padding-top: 0;
}

.tasks-page__steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-lg);
  margin-top: var(--space-xl);
}

.step-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
  padding: var(--space-xl);
  background: var(--color-surface);
  border: 1px solid var(--color-outline);
}

.step-card__num {
  font-family: var(--font-display);
  font-weight: var(--font-weight-display);
  font-size: var(--font-size-h3);
  color: var(--color-primary);
}

.step-card__title {
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-body-bold);
  color: var(--color-ink);
}

.step-card__text {
  color: var(--color-muted);
  font-size: var(--font-size-body-small);
  line-height: var(--line-height-body);
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
