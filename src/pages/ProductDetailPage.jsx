import { useState } from 'react'
import { Link, useParams, Navigate, useNavigate } from 'react-router-dom'
import {
  getProductById,
  getRelatedProducts,
  formatPrice,
} from '../data/products'
import { useCart } from '../hooks/useCart'

const sizes = ['M', 'L', 'XL']

export default function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const product = getProductById(id)
  const [selectedSize, setSelectedSize] = useState('L')
  const [mainImage, setMainImage] = useState(0)

  const handleAddToCart = () => {
    addToCart(product.id, selectedSize)
    navigate('/cart')
  }

  if (!product) {
    return <Navigate to="/products" replace />
  }

  const gallery =
    product.gallery.length > 0 ? product.gallery : [product.image]
  const relatedProducts = getRelatedProducts(product.id)

  return (
    <main className="max-w-7xl mx-auto px-container-margin py-section-gap">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-6">
          <div className="relative aspect-[4/5] bg-surface-container-high border-2 border-on-surface-variant block-shadow overflow-hidden group">
            <img
              className="w-full h-full object-cover"
              alt={product.name}
              src={gallery[mainImage]}
            />
            <div className="absolute top-4 left-4 bg-sun-yellow px-4 py-1 border-2 border-on-surface-variant font-label-bold block-shadow-yellow">
              {product.badge.toUpperCase()}
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {gallery.slice(0, 3).map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setMainImage(i)}
                className={`aspect-square border-2 cursor-pointer hover:opacity-80 transition-opacity ${
                  mainImage === i
                    ? 'border-primary'
                    : 'border-on-surface-variant'
                }`}
              >
                <img className="w-full h-full object-cover" alt="" src={img} />
              </button>
            ))}
            <div className="aspect-square border-2 border-on-surface-variant bg-surface-container-high flex items-center justify-center cursor-pointer hover:bg-surface-container-highest transition-colors">
              <span className="material-symbols-outlined text-[40px] text-on-surface-variant">
                add
              </span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-8">
          <div>
            <h1 className="font-headline-xl text-headline-xl text-primary leading-tight mb-2">
              {product.name}
            </h1>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-black text-on-surface">
                {formatPrice(product.price)}
              </span>
              <div className="bg-sun-yellow text-on-surface px-3 py-1 border-2 border-on-surface-variant font-label-bold">
                MURCE ABIS!
              </div>
            </div>
          </div>

          <div className="p-6 bg-surface-container border-2 border-on-surface-variant block-shadow">
            <p className="font-body-lg text-body-lg text-on-surface mb-4">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-surface-container-lowest px-3 py-1 border border-on-surface-variant rounded-full text-sm font-label-bold"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-label-bold text-headline-lg flex justify-between items-center">
              Pilih Ukuran
              <button type="button" className="text-primary text-sm underline font-body-md">
                Size Guide
              </button>
            </h3>
            <div className="flex gap-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 flex items-center justify-center border-2 font-black transition-all active:scale-95 ${
                    selectedSize === size
                      ? 'border-primary bg-primary text-white'
                      : 'border-on-surface-variant hover:bg-primary hover:text-white'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 space-y-4">
            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full py-5 bg-blush-base text-white font-headline-lg border-2 border-on-surface-variant block-shadow active-push transition-all flex items-center justify-center gap-3"
            >
              Bungkus Sekarang!
              <span
                className="material-symbols-outlined text-[32px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                shopping_bag
              </span>
            </button>
            <button
              type="button"
              className="w-full py-4 bg-surface border-2 border-on-surface-variant font-label-bold hover:bg-surface-container-low transition-colors flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined">favorite</span> Masukin
              Wishlist
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 bg-surface-container-low border border-outline-variant">
              <span className="material-symbols-outlined text-primary">
                local_shipping
              </span>
              <span className="text-sm font-label-bold leading-tight">
                Pengiriman Cepat Se-Indo
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-surface-container-low border border-outline-variant">
              <span className="material-symbols-outlined text-primary">
                check_circle
              </span>
              <span className="text-sm font-label-bold leading-tight">
                Kualitas Terkurasi
              </span>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-24">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-primary font-label-bold uppercase tracking-widest">
              Match with this!
            </span>
            <h2 className="font-headline-xl text-headline-xl leading-tight">
              Keren Digabungin Sama...
            </h2>
          </div>
          <Link
            to="/products"
            className="text-primary font-bold flex items-center gap-2 hover:translate-x-1 transition-transform"
          >
            Liat Semua <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map((related) => (
            <Link
              key={related.id}
              to={`/products/${related.id}`}
              className="group border-2 border-on-surface-variant block-shadow hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  alt={related.name}
                  src={related.image}
                />
                <div className="absolute bottom-4 right-4 bg-sun-yellow px-2 py-1 border border-on-surface-variant font-label-bold text-sm">
                  Rp {Math.round(related.price / 1000)}k
                </div>
              </div>
              <div className="p-4 bg-white">
                <h4 className="font-headline-lg text-[20px] mb-1">{related.name}</h4>
                <p className="text-on-surface-variant text-sm line-clamp-2">
                  {related.description}
                </p>
              </div>
            </Link>
          ))}
          <div className="hidden lg:flex flex-col justify-center items-center p-8 bg-tertiary-fixed border-2 border-on-surface-variant block-shadow">
            <span className="material-symbols-outlined text-[64px] text-primary mb-4">
              stars
            </span>
            <h4 className="font-headline-lg text-center text-primary">
              Dapatkan Diskon 20%
            </h4>
            <p className="text-center font-body-md mt-2">
              Daftar newsletter buat dapetin promo vintage tiap minggu!
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
