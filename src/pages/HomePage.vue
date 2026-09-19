<script setup lang="ts">
import DownloadButtons from '@/components/DownloadButtons.vue'
import FeatureCard from '@/components/FeatureCard.vue'
import { APP_TAGLINE } from '@/config'
</script>

<template>
  <div class="home-page">
    <!-- Hero -->
    <section class="hero">
      <div class="container hero__inner">
        <span class="chip">Free on iOS &amp; Android</span>
        <h1 class="hero__title">{{ APP_TAGLINE }}</h1>
        <p class="hero__subtitle">
          HomeHandy keeps every maintenance job on your radar — from the HVAC filter to the smoke
          alarms — so nothing quietly breaks while life gets busy.
        </p>
        <DownloadButtons />
      </div>
    </section>

    <!-- Core features -->
    <section class="section">
      <div class="container">
        <span class="eyebrow">Why HomeHandy</span>
        <h2 class="section-title">The essentials, done right</h2>
        <p class="section-subtitle">
          Four things make HomeHandy the easiest way to stay on top of your home.
        </p>

        <div class="features-grid">
          <FeatureCard
            chip="Always current"
            title="Know what's due next"
            description="A clean dashboard shows every upcoming task with its due date and priority — no digging through menus to see what needs attention."
          />
          <FeatureCard
            chip="Fast"
            title="Log jobs in seconds"
            description="Mark a task done with one tap, attach a photo of the receipt or the finished work, and move on. Your history writes itself."
          />
          <FeatureCard
            chip="Flexible"
            title="Recurrence that matches reality"
            description="Set intervals in days, months or years — or seasonal windows like autumn for gutters. Six-week reminders for water softener salt? No problem."
          />
          <FeatureCard
            chip="Editable"
            title="Starter packs, not rigid rules"
            description="Pick from HVAC, kitchen, plumbing, safety and exterior packs, then edit every task to fit your actual home."
          />
        </div>
      </div>
    </section>

    <!-- History strip -->
    <section class="section history-strip">
      <div class="container history-strip__inner">
        <div class="history-strip__copy">
          <span class="eyebrow">Built to be trusted</span>
          <h2 class="section-title">A history your future self will thank you for</h2>
          <p class="section-subtitle">
            Every completion is stored with its date and photos, and you can export a clean PDF
            maintenance report anytime — perfect for selling your home or proving a job was done.
          </p>
          <RouterLink to="/history/" class="btn btn--outline">See how history works</RouterLink>
        </div>
        <div class="history-strip__card card">
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
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="section">
      <div class="container cta card">
        <span class="eyebrow">Get started</span>
        <h2 class="section-title">Your home will thank you</h2>
        <p class="section-subtitle">
          Download HomeHandy and your first reminder plan is ready in minutes.
        </p>
        <DownloadButtons />
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.hero {
  padding-block: var(--space-4xl);
}

.hero__inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-lg);
}

.hero__title {
  max-width: 720px;
}

.hero__subtitle {
  max-width: 560px;
  color: var(--color-muted);
  font-size: var(--font-size-title);
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--space-lg);
}

.history-strip__inner {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--space-2xl);
  align-items: center;
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
}

.cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-md);
}

.cta .section-subtitle {
  margin-bottom: var(--space-md);
}

@media (max-width: 720px) {
  .history-strip__inner {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-block: var(--space-3xl);
  }
}
</style>
