import styles from './DomainPage.module.css'

const projects = [
  {
    title: 'Arch Flow',
    category: 'AI-Powered Architecture & Interior Platform',
    year: '2026',
    description:
      'ArchFlow is an AI-assisted architecture and interior workflow platform designed to accelerate concept visualization, planning, and project presentation. The system combines full-stack engineering with AI-powered rendering workflows, secure authentication, scalable APIs, and an interactive frontend experience tailored for modern design processes.',
    tools: [
      'React',
      'Node.js',
      'MongoDB',
      'Express.js',
      'AI Integration',
      'REST API',
      'JWT Auth',
      'Web3 Ready',
      'Vercel',
    ],
    image: '/images/history.png',
    featured: true,
  },
]

export default function FullStack() {
  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <div className="container">
          <p className="section-tag">// domain 01</p>
          <h1 className={styles.pageTitle} style={{ color: '#5cc8f0' }}>Full-Stack, AI & Web3</h1>
          <p className={styles.pageDesc}>
            End-to-end product delivery across frontend, backend, authentication,
            databases, AI workflows, and blockchain-ready integrations. From zero
            to production.
          </p>
          <div className={styles.domainMeta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Frontend</span>
              <span className={styles.metaVal}>React / JavaScript / TypeScript</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Backend</span>
              <span className={styles.metaVal}>Node.js / Express / MongoDB</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Integrations</span>
              <span className={styles.metaVal}>AI APIs / Web3 / Vercel</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.projects}>
        <div className="container">
          <div className={styles.projectsGrid}>
            {projects.map((p, i) => (
              <article key={i} className={`${styles.projectCard} ${p.featured ? styles.featured : ''}`}>
                <div className={styles.projectImage}>
                  {p.image ? (
                    <img src={p.image} alt={p.title} />
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      <span>WEB</span>
                      <p>Add project screenshots in /public/images/</p>
                    </div>
                  )}
                </div>
                <div className={styles.projectInfo}>
                  <div className={styles.projectMeta}>
                    <span className={styles.projectCategory} style={{ color: '#5cc8f0' }}>{p.category}</span>
                    <span className={styles.projectYear}>{p.year}</span>
                  </div>
                  <h2 className={styles.projectTitle}>{p.title}</h2>
                  <p className={styles.projectDesc}>{p.description}</p>
                  <div className={styles.projectTools}>
                    {p.tools.map((t) => <span key={t} className={styles.toolTag}>{t}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.skillsSection}>
        <div className="container">
          <div className={styles.skillsInner}>
            <div>
              <p className="section-tag">// core competencies</p>
              <h2 className="section-title">Full-Stack Skills</h2>

              <div className={styles.projectLinks}>
                <a
                  href="https://arch-flow-mu.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.liveBtn}
                >
                  Launch Live Project -&gt;
                </a>

                <a
                  href="https://github.com/faezur/ArchFlow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubBtn}
                >
                  Explore Source Code -&gt;
                </a>
              </div>
            </div>

            <div className={styles.skillsGrid}>
              {[
                { name: 'Backend Systems' },
                { name: 'Authentication & APIs' },
                { name: 'AI Workflow Integration' },
                { name: 'Blockchain / Web3 Integration' },
                { name: 'Full-Stack Architecture' },
                { name: 'Interactive UI Engineering' },
              ].map((s) => (
                <div key={s.name} className={styles.skillRow}>
                  <div className={styles.skillHeader}>
                    <span>{s.name}</span>
                    <span className={styles.skillPct}></span>
                  </div>

                  <div className={styles.skillBar}>
                    <div className={styles.skillFill} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
