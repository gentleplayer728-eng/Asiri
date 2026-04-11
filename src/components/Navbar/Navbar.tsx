// Import React hooks for scroll detection
import { useState, useEffect } from 'react'

// Import Link for client-side navigation
import { Link } from 'react-router-dom'

// Import cart hook to show item count
import { useCart } from '../../context/CartContext'

// Import scoped styles
import styles from './Navbar.module.scss'

// Navbar component — fixed top navigation
// Structure: Logo (left) | Nav Links (center) | Icons (right)
const Navbar = () => {

  // Get total cart items for the badge
  const { totalItems } = useCart()

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
      <Link to="/" className={styles.logo}>
        ÀṢÍRÍ
      </Link>

      {/* Center: Navigation links */}
      <ul className={styles.navLinks}>
        <li><Link to="/products">New Arrivals</Link></li>
        <li><Link to="/products">Women</Link></li>
        <li><Link to="/products">Men</Link></li>
        <li><Link to="/products">Accessories</Link></li>
        <li><Link to="/story">Heritage</Link></li>
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

        {/* Cart bag icon with item count */}
        <Link to="/cart" className={styles.iconBtn}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
            <line x1="3" y1="6" x2="21" y2="6"/>
            <path d="M16 10a4 4 0 0 1-8 0"/>
          </svg>
          {totalItems > 0 && (
            <span className={styles.cartBadge}>{totalItems}</span>
          )}
        </Link>

      </div>
    </nav>
  )
}

export default Navbar