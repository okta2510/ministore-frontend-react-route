import { Link } from 'react-router-dom'

export default function MobileNav() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-surface border-t-2 border-on-surface-variant z-50 flex justify-around items-center h-16 px-4">
      <Link to="/products" className="flex flex-col items-center gap-1 text-primary">
        <span className="material-symbols-outlined">storefront</span>
        <span className="text-[10px] font-label-bold">Shop</span>
      </Link>
      <button type="button" className="flex flex-col items-center gap-1 text-on-surface-variant">
        <span className="material-symbols-outlined">search</span>
        <span className="text-[10px] font-label-bold">Cari</span>
      </button>
      <button type="button" className="flex flex-col items-center gap-1 text-on-surface-variant">
        <span className="material-symbols-outlined">favorite</span>
        <span className="text-[10px] font-label-bold">Wishlist</span>
      </button>
      <button type="button" className="flex flex-col items-center gap-1 text-on-surface-variant">
        <span className="material-symbols-outlined">person</span>
        <span className="text-[10px] font-label-bold">Akun</span>
      </button>
    </div>
  )
}
