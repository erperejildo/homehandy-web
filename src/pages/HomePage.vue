<script setup lang="ts">
import { ref } from 'vue'
import DownloadButtons from '@/components/DownloadButtons.vue'
import WordRotator from '@/components/WordRotator.vue'
import { APP_TAGLINE } from '@/config'

type FeatureKey = 'due' | 'log' | 'recurrence' | 'packs'

const features: {
  key: FeatureKey
  chip: string
  title: string
  description: string
  tint: string
}[] = [
  {
    key: 'due',
    chip: 'Always current',
    title: "Know what's due next",
    description:
      'A clean dashboard shows every upcoming task with its due date and priority. No digging through menus to see what needs attention.',
    tint: 'tint',
  },
  {
    key: 'log',
    chip: 'Fast',
    title: 'Log jobs in seconds',
    description:
      'Mark a task done with one tap, attach a photo of the receipt or the finished work, and move on. Your history writes itself.',
    tint: 'info',
  },
  {
    key: 'recurrence',
    chip: 'Flexible',
    title: 'Recurrence that matches reality',
    description:
      'Set intervals in days, months or years, or seasonal windows like autumn for gutters. Six-week reminders for water softener salt? No problem.',
    tint: 'warm',
  },
  {
    key: 'packs',
    chip: 'Editable',
    title: 'Starter packs, not rigid rules',
    description:
      'Pick from HVAC, kitchen, plumbing, safety and exterior packs, then edit every task to fit your actual home.',
    tint: 'sky',
  },
]

const active = ref<FeatureKey>('due')

const marqueeItems = [
  'Replace HVAC filter',
  'Test smoke alarms',
  'Clean gutters',
  'Descale coffee machine',
  'Flush water heater',
  'Inspect under-sink leaks',
  'Refill water softener salt',
]

const darkPoints = [
  {
    title: 'Know what is due next',
    text: 'A clean due list with dates and priorities, always current.',
  },
  {
    title: 'Log a job in seconds',
    text: 'One tap, a photo, done. Your history writes itself.',
  },
  {
    title: 'Cadences that match reality',
    text: 'Days, months, years, or seasonal windows like autumn.',
  },
  {
    title: 'Packs you can edit',
    text: 'Five real starter plans, and every task is adjustable.',
  },
]

const stats = [
  { value: '5', label: 'starter packs', dark: true },
  { value: '1 tap', label: 'to log a job' },
  { value: '90 days', label: 'filter reminders' },
  { value: 'PDF', label: 'maintenance reports' },
]
</script>

