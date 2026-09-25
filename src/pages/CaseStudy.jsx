import { useState } from 'react'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getProjectById } from '../data/projects.js'

function Section({ label, title, children }) {
  return (
    <section className="border-t border-white/10 py-10 sm:py-14">
      <div className="grid min-w-0 gap-7 md:grid-cols-[220px_minmax(0,1fr)] md:gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
        <div className="min-w-0">
          <p className="eyebrow">{label}</p>

          {title && (
            <h2 className="mt-3 max-w-full font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
              {title}
            </h2>
          )}
        </div>

        <div className="min-w-0 text-sm leading-7 text-muted sm:leading-8">
          {children}
        </div>
      </div>
    </section>
  )
}

function ImageGrid({
  items = [],
  setOpen,
  setActiveImg,
  contain = false,
}) {
  if (!items.length) return null

  return (
    <div className="grid min-w-0 gap-5 md:grid-cols-2">
      {items.map((item) => (
        <figure
          key={item.title}
          className="soft-panel min-w-0 overflow-hidden rounded-[1.5rem]"
        >
          {item.image ? (
            <button
              type="button"
              className="block w-full cursor-zoom-in bg-black/10"
              onClick={() => {
                if (setActiveImg && setOpen) {
                  setActiveImg(item.image)
                  setOpen(true)
                }
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className={
                  contain
                    ? 'h-auto max-h-[650px] w-full object-contain'
                    : 'h-auto max-h-[650px] w-full object-cover'
                }
              />
            </button>
          ) : (
            <div className="flex min-h-[220px] items-center justify-center p-8 sm:min-h-[280px]">
              <p className="max-w-sm text-center text-sm leading-7 text-muted">
                {item.status}
              </p>
            </div>
          )}

          <figcaption className="border-t border-white/10 p-4 text-xs uppercase tracking-[0.18em] text-white/55">
            {item.title}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

function ArchitectureCase({ project, setOpen, setActiveImg }) {
  const data = project.data

  return (
    <>
      <Section label="Overview" title="Project brief">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Plot size', data.plotSize],
            ['Project type', data.projectType],
            ['Floors', data.floors],
            ['Location', project.location],
          ].map(([label, value]) => (
            <div
              key={label}
              className="soft-panel min-w-0 rounded-3xl p-5"
            >
              <span className="text-xs uppercase tracking-[0.18em] text-white/40">
                {label}
              </span>

              <p className="mt-2 break-words font-display font-bold text-cream">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="soft-panel rounded-3xl p-5">
            <span className="text-xs uppercase tracking-[0.18em] text-white/40">
              Bedrooms
            </span>

            <p className="mt-2 font-display font-bold text-cream">
              {data.bedrooms}
            </p>
          </div>

          <div className="soft-panel rounded-3xl p-5">
            <span className="text-xs uppercase tracking-[0.18em] text-white/40">
              Parking
            </span>

            <p className="mt-2 font-display font-bold text-cream">
              {data.parking}
            </p>
          </div>

          <div className="soft-panel rounded-3xl p-5 sm:col-span-2">
            <span className="text-xs uppercase tracking-[0.18em] text-white/40">
              Landscape
            </span>

            <p className="mt-2 font-display font-bold text-cream">
              {data.landscape}
            </p>
          </div>
        </div>

        <p className="mt-6 max-w-3xl">{data.clientRequirement}</p>
      </Section>

      <Section label="Problem" title="Design constraints">
        <p>{data.problem}</p>
      </Section>

      <Section label="Approach" title="Design thinking">
        <p>{data.solution}</p>
      </Section>

      <Section label="My role" title="Scope of work">
        <div className="grid gap-3 sm:grid-cols-2">
          {data.role?.map((item) => (
            <div
              key={item}
              className="soft-panel rounded-2xl p-4 text-cream"
            >
              <span className="mr-2 text-white/35">↳</span>
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section label="Drawings" title="Planning">
        <ImageGrid
          items={data.drawings}
          setOpen={setOpen}
          setActiveImg={setActiveImg}
          contain
        />
      </Section>

      <Section label="3D visuals" title="Elevation & visualize">
        <ImageGrid
          items={data.visuals}
          setOpen={setOpen}
          setActiveImg={setActiveImg}
          contain
        />
      </Section>

      <Section label="Execution" title="From drawing to site">
        <p>{data.execution}</p>
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
            <li
              key={feature}
              className="soft-panel rounded-3xl p-4 text-cream"
            >
              {feature}
            </li>
          ))}
        </ul>
      </Section>

      <Section label="Tech stack" title="Build stack">
        <div className="flex flex-wrap gap-2">
          {data.techStack?.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/[0.07] px-4 py-2 text-xs text-white/70"
            >
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
        <ImageGrid
          items={data.screenshots}
          setOpen={setOpen}
          setActiveImg={setActiveImg}
          contain
        />
      </Section>

      <Section label="Challenges" title="What had to be solved">
        <p>{data.challenges}</p>
      </Section>

      <Section label="Links" title="Explore">
        <div className="flex flex-wrap gap-3">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink"
            >
              Live demo
              <ExternalLink className="h-4 w-4" />
            </a>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-cream"
            >
              GitHub
              <ExternalLink className="h-4 w-4" />
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
    <main className="min-w-0 overflow-x-clip pb-16 pt-28 sm:pb-20 sm:pt-32">
      <article className="section-shell min-w-0">
        <Link
          to="/projects"
          className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-muted transition hover:text-cream sm:mb-8"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" />
          <span>Back to projects</span>
        </Link>

        <section
  className="
    glass-panel
    grid
    min-w-0
    gap-6
    overflow-hidden
    rounded-[1.5rem]
    p-4
    sm:gap-8
    sm:rounded-[2rem]
    sm:p-5
    lg:grid-cols-2
    lg:items-end
  "
>
  <div className="min-w-0 p-2 sm:p-4 md:p-6">
    <p className="eyebrow">
      {project.type === 'architecture'
        ? 'Architecture case study'
        : project.type === 'hybrid'
          ? 'Hybrid case study'
          : 'Full-stack case study'}
    </p>

   <h1
  className="
    mt-4
    min-w-0
    max-w-full
    font-display
    text-[clamp(2.6rem,5vw,3.5rem)]
    font-extrabold
    leading-[0.94]
    tracking-tight
    whitespace-normal
  "
>
  {project.title}
</h1>

    <p
      className="
        mt-5
        max-w-2xl
        text-sm
        leading-7
        text-muted
        [word-break:normal]
        [overflow-wrap:break-word]
        sm:mt-6
        sm:leading-8
      "
    >
      {isArchitecture
        ? project.data.intro
        : project.data.tagline}
    </p>

    <div className="mt-6 flex max-w-full flex-wrap gap-2 sm:mt-7">
      {project.tools?.slice(0, 6).map((tool) => (
        <span
          key={tool}
          className="
            max-w-full
            rounded-full
            bg-white/[0.07]
            px-3
            py-1
            text-[10px]
            uppercase
            tracking-[0.14em]
            text-white/60
          "
        >
          {tool}
        </span>
      ))}
    </div>
  </div>

  <button
    type="button"
    className="group min-w-0 cursor-zoom-in overflow-hidden rounded-xl bg-black/10"
    onClick={() => {
      setActiveImg(project.thumbnail)
      setOpen(true)
    }}
  >
    <img
      src={project.thumbnail}
      alt={project.title}
      className="
        block
        max-h-[560px]
        w-full
        object-contain
        transition
        duration-500
        group-hover:scale-[1.01]
      "
    />
  </button>
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            aria-label="Close image preview"
            onClick={() => setOpen(false)}
            className="absolute right-3 top-3 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xl font-bold text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
          >
            ✕
          </button>

          {activeImg && (
            <img
              src={activeImg}
              alt="Full preview"
              className="max-h-[88vh] max-w-[94vw] object-contain sm:max-h-[90vh] sm:max-w-[92vw]"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </main>
  )
}