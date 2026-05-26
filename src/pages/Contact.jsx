import { useState } from 'react'
import { Linkedin, Mail, MessageCircle, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

 const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const res = await fetch('https://formspree.io/f/xzdwjewv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setSent(true)
        setForm({ name: '', email: '', message: '' })
        setTimeout(() => setSent(false), 3000)
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <main className="pb-24 pt-32">
      <section className="section-shell grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <p className="eyebrow">Contact me</p>
          <h1 className="mt-4 font-display text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Let&apos;s build your next project.
          </h1>
          <p className="mt-6 text-sm leading-8 text-muted">
            Send a message for architecture work, full-stack projects, or hybrid tools that connect design and software.
          </p>

          <div className="mt-8 grid gap-3">
            {[
              { icon: Mail, label: 'Email', value: 'faiz.ansari50@gmail.com', href: 'mailto:faiz.ansari50@gmail.com' },
              { icon: MessageCircle, label: 'WhatsApp', value: 'Start a chat', href: 'https://wa.me/7000164989' },
              { icon: Linkedin, label: 'LinkedIn', value: 'Connect professionally', href: 'https://linkedin.com' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="soft-panel flex items-center gap-4 rounded-3xl p-4 transition hover:border-cyan/40"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan/12 text-cyan">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-[0.16em] text-white/42">{item.label}</span>
                    <span className="mt-1 block font-display font-bold text-cream">{item.value}</span>
                  </span>
                </a>
              )
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel rounded-[2rem] p-6 md:p-8">
          {sent && (
            <div className="mb-5 rounded-2xl border border-cyan/30 bg-cyan/10 p-4 text-sm text-cyan">
              Message sent successfully . You will get reply soon .
            </div>
          )}
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2">
              <span className="text-xs uppercase tracking-[0.18em] text-white/42">Name</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="rounded-2xl border border-white/10 bg-ink/70 px-4 py-4 text-sm text-cream outline-none transition focus:border-cyan/60"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-xs uppercase tracking-[0.18em] text-white/42">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="rounded-2xl border border-white/10 bg-ink/70 px-4 py-4 text-sm text-cream outline-none transition focus:border-cyan/60"
                placeholder="you@example.com"
              />
            </label>
          </div>
          <label className="mt-4 grid gap-2">
            <span className="text-xs uppercase tracking-[0.18em] text-white/42">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={7}
              className="resize-y rounded-2xl border border-white/10 bg-ink/70 px-4 py-4 text-sm text-cream outline-none transition focus:border-cyan/60"
              placeholder="Tell me about your project..."
            />
          </label>
          <button type="submit" className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan via-violet to-coral px-6 py-4 text-sm font-semibold text-white transition hover:scale-[1.01]">
            Send Message <Send className="h-4 w-4" />
          </button>
        </form>
      </section>
    </main>
  )
}
