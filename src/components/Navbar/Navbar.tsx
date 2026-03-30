// Import React hooks for scroll detection
import { useState, useEffect } from 'react'

// Import scoped styles
import styles from './Navbar.module.scss'

// Navbar component — fixed top navigation
// Structure: Logo (left) | Nav Links (center) | Icons (right)
const Navbar = () => {

  // Track whether the user has scrolled past 100px
  const [scrolled, setScrolled] = useState(false)

  // Listen for scroll events when component loads
  useEffect(() => {
    const handleScroll = () => {
      // If scrolled past 100px, set scrolled to true
      if (window.scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Attach the scroll listener to the window
    window.addEventListener('scroll', handleScroll)

    // Cleanup — remove listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    // Apply both .nav and .scrolled classes when scrolled is true
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>

      {/* Left: Brand logo */}
      <a href="/" className={styles.logo}>
        ÀṢÍRÍ
      </a>

      {/* Center: Navigation links */}
      <ul className={styles.navLinks}>
        <li><a href="/products">New Arrivals</a></li>
        <li><a href="/products">Women</a></li>
        <li><a href="/products">Men</a></li>
        <li><a href="/products">Accessories</a></li>
        <li><a href="/story">Heritage</a></li>
      </ul>

      {/* Right: Utility icons */}
      <div className={styles.navIcons}>

        {/* Search icon */}
        <button className={styles.iconBtn}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="M21 21l-4.35-4.35"/>
          </svg>
        </button>

        {/* Wishlist heart icon */}
        <button className={styles.iconBtn}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>

        {/* Cart bag icon */}
        <a href="/cart" className={styles.iconBtn}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
        </a>

      </div>
    </nav>
  )
}

export default Navbar