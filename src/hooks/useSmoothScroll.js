import { useEffect } from 'react'
import Lenis from 'lenis'

let globalLenis = null

export function getLenis() {
  return globalLenis
}

/**
 * Sets up Lenis smooth scrolling optimized for 90 FPS+ displays (mobile & laptop).
 */
export default function useSmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.4,
      syncTouch: true,
      syncTouchLerp: 0.08,
      infinite: false,
    })

    globalLenis = lenis

    let rafId
    function raf(time) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    // Smooth anchor scrolling intercept
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (!target) return
      const href = target.getAttribute('href')
      if (!href || href === '#') return
      const element = document.querySelector(href)
      if (element) {
        e.preventDefault()
        lenis.scrollTo(element, { offset: -30, duration: 1.1 })
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      cancelAnimationFrame(rafId)
      lenis.destroy()
      globalLenis = null
    }
  }, [])
}

