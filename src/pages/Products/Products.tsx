// Import reusable ProductCard component
import ProductCard from '../../components/ProductCard/ProductCard'

// Import scoped styles
import styles from './Products.module.scss'

// All products data — will come from backend later
const allProducts = [
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

// Filter categories
const categories = ['All', 'Women', 'Men', 'Accessories']

// Products page — browse all items
const Products = () => {
  return (
    <main className={styles.products}>

      {/* Page header — title and description */}
      <div className={styles.header}>
        <p className={styles.eyebrow}>Curated Selection</p>
        <h1 className={styles.title}>The Collection</h1>
        <p className={styles.subtitle}>
          Explore our full range of African luxury fashion
        </p>
      </div>

      {/* Filter bar — category tabs */}
      <div className={styles.filters}>
        {categories.map((cat) => (
          <button key={cat} className={styles.filterBtn}>
            {cat}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className={styles.grid}>
        {allProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>

    </main>
  )
}

export default Products