// Import components
import Hero from '../../components/Hero/Hero'
import ProductCard from '../../components/ProductCard/ProductCard'

// Import scoped styles
import styles from './Home.module.scss'

// Product data — will come from backend later
const products = [
  {
    id: '1',
    letter: 'À',
    tag: 'New',
    category: 'Ankara Collection',
    name: 'Kente Silk Blazer',
    price: 'R1,890',
    colors: ['#C9A962', '#2D5A3D', '#C45D3E'],
  },
  {
    id: '2',
    letter: 'Ṣ',
    category: 'Adire Heritage',
    name: 'Indigo Flow Dress',
    price: 'R2,450',
    colors: ['#1E3A5F', '#2A1810'],
  },
  {
    id: '3',
    letter: 'Í',
    tag: 'Exclusive',
    category: 'Maasai Inspired',
    name: 'Beaded Collar Cape',
    price: 'R3,200',
    colors: ['#C45D3E', '#C9A962'],
  },
  {
    id: '4',
    letter: 'R',
    category: 'Sahel Series',
    name: 'Desert Linen Tunic',
    price: 'R1,350',
    colors: ['#E8DFD0', '#D4763A'],
  },
  {
    id: '5',
    letter: 'Í',
    category: 'Bogolan Craft',
    name: 'Mudcloth Bomber',
    price: 'R2,100',
    colors: ['#2A1810', '#E8DFD0'],
  },
  {
    id: '6',
    letter: 'À',
    tag: 'Limited',
    category: 'Royal Weave',
    name: 'Aso Oke Evening Gown',
    price: 'R4,500',
    colors: ['#C9A962', '#1E3A5F'],
  },
  {
    id: '7',
    letter: 'Ṣ',
    category: 'Zulu Collection',
    name: 'Beaded Leather Bag',
    price: 'R1,650',
    colors: ['#2A1810', '#C45D3E', '#2D5A3D'],
  },
  {
    id: '8',
    letter: 'R',
    category: 'Ankara Fusion',
    name: 'Print Block Sneakers',
    price: 'R890',
    colors: ['#D4763A', '#2D5A3D'],
  },
]

// Home page — landing page with all homepage sections
const Home = () => {
  return (
    <main className={styles.home}>

      {/* Hero — full screen intro */}
      <Hero />

      {/* Product collection section */}
      <section className={styles.collection} id="collection">
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>The Collection</p>
          <h2 className={styles.sectionTitle}>New Arrivals</h2>
        </div>

        {/* Product grid — maps over data to create cards */}
        <div className={styles.productGrid}>
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </section>

      {/* Featured Heritage Banner */}
      <section className={styles.featured}>
        <div className={styles.featuredBg}></div>
        <div className={styles.featuredPattern}></div>
        <div className={styles.featuredContent}>

          {/* Left side — text */}
          <div className={styles.featuredText}>
            <p className={styles.featuredEyebrow}>Heritage Collection</p>
            <h2 className={styles.featuredTitle}>
              The Art of
              <span>African Elegance</span>
            </h2>
            <p className={styles.featuredDescription}>
              Our master artisans collaborate with traditional weavers
              across the continent, preserving ancestral techniques while
              crafting pieces for the modern world. Each garment carries
              centuries of wisdom in every thread.
            </p>
            <a href="/story" className={styles.featuredCta}>
              <span>Discover the Story</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Right side — image placeholder */}
          <div className={styles.featuredImageContainer}>
            <div className={styles.featuredImage}>ÀṢÍRÍ</div>
            <div className={styles.featuredFrame}></div>
          </div>

        </div>
      </section>

      {/* Category Cards — Women, Men, Accessories */}
      <section className={styles.categories}>
        <div className={styles.categoryCard}>
          <div className={styles.categoryPlaceholder}>W</div>
          <div className={styles.categoryOverlay}>
            <h3 className={styles.categoryName}>Women</h3>
            <p className={styles.categoryCount}>124 Pieces</p>
          </div>
        </div>
        <div className={styles.categoryCard}>
          <div className={styles.categoryPlaceholder}>M</div>
          <div className={styles.categoryOverlay}>
            <h3 className={styles.categoryName}>Men</h3>
            <p className={styles.categoryCount}>98 Pieces</p>
          </div>
        </div>
        <div className={styles.categoryCard}>
          <div className={styles.categoryPlaceholder}>A</div>
          <div className={styles.categoryOverlay}>
            <h3 className={styles.categoryName}>Accessories</h3>
            <p className={styles.categoryCount}>76 Pieces</p>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className={styles.newsletter}>
        <h2 className={styles.newsletterTitle}>Join the Heritage</h2>
        <p className={styles.newsletterSubtitle}>
          Subscribe for exclusive access to new collections and African
          fashion stories
        </p>
        <div className={styles.newsletterForm}>
          <input
            type="email"
            className={styles.newsletterInput}
            placeholder="Enter your email"
          />
          <button className={styles.newsletterBtn}>Subscribe</button>
        </div>
      </section>

    </main>
  )
}

export default Home