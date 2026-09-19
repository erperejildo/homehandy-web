import type { Directive } from 'vue'

export const reveal: Directive<HTMLElement, string | undefined> = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) {
      el.classList.add(`reveal--${binding.value}`)
    }

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      el.classList.add('is-revealed')
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(el)
  },
}
