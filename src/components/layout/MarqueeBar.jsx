const variants = {
  home: [
    '⚡ Terhemat 200L air per baju',
    '🌱 100% Eco-Conscious Packaging',
    '✨ Kurasi Vintage Terbaik',
  ],
  products:
    '✨ Sustainable Fashion is the Flex • Saved 200L of water this month • 100% Curated Secondhand Gems ✨',
  detail: [
    { icon: 'eco', text: '100% Pre-loved & Responsible' },
    { icon: 'water_drop', text: 'Saved 200L of water' },
    { icon: 'recycling', text: 'Circular Fashion Move' },
  ],
}

export default function MarqueeBar({ variant = 'home' }) {
  if (variant === 'products') {
    return (
      <div className="w-full bg-earth-moss py-2 text-center overflow-hidden whitespace-nowrap">
        <div className="inline-block animate-marquee font-label-bold text-label-bold text-white uppercase tracking-wider">
          {variants.products}
        </div>
      </div>
    )
  }

  if (variant === 'detail') {
    const items = [...variants.detail, ...variants.detail]
    return (
      <div className="bg-earth-moss w-full py-2 flex justify-center items-center overflow-hidden">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {items.map((item, i) => (
            <span
              key={i}
              className="text-white font-label-bold flex items-center gap-2"
            >
              <span
                className="material-symbols-outlined"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {item.icon}
              </span>
              {item.text}
            </span>
          ))}
        </div>
      </div>
    )
  }

  const items = [...variants.home, ...variants.home]
  return (
    <div className="bg-earth-moss text-surface w-full py-2 flex justify-center items-center gap-base overflow-hidden whitespace-nowrap">
      <div className="animate-marquee flex gap-12 items-center">
        {items.map((text, i) => (
          <span key={i} className="font-label-bold text-label-bold uppercase">
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
