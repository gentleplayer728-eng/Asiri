/* eslint-disable react-refresh/only-export-components */
// Import React tools for creating shared state
import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

// Define what a cart item looks like
type CartItem = {
  id: string
  name: string
  price: string
  color: string
  size: string
  quantity: number
  letter: string
}

// Define what the cart context provides to the app
type CartContextType = {
  items: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
}

// Create the context — starts as undefined
const CartContext = createContext<CartContextType | undefined>(undefined)

// Cart provider — wraps the app and shares cart state with all pages
export const CartProvider = ({ children }: { children: ReactNode }) => {

  // The cart starts empty
  const [items, setItems] = useState<CartItem[]>([])

  // Add a product to the cart
  const addToCart = (newItem: CartItem) => {
    setItems((prev) => {
      // Check if this exact item (same id, color, size) already exists
      const existing = prev.find(
        (item) => item.id === newItem.id && item.color === newItem.color && item.size === newItem.size
      )

      if (existing) {
        // If it exists, increase the quantity
        return prev.map((item) =>
          item.id === existing.id && item.color === existing.color && item.size === existing.size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      // If it's new, add it with quantity 1
      return [...prev, { ...newItem, quantity: 1 }]
    })
  }

  // Remove an item from the cart
  const removeFromCart = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  // Update the quantity of an item
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id)
      return
    }
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    )
  }

  // Empty the entire cart
  const clearCart = () => {
    setItems([])
  }

  // Count total items in cart
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  )
}

// Custom hook — easy way for any component to use the cart
export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }
  return context
}