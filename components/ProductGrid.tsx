'use client'

import Image from 'next/image'

const allProducts = [
  { name: 'Dry Red Chilies', caption: 'Premium dried chilies for global markets', image: '/images/spices.jpg', category: 'Spices' },
  { name: 'Chilli Powder', caption: 'Finely ground, vibrant red chilli powder', image: '/images/hero-spices.jpg', category: 'Spices' },
  { name: 'Turmeric Rhizomes', caption: 'High-curcumin turmeric rhizomes', image: '/images/export-spices-banner.png', category: 'Spices' },
  { name: 'Turmeric Powder', caption: 'Golden turmeric powder, lab-tested', image: '/images/banner-spices-export.png', category: 'Spices' },
  { name: 'Black Pepper', caption: 'Bold, aromatic black peppercorns', image: '/images/spices.jpg', category: 'Spices' },
  { name: 'Cardamom', caption: 'Fragrant green cardamom pods', image: '/images/hero-spices.jpg', category: 'Spices' },
  { name: 'Cinnamon', caption: 'Premium cinnamon sticks and quills', image: '/images/export-spices-banner.png', category: 'Spices' },
  { name: 'Cocoa Beans', caption: 'Export-grade fermented cocoa beans', image: '/images/export-bulk-spices.png', category: 'Cocoa' },
  { name: 'Onions', caption: 'Fresh red and white onions', image: '/images/vegetables.jpg', category: 'Vegetables' },
  { name: 'Green Chilies', caption: 'Farm-fresh spicy green chilies', image: '/images/hero-vegetables.jpg', category: 'Vegetables' },
  { name: 'Ragi (Finger Millet)', caption: 'Nutritious ragi for health markets', image: '/images/banner-spices-export.png', category: 'Grains' },
  { name: 'Bajra (Pearl Millet)', caption: 'Wholesome pearl millet grains', image: '/images/export-bulk-spices.png', category: 'Grains' },
  { name: 'Jowar (Sorghum)', caption: 'Gluten-free sorghum grains', image: '/images/export-spices-banner.png', category: 'Grains' },
]

const tileHeights = [260, 300, 240, 280, 260, 320, 240, 300, 260, 280, 240, 260, 300]

interface ProductGridProps {
  onProductClick?: (productName: string) => void
  filter?: string
}

export default function ProductGrid({ onProductClick, filter }: ProductGridProps) {
  const filtered = filter && filter !== 'All'
    ? allProducts.filter(p => p.category === filter)
    : allProducts

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
      {filtered.map((product, index) => {
        const height = tileHeights[index % tileHeights.length]
        return (
          <div
            key={product.name}
            className="break-inside-avoid group cursor-pointer"
            onClick={() => onProductClick?.(product.name)}
          >
            <div
              className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-border-light hover:border-primary/20"
              style={{ height: `${height}px` }}
            >
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block px-2 py-0.5 text-[9px] font-bold tracking-wider uppercase bg-primary/90 text-white rounded mb-2">
                  {product.category}
                </span>
                <h3 className="text-white font-semibold text-sm leading-tight mb-0.5">{product.name}</h3>
                <p className="text-white/70 text-xs">{product.caption}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export { allProducts }
