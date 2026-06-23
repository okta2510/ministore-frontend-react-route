import { Link } from 'react-router-dom'
import { products, formatPrice } from '../data/products'

const featuredProducts = products.slice(0, 3)

const categories = [
  {
    title: 'Retro 90s',
    subtitle: 'Bold, Loud, and Iconic.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB1uGaoUMu_iNP3smAAJu9e2LcwvQmCS7LGnW7ODbjpn9w-ZiPPPkNkJeFQrXU5MOcO16NdTLm_9QTu_I3lMngfAA4sQpCYO2enPVqYD3A58u2oagR6lrAk93iOPWNDhHGEuLTYtWQH0kPSRdPqvgKt9a8SZERSrK0ixq8O6Maxqt1SJ0Y0EbInKMdNgZpDnQxyI6_DSYLi_Ps07SqByYMSO7duOSW4-v4Cw4ZKXWm5J-znV3kodNwBFeTCryQ9XaakRRZSWJKwA-kj',
    className: 'md:col-span-2 md:row-span-2',
    titleSize: 'font-headline-xl text-headline-lg',
  },
  {
    title: 'Y2K Chic',
    subtitle: 'Glitter, Metallics, and Fun.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAaS6osR0O_PQiXJxq8z4XuDNraGt9P3qfd06bIB_3D3sn_plEhI7N4ZYIes49D1hhZ_EAtkX4NdqU-cqdIkAABGgv81tta5LyzndfTvL02q3kjL04a-nGN23bgWYQ4cx_8LWmkWhDWUyrJ7f9z5YLT3i-XOGYtGynxMf37Lm2LxdTSfER4mRGeojcoUVruuarN7VL03YZiGWR1mozdwTpQ60k1IfUZP2BGwkCBp30HFZYBDWHDhpSATu2CHdj3ACOo1OLEnDhxJh7R',
    className: 'md:col-span-2',
    titleSize: 'font-headline-lg text-headline-lg',
  },
  {
    title: 'Earthy Tones',
    subtitle: 'Neutral, Natural, and Calm.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBp8iWgI08EpC4ctH69J38IpT02dY2Sb-Oq1klI0eGyjEzkEaK02vLTKnDOPOXCKPk-ZTngHo1mIixtAqjFLzWrDy1m9apZn2OWj722PxzfAGUplGLwzgSw92sR-Nl3JYOguy7GlpdvkkaXvAAdzwOTS8Vnz_3FANwuqprX8DLQ7brXHAh9okIApiTJZM7GOCx1tHHFYRycmH3TXVWEg1JA9qYC4zDo-VK0btvu1HNSkEWcYWFfOND9B0okuuhJ-QSFTMTJ4XPwCYzI',
    className: 'md:col-span-2',
    titleSize: 'font-headline-lg text-headline-lg',
  },
]

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[819px] flex items-center overflow-hidden py-section-gap">
        <div className="container mx-auto px-container-margin grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col gap-stack-lg">
            <h1 className="font-headline-xl text-headline-xl text-primary leading-tight">
              Temukan{' '}
              <span className="bg-sun-yellow px-2 hard-shadow-black inline-block -rotate-1">
                Vibe-mu
              </span>
              ,<br />
              Jemput <span className="text-blush-base">Gaya-mu.</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
              Bosan dengan fast-fashion yang itu-itu aja? Saatnya beralih ke koleksi
              pre-loved pilihan yang bikin gaya makin unik dan bumi makin sehat.
            </p>
            <div className="mt-stack-lg flex flex-wrap gap-gutter">
              <Link
                to="/products"
                className="bg-vibe-red text-white font-label-bold py-4 px-8 rounded-lg hard-shadow-black btn-active transition-all text-lg hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none"
              >
                Mulai Berburu
              </Link>
              <Link
                to="/products"
                className="bg-white border-2 border-on-surface text-on-surface font-label-bold py-4 px-8 rounded-lg hover:bg-surface-container transition-all text-lg"
              >
                Lihat Katalog
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-sun-yellow rounded-full -z-10 animate-pulse" />
            <div className="relative border-4 border-on-surface rounded-xl overflow-hidden hard-shadow-black bg-white aspect-[4/5]">
              <img
                alt="Hero Model"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDshbHXFqcXOk9r4VEbx9zcyHbHVrw1kMXFK8LAka9gFUNQZQRqEGWDVK8jeVkUfEy7HFoH8XlQx_09sphT00p2OXnm9LM-1y9r6nH5LeW65FCkVT0jg7UoBqJUxccfN4F-xjA9wOpBke3Fg31oTqF4kX-o_vwhwKf18gyHvjhiM_X6LxBGD7yp_HpMH_UoBmNyoEzI9EbyQ3uhf0k6xEYygNsjvpbtgQmncLqokzKOFkAJQTR14wAZfgrBwn_O-D1RKDsNbpTQraIw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-blush-base text-white p-4 hard-shadow-black rounded-lg transform rotate-3">
              <p className="font-headline-lg text-headline-lg">70% OFF</p>
              <p className="font-label-bold">Vintage Picks</p>
            </div>
          </div>
        </div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary-fixed-dim rounded-full blur-[100px] opacity-20" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-fixed-dim rounded-full blur-[120px] opacity-20" />
      </section>

      <section
        id="earth-friendly"
        className="bg-primary-container text-white py-section-gap relative overflow-hidden"
      >
        <div className="container mx-auto px-container-margin relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-white p-2 rounded-xl hard-shadow-black rotate-[-2deg] max-w-sm">
                <img
                  alt="Eco Life"
                  className="rounded-lg w-full aspect-square object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXXqB4rYLIOoxzffKn61uXBdzWfJBzRsvfVsk7w_xWKvq8wLAj_mm5YIaJcTBZwPLD3S02yEpEStP5QyLVSW8JDiB8JE7XurA7fDstXdFClW9cCtRVmObMmH-m9aamueXyuoCjUzjU8w-Irphvf5v-93zXLqI9DFae2uWqO0anULx9pqJ__RdNsZbUnz9zKad7VV9bDoUd9KsvOcpFFHTIjaPFProYUk5i2w20Kv4TTV23QD6FUtviPFvaP8H2lw-022H5m9ORwId0"
                />
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col gap-stack-md">
              <span className="bg-sun-yellow text-on-secondary-fixed px-3 py-1 rounded-full font-label-bold w-fit">
                ECO-CONSCIOUS ACTION
              </span>
              <h2 className="font-headline-xl text-headline-lg-mobile md:text-headline-xl">
                Keren buat gaya,
                <br />
                baik buat bumi.
              </h2>
              <p className="font-body-lg text-body-lg opacity-90 max-w-xl">
                Setiap potong baju pre-loved yang kamu pilih membantu mengurangi
                sampah tekstil dan menghemat ribuan liter air. Bergaya nggak harus
                ngerusak lingkungan, kan?
              </p>
              <div className="flex gap-stack-lg mt-base">
                <div className="flex flex-col">
                  <span className="text-3xl font-black">2.5k+</span>
                  <span className="font-label-bold opacity-70">Baju Terselamatkan</span>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div className="flex flex-col">
                  <span className="text-3xl font-black">1.2M+</span>
                  <span className="font-label-bold opacity-70">Liter Air Dihemat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-gap bg-surface-container-low">
        <div className="container mx-auto px-container-margin">
          <div className="flex justify-between items-end mb-stack-lg">
            <h2 className="font-headline-lg text-headline-lg text-eco-maroon">
              Cari Berdasarkan Vibe
            </h2>
            <Link to="/products" className="text-primary font-label-bold hover:underline">
              Lihat Semua Vibe →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-gutter h-auto md:h-[600px]">
            {categories.map((cat) => (
              <Link
                key={cat.title}
                to="/products"
                className={`group relative overflow-hidden rounded-xl border-2 border-on-surface hard-shadow-black transition-all cursor-pointer ${cat.className}`}
              >
                <img
                  alt={cat.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src={cat.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className={cat.titleSize}>{cat.title}</h3>
                  <p className="font-body-md opacity-80">{cat.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-gap">
        <div className="container mx-auto px-container-margin">
          <div className="flex flex-col md:flex-row justify-between items-center mb-section-gap gap-stack-md">
            <div className="text-center md:text-left">
              <h2 className="font-headline-xl text-primary mb-stack-sm">
                Hot Drop Pekan Ini
              </h2>
              <p className="font-body-lg text-on-surface-variant">
                Kurasi terbaik pilihan stylist kami, khusus buat kamu.
              </p>
            </div>
            <Link
              to="/products"
              className="border-2 border-primary text-primary font-label-bold py-3 px-6 rounded-lg hover:bg-primary hover:text-white transition-all flex items-center gap-2"
            >
              Jelajahi Produk{' '}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredProducts.map((product, index) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className={`group flex flex-col gap-stack-md ${index === 1 ? 'md:mt-8' : ''}`}
              >
                <div className="relative bg-white border-2 border-on-surface rounded-xl overflow-hidden hard-shadow-black transition-all duration-300 vibe-card-hover aspect-square">
                  <img
                    alt={product.name}
                    className="w-full h-full object-cover"
                    src={product.image}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-sun-yellow text-on-surface font-label-bold px-3 py-1 rounded-full text-sm shadow-sm border border-on-surface">
                      {product.badge}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-1">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-earth-moss/10 text-earth-moss px-2 py-0.5 rounded text-xs font-bold uppercase">
                      {product.ecoTag}
                    </span>
                  </div>
                  <p className="font-headline-lg text-blush-base">
                    {formatPrice(product.price)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-section-gap px-container-margin">
        <div className="max-w-4xl mx-auto bg-sun-yellow p-12 rounded-2xl border-4 border-on-surface hard-shadow-black flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-headline-xl text-on-surface mb-stack-md">
              Gabung Vibe-Squad!
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-stack-lg">
              Dapatkan info drop produk terbaru dan tips styling ramah lingkungan
              langsung di inbox-mu.
            </p>
            <div className="flex flex-col sm:flex-row gap-stack-sm">
              <input
                className="flex-1 p-4 rounded-lg border-2 border-on-surface focus:ring-primary focus:border-primary"
                placeholder="Email kamu di sini..."
                type="email"
              />
              <button
                type="button"
                className="bg-primary text-white font-label-bold py-4 px-8 rounded-lg hard-shadow-black btn-active"
              >
                JOIN NOW
              </button>
            </div>
          </div>
          <div className="w-32 h-32 md:w-48 md:h-48 relative flex-shrink-0 animate-bounce">
            <span
              className="material-symbols-outlined text-[100px] md:text-[150px] text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              eco
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
