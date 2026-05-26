import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] transition ${
      isActive
        ? 'bg-white text-ink'
        : 'text-white/66 hover:bg-white/10 hover:text-cream'
    }`

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-3 transition duration-300 ${
          scrolled ? 'glass-panel' : 'border border-white/10 bg-ink/45 backdrop-blur-xl'
        }`}
      >
        <Link to="/" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-cyan via-violet to-coral font-display text-sm font-extrabold text-white">
            FA
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-cream">
            Faizz<span className="text-cyan">.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.path} to={link.path} end={link.path === '/'} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden rounded-full bg-gradient-to-r from-coral to-violet px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-glow transition hover:scale-[1.02] md:inline-flex"
        >
          Let&apos;s Talk
        </Link>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-cream md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="section-shell mt-3 rounded-3xl border border-white/10 bg-ink/95 p-3 shadow-glow backdrop-blur-xl md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                `block rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.16em] ${
                  isActive ? 'bg-white text-ink' : 'text-white/70'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
