import { motion } from 'framer-motion'
import { ArrowRight, BadgeCheck, Building2, Code2, Layers3, MapPin, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard.jsx'
import { getFeaturedProjects } from '../data/projects.js'
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiAutodesk, SiSketchup, SiMongodb, SiEthereum } from "react-icons/si";

const services = [
  {
    icon: Building2,
    title: 'Architecture / Civil',
    description: 'Residential planning, modern elevation, drawings, and client-ready case-study presentation.',
  },
  {
    icon: Code2,
    title: 'Full Stack Development',
    description: 'React, backend APIs, authentication, databases, deployment, and scalable product structure.',
  },
  {
    icon: Layers3,
    title: 'Hybrid Solutions',
    description: 'Digital products for architecture workflows, AI visualization, and design-tech systems.',
  },
]

const techSkills = [
  { title: 'React', sub: 'Frontend', icon: <FaReact />, color: "#61DBFB" },
  { title: 'Node.js', sub: 'Backend', icon: <FaNodeJs />, color: "#3C873A" },
  { title: 'MongoDB', sub: 'Database', icon: <SiMongodb />, color: "#4DB33D" },
  { title: 'Web3', sub: 'Blockchain', icon: <SiEthereum />, color: "#627EEA" },
];

const archSkills = [
  { title: 'AutoCAD', sub: 'Drafting', icon: <SiAutodesk />, color: "#E51050" },
  { title: 'SketchUp', sub: 'Visualization', icon: <SiSketchup />, color: "#F7A600" },
];


export default function Home() {
  const featuredProjects = getFeaturedProjects()

  return (
    <main className="overflow-hidden">
      <section className="section-shell grid min-h-screen items-center gap-12 pb-20 pt-32 lg:grid-cols-[1fr_.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan/20 bg-cyan/10 px-4 py-2 text-l text-cyan">
            <Sparkles className="h-4 w-4" />
            Full Stack Developer building real-world systems (with design background)
          </div>
          <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight text-cream sm:text-7xl">
            Designing spaces.
            <span className="block accent-text">Building systems.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted">
            A premium case-study portfolio for architecture/civil design and full-stack engineering.
            Every project explains the problem, decisions, process, visuals, and result.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:scale-[1.02]">
              View My Work <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-cream transition hover:border-cyan/50">
              Contact Me
            </Link>
          </div>
          <div className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3">
            {[
              ['02', 'Focused Domains'],
              ['AI+', 'Workflow Ready'],
              ['Case', 'Study First'],
            ].map(([value, label]) => (
              <div key={label} className="soft-panel rounded-3xl p-4">
                <p className="font-display text-2xl font-extrabold text-cream">{value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/45">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.12 }}
          className="relative"
        >
          <div className="relative grid grid-cols-2 gap-4 max-w-[420px]">

  {[
    { title: "Workflow Design", sub: "System Thinking" },
    { title: "MERN + Web3", sub: "Development" },
    { title: "Execution & Planning", sub: "Architecture" },
    { title: "Project Delivery", sub: "Teamwork" },
  ].map((item, i) => (
    
    <div
      key={i}
      className="bg-white/5 backdrop-blur-lg p-5 rounded-xl border border-white/10 
                 transition-all duration-300 
                 hover:-translate-y-1 hover:scale-105 
                 hover:border-white/20 hover:bg-white/10"
    >

      <p className="text-xs text-gray-400 mb-1">{item.sub}</p>
      <p className="text-white font-medium">{item.title}</p>

    </div>

  ))}

</div>
        </motion.div>
      </section>

      <section className="section-shell py-20">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">What I do</p>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">Services with process</h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-muted">
            The focus is not only final output. Each service is presented with planning logic, constraints, and execution decisions.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="soft-panel group rounded-[1.75rem] p-7 transition hover:-translate-y-1 hover:border-cyan/35"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-cyan/18 to-violet/18 text-cyan">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-7 font-display text-2xl font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
              </motion.article>
            )
          })}
        </div>
      </section>

      <section className="section-shell py-20">
                <div className="bg-[#0f0f0f] rounded-2xl p-8 border border-white/10">

          <p className="text-sm text-gray-400 mb-2">MY SKILLS</p>
          <h2 className="text-3xl font-semibold mb-6 text-white">
            Tools I work with
          </h2>

          {/* TECH */}
          <h4 className="text-xs text-gray-400 mb-3">TECH</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {techSkills.map((skill, i) => (
              <div
                key={i}
                className="bg-[#111] p-5 rounded-xl border border-white/5 
                          transition-all duration-300 
                          hover:-translate-y-1 hover:scale-105 
                          hover:border-white/20 hover:shadow-lg"
              >
                <div
                  className="text-4xl mb-3"
                  style={{
                    color: skill.color,
                    filter: `drop-shadow(0 0 10px ${skill.color})`
                  }}
                >
                  {skill.icon}
                </div>

                <h3 className="text-white font-medium">{skill.title}</h3>
                <p className="text-gray-400 text-sm">{skill.sub}</p>
              </div>
            ))}
          </div>

          {/* ARCHITECTURE */}
          <h4 className="text-xs text-gray-400 mb-3">ARCHITECTURE</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {archSkills.map((skill, i) => (
              <div
                key={i}
                className="bg-[#111] p-5 rounded-xl border border-white/5 
                          transition-all duration-300 
                          hover:-translate-y-1 hover:scale-105 
                          hover:border-white/20 hover:shadow-lg"
              >
                <div
                  className="text-4xl mb-3"
                  style={{
                    color: skill.color,
                    filter: `drop-shadow(0 0 10px ${skill.color})`
                  }}
                >
                  {skill.icon}
                </div>

                <h3 className="text-white font-medium">{skill.title}</h3>
                <p className="text-gray-400 text-sm">{skill.sub}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="section-shell py-20">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet via-cyan to-coral p-8 text-white shadow-glow md:p-12">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/70">Ready to build</p>
              <h2 className="mt-3 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                Have a project? Let&apos;s work together.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
                Architecture, web product, or hybrid workflow. We will turn it into a clear project story.
              </p>
            </div>
            <Link to="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
