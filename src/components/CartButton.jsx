import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

export default function CartButton({ filled = false, className = '' }) {
  const { itemCount } = useCart()

  return (
    <Link
      to="/cart"
      className={`relative flex items-center justify-center p-2 rounded-full hover:bg-surface-container transition-all active:scale-95 ${className}`}
    >
      <span
        className="material-symbols-outlined text-primary"
        style={filled ? { fontVariationSettings: "'FILL' 1" } : undefined}
      >
        shopping_cart
      </span>
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-vibe-red text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-white">
          {itemCount}
        </span>
      )}
    </Link>
  )
}
