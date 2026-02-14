import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import { categoryInfo, getProductsByCategory } from '@/data/products'

export default function GrainsPage() {
  const info = categoryInfo.grains
  const items = getProductsByCategory('grains')

  return (
    <div className="pt-[74px] bg-white">
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={info.image} alt={info.title} fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
        </div>
        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-saffron bg-saffron/20 rounded-full mb-4">Organic</span>
              <h1 className="font-playfair text-3xl sm:text-4xl text-white mb-3">{info.title}</h1>
              <p className="text-base text-white/80 max-w-2xl">{info.description}</p>
            </div>
            <div className="hidden lg:block relative w-[280px] xl:w-[340px] aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-2 border-white/20">
              <Image src={info.image} alt={info.title} fill className="object-cover" sizes="340px" />
            </div>
          </div>
        </div>
      </section>

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
