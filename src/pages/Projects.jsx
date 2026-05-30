import { useMemo, useState } from 'react'
import FilterBar from '../components/FilterBar.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  const [activeType, setActiveType] = useState('all')

  const filteredProjects = useMemo(() => {
    if (activeType === 'all') return projects
    return projects.filter((project) => project.type === activeType || project.categories?.includes(activeType))
  }, [activeType])

  return (
    <main className="pb-20 pt-28 md:pb-24 md:pt-32">
      <section className="section-shell">
        <div className="glass-panel overflow-hidden rounded-[1.5rem] p-5 sm:p-8 md:rounded-[2rem] md:p-12">
          <p className="eyebrow">Project library</p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h1 className="font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-7xl">
                Case studies, not just screenshots.
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-muted">
                Filter architecture, full-stack, and hybrid work. Each project opens into a reusable case-study template with problem, solution, visuals, and result.
              </p>
            </div>
            <FilterBar active={activeType} onChange={setActiveType} />
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="soft-panel mt-8 rounded-3xl p-8 text-muted">
            No projects added in this category yet. Add one in <span className="text-cream">src/data/projects.js</span>.
          </div>
        )}
      </section>
    </main>
  )
}
