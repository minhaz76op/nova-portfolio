import { useState } from 'react'
import { Github, Linkedin, Instagram, Facebook, Mail, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react'
import ItachiScroll from './ItachiScroll.jsx'

const RECIPIENT_EMAIL = 'minhazofficial5576@gmail.com'

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/minhaz76op' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/md-minhajul-islam5576/' },
  { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/mn_hz.5576/' },
  { icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/minhazOFF76' },
  { icon: Mail, label: 'Email', href: `mailto:${RECIPIENT_EMAIL}` },
]

function FormField({ label, id, name, type = 'text', textarea = false, ...props }) {
  const Component = textarea ? 'textarea' : 'input'
  const fieldName = name || id
  return (
    <div className="relative">
      <label htmlFor={id} className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
        {label}
      </label>
      <Component
        id={id}
        name={fieldName}
        type={!textarea ? type : undefined}
        rows={textarea ? 5 : undefined}
        className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white
          placeholder:text-slate-600 outline-none transition-all duration-300
          focus:border-red-400/60 focus:shadow-[0_0_0_4px_rgba(248,113,113,0.08)] resize-none
          disabled:opacity-50 disabled:cursor-not-allowed"
        {...props}
      />
    </div>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errorMessage) setErrorMessage('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      // 1. If Web3Forms Access Key is provided in environment variables, use Web3Forms API
      const web3Key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
      if (web3Key) {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: web3Key,
            name: formData.name,
            email: formData.email,
            subject: formData.subject || `New Portfolio Message from ${formData.name}`,
            message: formData.message,
            to_email: RECIPIENT_EMAIL,
          }),
        })
        const result = await response.json()
        if (result.success) {
          setSubmitted(true)
          setFormData({ name: '', email: '', subject: '', message: '' })
          setIsSubmitting(false)
          return
        }
      }

      // 2. Direct AJAX submission to FormSubmit (Zero-config email API delivering to RECIPIENT_EMAIL)
      const res = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.subject || 'New Message'} from ${formData.name}`,
          _replyto: formData.email,
          _captcha: 'false',
          _template: 'table',
        }),
      })

      const data = await res.json()

      if (res.ok && (data.success === 'true' || data.success === true || data.message)) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error(data.message || 'Failed to send message. Please try again.')
      }
    } catch (err) {
      console.error('Contact submission error:', err)
      setErrorMessage(
        err.message || 'An error occurred while sending your message. Please try again or send directly via email.'
      )
    } finally {
      setIsSubmitting(false)
    }
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
                <CheckCircle2 className="text-red-400 animate-bounce" size={44} />
                <h3 className="text-xl font-semibold text-white">Message sent!</h3>
                <p className="text-slate-400 max-w-xs text-sm">
                  Thanks for reaching out — your message has been sent to <span className="text-red-300 font-mono text-xs">{RECIPIENT_EMAIL}</span>. I&rsquo;ll reply soon!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm text-red-400 hover:text-red-300 hover:underline font-medium transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm flex flex-col gap-2">
                    <div className="flex items-center gap-2 font-medium">
                      <AlertCircle size={18} className="shrink-0 text-red-400" />
                      <span>{errorMessage}</span>
                    </div>
                    <a
                      href={`mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`}
                      className="text-xs text-red-400 hover:underline inline-block mt-1 font-mono"
                    >
                      Or click here to send directly via your email client &rarr;
                    </a>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-5">
                  <FormField
                    label="Name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="Ada Lovelace"
                    required
                  />
                  <FormField
                    label="Email"
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    placeholder="ada@example.com"
                    required
                  />
                </div>
                <FormField
                  label="Subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="Project inquiry"
                />
                <FormField
                  label="Message"
                  id="message"
                  textarea
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="Tell me a bit about your project..."
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full sm:w-auto justify-center disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                      <Loader2 size={17} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Send message
                      <Send size={17} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </ItachiScroll>
      </div>
    </section>
  )
}


