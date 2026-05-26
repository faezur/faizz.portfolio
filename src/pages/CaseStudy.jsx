import { useState } from 'react'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getProjectById } from '../data/projects.js'

function Section({ label, title, children }) {
  return (
    <section className="border-t border-white/10 py-14">
      <div className="grid gap-8 md:grid-cols-[260px_1fr]">
        <div>
          <p className="eyebrow">{label}</p>
          {title && <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight">{title}</h2>}
        </div>
        <div className="text-sm leading-8 text-muted">{children}</div>
      </div>
    </section>
  )
}

function ImageGrid({ items = [], setOpen, setActiveImg }) {
  
  if (!items.length) return null
  
  
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item) => (
        <figure key={item.title} className="soft-panel overflow-hidden rounded-[1.5rem]">
          <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              onClick={() => {
                setActiveImg(item.image)
                setOpen(true)
              }}
              className="h-full w-full object-cover cursor-pointer"
            />
          <figcaption className="border-t border-white/10 p-4 text-xs uppercase tracking-[0.18em] text-white/55">
            {item.title}
          </figcaption>
        </figure>
      ))}
    </div>
  )
  
}

function ArchitectureCase({ project }) {
  const data = project.data

  return (
    <>
      <Section label="Overview" title="Project brief">
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            ['Plot size', data.plotSize],
            ['Type', data.projectType],
            ['Location', project.location],
          ].map(([label, value]) => (
            <div key={label} className="soft-panel rounded-3xl p-5">
              <span className="text-xs uppercase tracking-[0.18em] text-white/40">{label}</span>
              <p className="mt-2 font-display font-bold text-cream">{value}</p>
            </div>
          ))}
        </div>
        <p className="mt-6">{data.clientRequirement}</p>
      </Section>

      <Section label="Problem" title="Constraints">
        <p>{data.problem}</p>
      </Section>

      <Section label="Solution" title="Design thinking">
        <p>{data.solution}</p>
      </Section>

      <Section label="Drawings" title="Planning">
        <ImageGrid items={data.drawings} setOpen={setOpen} setActiveImg={setActiveImg} />
      </Section>

      <Section label="3D Visuals" title="Elevation and renders">
        <ImageGrid items={data.visuals} />
      </Section>

      <Section label="Result" title="Outcome">
        <p>{data.result}</p>
      </Section>
    </>
    
  )

 
}

function FullStackCase({ project, setOpen, setActiveImg }) {
  const data = project.data

  return (
    <>
      <Section label="Problem" title="Real-world issue">
        <p>{data.problem}</p>
      </Section>

      <Section label="Solution" title="System built">
        <p>{data.solution}</p>
      </Section>

      <Section label="Features" title="Product details">
        <ul className="grid gap-3">
          {data.features?.map((feature) => (
            <li key={feature} className="soft-panel rounded-3xl p-4 text-cream">
              {feature}
            </li>
          ))}
        </ul>
      </Section>

      <Section label="Tech stack" title="Build stack">
        <div className="flex flex-wrap gap-2">
          {data.techStack?.map((tech) => (
            <span key={tech} className="rounded-full bg-white/[0.07] px-4 py-2 text-xs text-white/70">
              {tech}
            </span>
          ))}
        </div>
      </Section>

      {project.type === 'hybrid' && (
        <Section label="Hybrid logic" title="Architecture + software">
          <p>{data.architectureLogic}</p>
          <p className="mt-5">{data.visualization}</p>
        </Section>
      )}

      <Section label="Screenshots" title="Interface">
        <ImageGrid  items={data.screenshots}
          setOpen={setOpen}
          setActiveImg={setActiveImg}
         />
      </Section>

      <Section label="Challenges" title="What had to be solved">
        <p>{data.challenges}</p>
      </Section>

      <Section label="Links" title="Explore">
        <div className="flex flex-wrap gap-3">
          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink">
              Live demo <ExternalLink className="h-4 w-4" />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-cream">
              GitHub <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </Section>

      <Section label="Result" title="Impact">
        <p>{data.result}</p>
      </Section>
    </>
  )
}

export default function CaseStudy() {
  const [open, setOpen] = useState(false)
  const [activeImg, setActiveImg] = useState(null)
  const { id } = useParams()
  const project = getProjectById(id)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  const isArchitecture = project.type === 'architecture'

  return (
    <main className="pb-20 pt-32">
      <article className="section-shell">
        <Link to="/projects" className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-muted transition hover:text-cream">
          <ArrowLeft className="h-4 w-4" /> Back to projects
        </Link>

        <section className="glass-panel grid gap-8 overflow-hidden rounded-[2rem] p-5 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div className="p-3 md:p-6">
            <p className="eyebrow">
              {project.type === 'architecture' ? 'Architecture case study' : project.type === 'hybrid' ? 'Hybrid case study' : 'Full-stack case study'}
            </p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-tight tracking-tight sm:text-7xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-sm leading-8 text-muted">
              {isArchitecture ? project.data.intro : project.data.tagline}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.tools?.slice(0, 6).map((tool) => (
                <span key={tool} className="rounded-full bg-white/[0.07] px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-white/60">
                  {tool}
                </span>
              ))}
            </div>
          </div>
           <img
            src={project.thumbnail}
            onClick={() => {
              setActiveImg(project.thumbnail)
              setOpen(true)
            }}
            className="cursor-zoom-in rounded-xl object-cover"
          />
        </section>

        {isArchitecture ? (
          <ArchitectureCase
            project={project}
            setOpen={setOpen}
            setActiveImg={setActiveImg}
          />
        ) : (
          <FullStackCase
            project={project}
            setOpen={setOpen}
            setActiveImg={setActiveImg}
          />
        )}
      </article>

       {open && (
  <div
    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
    onClick={() => setOpen(false)}
  >
     <button
      onClick={() => setOpen(false)}
      className="absolute top-2 right-2 text-white text-3xl font-bold z-50 hover:scale-110 transition"
    >
      ✕
    </button>
    <img
      src={activeImg}
      alt="Full preview"
      className="max-w-[90%] max-h-[90%] object-contain"
      onClick={(e) => e.stopPropagation()}
    />
  </div>
)}
    </main>
  )
}
