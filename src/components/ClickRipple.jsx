import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ClickRipple() {
  const [ripples, setRipples] = useState([])
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 24, mass: 0.8 })
  const springY = useSpring(y, { stiffness: 220, damping: 24, mass: 0.8 })

  useEffect(() => {
    const onPointerDown = (event) => {
      const id = Date.now() + Math.random()
      const point = {
        id,
        x: event.clientX,
        y: event.clientY,
      }

      setRipples((prev) => [...prev, point])
      x.set(event.clientX)
      y.set(event.clientY)

      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id))
      }, 700)
    }

    window.addEventListener('pointerdown', onPointerDown)
    return () => window.removeEventListener('pointerdown', onPointerDown)
  }, [x, y])

  return (
    <div className="pointer-events-none fixed inset-0 z-[5] overflow-hidden" aria-hidden="true">
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          initial={{ opacity: 0.6, scale: 0.2 }}
          animate={{ opacity: 0, scale: 2.2 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="absolute rounded-full bg-red-300/10"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 16,
            height: 16,
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 18px rgba(248,113,113,0.16)',
          }}
        />
      ))}
      <motion.div
        className="absolute left-0 top-0 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-300/40 bg-red-300/10"
        style={{ x: springX, y: springY }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.7, 0.2] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  )
}
