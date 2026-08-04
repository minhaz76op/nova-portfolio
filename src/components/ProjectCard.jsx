import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import useTilt from '../hooks/useTilt.js'

const spring = { type: 'spring', stiffness: 140, damping: 18, mass: 0.8 }

export default function ProjectCard({ project, index }) {
  const { ref, onMouseMove, onMouseLeave } = useTilt({ max: 8, scale: 1.02 })

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      ref={ref}
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
      whileHover={{ y: -8, scale: 1.01, rotateX: 4, rotateY: -4, boxShadow: '0 30px 80px -24px rgba(248,113,113,0.24)' }}
      transition={spring}
      className="group relative overflow-hidden rounded-[1.5rem] border border-red-500/15 bg-[#140b0d]/70 transition-all duration-300 hover:border-red-400/35"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(240px circle at var(--glow-x) var(--glow-y), rgba(248,113,113,0.16), transparent 70%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0.9, scale: 0.98 }}
        whileHover={{ scale: 1.02, rotate: -0.4 }}
        transition={{ duration: 0.25 }}
        className={`relative h-44 w-full overflow-hidden bg-gradient-to-br ${project.gradient}`}
      >
        {project.image ? (
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
        ) : (
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_30%,white,transparent_60%)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080707]/80 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-4 font-mono text-[11px] uppercase tracking-[0.3em] text-white/70">
          {String(index + 1).padStart(2, '0')}
        </span>
      </motion.div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-400">{project.description}</p>

        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-red-500/15 bg-[#140b0d]/70 px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest text-red-300/80">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 border-t border-white/10 pt-4">
          <a href={project.demoUrl} className="inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors duration-300 hover:text-red-300">
            Live demo <ArrowUpRight size={16} />
          </a>
          <a href={project.codeUrl} className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-white">
            <Github size={16} /> Code
          </a>
        </div>
      </div>
    </motion.div>
  )
}
