import { useMemo, useReducer } from 'react'
import { getProductById } from '../data/products'
import { CartContext } from './cart-context-store'

const SHIPPING_FEE = 15000
const WATER_SAVED_PER_ITEM = 2500

function getCartItemId(productId, size) {
  return `${productId}-${size}`
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { productId, size, quantity = 1 } = action.payload
      const id = getCartItemId(productId, size)
      const existing = state.items.find((item) => item.id === id)

      if (existing) {
        return {
          items: state.items.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + quantity }
              : item,
          ),
        }
      }

      return {
        items: [...state.items, { id, productId, size, quantity }],
      }
    }
    case 'REMOVE_ITEM':
      return {
        items: state.items.filter((item) => item.id !== action.payload),
      }
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload
      if (quantity < 1) {
        return { items: state.items.filter((item) => item.id !== id) }
      }
      return {
        items: state.items.map((item) =>
          item.id === id ? { ...item, quantity } : item,
        ),
      }
    }
    case 'CLEAR_CART':
      return { items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] })

  const cartItems = useMemo(
    () =>
      state.items
        .map((item) => {
          const product = getProductById(item.productId)
          if (!product) return null
          return { ...item, product }
        })
        .filter(Boolean),
    [state.items],
  )

  const itemCount = useMemo(
    () => state.items.reduce((sum, item) => sum + item.quantity, 0),
    [state.items],
  )

  const subtotal = useMemo(
    () =>
      cartItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0,
      ),
    [cartItems],
  )

  const total = subtotal + (cartItems.length > 0 ? SHIPPING_FEE : 0)
  const waterSaved = itemCount * WATER_SAVED_PER_ITEM

  const value = useMemo(
    () => ({
      cartItems,
      itemCount,
      subtotal,
      total,
      shippingFee: SHIPPING_FEE,
      waterSaved,
      addToCart: (productId, size, quantity = 1) =>
        dispatch({ type: 'ADD_ITEM', payload: { productId, size, quantity } }),
      removeFromCart: (id) => dispatch({ type: 'REMOVE_ITEM', payload: id }),
      updateQuantity: (id, quantity) =>
        dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } }),
      clearCart: () => dispatch({ type: 'CLEAR_CART' }),
    }),
    [cartItems, itemCount, subtotal, total, waterSaved],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
