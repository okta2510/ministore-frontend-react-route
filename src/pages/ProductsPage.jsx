import { useState } from 'react'
import { Link } from 'react-router-dom'
import { products, formatPrice } from '../data/products'

const vibeFilters = ['Retro', 'Y2K', 'Earth-Tone', 'Street']

const catalogProducts = products.filter((p) =>
  ['retro-flannel-shirt', 'y2k-cargo-pants', 'earth-tone-vest'].includes(p.id),
)

export default function ProductsPage() {
  const [activeVibe, setActiveVibe] = useState('Retro')

  return (
    <main className="max-w-7xl mx-auto px-container-margin py-stack-lg">
      <header className="mb-section-gap">
        <h1 className="font-headline-xl text-headline-xl text-primary mb-2">
          Katalog Aesthetic Kita
        </h1>
        <p className="font-tagline text-tagline text-on-surface-variant">
          Temukan gaya unikmu sambil tetap sayang bumi. Check it out!
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-gutter">
        <aside className="w-full md:w-64 flex-shrink-0">
          <div className="bg-surface-container-low p-stack-lg border-2 border-on-surface-variant hard-shadow sticky top-28">
            <div className="flex items-center gap-2 mb-stack-lg">
              <span className="material-symbols-outlined text-primary">tune</span>
              <h2 className="font-label-bold text-label-bold uppercase">Filter Vibes</h2>
            </div>

            <div className="mb-stack-lg">
              <p className="font-label-bold mb-2">Pilih Kategori</p>
              <div className="space-y-2">
                {['Semua Item', 'Atasan', 'Bawahan', 'Outerwear'].map((cat, i) => (
                  <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      defaultChecked={i === 1}
                      className="rounded-none border-2 border-on-surface-variant text-primary focus:ring-sun-yellow"
                      type="checkbox"
                    />
                    <span className="group-hover:text-primary transition-colors">{cat}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-stack-lg">
              <p className="font-label-bold mb-2">Budget Ramah Kantong</p>
              <input
                className="w-full h-2 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary"
                max="200000"
                min="0"
                step="10000"
                type="range"
                defaultValue="200000"
              />
              <div className="flex justify-between mt-2 font-label-bold text-on-surface-variant">
                <span>Rp 0</span>
                <span>Rp 200rb</span>
              </div>
            </div>

            <div className="mb-stack-lg">
              <p className="font-label-bold mb-2">Vibe Kamu?</p>
              <div className="flex flex-wrap gap-2">
                {vibeFilters.map((vibe) => (
                  <button
                    key={vibe}
                    type="button"
                    onClick={() => setActiveVibe(vibe)}
                    className={`px-3 py-1 font-label-bold rounded-full border-2 border-on-surface-variant text-xs transition-all ${
                      activeVibe === vibe
                        ? 'bg-sun-yellow text-on-secondary-fixed hard-shadow-hover'
                        : 'bg-surface-container-highest text-on-surface-variant hover:bg-sun-yellow'
                    }`}
                  >
                    {vibe}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="w-full bg-primary text-white py-3 font-label-bold uppercase border-2 border-on-surface-variant hard-shadow hard-shadow-hover btn-active"
            >
              Reset Filter
            </button>
          </div>
        </aside>

        <section className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {catalogProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border-2 border-on-surface-variant group flex flex-col hard-shadow transition-transform hover:-translate-y-1"
              >
                <div className="relative overflow-hidden aspect-[4/5] border-b-2 border-on-surface-variant">
                  <img
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={product.image}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-sun-yellow text-on-secondary-fixed px-3 py-1 font-label-bold border-2 border-on-surface-variant text-sm">
                      {product.badge}
                    </span>
                  </div>
                </div>
                <div className="p-4 flex-1 flex flex-col">
                  <h3 className="font-headline-lg text-lg mb-1 leading-tight group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-eco-maroon font-headline-lg text-xl mb-4">
                    {formatPrice(product.price)}
                  </p>
                  <div className="mt-auto">
                    <Link
                      to={`/products/${product.id}`}
                      className="w-full bg-vibe-red text-white py-3 font-label-bold border-2 border-on-surface-variant hard-shadow-hover btn-active transition-all flex items-center justify-center gap-2"
                    >
                      <span className="material-symbols-outlined text-sm">verified</span>
                      Vibe Check
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-span-full py-12 flex flex-col items-center justify-center border-4 border-dashed border-surface-container-highest rounded-xl bg-surface-container-low text-center p-8">
              <span className="material-symbols-outlined text-6xl text-surface-container-highest mb-4">
                admob
              </span>
              <h4 className="font-tagline text-tagline text-on-surface-variant mb-2">
                Lagi cari yang lain?
              </h4>
              <p className="max-w-md mx-auto text-on-surface-variant mb-6">
                Belum nemu yang pas di hati? Kita update katalog setiap hari Selasa
                & Jumat jam 4 sore lho! Stay tuned ya bestie.
              </p>
              <button
                type="button"
                className="bg-white text-primary border-2 border-primary px-8 py-3 font-label-bold hard-shadow hard-shadow-hover transition-all"
              >
                Ingetin Aku Pas Drop Baru
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
