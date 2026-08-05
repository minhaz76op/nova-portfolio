import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function MouseGlow() {
  const [mounted, setMounted] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const springX = useSpring(x, { stiffness: 220, damping: 28, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 220, damping: 28, mass: 0.5 })
  const trailX1 = useTransform(springX, (value) => value + 14)
  const trailY1 = useTransform(springY, (value) => value + 14)
  const trailX2 = useTransform(springX, (value) => value + 30)
  const trailY2 = useTransform(springY, (value) => value + 30)

  useEffect(() => {
    setMounted(true)
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    setIsTouchDevice(isTouch)

    if (isTouch) return

    let rafId
    const onMove = (event) => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        x.set(event.clientX)
        y.set(event.clientY)
      })
    }

    const onLeave = () => {
      x.set(-200)
      y.set(-200)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseleave', onLeave, { passive: true })

    return () => {
      if (rafId) cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [x, y])

  if (!mounted || isTouchDevice) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute left-0 top-0 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/15 blur-[28px] transform-gpu will-change-transform"
        style={{ x: trailX2, y: trailY2 }}
      />
      <motion.div
        className="absolute left-0 top-0 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400/10 blur-[60px] transform-gpu will-change-transform"
        style={{ x: trailX1, y: trailY1 }}
      />
      <motion.div
        className="absolute left-0 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400/12 blur-[90px] transform-gpu will-change-transform"
        style={{ x: springX, y: springY }}
      />
    </div>
  )
}