<template>
  <div class="home-page">
    <!-- Hero -->
    <section class="hero">
      <div class="container hero__inner">
        <div v-reveal class="hero__text card">
          <span class="chip">Free on iOS &amp; Android</span>
          <h1 class="hero__title">{{ APP_TAGLINE }}</h1>
          <p class="hero__subtitle">
            HomeHandy keeps every maintenance job on your radar, from the HVAC filter to the smoke
            alarms, so nothing quietly breaks while life gets busy.
          </p>
          <DownloadButtons />
          <p class="hero__reassurance">Free forever. No account required.</p>
        </div>

        <div v-reveal="'right'" class="hero__media">
          <span class="hero__float chip">Due this week · 3 tasks</span>

          <div class="hero__mock">
            <div class="hero__mock-head">
              <span class="hero__mock-title">Due this week</span>
              <span class="chip chip--info">3 tasks</span>
            </div>

            <ul class="hero__mock-list">
              <li class="hero__mock-row">
                <span class="hero__check" aria-hidden="true">✓</span>
                <span class="hero__mock-name">Replace HVAC filter</span>
                <span class="chip">Critical</span>
              </li>
              <li class="hero__mock-row">
                <span class="hero__check" aria-hidden="true">✓</span>
                <span class="hero__mock-name">Test smoke alarms</span>
                <span class="chip chip--warm">Routine</span>
              </li>
              <li class="hero__mock-row">
                <span class="hero__check" aria-hidden="true">✓</span>
                <span class="hero__mock-name">Clean gutters</span>
                <span class="chip chip--warm">Routine</span>
              </li>
            </ul>

            <p class="hero__mock-next">Next up · Flush water heater · Oct 22</p>
          </div>

          <svg
            class="hero__draw"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <rect
              class="hero__draw-path"
              x="1"
              y="1"
              width="98"
              height="98"
              rx="4"
              pathLength="100"
            />
          </svg>
        </div>
      </div>
    </section>

    <!-- Marquee -->
    <div class="marquee" aria-hidden="true">
      <div class="marquee__track">
        <template v-for="copy in 2" :key="copy">
          <span v-for="item in marqueeItems" :key="`${copy}-${item}`" class="marquee__item">
            {{ item }}
          </span>
        </template>
      </div>
    </div>

    <!-- Core features: interactive tabs -->
    <section class="section">
      <div class="container">
        <span class="eyebrow">Why HomeHandy</span>
        <h2 class="section-title">The essentials, done right</h2>
        <p class="section-subtitle">
          Four things make HomeHandy the easiest way to stay on top of your home.
        </p>

        <div class="features">
          <div class="features__tabs" role="tablist" aria-label="Core features">
            <button
              v-for="feature in features"
              :key="feature.key"
              class="features__tab"
              :class="[`features__tab--${feature.tint}`, { 'is-active': active === feature.key }]"
              role="tab"
              :aria-selected="active === feature.key"
              @click="active = feature.key"
            >
              <span class="features__tab-chip">{{ feature.chip }}</span>
              <span class="features__tab-title">{{ feature.title }}</span>
            </button>
          </div>

          <div
            v-for="feature in features"
            v-show="active === feature.key"
            :key="feature.key"
            class="features__panel"
            :class="`features__panel--${feature.tint}`"
            role="tabpanel"
          >
            <h3 class="features__panel-title">{{ feature.title }}</h3>
            <p class="features__panel-text">{{ feature.description }}</p>

            <div v-if="feature.key === 'due'" class="mock-due">
              <p class="mock-due__row">
                <span>Replace HVAC filter</span>
                <span class="chip">Critical</span>
                <span class="mock-due__date">Today</span>
              </p>
              <p class="mock-due__row">
                <span>Flush water heater</span>
                <span class="chip chip--warm">Routine</span>
                <span class="mock-due__date">Oct 22</span>
              </p>
              <p class="mock-due__row">
                <span>Clean gutters</span>
                <span class="chip chip--warm">Routine</span>
                <span class="mock-due__date">Nov 1</span>
              </p>
            </div>

            <div v-else-if="feature.key === 'log'" class="mock-log">
              <span class="mock-log__done" aria-hidden="true">✓</span>
              <p class="mock-log__line">Logged · Oct 18</p>
              <span class="chip chip--info">Receipt photo attached</span>
            </div>

            <div v-else-if="feature.key === 'recurrence'" class="mock-intervals">
              <span class="chip">Every 30 days</span>
              <span class="chip chip--info">Every 60 days</span>
              <span class="chip chip--warm">Every 90 days</span>
              <span class="chip chip--sand">Every autumn</span>
              <span class="chip chip--sky">Every 6 weeks</span>
              <p class="mock-intervals__note">Any cadence your home needs.</p>
            </div>

            <div v-else class="mock-packs">
              <span class="chip">HVAC &amp; Air</span>
              <span class="chip chip--info">Kitchen &amp; Appliances</span>
              <span class="chip chip--warm">Plumbing &amp; Water</span>
              <span class="chip chip--sand">Safety &amp; Electrical</span>
              <span class="chip chip--sky">Exterior &amp; Seasonal</span>
              <p class="mock-packs__note">Every task editable, every interval adjustable.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dark section -->
    <section class="section section--dark">
      <div class="container dark-section">
        <div v-reveal class="dark-section__copy">
          <span class="eyebrow eyebrow--dark">Why it works</span>
          <h2 class="dark-section__title">
            Reminders that keep up
            <WordRotator :words="['with your schedule', 'with the seasons', 'with real life']" />.
          </h2>
          <p class="dark-section__text">
            Home maintenance is not a spreadsheet. It is a rhythm. HomeHandy follows yours.
          </p>
          <DownloadButtons dark />
          <p class="dark-section__reassurance">Free forever. No account required.</p>
        </div>

        <ul v-reveal="'right'" class="dark-section__list">
          <li v-for="point in darkPoints" :key="point.title" class="dark-section__point">
            <span class="dark-section__check" aria-hidden="true">✓</span>
            <div>
              <p class="dark-section__point-title">{{ point.title }}</p>
              <p class="dark-section__point-text">{{ point.text }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>

    <!-- History strip -->
    <section class="section">
      <div class="container history-strip">
        <div v-reveal class="history-strip__copy">
          <span class="eyebrow">Built to be trusted</span>
          <h2 class="section-title">A history your future self will thank you for</h2>
          <p class="section-subtitle">
            Every completion is stored with its date and photos, and you can export a clean PDF
            maintenance report anytime. Perfect for selling your home or proving a job was done.
          </p>
          <RouterLink to="/history/" class="btn btn--outline">See how history works</RouterLink>
        </div>

        <div v-reveal="'right'" class="history-strip__card card card--outline">
          <ul class="history-strip__list">
            <li class="history-strip__item">
              <span class="chip chip--warm">Aug 12</span>
              <span>Replaced HVAC filter</span>
            </li>
            <li class="history-strip__item">
              <span class="chip chip--info">Sep 30</span>
              <span>Tested smoke alarms</span>
            </li>
            <li class="history-strip__item">
              <span class="chip chip--warm">Oct 18</span>
              <span>Cleaned gutters</span>
            </li>
          </ul>
          <p class="history-strip__export">
            <span class="chip chip--sky">PDF</span>
            <span>Export the whole report in one tap</span>
          </p>
        </div>
      </div>
    </section>

    <!-- Stats collage -->
    <section class="section stats-section">
      <div class="container stats">
        <div
          v-for="stat in stats"
          :key="stat.label"
          v-reveal
          class="stats__tile"
          :class="{ 'stats__tile--dark': stat.dark }"
        >
          <span class="stats__value">{{ stat.value }}</span>
          <span class="stats__label">{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section cta-section">
      <div class="container">
        <div v-reveal class="cta card--dark">
          <span class="eyebrow eyebrow--dark">Get started</span>
          <h2 class="cta__title">Your home will thank you</h2>
          <p class="cta__text">
            Download HomeHandy and your first reminder plan is ready in minutes.
          </p>
          <DownloadButtons dark />
          <p class="cta__reassurance">Free forever. No account required.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.hero {
  padding-block: var(--space-4xl) var(--space-5xl);
}

.hero__inner {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: var(--space-lg);
  align-items: stretch;
}

.hero__text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: var(--space-lg);
  padding: var(--space-2xl);
}

.hero__title {
  max-width: 560px;
}

.hero__subtitle {
  max-width: 460px;
  color: var(--color-muted);
  font-size: var(--font-size-title);
}

.hero__reassurance {
  color: var(--color-muted);
  font-size: var(--font-size-caption);
}

.hero__media {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-surface-tint);
  border-radius: var(--radius-card);
  padding: var(--space-3xl) var(--space-2xl);
  overflow: hidden;
}

