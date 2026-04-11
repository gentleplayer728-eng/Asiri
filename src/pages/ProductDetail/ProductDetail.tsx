// Import hooks for reading URL parameters
import { useParams } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
// Import scoped styles
import styles from './ProductDetail.module.scss'

// All products — same data, will come from backend later
const allProducts = [
  {
    id: '1',
    letter: 'À',
    tag: 'New',
    category: 'Ankara Collection',
    name: 'Kente Silk Blazer',
    price: 'R1,890',
    colors: ['#C9A962', '#2D5A3D', '#C45D3E'],
    description: 'Crafted from premium Kente silk sourced from master weavers in Ghana, this blazer blends traditional West African artistry with contemporary tailoring. Each thread carries centuries of cultural significance.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: '2',
    letter: 'Ṣ',
    category: 'Adire Heritage',
    name: 'Indigo Flow Dress',
    price: 'R2,450',
    colors: ['#1E3A5F', '#2A1810'],
    description: 'Hand-dyed using the ancient Yoruba Adire technique, this flowing dress embodies the deep indigo hues that have defined West African textile artistry for generations.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: '3',
    letter: 'Í',
    tag: 'Exclusive',
    category: 'Maasai Inspired',
    name: 'Beaded Collar Cape',
    price: 'R3,200',
    colors: ['#C45D3E', '#C9A962'],
    description: 'Inspired by the intricate beadwork of the Maasai people, this statement cape features hand-stitched patterns that celebrate East African craftsmanship in a contemporary silhouette.',
    sizes: ['S', 'M', 'L'],
  },
  {
    id: '4',
    letter: 'R',
    category: 'Sahel Series',
    name: 'Desert Linen Tunic',
    price: 'R1,350',
    colors: ['#E8DFD0', '#D4763A'],
    description: 'Woven from the finest Saharan linen, this tunic captures the warmth and openness of the desert landscape. Light, breathable, and effortlessly elegant.',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: '5',
    letter: 'Í',
    category: 'Bogolan Craft',
    name: 'Mudcloth Bomber',
    price: 'R2,100',
    colors: ['#2A1810', '#E8DFD0'],
    description: 'Featuring authentic Bogolan mudcloth patterns from Mali, this bomber jacket bridges the gap between ancestral textile art and modern streetwear.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '6',
    letter: 'À',
    tag: 'Limited',
    category: 'Royal Weave',
    name: 'Aso Oke Evening Gown',
    price: 'R4,500',
    colors: ['#C9A962', '#1E3A5F'],
    description: 'This limited-edition evening gown is crafted from hand-woven Aso Oke fabric, traditionally reserved for Yoruba royalty. A masterpiece of African haute couture.',
    sizes: ['XS', 'S', 'M', 'L'],
  },
  {
    id: '7',
    letter: 'Ṣ',
    category: 'Zulu Collection',
    name: 'Beaded Leather Bag',
    price: 'R1,650',
    colors: ['#2A1810', '#C45D3E', '#2D5A3D'],
    description: 'Handcrafted from premium South African leather and adorned with Zulu beadwork patterns, this bag is a fusion of heritage craftsmanship and modern luxury.',
    sizes: [],
  },
  {
    id: '8',
    letter: 'R',
    category: 'Ankara Fusion',
    name: 'Print Block Sneakers',
    price: 'R890',
    colors: ['#D4763A', '#2D5A3D'],
    description: 'Bold Ankara print meets contemporary sneaker design. Each pair is unique, featuring hand-selected print blocks that celebrate the vibrant energy of African textile art.',
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
  },
]

// ProductDetail page — shows full info for one product
const ProductDetail = () => {

  // Read the product ID from the URL
  const { id } = useParams()

  // Find the matching product
  const product = allProducts.find((p) => p.id === id)

  // Get the addToCart function from context
  const { addToCart } = useCart()

  // If product not found, show message
  if (!product) {
    return (
      <main className={styles.detail}>
        <p className={styles.notFound}>Product not found</p>
      </main>
    )
  }

  return (
    <main className={styles.detail}>
      <div className={styles.content}>

        {/* Left — product image */}
        <div className={styles.imageSection}>
          <div className={styles.imagePlaceholder}>
            {product.letter}
            {product.tag && (
              <span className={styles.tag}>{product.tag}</span>
            )}
          </div>
        </div>

        {/* Right — product info */}
        <div className={styles.infoSection}>

          {/* Category and name */}
          <p className={styles.category}>{product.category}</p>
          <h1 className={styles.name}>{product.name}</h1>
          <p className={styles.price}>{product.price}</p>

          {/* Description */}
          <p className={styles.description}>{product.description}</p>

          {/* Color selection */}
          <div className={styles.optionGroup}>
            <p className={styles.optionLabel}>Color</p>
            <div className={styles.colors}>
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className={styles.swatch}
                  style={{ background: color }}
                />
              ))}
            </div>
          </div>

          {/* Size selection — only if sizes exist */}
          {product.sizes.length > 0 && (
            <div className={styles.optionGroup}>
              <p className={styles.optionLabel}>Size</p>
              <div className={styles.sizes}>
                {product.sizes.map((size) => (
                  <button key={size} className={styles.sizeBtn}>
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to cart button */}
          <button className={styles.addToCart} onClick={() => addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            color: product.colors[0],
            size: product.sizes[0] || '',
            quantity: 1,
            letter: product.letter,
          })}>
            <span>Add to Cart</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
          </button>

        </div>
      </div>
    </main>
  )
}

export default ProductDetail