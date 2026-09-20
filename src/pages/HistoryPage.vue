<script setup lang="ts">
import DownloadButtons from '@/components/DownloadButtons.vue'
import FeatureCard from '@/components/FeatureCard.vue'

const historyFeatures = [
  {
    chip: 'Automatic',
    title: 'Every job, recorded',
    description:
      'The moment you mark a task done, it lands in your service history with the date. No extra work required.',
    tint: 'tint' as const,
  },
  {
    chip: 'Photos',
    title: 'Receipts and proof',
    description:
      'Attach photos of receipts, filters or finished work so you always know exactly what was done.',
    tint: 'info' as const,
  },
  {
    chip: 'Export',
    title: 'PDF maintenance report',
    description:
      'Generate a clean PDF report of your home\u2019s upkeep. Perfect for warranties, insurers or a future buyer.',
    tint: 'warm' as const,
  },
  {
    chip: 'Vendors',
    title: 'Know who to call',
    description:
      'Keep a list of trusted vendors and see which jobs each one has done for you over the years.',
    tint: 'sky' as const,
  },
]
</script>

<template>
  <div class="history-page">
    <section class="section">
      <div class="container">
        <span class="eyebrow">Service History &amp; Maintenance Log</span>
        <h1 class="history-page__title">Home maintenance log &amp; service history</h1>
        <p class="section-subtitle">
          A maintenance history you can rely on. Homes run on thousands of small jobs. HomeHandy
          remembers them all with dates, repair costs, and photo receipts — so you can prove your
          home has been cared for, prevent duplicate repairs, and export a clean PDF maintenance
          report anytime.
        </p>
      </div>
    </section>

    <!-- Resale Value & Verification Block -->
    <section class="section history-page__value">
      <div class="container">
        <div class="history-page__value-grid">
          <div v-reveal class="card history-page__value-card">
            <span class="eyebrow">Protecting Resale Value</span>
            <h2 class="section-title">Why a verifiable home maintenance log pays off</h2>
            <p class="history-page__value-text">
              Real estate inspections and buyer negotiations often stall over missing maintenance
              records. A dated, photo-backed service history proves diligent care for major systems
              — HVAC, water heaters, roofing, and plumbing — reassuring prospective buyers, reducing
              escrow credits, and speeding insurance claims.
            </p>
          </div>
          <div v-reveal="'right'" class="card card--outline history-page__checklist-card">
            <h3 class="history-page__checklist-title">What HomeHandy records per task:</h3>
            <ul class="history-page__checklist">
              <li>
                <strong>Exact completion date:</strong> Know precisely when a filter or part was
                serviced.
              </li>
              <li>
                <strong>Photo documentation:</strong> Store receipt photos, model tags, and finished
                work proof.
              </li>
              <li>
                <strong>Actual costs incurred:</strong> Track maintenance expenses for household
                budgeting and tax records.
              </li>
              <li>
                <strong>Technician &amp; vendor contacts:</strong> Remember which reliable plumber
                or electrician did the work.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section history-page__features">
      <div class="container history-page__grid">
        <FeatureCard
          v-for="(feature, i) in historyFeatures"
          :key="feature.title"
          v-reveal
          :class="{ 'history-page__feature--pull': i % 2 === 1 }"
          class="history-page__feature"
          :chip="feature.chip"
          :title="feature.title"
          :description="feature.description"
          :tint="feature.tint"
        />
      </div>
    </section>

    <section class="section section--dark">
      <div class="container history-page__report">
        <div v-reveal class="history-page__report-copy">
          <span class="eyebrow eyebrow--dark">One tap</span>
          <h2 class="section-title history-page__report-title">
            A report your insurer, landlord or buyer will take seriously
          </h2>
          <p class="history-page__report-text">
            Every job, every date, every photo, arranged into a clean document. Export it as a PDF
            whenever you need proof.
          </p>
        </div>

        <div v-reveal="'right'" class="history-page__mock">
          <div class="history-page__mock-head">
            <span class="chip chip--on-dark">PDF</span>
            <span class="history-page__mock-name">HomeHandy maintenance report</span>
          </div>
          <div class="history-page__mock-lines">
            <span class="history-page__mock-line history-page__mock-line--lg"></span>
            <span class="history-page__mock-line"></span>
            <span class="history-page__mock-line"></span>
            <span class="history-page__mock-line history-page__mock-line--sm"></span>
            <span class="history-page__mock-line"></span>
          </div>
          <span class="chip">Export PDF</span>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div v-reveal class="history-page__cta card--dark">
          <h2 class="history-page__cta-title">Start building your home's story</h2>
          <p class="history-page__cta-text">
            The first entry writes itself the moment you log a job.
          </p>
          <DownloadButtons />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.history-page__title {
  margin-bottom: var(--space-md);
}

.history-page__features {
  padding-top: 0;
}

.history-page__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-lg);
  align-items: start;
}

.history-page__feature--pull {
  margin-top: var(--space-2xl);
}

.history-page__report {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: var(--space-4xl);
  align-items: center;
}

.history-page__report-copy {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-md);
}

.history-page__report-title {
  color: var(--color-on-dark);
  margin-bottom: 0;
}

.history-page__report-text {
  color: var(--color-on-dark-muted);
  max-width: 440px;
}

.history-page__mock {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  background: var(--color-on-dark-ghost);
  border-radius: var(--radius-lg);
  padding: var(--space-2xl);
}

.history-page__mock-head {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.history-page__mock-name {
  color: var(--color-on-dark-muted);
  font-size: var(--font-size-caption);
}

.history-page__mock-lines {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.history-page__mock-line {
  display: block;
  height: 10px;
  border-radius: var(--radius-pill);
  background: var(--color-on-dark-ghost-hover);
  width: 100%;

  &--lg {
    width: 60%;
    height: 16px;
    background: var(--color-primary);
  }

  &--sm {
    width: 40%;
  }
}

.history-page__cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-md);
  padding: var(--space-3xl) var(--space-2xl);
}

.history-page__cta-title {
  color: var(--color-on-dark);
}

.history-page__cta-text {
  color: var(--color-on-dark-muted);
}

.history-page__value {
  padding-top: 0;
}

.history-page__value-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-xl);
  align-items: stretch;
}

.history-page__value-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  padding: var(--space-2xl);
  background: var(--color-surface);
}

.history-page__value-text {
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  color: var(--color-ink);
}

.history-page__checklist-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-md);
  padding: var(--space-2xl);
  background: var(--color-surface-tint);
}

.history-page__checklist-title {
  font-family: var(--font-display);
  font-weight: var(--font-weight-display);
  font-size: var(--font-size-title);
  color: var(--color-ink);
}

.history-page__checklist {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);

  li {
    font-size: var(--font-size-body-small);
    color: var(--color-ink-active);
    line-height: var(--line-height-body);

    strong {
      color: var(--color-ink);
    }
  }
}

@media (max-width: 720px) {
  .history-page__value-grid {
    grid-template-columns: 1fr;
  }

  .history-page__report {
    grid-template-columns: 1fr;
  }

  .history-page__feature--pull {
    margin-top: 0;
  }

  .history-page__cta {
    padding: var(--space-2xl) var(--space-lg);
  }
}
</style>
