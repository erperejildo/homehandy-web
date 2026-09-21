<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { getPostBySlug, blogPosts } from '@/data/blogPosts'
import DownloadButtons from '@/components/DownloadButtons.vue'
import { SITE_URL, APP_NAME } from '@/config'

const route = useRoute()

const post = computed(() => {
  const slug = String(route.params.slug || '')
  return getPostBySlug(slug)
})

const postIndex = computed(() => {
  if (!post.value) return -1
  return blogPosts.findIndex((p) => p.slug === post.value?.slug)
})

const nextPost = computed(() => {
  if (postIndex.value < 0 || postIndex.value >= blogPosts.length - 1) return null
  return blogPosts[postIndex.value + 1]
})

const prevPost = computed(() => {
  if (postIndex.value <= 0) return null
  return blogPosts[postIndex.value - 1]
})

// Inject BlogPosting JSON-LD schema
watchEffect(() => {
  if (typeof document === 'undefined' || !post.value) return

  const scriptId = 'blog-post-schema'
  let script = document.getElementById(scriptId) as HTMLScriptElement | null
  if (!script) {
    script = document.createElement('script')
    script.id = scriptId
    script.type = 'application/ld+json'
    document.head.appendChild(script)
  }

  const p = post.value
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    dateModified: p.date,
    author: {
      '@type': 'Organization',
      name: APP_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Axis Labs',
      url: 'https://axislabs.eu',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${p.slug}/`,
    },
  }

  script.textContent = JSON.stringify(schema)
})
</script>

<template>
  <div v-if="post" class="blog-post">
    <article class="section">
      <div class="container blog-post__container">
        <!-- Breadcrumbs -->
        <nav class="breadcrumbs" aria-label="Breadcrumb">
          <RouterLink to="/" class="breadcrumbs__link">Home</RouterLink>
          <span class="breadcrumbs__sep" aria-hidden="true">&rsaquo;</span>
          <RouterLink to="/blog/" class="breadcrumbs__link">Blog</RouterLink>
          <span class="breadcrumbs__sep" aria-hidden="true">&rsaquo;</span>
          <span class="breadcrumbs__current" aria-current="page">{{ post.category }}</span>
        </nav>

        <!-- Article Header -->
        <header class="blog-post__header">
          <div class="blog-post__meta">
            <span class="chip">{{ post.category }}</span>
            <time :datetime="post.date" class="blog-post__date">
              {{ post.formattedDate }} &bull; {{ post.readTime }}
            </time>
          </div>

          <h1 class="blog-post__title">{{ post.title }}</h1>
          <p class="blog-post__lead">{{ post.summary }}</p>
        </header>

        <!-- Article Content -->
        <div class="blog-post__body card card--outline">
          <section
            v-for="(section, sIndex) in post.sections"
            :key="sIndex"
            class="blog-post__section"
          >
            <h2 class="blog-post__heading">{{ section.heading }}</h2>

            <div class="blog-post__text">
              <p v-for="(p, pIndex) in section.content" :key="pIndex">{{ p }}</p>
            </div>

            <!-- Callout Block -->
            <aside
              v-if="section.callout"
              class="callout"
              :class="`callout--${section.callout.type}`"
            >
              <p v-if="section.callout.title" class="callout__title">
                {{ section.callout.title }}
              </p>
              <p class="callout__text">&ldquo;{{ section.callout.text }}&rdquo;</p>
              <p v-if="section.callout.source" class="callout__source">
                &mdash; {{ section.callout.source }}
              </p>
            </aside>

            <!-- Table Block -->
            <div v-if="section.table" class="table-responsive">
              <table class="blog-table">
                <thead>
                  <tr>
                    <th
                      v-for="(th, thIndex) in section.table.headers"
                      :key="thIndex"
                      :class="{ 'is-highlight': thIndex === 1 }"
                    >
                      {{ th }}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, rIndex) in section.table.rows" :key="rIndex">
                    <td
                      v-for="(cell, cIndex) in row"
                      :key="cIndex"
                      :class="{ 'is-highlight': cIndex === 1 }"
                    >
                      {{ cell }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <!-- FAQ Block -->
          <section v-if="post.faqs && post.faqs.length" class="blog-post__faqs">
            <h2 class="blog-post__heading">Frequently Asked Questions</h2>
            <div class="blog-post__faq-list">
              <div v-for="faq in post.faqs" :key="faq.question" class="faq-card">
                <h3 class="faq-card__question">{{ faq.question }}</h3>
                <p class="faq-card__answer">{{ faq.answer }}</p>
              </div>
            </div>
          </section>

          <!-- Mid-Article In-Content CTA -->
          <div class="card card--dark blog-post__banner">
            <span class="eyebrow eyebrow--dark">Try HomeHandy Free</span>
            <h3 class="blog-post__banner-title">Start organizing your home upkeep today</h3>
            <p class="blog-post__banner-text">
              100% free forever on iOS &amp; Android with offline-first privacy. Zero accounts or
              login required.
            </p>
            <DownloadButtons />
          </div>
        </div>

        <!-- Post Navigation -->
        <nav class="post-nav" aria-label="Article navigation">
          <RouterLink v-if="prevPost" :to="`/blog/${prevPost.slug}/`" class="post-nav__link">
            <span class="post-nav__direction">&larr; Previous guide</span>
            <span class="post-nav__title">{{ prevPost.title }}</span>
          </RouterLink>
          <div v-else class="post-nav__placeholder"></div>

          <RouterLink
            v-if="nextPost"
            :to="`/blog/${nextPost.slug}/`"
            class="post-nav__link post-nav__link--next"
          >
            <span class="post-nav__direction">Next guide &rarr;</span>
            <span class="post-nav__title">{{ nextPost.title }}</span>
          </RouterLink>
        </nav>
      </div>
    </article>
  </div>

  <div v-else class="container section blog-post__not-found">
    <h1>Guide not found</h1>
    <p class="section-subtitle">
      The guide you are looking for does not exist or has been relocated.
    </p>
    <RouterLink to="/blog/" class="btn btn--primary">View all guides</RouterLink>
  </div>
</template>

<style scoped lang="scss">
.blog-post__container {
  max-width: 840px;
}

.breadcrumbs {
  display: flex;
  align-items: center;
  gap: var(--space-xs);
  font-size: var(--font-size-caption);
  margin-bottom: var(--space-lg);
  color: var(--color-muted);
}

.breadcrumbs__link {
  color: var(--color-muted);

  &:hover {
    color: var(--color-primary);
  }
}

.breadcrumbs__sep {
  color: var(--color-outline);
}

.breadcrumbs__current {
  color: var(--color-ink-active);
  font-weight: var(--font-weight-body-medium);
}

.blog-post__header {
  margin-bottom: var(--space-2xl);
}

.blog-post__meta {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-md);
  flex-wrap: wrap;
}

.blog-post__date {
  font-size: var(--font-size-caption);
  color: var(--color-muted);
}

.blog-post__title {
  margin-bottom: var(--space-md);
  line-height: var(--line-height-display);
}

.blog-post__lead {
  font-size: var(--font-size-title);
  color: var(--color-muted);
  line-height: var(--line-height-body);
}

.blog-post__body {
  background: var(--color-surface);
  display: flex;
  flex-direction: column;
  gap: var(--space-3xl);
  padding: var(--space-3xl);
}

.blog-post__section {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.blog-post__heading {
  font-size: var(--font-size-h3);
  color: var(--color-ink);
  line-height: var(--line-height-tight);
}

.blog-post__text {
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

.callout {
  border-left: 4px solid var(--color-primary);
  background: var(--color-surface-tint);
  border-radius: var(--radius-sm);
  padding: var(--space-lg);
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  margin-block: var(--space-sm);
}

.callout__title {
  font-family: var(--font-display);
  font-weight: var(--font-weight-display);
  font-size: var(--font-size-title);
  color: var(--color-ink);
}

.callout__text {
  font-size: var(--font-size-body);
  color: var(--color-ink-active);
  font-style: italic;
  line-height: var(--line-height-body);
}

.callout__source {
  font-size: var(--font-size-caption);
  color: var(--color-muted);
}

.table-responsive {
  overflow-x: auto;
  margin-block: var(--space-md);
  border-radius: var(--radius-md);
  border: 1px solid var(--color-outline);
}

.blog-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: var(--font-size-body-small);

  th,
  td {
    padding: var(--space-sm) var(--space-md);
    border-bottom: 1px solid var(--color-outline);
    white-space: nowrap;
  }

  th {
    background: var(--color-background-bottom);
    color: var(--color-ink);
    font-weight: var(--font-weight-body-bold);
  }

  tr:last-child td {
    border-bottom: none;
  }

  .is-highlight {
    background: var(--color-surface-tint);
    font-weight: var(--font-weight-body-medium);
    color: var(--color-ink);
  }
}

.blog-post__faqs {
  display: flex;
  flex-direction: column;
  gap: var(--space-lg);
  padding-top: var(--space-2xl);
  border-top: 1px solid var(--color-outline);
}

.faq-card {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  padding: var(--space-md);
  background: var(--color-background-bottom);
  border-radius: var(--radius-md);
}

.faq-card__question {
  font-size: var(--font-size-body);
  font-weight: var(--font-weight-body-bold);
  color: var(--color-ink);
}

.faq-card__answer {
  font-size: var(--font-size-body-small);
  color: var(--color-ink-active);
  line-height: var(--line-height-body);
}

.blog-post__banner {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--space-md);
  padding: var(--space-2xl);
  margin-top: var(--space-xl);
}

.blog-post__banner-title {
  color: var(--color-on-dark);
  font-size: var(--font-size-h3);
}

.blog-post__banner-text {
  color: var(--color-on-dark-muted);
  font-size: var(--font-size-body-small);
  max-width: 460px;
}

.post-nav {
  display: flex;
  justify-content: space-between;
  gap: var(--space-lg);
  margin-top: var(--space-3xl);
  padding-top: var(--space-xl);
  border-top: 1px solid var(--color-outline);
}

.post-nav__link {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  max-width: 360px;

  &--next {
    align-items: flex-end;
    text-align: right;
    margin-left: auto;
  }
}

.post-nav__direction {
  font-size: var(--font-size-caption);
  color: var(--color-muted);
  text-transform: uppercase;
  letter-spacing: var(--letter-spacing-kicker);
  font-weight: var(--font-weight-body-bold);
}

.post-nav__title {
  font-size: var(--font-size-body-small);
  font-weight: var(--font-weight-body-medium);
  color: var(--color-ink);

  &:hover {
    color: var(--color-primary);
  }
}

.post-nav__placeholder {
  flex: 1;
}

.blog-post__not-found {
  text-align: center;
  padding-block: var(--space-5xl);
}

@media (max-width: 720px) {
  .blog-post__body {
    padding: var(--space-lg);
  }

  .post-nav {
    flex-direction: column;
    gap: var(--space-md);
  }

  .post-nav__link--next {
    align-items: flex-start;
    text-align: left;
    margin-left: 0;
  }
}
</style>
