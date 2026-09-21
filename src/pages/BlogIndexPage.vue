<script setup lang="ts">
import { blogPosts } from '@/data/blogPosts'
import DownloadButtons from '@/components/DownloadButtons.vue'
</script>

<template>
  <div class="blog-index">
    <section class="section">
      <div class="container">
        <header class="blog-index__header">
          <span class="eyebrow">Home Maintenance Guides &amp; Insights</span>
          <h1 class="blog-index__title">The HomeHandy Blog</h1>
          <p class="section-subtitle">
            Practical advice, in-depth app comparisons, and step-by-step guides to help you maintain
            your home with confidence, prevent costly repairs, and protect your property value.
          </p>
        </header>

        <div class="blog-index__grid">
          <article v-for="post in blogPosts" :key="post.slug" class="card card--outline blog-card">
            <div class="blog-card__meta">
              <span class="chip">{{ post.category }}</span>
              <span class="blog-card__date">
                {{ post.formattedDate }} &bull; {{ post.readTime }}
              </span>
            </div>

            <h2 class="blog-card__title">
              <RouterLink :to="`/blog/${post.slug}/`" class="blog-card__link">
                {{ post.title }}
              </RouterLink>
            </h2>

            <p class="blog-card__summary">{{ post.summary }}</p>

            <div class="blog-card__action">
              <RouterLink :to="`/blog/${post.slug}/`" class="blog-card__cta">
                Read guide <span aria-hidden="true">&rarr;</span>
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- App CTA -->
    <section class="section">
      <div class="container">
        <div class="card--dark blog-index__cta">
          <span class="eyebrow eyebrow--dark">Try HomeHandy Free</span>
          <h2 class="blog-index__cta-title">Put your home maintenance on autopilot</h2>
          <p class="blog-index__cta-text">
            Download HomeHandy for iOS and Android. Zero sign-up required, 100% offline-first
            privacy, and five pre-built starter checklists.
          </p>
          <DownloadButtons />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
.blog-index__header {
  margin-bottom: var(--space-3xl);
}

.blog-index__title {
  margin-top: var(--space-xs);
  margin-bottom: var(--space-md);
}

.blog-index__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--space-xl);
}

.blog-card {
  display: flex;
  flex-direction: column;
  background: var(--color-surface);
  transition:
    transform var(--motion-quick) var(--motion-curve),
    border-color var(--motion-quick) var(--motion-curve);

  &:hover {
    transform: translateY(-2px);
    border-color: var(--color-primary);
  }
}

.blog-card__meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
}

.blog-card__date {
  font-size: var(--font-size-caption);
  color: var(--color-muted);
}

.blog-card__title {
  font-size: var(--font-size-h3);
  margin-bottom: var(--space-md);
  line-height: var(--line-height-tight);
}

.blog-card__link {
  color: var(--color-ink);

  &:hover {
    color: var(--color-primary);
  }
}

.blog-card__summary {
  color: var(--color-ink-active);
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  margin-bottom: var(--space-xl);
  flex: 1;
}

.blog-card__action {
  margin-top: auto;
  padding-top: var(--space-md);
  border-top: 1px solid var(--color-outline);
}

.blog-card__cta {
  display: inline-flex;
  align-items: center;
  gap: var(--space-xs);
  font-weight: var(--font-weight-body-bold);
  font-size: var(--font-size-body-small);
  color: var(--color-primary);

  &:hover {
    color: var(--color-ink-active);
  }
}

.blog-index__cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-md);
  padding: var(--space-3xl) var(--space-2xl);
}

.blog-index__cta-title {
  color: var(--color-on-dark);
}

.blog-index__cta-text {
  color: var(--color-on-dark-muted);
  max-width: 540px;
  margin-bottom: var(--space-md);
}

@media (max-width: 720px) {
  .blog-index__grid {
    grid-template-columns: 1fr;
  }

  .blog-index__cta {
    padding: var(--space-2xl) var(--space-lg);
  }
}
</style>
