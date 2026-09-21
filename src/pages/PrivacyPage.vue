<script setup lang="ts">
import { APP_NAME } from '@/config'
</script>

<template>
  <div class="legal-page">
    <section class="section">
      <div class="container legal-page__container">
        <header class="legal-page__header">
          <span class="eyebrow">Legal</span>
          <h1 class="legal-page__title">Privacy policy</h1>
          <p class="section-subtitle">
            This document applies to {{ APP_NAME }}. This privacy notice explains how Axis Labs
            handles personal information when people use the website and the published mobile apps.
          </p>
          <div class="legal-page__nav-chips">
            <span class="chip">Privacy Policy</span>
            <RouterLink to="/terms/" class="chip chip--on-dark">Terms and conditions</RouterLink>
          </div>
        </header>

        <div class="legal-page__content card card--outline">
          <section class="legal-page__section">
            <h2 class="legal-page__section-title">Information collection and use</h2>
            <div class="legal-page__prose">
              <p>
                The current policy used across the existing site states that the main personal data
                collected directly by the apps can include an email address, name or nickname, and
                profile picture when an account is created.
              </p>
              <p>
                Some apps also allow users to store their own information, such as property details,
                contracts, phone numbers, documents, or notes. That information is stored to provide
                the requested in-app functionality and is not intended for unrelated processing.
              </p>
              <p>
                {{ APP_NAME }} is designed with an offline-first architecture: maintenance
                schedules, completed task logs, photo receipts, and repair costs remain stored
                locally on your personal device. We do not sell your personal data or contact
                details to contractors or advertising networks.
              </p>
            </div>
          </section>

          <section class="legal-page__section">
            <h2 class="legal-page__section-title">Cookies and third-party services</h2>
            <div class="legal-page__prose">
              <p>
                The apps and website do not rely on first-party cookies as a core feature, but
                third-party libraries and services may use cookies or similar identifiers to improve
                their own services.
              </p>
              <p>
                Where relevant, users should also review the Data safety details published on Google
                Play and the App Store and the privacy terms of external providers linked from the
                apps.
              </p>
            </div>
          </section>

          <section class="legal-page__section">
            <h2 class="legal-page__section-title">Service providers and external links</h2>
            <div class="legal-page__prose">
              <p>
                Third-party companies or individuals may be used to facilitate the service, provide
                service-related functions, or analyze how the apps are used. Those providers may
                access limited personal information only as needed to perform their tasks.
              </p>
              <p>
                The services can include links to third-party websites such as Google Play or the
                App Store. Axis Labs is not responsible for the privacy practices of those external
                sites.
              </p>
            </div>
          </section>

          <section class="legal-page__section">
            <h2 class="legal-page__section-title">Changes to this policy</h2>
            <div class="legal-page__prose">
              <p>
                This privacy policy may be updated from time to time. Any changes become effective
                as soon as they are published on this website.
              </p>
            </div>
          </section>

          <section class="legal-page__section">
            <h2 class="legal-page__section-title">Contact</h2>
            <div class="legal-page__prose">
              <p>
                Questions or suggestions about this privacy policy can be sent to
                <a href="mailto:drodriguez.apps@gmail.com" class="legal-page__contact-link">
                  drodriguez.apps@gmail.com </a
                >.
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.legal-page__container {
  max-width: 800px;
}

.legal-page__header {
  margin-bottom: var(--space-2xl);
}

.legal-page__title {
  margin-top: var(--space-xs);
  margin-bottom: var(--space-md);
}

.legal-page__nav-chips {
  display: flex;
  gap: var(--space-xs);
  flex-wrap: wrap;
  margin-top: var(--space-md);
}

.legal-page__content {
  background: var(--color-surface);
  display: flex;
  flex-direction: column;
  gap: var(--space-2xl);
  padding: var(--space-2xl);
}

.legal-page__section {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);

  & + & {
    padding-top: var(--space-2xl);
    border-top: 1px solid var(--color-outline);
  }
}

.legal-page__section-title {
  font-size: var(--font-size-h3);
  color: var(--color-ink);
  line-height: var(--line-height-tight);
}

.legal-page__prose {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  color: var(--color-ink-active);
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);

  p {
    margin: 0;
  }
}

.legal-page__contact-link {
  color: var(--color-primary);
  font-weight: var(--font-weight-body-bold);

  &:hover {
    color: var(--color-ink-active);
  }
}

@media (max-width: 720px) {
  .legal-page__content {
    padding: var(--space-lg);
  }
}
</style>
