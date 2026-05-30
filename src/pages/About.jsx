import { BadgeCheck, Building2, Code2, Goal } from 'lucide-react'

const timeline = [
  {
    step: '01',
    title: 'Architecture foundation',
    text: 'Learned how to plan spaces, structure layouts, and present ideas clearly for real-world execution.',
  },
  {
    step: '02',
    title: 'Full-stack systems',
    text: 'Built scalable systems with frontend, backend, APIs, and authentication to structure workflows.',
  },
  {
    step: '03',
    title: 'Hybrid direction',
    text: 'Now combining architecture logic with software systems to solve visualization, workflow, and presentation gaps.',
  },
]

export default function About() {
  return (
    <main className="pb-20 pt-28 md:pb-24 md:pt-32">
      <section className="section-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div className="flex items-center justify-center">
          <div
            className="aspect-[4/5] w-full max-w-[340px] overflow-hidden border border-white/10 backdrop-blur-xl transition duration-300 hover:scale-[1.03] sm:max-w-[420px] lg:max-w-[520px]"
            style={{ borderRadius: '60% 40% 40% 60% / 50% 60% 40% 50%' }}
          >
            <img
              src="/images/admin2.JPG"
              alt="Profile"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-110"
            />
          </div>
        </div>

        <div>
          <p className="eyebrow">About me</p>
          <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            I combine civil design thinking with product engineering.
          </h1>
          <div className="mt-6 text-sm leading-8 text-muted">
            <p>Problems I solve:</p>
            <ul className="mt-3 space-y-2">
              <li>- 2D plans are hard to understand - I make them visual using AI</li>
              <li>- Architecture workflows are slow - I build faster digital systems</li>
              <li>- Designs lack clarity - I create structured, case-study outputs</li>
              <li>- Gap between design and tech - I bridge both with real products</li>
            </ul>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {[
              { icon: Building2, label: 'Architecture', value: 'Space planning + design clarity' },
              { icon: Code2, label: 'Full Stack', value: 'Systems + workflow automation' },
              { icon: Goal, label: 'Outcome', value: 'Clear, decision-ready presentations' },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="soft-panel rounded-2xl p-4 sm:rounded-3xl">
                  <Icon className="h-5 w-5 text-cyan" />
                  <p className="mt-3 text-xs uppercase tracking-[0.16em] text-white/42">{item.label}</p>
                  <p className="mt-1 font-display text-sm font-bold">{item.value}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section-shell py-16 md:py-20">
        <p className="eyebrow">Journey</p>
        <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">How the work evolved</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {timeline.map((item) => (
            <article key={item.title} className="soft-panel rounded-[1.25rem] p-5 sm:rounded-[1.75rem] sm:p-7">
              <span className="text-sm font-bold text-cyan">{item.step}</span>
              <h3 className="mt-6 font-display text-xl font-bold sm:mt-8 sm:text-2xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="glass-panel grid gap-6 rounded-[1.5rem] p-5 sm:p-8 md:grid-cols-[auto_1fr] md:gap-8 md:rounded-[2rem] md:p-10">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan/20 to-violet/20 text-cyan sm:h-16 sm:w-16 sm:rounded-3xl">
            <BadgeCheck className="h-8 w-8" />
          </span>
          <div>
            <p className="eyebrow">Vision</p>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">Clear thinking, clear output.</h2>
            <p className="mt-4 text-sm leading-8 text-muted">
              I focus on turning complex ideas into simple, structured outputs.
              Every project is built to explain decisions, not just show results.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
