import styles from './DomainPage.module.css'

export default function ManojSaxenaResidence() {
  return (
    <main className={styles.page}>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>

        <img
          src="/images/ELEVATION.png"
          alt="Mr. Manoj Saxena Residence"
          className={styles.heroImage}
        />

        <div className={styles.heroContent}>
          <p className={styles.heroTag}>
            Luxury Residential Architecture • 2023
          </p>

          <h1 className={styles.heroTitle}>
            Mr. Manoj Saxena Residence
          </h1>

          <p className={styles.heroDesc}>
            A contemporary residential concept focused on layered geometry,
            ambient lighting, clean spatial balance, and a bold modern façade
            language tailored for premium urban living.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className={styles.overviewSection}>
        <div className="container">
          <div className={styles.overviewGrid}>
            <div className={styles.overviewLeft}>
              <p className={styles.sectionTag}>Project Overview</p>

              <div className={styles.metaGroup}>
                <div className={styles.metaItem}>
                  <span>Project Type</span>
                  <h3>Luxury Residential Design</h3>
                </div>

                <div className={styles.metaItem}>
                  <span>Software</span>
                  <h3>AutoCAD • SketchUp</h3>
                </div>

                <div className={styles.metaItem}>
                  <span>Scope</span>
                  <h3>Elevation • Planning • Visualization</h3>
                </div>
              </div>
            </div>

            <div className={styles.overviewRight}>
              <h2>
                Designed to balance modern minimalism with strong visual
                identity.
              </h2>

              <p>
                The residence explores a layered façade composition using clean
                horizontal geometry, material contrast, integrated lighting
                accents, and open balcony framing to create a premium visual
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className={styles.featuredSection}>
        <div className="container">
          <div className={styles.featuredCard}>
            <img
              src="/images/ELEVATION.png"
              alt="Featured Elevation"
              className={styles.featuredImage}
            />

            <div className={styles.featuredOverlay}></div>

            <div className={styles.featuredContent}>
              <p>Featured Elevation</p>
              <h3>Contemporary Front Façade</h3>
            </div>
          </div>
        </div>
      </section>

      {/* FLOOR PLANS */}
      <section className={styles.planSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className={styles.sectionTag}>Technical Drawings</p>
            <h2>Planning & Drafting</h2>
          </div>

          <div className={styles.planGrid}>
            <div className={styles.planCard}>
              <div className={styles.planImageWrap}>
                <img
                  src="/images/GF.png"
                  alt="Ground Floor Plan"
                  className={styles.planImage}
                />
              </div>

              <div className={styles.planContent}>
                <h3>Ground Floor Plan</h3>
                <p>
                  Functional zoning with integrated living, circulation, and
                  spatial openness designed for modern residential usage.
                </p>
              </div>
            </div>

            <div className={styles.planCard}>
              <div className={styles.planImageWrap}>
                <img
                  src="/images/FF.png"
                  alt="First Floor Plan"
                  className={styles.planImage}
                />
              </div>

              <div className={styles.planContent}>
                <h3>First Floor Planning</h3>
                <p>
                  Private spatial arrangement with balcony integration,
                  daylight optimization, and circulation continuity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN PROCESS */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.sectionHead}>
            <p className={styles.sectionTag}>Design Process</p>
            <h2>From Concept to Visualization</h2>
          </div>

          <div className={styles.processGrid}>
            {[
              'Site Understanding',
              'Spatial Planning',
              'Elevation Development',
              'Material Composition',
              'Lighting Strategy',
              'Final Visualization',
            ].map((item, index) => (
              <div key={item} className={styles.processCard}>
                <span>0{index + 1}</span>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}