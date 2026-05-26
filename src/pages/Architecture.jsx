import styles from './DomainPage.module.css'

// ✅ APNA KAAM YAHAN ADD KARO
// Har project ke liye ek object add karo:
// {
//   title: 'Project Name',
//   category: 'Residential / Commercial / Urban Planning',
//   year: '2023',
//   description: 'Project description...',
//   tools: ['AutoCAD', 'Revit', 'SketchUp'],
//   image: '/images/arch-project1.jpg',  // apni image /public/images/ me daalo
//   featured: true,  // featured project bada dikhega
// }

const projects = [
  {
    title: 'Mr.Manoj Saxena Residence',
    category: 'Luxury Residential Elevation Design',
    year: '2023',
    description:
      'A contemporary residential elevation designed to balance modern minimalism with bold visual identity. The façade combines linear geometry, textured material layering, integrated lighting accents, and open spatial framing to create a refined yet impactful architectural presence tailored for modern urban living.',
    tools: ['AutoCAD', 'SketchUp'],
    image: "/images/ELEVATION.png",
    featured: true,
  },
]

export default function Architecture() {
  return (
    <main className={styles.main}>
      {/* PAGE HEADER */}
      <section className={styles.header}>
        <div className="container">
          <p className="section-tag">// domain 02</p>
          <h1 className={styles.pageTitle}>Architecture / Civil</h1>
          <p className={styles.pageDesc}>
            Spatial reasoning, structural systems, and design thinking — from blueprint to built environment.
            Every structure begins as an idea; the craft is in how you resolve it.
          </p>
          <div className={styles.domainMeta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Specialization</span>
              <span className={styles.metaVal}>Structural Design · Spatial Planning</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Tools</span>
              <span className={styles.metaVal}>AutoCAD · SketchUp</span>
            </div>
            
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className={styles.projects}>
        <div className="container">
          <div className={styles.projectsGrid}>
            {projects.map((p, i) => (
              <article
                key={i}
                className={`${styles.projectCard} ${p.featured ? styles.featured : ''}`}
              >
                {/* Image area */}
                <div className={styles.projectImage}>
                  {p.image ? (
                    <img src={p.image} alt={p.title} />
                  ) : (
                    <div className={styles.imagePlaceholder}>
                      <span>🏛</span>
                      <p>Add project image in /public/images/</p>
                    </div>
                  )}
                </div>

                {/* Project info */}
                <div className={styles.projectInfo}>
                  <div className={styles.projectMeta}>
                    <span className={styles.projectCategory}>{p.category}</span>
                    <span className={styles.projectYear}>{p.year}</span>
                  </div>
                  <h2 className={styles.projectTitle}>{p.title}</h2>
                  <p className={styles.projectDesc}>{p.description}</p>
                  <div className={styles.projectTools}>
                    {p.tools.map((t) => (
                      <span key={t} className={styles.toolTag}>{t}</span>
                    ))}
                    <div className={styles.projectActions}>
                      <a
                        href="/architecture/manoj-saxena-residence"
                        className={styles.viewProjectBtn}
                      >
                        View Full Case Study ↗
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SIDEBAR */}
      <section className={styles.skillsSection}>
        <div className="container">
          <div className={styles.skillsInner}>
            <div>
              <p className="section-tag">// core competencies</p>
              <h2 className="section-title">Skills</h2>
              
            </div>
              
            <div className={styles.skillsGrid}>
              {[
                { name: 'Structural Design' },
                { name: 'AutoCAD Drafting' },
                { name: 'Residential Visualization' },
                { name: 'Spatial Planning'},
                { name: 'SketchUp'},
                { name: 'Site Analysis' },
                { name : "Modern Elevation Design"}
              ].map((s) => (
                <div key={s.name} className={styles.skillRow}>
                  <div className={styles.skillHeader}>
                    <span>{s.name}</span>
                    <span className={styles.skillPct}></span>
                  </div>
                  <div className={styles.skillBar}>
                    <div
                      className={styles.skillFill}
                      
                    />
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
