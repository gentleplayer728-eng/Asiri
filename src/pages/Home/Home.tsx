// Import components
import Hero from '../../components/Hero/Hero'
import ProductCard from '../../components/ProductCard/ProductCard'

// Import scoped styles
import styles from './Home.module.scss'

// Product data — will come from backend later
const products = [
  {
    letter: 'À',
    tag: 'New',
    category: 'Ankara Collection',
    name: 'Kente Silk Blazer',
    price: 'R1,890',
    colors: ['#C9A962', '#2D5A3D', '#C45D3E'],
  },
  {
    letter: 'Ṣ',
    category: 'Adire Heritage',
    name: 'Indigo Flow Dress',
    price: 'R2,450',
    colors: ['#1E3A5F', '#2A1810'],
  },
  {
    letter: 'Í',
    tag: 'Exclusive',
    category: 'Maasai Inspired',
    name: 'Beaded Collar Cape',
    price: 'R3,200',
    colors: ['#C45D3E', '#C9A962'],
  },
  {
    letter: 'R',
    category: 'Sahel Series',
    name: 'Desert Linen Tunic',
    price: 'R1,350',
    colors: ['#E8DFD0', '#D4763A'],
  },
  {
    letter: 'Í',
    category: 'Bogolan Craft',
    name: 'Mudcloth Bomber',
    price: 'R2,100',
    colors: ['#2A1810', '#E8DFD0'],
  },
  {
    letter: 'À',
    tag: 'Limited',
    category: 'Royal Weave',
    name: 'Aso Oke Evening Gown',
    price: 'R4,500',
    colors: ['#C9A962', '#1E3A5F'],
  },
  {
    letter: 'Ṣ',
    category: 'Zulu Collection',
    name: 'Beaded Leather Bag',
    price: 'R1,650',
    colors: ['#2A1810', '#C45D3E', '#2D5A3D'],
  },
  {
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

    </main>
  )
}

export default Home