.hero__float {
  position: absolute;
  top: var(--space-lg);
  right: var(--space-lg);
  background: var(--color-surface);
  z-index: 2;
}

.hero__mock {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  width: 100%;
  max-width: 340px;
  background: var(--color-surface);
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-md);
  padding: var(--space-lg);
}

.hero__mock-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.hero__mock-title {
  font-family: var(--font-display);
  font-weight: var(--font-weight-display);
  font-size: var(--font-size-title);
  letter-spacing: var(--letter-spacing-tight);
}

.hero__mock-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.hero__mock-row {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: var(--font-size-body-small);
  font-weight: var(--font-weight-body-medium);
}

.hero__mock-name {
  flex: 1;
}

.hero__check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  border-radius: var(--radius-pill);
  background: var(--color-primary);
  color: var(--color-ink);
  font-size: 12px;
  font-weight: var(--font-weight-body-bold);
  flex-shrink: 0;
}

.hero__mock-next {
  margin-top: var(--space-sm);
  padding-top: var(--space-md);
  border-top: 1px solid var(--color-outline);
  color: var(--color-muted);
  font-size: var(--font-size-caption);
}

.hero__draw {
  position: absolute;
  inset: var(--space-sm);
  width: calc(100% - var(--space-lg));
  height: calc(100% - var(--space-lg));
  pointer-events: none;
}

