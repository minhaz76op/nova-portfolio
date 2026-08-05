import { Download, FileText, GraduationCap, Briefcase, Globe } from 'lucide-react'
import { experience, education, languages } from '../data/experience.js'
import ItachiScroll from './ItachiScroll.jsx'

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-5xl px-6 py-28 md:px-10"
    >
      <ItachiScroll>
        <div className="mb-16 max-w-xl">
          <p className="section-eyebrow mb-4">Background</p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Experience & <span className="text-gradient">Education</span>.
          </h2>
        </div>
      </ItachiScroll>

      {/* Work Experience */}
      <div className="mb-16">
        <ItachiScroll>
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-300">
              <Briefcase size={20} />
            </div>
            <h3 className="text-xl font-semibold text-white">Work Experience</h3>
          </div>
        </ItachiScroll>

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-red-400/70 via-rose-500/40 to-transparent sm:left-[9px]" />

          <div className="space-y-8">
            {experience.map((item, i) => (
              <ItachiScroll key={item.id} delay={i * 0.12}>
                <div className="relative">
                  <span className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center sm:-left-10">
                    <span className="absolute h-4 w-4 rounded-full bg-red-400/30 animate-pulse-slow" />
                    <span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_20px_rgba(248,113,113,0.6)]" />
                  </span>

                  <div className="glass-panel p-6">
                    <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-lg font-semibold text-white">{item.role}</h4>
                      <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">{item.period}</span>
                    </div>
                    <p className="mb-3 text-sm text-red-300/80 font-medium">{item.company}</p>
                    <p className="mb-4 text-sm leading-relaxed text-slate-400">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-red-500/15 bg-black/40 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-300 backdrop-blur-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ItachiScroll>
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-16">
        <ItachiScroll>
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-300">
              <GraduationCap size={20} />
            </div>
            <h3 className="text-xl font-semibold text-white">Education</h3>
          </div>
        </ItachiScroll>

        <div className="relative pl-8 sm:pl-10">
          <div className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-red-400/70 via-rose-500/40 to-transparent sm:left-[9px]" />

          <div className="space-y-8">
            {education.map((item, i) => (
              <ItachiScroll key={item.id} delay={i * 0.12}>
                <div className="relative">
                  <span className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center sm:-left-10">
                    <span className="h-2 w-2 rounded-full bg-red-400 shadow-[0_0_20px_rgba(248,113,113,0.6)]" />
                  </span>

                  <div className="glass-panel p-6">
                    <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-lg font-semibold text-white">{item.institution}</h4>
                      <span className="font-mono text-xs uppercase tracking-[0.25em] text-slate-500">{item.period}</span>
                    </div>
                    <p className="mb-2 text-sm text-red-300/90 font-medium">{item.degree}</p>
                    {item.grade && (
                      <p className="mb-2 text-xs font-mono text-slate-300 inline-block rounded-md bg-red-500/10 border border-red-500/20 px-2.5 py-1">
                        {item.grade}
                      </p>
                    )}
                    <p className="text-sm leading-relaxed text-slate-400 mt-1">{item.details}</p>
                  </div>
                </div>
              </ItachiScroll>
            ))}
          </div>
        </div>
      </div>

      {/* Languages & Resume Download */}
      <div className="grid gap-6 sm:grid-cols-2">
        <ItachiScroll delay={0.2}>
          <div className="glass-panel p-6 h-full flex flex-col justify-between">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-red-500/20 bg-red-500/10 text-red-300">
                  <Globe size={18} />
                </div>
                <h4 className="text-base font-semibold text-white">Languages</h4>
              </div>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center justify-between border-b border-white/5 pb-2 text-sm">
                    <span className="text-slate-200 font-medium">{lang.name}</span>
                    <span className="font-mono text-xs text-red-300/80">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ItachiScroll>

        <ItachiScroll delay={0.3}>
          <div className="glass-panel p-6 border-red-500/25 bg-gradient-to-r from-red-950/20 via-black/40 to-transparent h-full flex flex-col justify-between">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10 text-red-300">
                <FileText size={24} />
              </div>
              <div>
                <h4 className="text-base font-semibold text-white">Official Curriculum Vitae</h4>
                <p className="text-xs text-slate-400 mt-1">Download Md. Minhajul Islam&rsquo;s updated CV PDF.</p>
              </div>
            </div>
            <a
              href="/resume.pdf"
              download="Minhazul-Islam-Resume.pdf"
              className="btn-primary text-sm gap-2 w-full justify-center"
            >
              <Download size={16} />
              Download CV
            </a>
          </div>
        </ItachiScroll>
      </div>
    </section>
  )
}



