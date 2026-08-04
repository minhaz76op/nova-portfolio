import { projects } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
import ItachiScroll from './ItachiScroll.jsx'

export default function Projects() {
  return (
    <section
      id="work"
      className="relative mx-auto max-w-7xl px-6 py-28 md:px-10"
    >
      <ItachiScroll>
        <div className="mb-14 max-w-2xl">
          <p className="section-eyebrow mb-4">Selected work</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Projects built to feel like <span className="text-gradient">more than a page</span>.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            A curated set of experiences that blend product thinking, interaction design, and polished implementation.
          </p>
        </div>
      </ItachiScroll>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ItachiScroll key={project.id} delay={i * 0.15}>
            <ProjectCard project={project} index={i} />
          </ItachiScroll>
        ))}
      </div>
    </section>
  )
}

