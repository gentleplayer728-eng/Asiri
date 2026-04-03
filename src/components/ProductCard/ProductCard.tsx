// Import Link for navigation
import { Link } from 'react-router-dom'

// Import scoped styles
import styles from './ProductCard.module.scss'

// Define the shape of data this component accepts
type ProductCardProps = {
  id: string
  letter: string
  tag?: string
  category: string
  name: string
  price: string
  colors: string[]
}

// ProductCard component — clickable, links to product detail
const ProductCard = ({ id, letter, tag, category, name, price, colors }: ProductCardProps) => {
  return (
    <Link to={`/products/${id}`} className={styles.card}>

      {/* Product image area */}
      <div className={styles.image}>
        <div className={styles.placeholder}>{letter}</div>
        {tag && <span className={styles.tag}>{tag}</span>}
        <div className={styles.overlay}>
          <button className={styles.quickView}>Quick View</button>
        </div>
      </div>

      {/* Product info */}
      <div className={styles.info}>
        <p className={styles.category}>{category}</p>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>{price}</p>
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

    </Link>
  )
}

export default ProductCard