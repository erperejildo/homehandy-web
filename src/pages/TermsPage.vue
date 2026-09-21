<script setup lang="ts">
import { APP_NAME } from '@/config'
</script>

<template>
  <div class="legal-page">
    <section class="section">
      <div class="container legal-page__container">
        <header class="legal-page__header">
          <span class="eyebrow">Legal</span>
          <h1 class="legal-page__title">Terms and conditions</h1>
          <p class="section-subtitle">
            These terms describe the conditions for using the website, apps, and related services
            for {{ APP_NAME }} operated by Axis Labs.
          </p>
          <div class="legal-page__nav-chips">
            <RouterLink to="/privacy/" class="chip chip--on-dark">Privacy policy</RouterLink>
            <span class="chip">Terms and conditions</span>
          </div>
        </header>

        <div class="legal-page__content card card--outline">
          <section class="legal-page__section">
            <h2 class="legal-page__section-title">Conditions of use</h2>
            <div class="legal-page__prose">
              <p>
                By using the website, the published applications, or any related services, you
                accept the terms described on this page.
              </p>
            </div>
          </section>

          <section class="legal-page__section">
            <h2 class="legal-page__section-title">Privacy policy</h2>
            <div class="legal-page__prose">
              <p>
                Before continuing to use the services, please review the
                <RouterLink to="/privacy/" class="legal-page__contact-link">
                  privacy policy
                </RouterLink>
                so you understand how user data is handled.
              </p>
            </div>
          </section>

          <section class="legal-page__section">
            <h2 class="legal-page__section-title">Intellectual property</h2>
            <div class="legal-page__prose">
              <p>
                All materials, products, and services provided in the apps or website remain the
                property of Axis Labs and are protected by applicable intellectual-property laws.
              </p>
              <p>
                Users may not reproduce or redistribute protected materials without permission. If
                users publish their own content inside the services, they grant a non-exclusive
                license for that content to be displayed and processed as needed to provide the
                service.
              </p>
            </div>
          </section>

          <section class="legal-page__section">
            <h2 class="legal-page__section-title">Communications and applicable law</h2>
            <div class="legal-page__prose">
              <p>
                Communications may be electronic, including notices sent by email or published on
                the website. These terms are governed by the laws of Spain.
              </p>
            </div>
          </section>

          <section class="legal-page__section">
            <h2 class="legal-page__section-title">Disputes, comments, and accounts</h2>
            <div class="legal-page__prose">
              <p>
                Disputes related to the services are subject to the jurisdiction described in the
                existing website terms. Users must not publish unlawful, obscene, defamatory, or
                harmful content through the services.
              </p>
              <p>
                If an app includes user accounts, each user is responsible for maintaining the
                confidentiality of their credentials and for the activity carried out under that
                account.
              </p>
            </div>
          </section>

          <section class="legal-page__section">
            <h2 class="legal-page__section-title">Contact</h2>
            <div class="legal-page__prose">
              <p>
                Questions or suggestions about these terms can be sent to
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
