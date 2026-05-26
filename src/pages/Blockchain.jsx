import styles from './DomainPage.module.css'

const projects = [
  {
    title: 'Coming Soon',
    category: 'Add Your Blockchain Projects',
    year: '—',
    description:
      'Smart contracts, DeFi protocols, dApps, NFT projects — apna on-chain kaam yahan add karo.',
    tools: ['Solidity', 'Hardhat', 'Ethers.js', 'React', 'IPFS'],
    image: null,
    featured: true,
  },
]

export default function Blockchain() {
  return (
    <main className={styles.main}>
      <section className={styles.header}>
        <div className="container">
          <p className="section-tag">// domain 04</p>
          <h1 className={styles.pageTitle} style={{ color: '#f0c27f' }}>Blockchain</h1>
          <p className={styles.pageDesc}>
            Decentralized systems, smart contracts, and trustless protocols.
            Building on-chain logic that runs without intermediaries — code as law.
          </p>
          <div className={styles.domainMeta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Languages</span>
              <span className={styles.metaVal}>Solidity · Rust · JavaScript</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Tools</span>
              <span className={styles.metaVal}>Hardhat · Foundry · Ethers.js</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Chains</span>
              <span className={styles.metaVal}>Ethereum · Polygon · Solana</span>
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
                      <span>⛓</span>
                      <p>Add project screenshots in /public/images/</p>
                    </div>
                  )}
                </div>
                <div className={styles.projectInfo}>
                  <div className={styles.projectMeta}>
                    <span className={styles.projectCategory} style={{ color: '#f0c27f' }}>{p.category}</span>
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
              <h2 className="section-title">Blockchain Skills</h2>
            </div>
            <div className={styles.skillsGrid}>
              {[
                { name: 'Solidity / Smart Contracts', level: 85 },
                { name: 'Hardhat / Foundry', level: 80 },
                { name: 'Ethers.js / Wagmi', level: 82 },
                { name: 'DeFi Protocols', level: 75 },
                { name: 'IPFS / Filecoin', level: 70 },
                { name: 'NFT Standards (ERC-721/1155)', level: 78 },
              ].map((s) => (
                <div key={s.name} className={styles.skillRow}>
                  <div className={styles.skillHeader}>
                    <span>{s.name}</span>
                    <span className={styles.skillPct}>{s.level}%</span>
                  </div>
                  <div className={styles.skillBar}>
                    <div className={styles.skillFill} style={{ width: `${s.level}%`, background: '#f0c27f' }} />
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
