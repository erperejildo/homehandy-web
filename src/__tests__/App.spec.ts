import { describe, expect, it } from 'vitest'
import { mount, flushPromises } from '@vue/test-utils'
import App from '@/App.vue'
import router from '@/router'

async function mountAt(path: string) {
  await router.push(path)
  await router.isReady()
  const wrapper = mount(App, {
    global: { plugins: [router] },
  })
  await flushPromises()
  return wrapper
}

describe('App shell', () => {
  it('renders header, main and footer', async () => {
    const wrapper = await mountAt('/')
    expect(wrapper.find('header.site-header').exists()).toBe(true)
    expect(wrapper.find('main.app-main').exists()).toBe(true)
    expect(wrapper.find('footer.site-footer').exists()).toBe(true)
  })

  it('header links point to SEO pages', async () => {
    const wrapper = await mountAt('/')
    const links = wrapper.findAll('.site-header__link').map((a) => a.attributes('href'))
    expect(links).toEqual(['/', '/tasks/', '/history/', '/packs/', '/download/'])
  })
})

describe('pages', () => {
  it('home page shows the tagline and features', async () => {
    const wrapper = await mountAt('/')
    expect(wrapper.text()).toContain('Home maintenance, without the worry')
    expect(wrapper.text()).toContain("Know what's due next")
    expect(wrapper.text()).toContain('Starter packs, not rigid rules')
  })

  it('tasks page explains recurrence', async () => {
    const wrapper = await mountAt('/tasks/')
    expect(wrapper.text()).toContain('Reminders that fit how homes actually work')
    expect(wrapper.text()).toContain('Seasonal windows')
    expect(wrapper.text()).toContain('Replace HVAC filter')
  })

  it('history page explains service history and PDF report', async () => {
    const wrapper = await mountAt('/history/')
    expect(wrapper.text()).toContain('A maintenance history you can rely on')
    expect(wrapper.text()).toContain('PDF maintenance report')
  })

  it('packs page lists the five starter packs', async () => {
    const wrapper = await mountAt('/packs/')
    expect(wrapper.text()).toContain('HVAC & Air')
    expect(wrapper.text()).toContain('Kitchen & Appliances')
    expect(wrapper.text()).toContain('Plumbing & Water')
    expect(wrapper.text()).toContain('Safety & Electrical')
    expect(wrapper.text()).toContain('Exterior & Seasonal')
    expect(wrapper.text()).toContain('Every 6 weeks')
  })

  it('download page shows both stores', async () => {
    const wrapper = await mountAt('/download/')
    expect(wrapper.text()).toContain('Get HomeHandy for free')
    expect(wrapper.text()).toContain('Google Play')
    expect(wrapper.text()).toContain('App Store')
  })
})

describe('seo', () => {
  it('sets document title, meta description, and canonical link per route', async () => {
    await mountAt('/packs/')
    expect(document.title).toBe('Home Maintenance Checklists & Starter Packs — HomeHandy')
    const meta = document.querySelector('meta[name="description"]')
    expect(meta?.getAttribute('content')).toContain('Editable home maintenance checklists')
    const canonical = document.querySelector('link[rel="canonical"]')
    expect(canonical?.getAttribute('href')).toBe('https://homehandy.store/packs/')
  })
})
