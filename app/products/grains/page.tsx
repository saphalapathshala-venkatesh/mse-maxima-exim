import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import ProductHero from '@/components/ProductHero'
import { categoryInfo, getProductsByCategory } from '@/data/products'

export default function GrainsPage() {
  const info = categoryInfo.grains
  const items = getProductsByCategory('grains')

  return (
    <div className="pt-[74px] bg-white">
      <ProductHero
        badge="NUTRIENT RICH EXPORTS"
        title="Millets & Grains"
        intro="Premium millets and grains sourced from reliable networks, processed for cleanliness, nutrition, and export-ready consistency."
        bullets={[
          'Naturally processed & cleaned',
          'Organic options available',
          'Bulk export packaging',
          'Lab tested quality',
          'Long shelf life assurance',
        ]}
        imageSrc={info.image}
        productSlug="millets-grains"
        whatsappText="Hello MSE, I am interested in Millets & Grains export. Please share product list, specs, MOQ and pricing."
      />

      <div className="container-main py-10 sm:py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {items.map((product) => (
            <Link key={product.slug} href={`/product/${product.slug}`} className="group">
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
                  <h3 className="text-white font-semibold text-sm leading-tight mb-0.5">{product.name}</h3>
                  <p className="text-white/70 text-xs line-clamp-1">{product.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center bg-surface rounded-2xl p-8 sm:p-12">
          <h2 className="font-playfair text-xl sm:text-2xl text-text-main mb-3">Health Food Markets Growing</h2>
          <p className="text-text-muted max-w-xl mx-auto mb-6 text-sm sm:text-base">
            Millets are the future of sustainable nutrition. Partner with us for reliable supply.
          </p>
          <Button href="/contact" variant="primary" size="lg">Get Quote</Button>
        </div>
      </div>
    </div>
  )
}