.hero__draw-path {
  fill: none;
  stroke: var(--color-primary);
  stroke-width: 2;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: draw 2.4s var(--motion-curve-out) 300ms forwards;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

.features {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--space-lg);
  align-items: stretch;
}

.features__tabs {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.features__tab {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-xs);
  padding: var(--space-lg);
  border: none;
  border-radius: var(--radius-md);
  background: var(--color-background-bottom);
  color: var(--color-ink);
  font-family: var(--font-body);
  text-align: left;
  cursor: pointer;
  transition: background-color var(--motion-quick) var(--motion-curve);

  &:hover {
    background: var(--color-ink-ghost-hover);
  }

  &.is-active {
    cursor: default;
  }
}

.features__tab--tint.is-active {
  background: var(--color-surface-tint);
}

.features__tab--info.is-active {
  background: var(--color-info-tint);
}

.features__tab--warm.is-active {
  background: var(--color-warm-tint);
}

.features__tab--sky.is-active {
  background: var(--color-secondary);
}

.features__tab-chip {
  font-size: var(--font-size-kicker);
  font-weight: var(--font-weight-body-bold);
  letter-spacing: var(--letter-spacing-kicker);
  text-transform: uppercase;
  color: var(--color-primary);
}

.features__tab-title {
  font-family: var(--font-display);
  font-weight: var(--font-weight-display);
  font-size: var(--font-size-title);
  letter-spacing: var(--letter-spacing-tight);
}

.features__panel {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  border-radius: var(--radius-card);
  padding: var(--space-2xl);
  min-height: 320px;
  justify-content: center;
}

.features__panel--tint {
  background: var(--color-surface-tint);
}

.features__panel--info {
  background: var(--color-info-tint);
}

.features__panel--warm {
  background: var(--color-warm-tint);
}

.features__panel--sky {
  background: var(--color-secondary);
}

.features__panel-title {
  font-size: var(--font-size-h3);
}

.features__panel-text {
  color: var(--color-ink-active);
  font-size: var(--font-size-body-small);
  max-width: 480px;
  margin-bottom: var(--space-md);
}

.mock-due {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.mock-due__row {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  background: var(--color-surface);
  border-radius: var(--radius-md);
  padding: var(--space-sm) var(--space-md);
  font-size: var(--font-size-body-small);
  font-weight: var(--font-weight-body-medium);

  > span:first-child {
    flex: 1;
  }
}

.mock-due__date {
  color: var(--color-muted);
  font-size: var(--font-size-caption);
  font-weight: var(--font-weight-body);
}

.mock-log {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-md);
}

.mock-log__done {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: var(--radius-pill);
  background: var(--color-primary);
  color: var(--color-ink);
  font-size: 24px;
  font-weight: var(--font-weight-body-bold);
}

.mock-log__line {
  font-family: var(--font-display);
  font-weight: var(--font-weight-display);
  font-size: var(--font-size-h3);
  letter-spacing: var(--letter-spacing-heading);
}

.mock-intervals,
.mock-packs {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--space-sm);
}

