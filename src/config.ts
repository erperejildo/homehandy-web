export const APP_NAME = 'HomeHandy'
export const APP_TAGLINE = 'Home maintenance, without the worry'
export const APP_DESCRIPTION =
  'HomeHandy is the friendly home maintenance tracker. Get reminders for what is due, log jobs in seconds, and keep a reliable service history — HVAC, plumbing, safety, kitchen and more.'
export const REPO_URL = 'https://github.com/erperejildo/homehandy-web'
export const SITE_URL = 'https://erperejildo.github.io/homehandy-web'

export const BASE_PATH = '/homehandy-web/'

export const STORE_URLS = {
  android: 'https://play.google.com/store/apps/details?id=com.drodriguez.homehandy',
  ios: 'https://apps.apple.com/us/app/homehandy-home-maintenance/id6763947552',
} as const

export type Platform = 'ios' | 'android'

export function detectPlatform(userAgent: string = navigator.userAgent): Platform {
  return /iPhone|iPad|iPod/i.test(userAgent) ? 'ios' : 'android'
}
