// Import scoped styles for the Footer
import styles from './Footer.module.scss'

// Footer component — bottom of every page
// Structure: Top (brand + link columns) | Bottom (copyright + socials)
const Footer = () => {
  return (
    <footer className={styles.footer}>

      {/* Top section — brand info and navigation columns */}
      <div className={styles.top}>

        {/* Brand column — logo and tagline */}
        <div className={styles.brand}>
          <div className={styles.logo}>ÀṢÍRÍ</div>
          <p className={styles.tagline}>
            Àṣírí — meaning "secret" in Yoruba — represents the hidden
            treasures of African craftsmanship, revealed through
            contemporary luxury fashion.
          </p>
        </div>

        {/* Shop links column */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Shop</h4>
          <ul className={styles.links}>
            <li><a href="/products">New Arrivals</a></li>
            <li><a href="/products">Women</a></li>
            <li><a href="/products">Men</a></li>
            <li><a href="/products">Accessories</a></li>
            <li><a href="/products">Sale</a></li>
          </ul>
        </div>

        {/* About links column */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>About</h4>
          <ul className={styles.links}>
            <li><a href="/story">Our Story</a></li>
            <li><a href="/story">Artisans</a></li>
            <li><a href="/story">Sustainability</a></li>
            <li><a href="/story">Careers</a></li>
            <li><a href="/story">Press</a></li>
          </ul>
        </div>

        {/* Help links column */}
        <div className={styles.column}>
          <h4 className={styles.columnTitle}>Help</h4>
          <ul className={styles.links}>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Size Guide</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

      </div>

      {/* Bottom section — copyright and social icons */}
      <div className={styles.bottom}>

        <p className={styles.copyright}>© 2026 ÀṢÍRÍ. All rights reserved.</p>

        {/* Social media icons */}
        <div className={styles.socials}>

          {/* Facebook */}
          <a href="#" className={styles.socialIcon}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
            </svg>
          </a>

          {/* Instagram */}
          <a href="#" className={styles.socialIcon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>

          {/* Twitter */}
          <a href="#" className={styles.socialIcon}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a href="#" className={styles.socialIcon}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>

        </div>
      </div>

    </footer>
  )
}

export default Footer