import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const typeLabels = {
  architecture: 'Architecture',
  fullstack: 'Full Stack',
  hybrid: 'Hybrid',
}

export default function ProjectCard({ project, compact = false }) {
  const categories = project.categories?.length ? project.categories : [project.type]
  const categoryLabel = categories.map((category) => typeLabels[category]).join(' / ')

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="group soft-panel overflow-hidden rounded-[1.25rem] transition duration-300 hover:-translate-y-1 hover:border-cyan/40 sm:rounded-[1.75rem]"
    >
      <Link to={`/projects/${project.id}`} className="block h-full">
        <div className="relative aspect-[16/10] cursor-pointer overflow-hidden rounded-xl bg-soft">
    
    <img
      src={project.thumbnail}
      alt={project.title}
      loading="lazy"
      className="h-full w-full object-contain transition duration-700 group-hover:scale-105"
    />

    <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent opacity-90" />

    <span className="absolute left-3 top-3 max-w-[calc(100%-4.5rem)] truncate rounded-full border border-white/15 bg-ink/70 px-3 py-1 text-[9px] uppercase tracking-[0.12em] text-cyan backdrop-blur-xl sm:left-4 sm:top-4 sm:text-[10px] sm:tracking-[0.18em]">
      {categoryLabel}
    </span>

    <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white text-ink transition group-hover:rotate-45 sm:right-4 sm:top-4 sm:h-10 sm:w-10">
      <ArrowUpRight className="h-4 w-4" />
    </span>
        </div>
        <div className="flex h-full flex-col p-5 sm:p-6">
          <p className="text-[11px] uppercase tracking-[0.16em] text-white/40 sm:text-xs sm:tracking-[0.2em]">{project.year || 'Case Study'}</p>
          <h3 className="mt-3 font-display text-xl font-bold leading-tight tracking-tight text-cream sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-muted">
            {project.description}
          </p>
          {!compact && (
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tools.slice(0, 5).map((tool) => (
                <span key={tool} className="rounded-full bg-white/[0.06] px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-white/58">
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  )
}
