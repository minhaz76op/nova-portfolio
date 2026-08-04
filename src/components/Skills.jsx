import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { skills } from '../data/experience.js'
import ItachiScroll from './ItachiScroll.jsx'

const groupedSkills = skills.reduce((groups, skill) => {
  const group = groups.find((item) => item.category === skill.category)

  if (group) {
    group.items.push(skill)
  } else {
    groups.push({ category: skill.category, items: [skill] })
  }

  return groups
}, [])

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveSkill(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section
      id="skills"
      className="relative mx-auto max-w-7xl px-6 py-28 md:px-10"
    >
      <ItachiScroll>
        <div className="mb-14 max-w-xl">
          <p className="section-eyebrow mb-4">Toolkit</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            The stack behind the <span className="text-gradient">experience</span>.
          </h2>
        </div>
      </ItachiScroll>

      <div className="grid gap-6 md:grid-cols-2">
        {groupedSkills.map((group, gi) => (
          <ItachiScroll key={group.category} delay={gi * 0.15}>
            <div className="glass-panel p-7">
              <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-red-300/80">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, si) => (
                  <motion.button
                    type="button"
                    key={skill.name}
                    onClick={() => setActiveSkill(skill)}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: si * 0.05 }}
                    whileHover={{ y: -4, scale: 1.03, boxShadow: '0 0 24px -6px rgba(248,113,113,0.35)' }}
                    whileTap={{ scale: 0.97 }}
                    className="cursor-pointer rounded-xl border border-red-500/15 bg-black/40 px-4 py-2 text-sm text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-red-400/40 hover:text-white"
                  >
                    {skill.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </ItachiScroll>
        ))}
      </div>

      <AnimatePresence>
        {activeSkill && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveSkill(null)}
              className="fixed inset-0 z-50 bg-[#020202]/75 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.96 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            >
              <div
                role="dialog"
                aria-modal="true"
                aria-label={`${activeSkill.name} details`}
                onClick={(event) => event.stopPropagation()}
                className="w-full max-w-lg rounded-[1.75rem] border border-red-500/20 bg-black/45 p-6 shadow-[0_35px_100px_-24px_rgba(2,6,23,0.95)] backdrop-blur-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-semibold text-white">{activeSkill.name}</h3>
                      <span className="rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.25em] text-red-300">
                        {activeSkill.timeline}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-red-500/15 bg-black/40 px-3 py-1 text-xs text-slate-300 backdrop-blur-md">
                        {activeSkill.category}
                      </span>
                      <span className="rounded-full border border-red-900/30 bg-red-950/20 px-3 py-1 text-xs text-red-200">
                        {activeSkill.level}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveSkill(null)}
                    className="rounded-full border border-red-500/15 bg-black/40 p-2 text-slate-300 backdrop-blur-md transition hover:border-red-400/40 hover:text-white"
                    aria-label="Close skill details"
                  >
                    <X size={18} />
                  </button>
                </div>

                <p className="mt-6 text-sm leading-7 text-slate-300">{activeSkill.description}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}

