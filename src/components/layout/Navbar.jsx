import { Link, NavLink } from 'react-router-dom'

const LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB9hzYEjAUCPLm2TcVTIG-CgoPaixYcNmxXJtQRhTaMdwenajyRbUO4lvImHGZd2jTrL_3ygu7O5Hgiz_JJDo5ccodUtCS8lytAq7DYw6UJvzKv6K1jb7uxHFpYMgmCYBpxV5D2winaaraM8eD57VlpSuWXcqkahk8exIxo0mvoiZixEd7BVEc30UjFcVBCuOJpkVllMbDAWT6LFzb7D9jjrnm60LLhxeUo8L9CbEVbEkdnq_QcRQ0SFy60yLIbzTB9WX44fqnntxSe'

export default function Navbar({ variant = 'home', showSearch = false }) {
  const navLinkClass = ({ isActive }) =>
    `font-body-md text-body-md transition-colors ${
      isActive
        ? 'text-primary font-bold border-b-2 border-primary pb-1'
        : 'text-on-surface-variant hover:text-primary'
    }`

  return (
    <nav className="bg-surface border-b-2 border-on-surface-variant sticky top-0 z-50 h-20 w-full shadow-[4px_4px_0px_0px_rgba(118,0,49,1)]">
      <div className="flex justify-between items-center px-container-margin h-full w-full max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-base">
          {variant === 'home' && (
            <img alt="ThriftVibe Logo" className="h-10 w-auto" src={LOGO_URL} />
          )}
          <span className="font-headline-lg text-headline-lg font-black text-primary">
            ThriftVibe
          </span>
        </Link>

        <div className="hidden md:flex gap-gutter items-center">
          <NavLink to="/products" className={navLinkClass}>
            Shop
          </NavLink>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
            href="#about"
          >
            About
          </a>
          <a
            className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors"
            href="#earth-friendly"
          >
            Earth-Friendly
          </a>
        </div>

        <div className="flex items-center gap-gutter">
          {showSearch ? (
            <div className="hidden md:flex items-center bg-surface-container px-4 py-2 border-2 border-on-surface-variant">
              <span className="material-symbols-outlined text-on-surface-variant mr-2">
                search
              </span>
              <input
                className="bg-transparent border-none focus:ring-0 text-body-md outline-none"
                placeholder="Cari vibe kamu..."
                type="text"
              />
            </div>
          ) : (
            <div className="hidden md:block">
              <span className="material-symbols-outlined text-primary cursor-pointer hover:scale-110 transition-transform">
                search
              </span>
            </div>
          )}
          <button
            type="button"
            className="flex items-center justify-center p-2 rounded-lg text-primary hover:bg-primary-fixed transition-all"
          >
            <span className="material-symbols-outlined">shopping_cart</span>
          </button>
          <button type="button" className="md:hidden">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  )
}
