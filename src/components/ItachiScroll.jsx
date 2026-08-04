import { motion } from 'framer-motion';

export default function ItachiScroll({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.4, 0.25, 1], // cinematic smooth easing
      }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
}