.mock-intervals__note,
.mock-packs__note {
  width: 100%;
  margin-top: var(--space-sm);
  color: var(--color-ink-active);
  font-size: var(--font-size-caption);
}

.dark-section {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: var(--space-4xl);
  align-items: center;
}

.dark-section__copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-lg);
}

.dark-section__title {
  color: var(--color-on-dark);
}

.dark-section__text {
  color: var(--color-on-dark-muted);
  max-width: 420px;
}

.dark-section__reassurance {
  color: var(--color-on-dark-faint);
  font-size: var(--font-size-caption);
}

.dark-section__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.dark-section__point {
  display: flex;
  align-items: flex-start;
  gap: var(--space-md);
}

.dark-section__check {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: var(--radius-pill);
  background: var(--color-primary);
  color: var(--color-ink);
  font-size: 13px;
  font-weight: var(--font-weight-body-bold);
  flex-shrink: 0;
  margin-top: 2px;
}

.dark-section__point-title {
  font-weight: var(--font-weight-body-bold);
  font-size: var(--font-size-body-small);
  color: var(--color-on-dark);
}

.dark-section__point-text {
  color: var(--color-on-dark-muted);
  font-size: var(--font-size-body-small);
}

.history-strip {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-2xl);
  align-items: center;
}

.history-strip__card {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
}

.history-strip__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.history-strip__item {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  color: var(--color-ink-active);
  font-size: var(--font-size-body-small);
  font-weight: var(--font-weight-body-medium);
}

.history-strip__export {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding-top: var(--space-md);
  border-top: 1px solid var(--color-outline);
  color: var(--color-muted);
  font-size: var(--font-size-caption);
}

.stats-section {
  padding-block: 0 var(--space-4xl);
}

.stats {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--space-md);
}

.stats__tile {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-lg);
  background: var(--color-background-bottom);
  border-radius: var(--radius-card);
  padding: var(--space-lg);
  min-height: 140px;

  &:nth-child(3) {
    margin-top: var(--space-xl);
  }

  &:nth-child(4) {
    margin-top: calc(var(--space-xl) * 2);
  }
}

.stats__tile--dark {
  background: var(--color-ink);
}

.stats__value {
  font-family: var(--font-display);
  font-weight: var(--font-weight-display);
  font-size: clamp(40px, 4vw, 64px);
  line-height: var(--line-height-display);
  letter-spacing: var(--letter-spacing-heading);
  color: var(--color-ink);
}

.stats__tile--dark .stats__value {
  color: var(--color-primary);
}

.stats__label {
  color: var(--color-muted);
  font-size: var(--font-size-body-small);
}

.stats__tile--dark .stats__label {
  color: var(--color-on-dark-muted);
}

.cta-section {
  padding-block: 0;
}

.cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-md);
  padding: var(--space-3xl) var(--space-2xl);
}

.cta__title {
  color: var(--color-on-dark);
}

.cta__text {
  color: var(--color-on-dark-muted);
  max-width: 440px;
}

.cta__reassurance {
  color: var(--color-on-dark-faint);
  font-size: var(--font-size-caption);
}

@media (max-width: 720px) {
  .hero {
    padding-block: var(--space-3xl) var(--space-4xl);
  }

  .hero__inner,
  .features,
  .dark-section,
  .history-strip {
    grid-template-columns: 1fr;
  }

  .hero__media {
    min-height: 360px;
  }

  .features__tabs {
    flex-direction: row;
    overflow-x: auto;
    padding-bottom: var(--space-xs);
  }

  .features__tab {
    flex-shrink: 0;
  }

  .features__panel {
    min-height: 0;
  }

  .stats {
    grid-template-columns: 1fr 1fr;
  }

  .stats__tile:nth-child(3),
  .stats__tile:nth-child(4) {
    margin-top: 0;
  }

  .cta {
    padding: var(--space-2xl) var(--space-lg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__draw-path {
    animation: none;
    stroke-dashoffset: 0;
  }
}
</style>
