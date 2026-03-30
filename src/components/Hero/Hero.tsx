// Import scoped styles for the Hero section
import styles from './Hero.module.scss'

// Hero component — the first thing a customer sees
// Full-screen section with headline, subtitle, and CTA button
const Hero = () => {
  return (
    <section className={styles.hero}>

      {/* Decorative rotating circles — background detail */}
      <div className={styles.deco}></div>
      <div className={styles.decoSmall}></div>

      {/* Main content — centered on screen */}
      <div className={styles.content}>

        {/* Eyebrow — small text above the headline */}
        <p className={styles.eyebrow}>Spring/Summer 2026 Collection</p>

        {/* Main headline — big, dramatic, two lines */}
        <h1 className={styles.title}>
          Where Tradition
          <span>Meets Tomorrow</span>
        </h1>

        {/* Subtitle — short description */}
        <p className={styles.subtitle}>
          Celebrating the rich tapestry of African heritage through
          contemporary luxury fashion. Each piece tells a story woven
          across generations.
        </p>

        {/* Call to action button — links to collection */}
        <a href="#collection" className={styles.cta}>
          <span>Explore Collection</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>

      </div>

      {/* Scroll indicator — tells user to scroll down */}
      <div className={styles.scrollIndicator}>
        <span>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>

    </section>
  )
}

export default Hero