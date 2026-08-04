import { useState } from 'react'
import { Github, Linkedin, Instagram, Facebook, Mail, Send, CheckCircle2 } from 'lucide-react'
import ItachiScroll from './ItachiScroll.jsx'

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/minhaz76op' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/md-minhajul-islam5576/' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/mn_hz.5576/' },
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/minhazOFF76' },
  { icon: Mail, label: 'Email', href: 'mailto:minhazofficial5576@gmail.com' },
]

function FormField({ label, id, type = 'text', textarea = false, ...props }) {
  const Component = textarea ? 'textarea' : 'input'
  return (
    <div className="relative">
      <label htmlFor={id} className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
        {label}
      </label>
      <Component
        id={id}
        type={!textarea ? type : undefined}
        rows={textarea ? 5 : undefined}
        className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white
          placeholder:text-slate-600 outline-none transition-all duration-300
          focus:border-red-400/60 focus:shadow-[0_0_0_4px_rgba(248,113,113,0.08)] resize-none"
        {...props}
      />
    </div>
  )
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl px-6 py-28 md:px-10"
    >
      <div className="grid md:grid-cols-5 gap-10">
        <ItachiScroll className="md:col-span-2">
          <p className="section-eyebrow mb-4">Get in touch</p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-5">
            Let&rsquo;s build something <span className="text-gradient">worth remembering</span>.
          </h2>
          <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
            Open to freelance collaborations and full-time roles building
            interactive, high-craft web experiences. Reach out and I&rsquo;ll
            get back to you within a day or two.
          </p>

          <div className="flex flex-wrap gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="glass flex h-11 w-11 items-center justify-center rounded-full text-slate-300
                  hover:text-red-300 hover:border-red-400/40 hover:shadow-[0_0_18px_rgba(248,113,113,0.2)] transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </ItachiScroll>

        <ItachiScroll delay={0.2} className="md:col-span-3">
          <div className="glass-panel p-7 sm:p-9">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-14 gap-4">
                <CheckCircle2 className="text-red-400" size={40} />
                <h3 className="text-xl font-semibold text-white">Message sent</h3>
                <p className="text-slate-400 max-w-xs">
                  Thanks for reaching out — I&rsquo;ll reply to your message soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm text-red-400 hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField label="Name" id="name" placeholder="Ada Lovelace" required />
                  <FormField label="Email" id="email" type="email" placeholder="ada@example.com" required />
                </div>
                <FormField label="Subject" id="subject" placeholder="Project inquiry" />
                <FormField
                  label="Message"
                  id="message"
                  textarea
                  placeholder="Tell me a bit about your project..."
                  required
                />
                <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
                  Send message
                  <Send size={17} />
                </button>
              </form>
            )}
          </div>
        </ItachiScroll>
      </div>
    </section>
  )
}

