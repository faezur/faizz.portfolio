import { Github, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-white/10 bg-ink/80 px-5 py-12">
      <div className="section-shell grid gap-10 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div>
          <Link to="/" className="font-display text-2xl font-extrabold tracking-tight">
            Faizz<span className="text-cyan">.</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-7 text-muted">
            Architecture / civil case studies and full-stack product systems with a clean, premium presentation.
          </p>
        </div>
        <div>
          <h3 className="eyebrow">Navigation</h3>
          <div className="mt-5 grid gap-3 text-sm text-white/65">
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h3 className="eyebrow">Connect</h3>
          <div className="mt-5 flex gap-3">
            {[
              { icon: Github, href: 'https://github.com/faezur', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:faiz.ansari50@gmail.com', label: 'Email' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-cyan/50 hover:text-cyan"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
      <div className="section-shell mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
        Copyright 2026. Built for case-study driven portfolio presentation.
      </div>
    </footer>
  )
}
