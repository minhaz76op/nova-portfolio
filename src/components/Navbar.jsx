import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

const spring = { type: 'spring', stiffness: 220, damping: 22, mass: 0.8 }

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
    >
      <nav
        className={`flex w-full max-w-3xl items-center justify-between gap-6 rounded-full border border-red-500/15 bg-[#140b0d]/70 px-5 py-3 backdrop-blur-xl transition-all duration-300 ${
          scrolled ? 'shadow-[0_0_50px_rgba(248,113,113,0.16)]' : 'shadow-[0_10px_40px_-24px_rgba(2,6,23,0.9)]'
        }`}
      >
        <a href="#home" className="font-display text-lg font-semibold tracking-tight text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xl font-black tracking-[0.25em] text-white shadow-[0_0_40px_rgba(248,113,113,0.16)] backdrop-blur-md">
            <span className="bg-gradient-to-r from-white via-red-100 to-red-400 bg-clip-text text-transparent">
              MINHAZ
            </span>
            <span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.9)]" />
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-red-200">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <motion.a
          href="#contact"
          className="hidden md:inline-flex btn-primary !px-5 !py-2 text-sm"
          whileHover={{ y: -2, scale: 1.01, boxShadow: '0 0 24px rgba(248, 113, 113, 0.4)' }}
          whileTap={{ scale: 0.96 }}
          transition={spring}
        >
          Let&rsquo;s talk
        </motion.a>

        <button
          className="rounded-full border border-red-500/15 bg-[#140b0d]/70 p-2 text-slate-200 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 w-[calc(100%-2rem)] max-w-3xl rounded-[1.25rem] border border-red-500/15 bg-[#140b0d]/85 p-4 backdrop-blur-xl md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-slate-200 transition-colors duration-200 hover:bg-white/5 hover:text-red-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 flex justify-center btn-primary text-sm"
          >
            Let&rsquo;s talk
          </a>
        </motion.div>
      )}
    </motion.header>
  )
}
