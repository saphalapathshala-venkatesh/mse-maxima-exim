'use client'

import Image from 'next/image'
import { products } from '@/data/assets'

const allProducts = [
  { name: 'Dry Red Chilies', caption: 'Premium dried chilies for global markets', image: products.dryRedChilli, category: 'Spices' },
  { name: 'Chilli Powder', caption: 'Finely ground, vibrant red chilli powder', image: products.chilliPowder, category: 'Spices' },
  { name: 'Turmeric Rhizomes', caption: 'High-curcumin turmeric rhizomes', image: products.turmericRhizomes, category: 'Spices' },
  { name: 'Turmeric Powder', caption: 'Golden turmeric powder, lab-tested', image: products.turmericPowder, category: 'Spices' },
  { name: 'Black Pepper', caption: 'Bold, aromatic black peppercorns', image: products.blackPepper, category: 'Spices' },
  { name: 'Cardamom', caption: 'Fragrant green cardamom pods', image: products.cardamom, category: 'Spices' },
  { name: 'Cinnamon', caption: 'Premium cinnamon sticks and quills', image: products.cinnamon, category: 'Spices' },
  { name: 'Cocoa Beans', caption: 'Export-grade fermented cocoa beans', image: products.cocoaBeans, category: 'Cocoa' },
  { name: 'Onions', caption: 'Fresh red and white onions', image: products.onions, category: 'Vegetables' },
  { name: 'Green Chilies', caption: 'Farm-fresh spicy green chilies', image: products.greenChillies, category: 'Vegetables' },
  { name: 'Ragi (Finger Millet)', caption: 'Nutritious ragi for health markets', image: products.ragi, category: 'Grains' },
  { name: 'Bajra (Pearl Millet)', caption: 'Wholesome pearl millet grains', image: products.bajra, category: 'Grains' },
  { name: 'Jowar (Sorghum)', caption: 'Gluten-free sorghum grains', image: products.jowar, category: 'Grains' },
]

interface ProductGridProps {
  onProductClick?: (productName: string) => void
  filter?: string
}

export default function ProductGrid({ onProductClick, filter }: ProductGridProps) {
  const filtered = filter && filter !== 'All'
    ? allProducts.filter(p => p.category === filter)
    : allProducts

  const showCta = filtered.length % 4 !== 0 || filtered.length % 3 !== 0

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {filtered.map((product) => (
        <div
          key={product.name}
          className="group cursor-pointer"
          onClick={() => onProductClick?.(product.name)}
        >
          <div className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-border-light hover:border-primary/20 aspect-[4/3]">
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
      ))}
      {showCta && (
        <div
          className="group cursor-pointer"
          onClick={() => onProductClick?.('')}
        >
          <div className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-gradient-to-br from-primary to-primary-dark border border-primary/20 aspect-[4/3] flex flex-col items-center justify-center text-center p-6">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            </div>
            <h3 className="text-white font-semibold text-sm mb-1">Custom Requirements?</h3>
            <p className="text-white/70 text-xs">Get a tailored quote for your specific needs</p>
          </div>
        </div>
      )}
    </div>
  )
}

export { allProducts }
