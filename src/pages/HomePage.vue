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

const openFaqIndex = ref<number | null>(0)

const faqs = [
  {
    question: 'What is a home maintenance tracker?',
    answer:
      'A home maintenance tracker is an app or digital log that helps homeowners schedule, monitor, and record routine upkeep tasks for their property. It tracks appliances, HVAC systems, plumbing, and structural elements to prevent costly repairs and preserve property value over time.',
  },
  {
    question: 'What tasks should be in a routine home maintenance schedule?',
    answer:
      'An essential home maintenance schedule includes replacing HVAC filters every 30 to 90 days, testing smoke and carbon monoxide alarms monthly, inspecting under-sink plumbing for leaks, cleaning gutters in autumn, flushing water heaters annually, and servicing seasonal heating and cooling equipment before extreme weather.',
  },
  {
    question: 'How does HomeHandy handle recurring tasks and seasonal windows?',
    answer:
      'HomeHandy provides flexible recurrence intervals in days, weeks, months, or years, alongside seasonal windows like autumn or spring. You can customize unique cadences, such as refilling water softener salt every 6 weeks or winterizing exterior hose bibs before first freeze.',
  },
  {
    question: 'Does HomeHandy share personal data or sell leads to contractors?',
    answer:
      'No. HomeHandy is built with an offline-first privacy model. It never sells your contact information to contractors or service marketplaces. Your home details, task photos, repair costs, and service history remain stored securely on your own device.',
  },
  {
    question: 'Can I export my home maintenance history when selling my property?',
    answer:
      'Yes. HomeHandy allows you to generate and export a complete PDF maintenance report at any time. This report documents completed service dates, attached receipts, notes, and maintenance costs, providing verified proof of care for buyers, appraisers, and home inspectors.',
  },
]

const comparisonRows = [
  {
    feature: 'Recurrence flexibility',
    homehandy: 'Days, months, years, or seasonal windows (e.g. every 6 weeks)',
    traditional: 'Rigid monthly or quarterly presets only',
    marketplaces: 'Rarely supports custom recurrence',
  },
  {
    feature: 'Maintenance packs & checklists',
    homehandy: '5 pre-built starter packs, 100% editable and customizable',
    traditional: 'Hardcoded templates that are clunky to modify',
    marketplaces: 'Prompts you to book a third-party service provider',
  },
  {
    feature: 'Data privacy & ads',
    homehandy: '100% offline-first, no account required, zero ad spam',
    traditional: 'Mandatory sign-ups and cloud tracking',
    marketplaces: 'Sells your contact details to local contractors as leads',
  },
  {
    feature: 'Durable history & proof',
    homehandy: 'Permanent service log with photo receipts & 1-tap PDF export',
    traditional: 'Basic checkmark history; export often paywalled',
    marketplaces: 'Only retains invoices from booked contractors',
  },
  {
    feature: 'Cost & access',
    homehandy: 'Free forever on iOS & Android',
    traditional: 'Monthly or yearly subscriptions',
    marketplaces: 'Hidden booking fees or commission markups',
  },
]
</script>

<template>
  <div class="home-page">
    <!-- Hero -->
    <section class="hero">
      <div class="container hero__inner">
        <div v-reveal class="hero__text card">
          <span class="chip">Free Home Maintenance Tracker · iOS &amp; Android</span>
          <h1 class="hero__title">{{ APP_TAGLINE }}</h1>
          <p class="hero__subtitle">
            HomeHandy is the friendly home maintenance tracker for iOS &amp; Android. Keep every
            upkeep job on your radar — from HVAC filters and plumbing to seasonal gutters — so
            routine tasks never turn into emergency repairs.
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

    <!-- What is HomeHandy: Definition & Cost Savings Insight -->
    <section class="section definition-section">
      <div class="container">
        <div class="definition-grid">
          <div v-reveal class="card definition-card">
            <span class="eyebrow">AEO Definition</span>
            <h2 class="section-title">What is HomeHandy?</h2>
            <p class="definition-text">
              <strong>HomeHandy</strong> is an offline-first home maintenance tracker and property
              upkeep organizer designed for homeowners. It simplifies preventive home care through
              flexible recurring reminders, one-tap job completion logging with photo receipts, and
              pre-built starter checklists. Unlike contractor marketplace apps, HomeHandy protects
              your privacy and keeps your service history completely under your control.
            </p>
            <div class="definition-points">
              <span class="chip">Offline-first privacy</span>
              <span class="chip chip--info">Flexible recurrence</span>
              <span class="chip chip--warm">Permanent service log</span>
            </div>
          </div>

          <div v-reveal="'right'" class="card card--outline stat-insight-card">
            <span class="eyebrow">Preventive care payoff</span>
            <h3 class="stat-insight-title">Save up to $3,150/year in preventable repairs</h3>
            <p class="stat-insight-quote">
              &ldquo;According to the Hippo Home Care Index (2024), proactive home maintenance saves
              homeowners an average of $3,150 annually by preventing catastrophic water damage, HVAC
              breakdowns, and premature roof replacement.&rdquo;
            </p>
            <p class="stat-insight-source">
              Source: Hippo Home Care Index &amp; HomeAdvisor Cost Studies (2024)
            </p>
          </div>
        </div>
      </div>
    </section>

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

    <!-- Comparison Table -->
    <section class="section comparison-section">
      <div class="container">
        <span class="eyebrow">Comparison</span>
        <h2 class="section-title">How HomeHandy compares to other home apps</h2>
        <p class="section-subtitle">
          Built for homeowners who want honest, durable maintenance tracking — not aggressive
          contractor directories or rigid schedules.
        </p>

        <div v-reveal class="card card--outline comparison-card">
          <div class="table-responsive">
            <table class="comparison-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th class="is-highlighted">HomeHandy</th>
                  <th>Rigid Maintenance Apps</th>
                  <th>Contractor Marketplaces</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in comparisonRows" :key="row.feature">
                  <td class="comparison-feature">{{ row.feature }}</td>
                  <td class="is-highlighted">{{ row.homehandy }}</td>
                  <td class="comparison-competitor">{{ row.traditional }}</td>
                  <td class="comparison-competitor">{{ row.marketplaces }}</td>
                </tr>
              </tbody>
            </table>
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

    <!-- FAQ Section -->
    <section class="section faq-section">
      <div class="container">
        <span class="eyebrow">Home Maintenance FAQ</span>
        <h2 class="section-title">Frequently asked questions about home maintenance</h2>
        <p class="section-subtitle">
          Everything you need to know about scheduling upkeep, seasonal home tasks, and preserving
          your property value.
        </p>

        <div class="faq-list">
          <article
            v-for="(faq, index) in faqs"
            :key="faq.question"
            v-reveal
            class="card faq-item"
            :class="{ 'is-open': openFaqIndex === index }"
          >
            <button
              class="faq-question"
              :aria-expanded="openFaqIndex === index"
              @click="openFaqIndex = openFaqIndex === index ? null : index"
            >
              <span class="faq-question__text">{{ faq.question }}</span>
              <span class="faq-question__toggle" aria-hidden="true">{{
                openFaqIndex === index ? '−' : '+'
              }}</span>
            </button>
            <div v-show="openFaqIndex === index" class="faq-answer">
              <p>{{ faq.answer }}</p>
            </div>
          </article>
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

