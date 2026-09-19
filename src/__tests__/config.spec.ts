import { describe, expect, it } from 'vitest'
import { detectPlatform, STORE_URLS, APP_NAME, SITE_URL } from '@/config'

describe('config', () => {
  it('has the app store links', () => {
    expect(STORE_URLS.android).toBe(
      'https://play.google.com/store/apps/details?id=com.drodriguez.homehandy',
    )
    expect(STORE_URLS.ios).toBe(
      'https://apps.apple.com/us/app/homehandy-home-maintenance/id6763947552',
    )
  })

  it('has the app name and site url', () => {
    expect(APP_NAME).toBe('HomeHandy')
    expect(SITE_URL).toBe('https://homehandy.store')
  })

  it('detects iOS from the user agent', () => {
    expect(
      detectPlatform('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15'),
    ).toBe('ios')
    expect(detectPlatform('Mozilla/5.0 (iPad; CPU OS 17_0) AppleWebKit/605.1.15')).toBe('ios')
  })

  it('defaults to Android for everything else', () => {
    expect(detectPlatform('Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36')).toBe(
      'android',
    )
    expect(detectPlatform('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) Chrome/128.0')).toBe(
      'android',
    )
  })
})
