import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { formatPrice } from '../data/products'

function CartItemCard({ item, onRemove, onUpdateQuantity }) {
  const { product, size, quantity, id } = item
  const lineTotal = product.price * quantity

  return (
    <div className="bg-white border-2 border-on-background p-6 rounded-lg flex flex-col md:flex-row gap-6 hard-shadow relative group">
      <div className="w-full md:w-40 h-40 bg-surface-container-highest rounded-lg overflow-hidden flex-shrink-0 border-2 border-on-background">
        <img
          alt={product.name}
          className="w-full h-full object-cover"
          src={product.image}
        />
      </div>
      <div className="flex flex-col justify-between flex-grow">
        <div>
          <div className="flex justify-between items-start">
            <h3 className="font-headline-lg text-headline-lg text-on-background">
              {product.name}
            </h3>
            <button
              type="button"
              onClick={() => onRemove(id)}
              className="text-on-surface-variant hover:text-vibe-red transition-colors active:scale-90"
            >
              <span className="material-symbols-outlined">delete</span>
            </button>
          </div>
          <p className="font-body-md text-on-surface-variant">
            Size: {size} • Condition: Excellent
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="bg-sun-yellow text-on-secondary-fixed font-label-bold text-label-bold px-3 py-1 rounded-full border border-on-background">
              {product.badge}
            </span>
            <span className="bg-earth-moss text-white font-label-bold text-label-bold px-3 py-1 rounded-full border border-on-background">
              {product.ecoTag}
            </span>
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex justify-between items-end">
          <div className="flex items-center border-2 border-on-background rounded-lg overflow-hidden">
            <button
              type="button"
              onClick={() => onUpdateQuantity(id, quantity - 1)}
              className="px-3 py-1 hover:bg-surface-container transition-colors"
            >
              -
            </button>
            <span className="px-4 py-1 font-bold border-x-2 border-on-background">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => onUpdateQuantity(id, quantity + 1)}
              className="px-3 py-1 hover:bg-surface-container transition-colors"
            >
              +
            </button>
          </div>
          <p className="font-headline-lg text-headline-lg text-eco-maroon">
            {formatPrice(lineTotal)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function CartPage() {
  const {
    cartItems,
    itemCount,
    subtotal,
    total,
    shippingFee,
    waterSaved,
    removeFromCart,
    updateQuantity,
  } = useCart()
  const [promoCode, setPromoCode] = useState('')

  if (cartItems.length === 0) {
    return (
      <main className="max-w-7xl mx-auto px-container-margin py-section-gap min-h-[819px]">
        <section className="flex flex-col items-center justify-center py-20 text-center space-y-8">
          <div className="relative w-64 h-64">
            <div className="absolute inset-0 bg-sun-yellow rounded-full scale-75 blur-2xl opacity-30 animate-pulse" />
            <span
              className="material-symbols-outlined text-[120px] text-on-surface-variant"
              style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}
            >
              shopping_bag
            </span>
          </div>
          <div className="max-w-md">
            <h2 className="font-headline-xl text-headline-xl text-primary">
              Your vibe is currently empty.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
              Don&apos;t let your style wait! Thousands of pre-loved gems are
              looking for a new home.
            </p>
          </div>
          <Link
            to="/products"
            className="bg-primary text-white px-10 py-4 rounded-full font-headline-lg border-2 border-on-background hard-shadow hard-shadow-hover transition-all"
          >
            Start Shopping
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="max-w-7xl mx-auto px-container-margin py-section-gap min-h-[819px]">
      <div className="mb-12">
        <h1 className="font-headline-xl text-headline-xl text-primary leading-tight">
          Your Vibe Check.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
          Ready to give these gems a second life?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-2 space-y-6">
          {cartItems.map((item) => (
            <CartItemCard
              key={item.id}
              item={item}
              onRemove={removeFromCart}
              onUpdateQuantity={updateQuantity}
            />
          ))}
        </div>

        <aside className="space-y-6">
          <div className="bg-earth-moss p-4 rounded-lg border-2 border-on-background text-white flex gap-3 items-center hard-shadow">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              eco
            </span>
            <p className="font-label-bold text-label-bold">
              Pilihan cerdas! Kamu baru saja menghemat {waterSaved.toLocaleString('id-ID')}{' '}
              liter air dengan memilih pre-loved.
            </p>
          </div>

          <div className="bg-surface-container p-8 rounded-lg border-2 border-on-background space-y-6 hard-shadow">
            <h2 className="font-headline-lg text-headline-lg text-primary">Summary</h2>
            <div className="space-y-3">
              <div className="flex justify-between font-body-md">
                <span className="text-on-surface-variant">
                  Subtotal ({itemCount} Item{itemCount !== 1 ? 's' : ''})
                </span>
                <span className="font-bold">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between font-body-md">
                <span className="text-on-surface-variant">Shipping</span>
                <span className="font-bold">{formatPrice(shippingFee)}</span>
              </div>
              <div className="flex justify-between font-body-md">
                <span className="text-on-surface-variant">Carbon Offset</span>
                <span className="font-bold text-earth-moss">Rp 0 (FREE)</span>
              </div>
            </div>
            <div className="h-px bg-on-surface-variant opacity-20" />
            <div className="flex justify-between items-center">
              <span className="font-headline-lg text-headline-lg">Total</span>
              <span className="font-headline-lg text-headline-lg text-eco-maroon">
                {formatPrice(total)}
              </span>
            </div>
            <button
              type="button"
              className="w-full bg-vibe-red text-white py-4 rounded-lg font-headline-lg text-headline-lg-mobile border-2 border-on-background hard-shadow hard-shadow-hover transition-all flex items-center justify-center gap-2 group"
            >
              Amankan Vibe-mu
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
            <div className="flex items-center justify-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px]">
                verified_user
              </span>
              <span className="text-label-bold">Secure payment via ThriftVibe Pay</span>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border-2 border-on-background hard-shadow">
            <label className="block font-label-bold mb-2" htmlFor="promo">
              Have a vibe code?
            </label>
            <div className="flex gap-2">
              <input
                className="flex-grow border-2 border-on-background rounded-lg px-4 py-2 focus:ring-0 focus:border-primary outline-none bg-surface-container-low"
                id="promo"
                placeholder="Enter code"
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
              />
              <button
                type="button"
                className="bg-sun-yellow px-4 py-2 border-2 border-on-background rounded-lg font-label-bold hover:bg-secondary-fixed transition-colors active:scale-95"
              >
                Apply
              </button>
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}