.definition-section {
  padding-top: var(--space-3xl);
}

.definition-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-xl);
  align-items: stretch;
}

.definition-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  padding: var(--space-2xl);
  background: var(--color-surface);
}

.definition-text {
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  color: var(--color-ink);

  strong {
    color: var(--color-ink-active);
  }
}

.definition-points {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-xs);
  margin-top: var(--space-sm);
}

.stat-insight-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-md);
  padding: var(--space-2xl);
  background: var(--color-surface-tint);
}

.stat-insight-title {
  font-family: var(--font-display);
  font-weight: var(--font-weight-display);
  font-size: var(--font-size-h3);
  letter-spacing: var(--letter-spacing-heading);
  color: var(--color-ink);
}

.stat-insight-quote {
  font-size: var(--font-size-body-small);
  line-height: var(--line-height-body);
  color: var(--color-ink-active);
  font-style: italic;
}

.stat-insight-source {
  font-size: var(--font-size-caption);
  color: var(--color-muted);
  font-weight: var(--font-weight-body-medium);
}

.comparison-section {
  padding-top: var(--space-4xl);
}

.comparison-card {
  padding: 0;
  overflow: hidden;
  margin-top: var(--space-xl);
}

.table-responsive {
  overflow-x: auto;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: var(--font-size-body-small);

  th,
  td {
    padding: var(--space-md) var(--space-lg);
    border-bottom: 1px solid var(--color-outline);
  }

  th {
    background: var(--color-background-bottom);
    color: var(--color-muted);
    font-size: var(--font-size-caption);
    font-weight: var(--font-weight-body-bold);
    text-transform: uppercase;
    letter-spacing: var(--letter-spacing-kicker);

    &.is-highlighted {
      background: var(--color-surface-tint);
      color: var(--color-primary);
    }
  }

  td.is-highlighted {
    background: var(--color-surface-tint);
    font-weight: var(--font-weight-body-bold);
    color: var(--color-ink);
  }

  .comparison-feature {
    font-weight: var(--font-weight-body-medium);
    color: var(--color-ink);
  }

  .comparison-competitor {
    color: var(--color-muted);
  }

  tr:last-child td {
    border-bottom: none;
  }
}

.faq-section {
  padding-top: var(--space-4xl);
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  margin-top: var(--space-xl);
}

.faq-item {
  padding: 0;
  overflow: hidden;
  border: 1px solid var(--color-outline);
  transition: border-color var(--motion-quick) var(--motion-curve);

  &.is-open {
    border-color: var(--color-primary);
  }
}

.faq-question {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--space-lg) var(--space-xl);
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  font-family: var(--font-body);
  color: var(--color-ink);
  gap: var(--space-md);

  &:hover {
    background: var(--color-background-bottom);
  }
}

.faq-question__text {
  font-family: var(--font-display);
  font-weight: var(--font-weight-display);
  font-size: var(--font-size-title);
  letter-spacing: var(--letter-spacing-tight);
}

.faq-question__toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: var(--radius-pill);
  background: var(--color-surface-tint);
  color: var(--color-primary);
  font-weight: var(--font-weight-body-bold);
  font-size: 18px;
  flex-shrink: 0;
}

.faq-answer {
  padding: 0 var(--space-xl) var(--space-lg);
  color: var(--color-ink-active);
  font-size: var(--font-size-body-small);
  line-height: var(--line-height-body);
}

@media (max-width: 720px) {
  .definition-grid {
    grid-template-columns: 1fr;
  }
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
