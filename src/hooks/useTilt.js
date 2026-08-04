import { useRef } from 'react'

/**
 * Lightweight vanilla 3D tilt effect for cards.
 * Returns a ref to attach to the tilt target, plus mouse handlers.
 * Uses CSS custom properties so the component controls its own transform/glow styling.
 */
export default function useTilt({ max = 10, scale = 1.02 } = {}) {
  const ref = useRef(null)

  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const px = x / rect.width - 0.5
    const py = y / rect.height - 0.5

    const rotateX = (-py * max).toFixed(2)
    const rotateY = (px * max).toFixed(2)

    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`
    el.style.setProperty('--glow-x', `${x}px`)
    el.style.setProperty('--glow-y', `${y}px`)
  }

  const onMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)'
  }

  return { ref, onMouseMove, onMouseLeave }
}
