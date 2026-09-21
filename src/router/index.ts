import { createRouter, createWebHistory } from 'vue-router'
import { APP_NAME, APP_DESCRIPTION, SITE_URL } from '@/config'

import HomePage from '@/pages/HomePage.vue'
import TasksPage from '@/pages/TasksPage.vue'
import HistoryPage from '@/pages/HistoryPage.vue'
import PacksPage from '@/pages/PacksPage.vue'
import DownloadPage from '@/pages/DownloadPage.vue'
import PrivacyPage from '@/pages/PrivacyPage.vue'
import TermsPage from '@/pages/TermsPage.vue'

// The site is served from the root of the custom domain. Keep the legacy
// /homehandy-web/ subpath working too, in case the domain is ever removed.
export const base = window.location.pathname.startsWith('/homehandy-web') ? '/homehandy-web/' : '/'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: `${APP_NAME}: Home Maintenance Tracker & Upkeep Log`,
      description: APP_DESCRIPTION,
    },
  },
  {
    path: '/tasks/',
    name: 'tasks',
    component: TasksPage,
    meta: {
      title: `Home Maintenance Schedule & Reminders — ${APP_NAME}`,
      description:
        'Custom home maintenance schedule and task reminders. Set flexible intervals in days, months, or seasonal windows that match real-world home upkeep.',
    },
  },
  {
    path: '/history/',
    name: 'history',
    component: HistoryPage,
    meta: {
      title: `Home Maintenance Log & Service History — ${APP_NAME}`,
      description:
        'Durable home maintenance log with photo proof and repair costs. Export clean PDF service reports for insurance, warranties, and home resale value.',
    },
  },
  {
    path: '/packs/',
    name: 'packs',
    component: PacksPage,
    meta: {
      title: `Home Maintenance Checklists & Starter Packs — ${APP_NAME}`,
      description:
        'Editable home maintenance checklists for HVAC, kitchen, plumbing, safety, and exterior upkeep. Tailor intervals and costs to your home.',
    },
  },
  {
    path: '/download/',
    name: 'download',
    component: DownloadPage,
    meta: {
      title: `Download ${APP_NAME}: Free Home Maintenance App`,
      description:
        'Download HomeHandy for iOS and Android. Free home maintenance tracker with smart reminders, customizable packs, and offline-first privacy.',
    },
  },
  {
    path: '/privacy/',
    alias: ['/policy/', '/privacy-policy/'],
    name: 'privacy',
    component: PrivacyPage,
    meta: {
      title: `Privacy Policy — ${APP_NAME}`,
      description:
        'Privacy policy for HomeHandy. Learn how we handle your personal data with an offline-first architecture and zero sale of personal information.',
    },
  },
  {
    path: '/terms/',
    alias: ['/terms-and-conditions/', '/terms-of-service/'],
    name: 'terms',
    component: TermsPage,
    meta: {
      title: `Terms and Conditions — ${APP_NAME}`,
      description:
        'Terms and conditions for using the HomeHandy app, website, and related home maintenance services operated by Axis Labs.',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(base),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

function setMetaTag(selector: string, attrName: string, attrValue: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attrName, attrValue)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function setCanonicalTag(url: string) {
  let element = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', 'canonical')
    document.head.appendChild(element)
  }
  element.setAttribute('href', url)
}

router.afterEach((to) => {
  const title = (to.meta.title as string | undefined) ?? APP_NAME
  const description = (to.meta.description as string | undefined) ?? APP_DESCRIPTION
  document.title = title

  setMetaTag('meta[name="description"]', 'name', 'description', description)
  setMetaTag('meta[property="og:title"]', 'property', 'og:title', title)
  setMetaTag('meta[property="og:description"]', 'property', 'og:description', description)
  setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title)
  setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description)

  const normalizedPath = to.path.startsWith('/') ? to.path.slice(1) : to.path
  const fullUrl = `${SITE_URL}/${normalizedPath}`
  setCanonicalTag(fullUrl)
  setMetaTag('meta[property="og:url"]', 'property', 'og:url', fullUrl)
})

export default router
