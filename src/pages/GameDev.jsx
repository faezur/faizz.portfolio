import styles from './DomainPage.module.css'

const projects = [
  {
    title: 'Coming Soon',
    category: 'Add Your Game Projects',
    year: '—',
    description:
      'Apne game development projects yahan add karo — Unity games, Godot projects, prototypes, game jams sab kuch.',
    tools: ['Unity', 'C#', 'Godot', 'GDScript', 'Blender'],
    image: null,
    featured: true,
  },
]

export default function GameDev() {
  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <div className="container">
          <p className="section-tag">// domain 03</p>
          <h1 className={styles.pageTitle} style={{ color: '#7b5cf0' }}>Game Dev</h1>
          <p className={styles.pageDesc}>
            Building interactive worlds with game loops, physics engines, and AI agents.
            Where engineering meets art — every frame is a decision.
          </p>
          <div className={styles.domainMeta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Engines</span>
              <span className={styles.metaVal}>Unity · Godot · Unreal</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Languages</span>
              <span className={styles.metaVal}>C# · GDScript · C++</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Focus</span>
              <span className={styles.metaVal}>Game Design · Physics · AI Systems</span>
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
                      <span>🎮</span>
                      <p>Add game screenshots in /public/images/</p>
                    </div>
                  )}
                </div>
                <div className={styles.projectInfo}>
                  <div className={styles.projectMeta}>
                    <span className={styles.projectCategory} style={{ color: '#7b5cf0' }}>{p.category}</span>
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
              <h2 className="section-title">Game Dev Skills</h2>
            </div>
            <div className={styles.skillsGrid}>
              {[
                { name: 'Unity / C#', level: 88 },
                { name: 'Game Design', level: 84 },
                { name: 'Physics Systems', level: 80 },
                { name: 'Godot / GDScript', level: 75 },
                { name: 'AI / Pathfinding', level: 78 },
                { name: '3D Modeling (Blender)', level: 70 },
              ].map((s) => (
                <div key={s.name} className={styles.skillRow}>
                  <div className={styles.skillHeader}>
                    <span>{s.name}</span>
                    <span className={styles.skillPct}>{s.level}%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div className={styles.skillFill} style={{ width: `${s.level}%`, background: '#7b5cf0' }} />
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
