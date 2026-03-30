// Import scoped styles
import styles from './ProductCard.module.scss'

// Define the shape of data this component accepts
type ProductCardProps = {
  letter: string        // Placeholder letter for image
  tag?: string          // Optional badge like "New" or "Limited"
  category: string      // Collection name
  name: string          // Product name
  price: string         // Product price
  colors: string[]      // Array of hex color codes
}

// ProductCard component — displays a single product
// Receives data through props — reusable with different products
const ProductCard = ({ letter, tag, category, name, price, colors }: ProductCardProps) => {
  return (
    <div className={styles.card}>

      {/* Product image area — placeholder for now */}
      <div className={styles.image}>
        <div className={styles.placeholder}>{letter}</div>

        {/* Tag badge — only shows if tag prop exists */}
        {tag && <span className={styles.tag}>{tag}</span>}

        {/* Quick view overlay — appears on hover */}
        <div className={styles.overlay}>
          <button className={styles.quickView}>Quick View</button>
        </div>
      </div>

      {/* Product info — details below the image */}
      <div className={styles.info}>
        <p className={styles.category}>{category}</p>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>{price}</p>

        {/* Color swatches — small circles showing available colors */}
        <div className={styles.colors}>
          {colors.map((color, index) => (
            <span
              key={index}
              className={styles.swatch}
              style={{ background: color }}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default ProductCard