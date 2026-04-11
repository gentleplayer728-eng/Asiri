// Import cart hook to access cart data
import { useCart } from '../../context/CartContext'

// Import Link for navigation
import { Link } from 'react-router-dom'

// Import scoped styles
import styles from './Cart.module.scss'

// Cart page — shows all items in the shopping bag
const Cart = () => {

  // Get cart data and functions
  const { items, removeFromCart, updateQuantity, clearCart, totalItems } = useCart()

  // Calculate total price from all items
  const totalPrice = items.reduce((sum, item) => {
    // Remove 'R' and ',' from price string, convert to number
    const price = Number(item.price.replace('R', '').replace(',', ''))
    return sum + price * item.quantity
  }, 0)

  // Format price with commas and R prefix
  const formatPrice = (amount: number) => {
    return 'R' + amount.toLocaleString()
  }

  return (
    <main className={styles.cart}>

      {/* Page header */}
      <div className={styles.header}>
        <h1 className={styles.title}>Shopping Bag</h1>
        <p className={styles.count}>{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
      </div>

      {/* Empty cart state */}
      {items.length === 0 ? (
        <div className={styles.empty}>
          <p className={styles.emptyText}>Your bag is empty</p>
          <Link to="/products" className={styles.continueShopping}>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* Cart items list */}
          <div className={styles.itemsList}>
            {items.map((item, index) => (
              <div key={index} className={styles.cartItem}>

                {/* Item image placeholder */}
                <div className={styles.itemImage}>
                  <div className={styles.itemPlaceholder}>{item.letter}</div>
                </div>

                {/* Item details */}
                <div className={styles.itemDetails}>
                  <h3 className={styles.itemName}>{item.name}</h3>
                  <p className={styles.itemMeta}>
                    {item.color && `Color: ${item.color}`}
                    {item.size && ` | Size: ${item.size}`}
                  </p>
                  <p className={styles.itemPrice}>{item.price}</p>
                </div>

                {/* Quantity controls */}
                <div className={styles.quantity}>
                  <button
                    className={styles.qtyBtn}
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span className={styles.qtyValue}>{item.quantity}</span>
                  <button
                    className={styles.qtyBtn}
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                {/* Remove button */}
                <button
                  className={styles.removeBtn}
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>

              </div>
            ))}
          </div>

          {/* Cart summary */}
          <div className={styles.summary}>
            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className={styles.summaryTotal}>
              <span>Total</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>

            {/* Action buttons */}
            <button className={styles.checkoutBtn}>
              Proceed to Checkout
            </button>
            <Link to="/products" className={styles.continueShopping}>
              Continue Shopping
            </Link>
            <button className={styles.clearBtn} onClick={clearCart}>
              Clear Bag
            </button>
          </div>
        </>
      )}

    </main>
  )
}

export default Cart