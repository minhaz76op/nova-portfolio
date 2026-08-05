import { motion } from 'framer-motion'
import { ArrowRight, Mail, Github, Linkedin, Instagram, Facebook, Download } from 'lucide-react'
import SketchfabEmbed from './SketchfabEmbed.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 36, filter: 'blur(10px)' },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { delay: 0.12 * i, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  }),
}

const spring = { type: 'spring', stiffness: 150, damping: 18, mass: 0.8 }

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32 md:px-10">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-red-400/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[24rem] w-[24rem] rounded-full bg-rose-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-[#140b0d]/70 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.35em] text-red-300/80 backdrop-blur-xl"
          >
            <span className="h-2 w-2 rounded-full bg-red-400" />
            CSE Student & Android Developer
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="text-4xl font-semibold leading-[1.05] text-white sm:text-5xl lg:text-6xl"
          >
            MD. MINHAJUL ISLAM
            <br />
            <span className="text-gradient text-3xl sm:text-4xl lg:text-5xl font-medium">Software & AI Solutions</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-md text-lg leading-relaxed text-slate-400"
          >
            Computer Science & Engineering student at Daffodil International University skilled in Python, C, HTML, Kotlin, Android Development, and Prompt Engineering.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.a href="#work" className="btn-primary" whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.96 }} transition={spring}>
              View my work
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download="Minhazul-Islam-Resume.pdf"
              className="btn-secondary"
              whileHover={{ y: -2, scale: 1.01 }}
              whileTap={{ scale: 0.96 }}
              transition={spring}
            >
              <Download size={18} />
              Download CV
            </motion.a>
            <motion.a href="#contact" className="btn-secondary" whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.96 }} transition={spring}>
              Contact me
              <Mail size={18} />
            </motion.a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 flex items-center gap-5 text-slate-400"
          >
            {[
              { href: 'https://github.com/minhaz76op', label: 'GitHub', icon: Github },
              { href: 'https://www.linkedin.com/in/md-minhajul-islam5576/', label: 'LinkedIn', icon: Linkedin },
              { href: 'https://www.instagram.com/mn_hz.5576/', label: 'Instagram', icon: Instagram },
              { href: 'https://www.facebook.com/minhazOFF76', label: 'Facebook', icon: Facebook },
            ].map(({ href, label, icon: Icon }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-red-500/15 bg-[#140b0d]/70 p-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-red-400/40 hover:text-red-300"
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
            <span className="h-4 w-px bg-white/10" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">Based in Bogura, Bangladesh</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative h-[380px] sm:h-[460px] md:h-[560px]"
        >
          <SketchfabEmbed />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-500 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-red-400/60 to-transparent" />
      </motion.div>
    </section>
  )
}
