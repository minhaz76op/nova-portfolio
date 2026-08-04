import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function MouseGlow() {
  const [mounted, setMounted] = useState(false)
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const springX = useSpring(x, { stiffness: 180, damping: 24, mass: 0.7 })
  const springY = useSpring(y, { stiffness: 180, damping: 24, mass: 0.7 })
  const trailX1 = useTransform(springX, (value) => value + 14)
  const trailY1 = useTransform(springY, (value) => value + 14)
  const trailX2 = useTransform(springX, (value) => value + 30)
  const trailY2 = useTransform(springY, (value) => value + 30)
  const trailX3 = useTransform(springX, (value) => value + 46)
  const trailY3 = useTransform(springY, (value) => value + 46)

  useEffect(() => {
    setMounted(true)

    const onMove = (event) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }

    const onLeave = () => {
      x.set(-200)
      y.set(-200)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [x, y])

  if (!mounted) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute left-0 top-0 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400/40 blur-[18px]"
        style={{ x: trailX3, y: trailY3 }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.18, 0.42, 0.18] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-0 top-0 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-500/20 blur-[28px]"
        style={{ x: trailX2, y: trailY2 }}
        animate={{ scale: [0.95, 1.08, 0.95], opacity: [0.22, 0.5, 0.22] }}
        transition={{ duration: 2.1, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-0 top-0 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400/10 blur-[80px]"
        style={{ x: trailX1, y: trailY1 }}
        animate={{ scale: [0.95, 1.12, 0.95], opacity: [0.28, 0.62, 0.28] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute left-0 top-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-400/12 blur-[120px]"
        style={{ x: springX, y: springY }}
        animate={{ scale: [0.95, 1.1, 0.95], opacity: [0.38, 0.7, 0.38] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
