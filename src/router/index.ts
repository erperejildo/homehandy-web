import { createRouter, createWebHistory } from 'vue-router'
import { APP_NAME, APP_DESCRIPTION } from '@/config'

import HomePage from '@/pages/HomePage.vue'
import TasksPage from '@/pages/TasksPage.vue'
import HistoryPage from '@/pages/HistoryPage.vue'
import PacksPage from '@/pages/PacksPage.vue'
import DownloadPage from '@/pages/DownloadPage.vue'

export const base = import.meta.env.BASE_URL === '/' ? '/' : import.meta.env.BASE_URL

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: `${APP_NAME} — Home maintenance made easy`,
      description: APP_DESCRIPTION,
    },
  },
  {
    path: '/tasks/',
    name: 'tasks',
    component: TasksPage,
    meta: {
      title: `Tasks & Reminders — ${APP_NAME}`,
      description:
        'How HomeHandy schedules maintenance: flexible intervals, seasonal windows, priorities and reminder lead times.',
    },
  },
  {
    path: '/history/',
    name: 'history',
    component: HistoryPage,
    meta: {
      title: `Service History — ${APP_NAME}`,
      description:
        'Every job recorded with dates and photos, plus a PDF maintenance report for warranties and home sales.',
    },
  },
  {
    path: '/packs/',
    name: 'packs',
    component: PacksPage,
    meta: {
      title: `Starter Packs — ${APP_NAME}`,
      description:
        'Editable maintenance packs for HVAC, kitchen, plumbing, safety and exterior — with real tasks, intervals and costs.',
    },
  },
  {
    path: '/download/',
    name: 'download',
    component: DownloadPage,
    meta: {
      title: `Download ${APP_NAME}`,
      description: 'Get HomeHandy free on the App Store and Google Play.',
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

router.afterEach((to) => {
  const title = (to.meta.title as string | undefined) ?? APP_NAME
  const description = (to.meta.description as string | undefined) ?? APP_DESCRIPTION
  document.title = title

  let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
  if (!meta) {
    meta = document.createElement('meta')
    meta.name = 'description'
    document.head.appendChild(meta)
  }
  meta.content = description
})

export default router
