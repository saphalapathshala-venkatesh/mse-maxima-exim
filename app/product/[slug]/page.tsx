'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import Button from '@/components/Button'
import { getProductBySlug, getProductsByCategory } from '@/data/products'
import { ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react'

export default function ProductDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const product = getProductBySlug(slug)
  const [activeImage, setActiveImage] = useState(0)

  if (!product) {
    return (
      <div className="pt-[74px] bg-white min-h-screen">
        <div className="container-main py-20 text-center">
          <h1 className="font-playfair text-3xl text-text-main mb-4">Product Not Found</h1>
          <p className="text-text-muted mb-6">The product you are looking for does not exist.</p>
          <Button href="/" variant="primary" size="lg">Go Home</Button>
        </div>
      </div>
    )
  }

  const related = getProductsByCategory(product.category.toLowerCase()).filter(p => p.slug !== slug).slice(0, 3)

  const categorySlug = product.category === 'Grains' ? 'grains' :
    product.category === 'Cocoa' ? 'cocoa' :
    product.category === 'Vegetables' ? 'vegetables' : 'spices'

  return (
    <div className="pt-[74px] bg-white min-h-screen">
      <div className="container-main py-6">
        <Link href={`/products/${categorySlug}`} className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors mb-6">
          <ArrowLeft size={16} />
          Back to {product.category}
        </Link>
      </div>

      <div className="container-main pb-14">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface border border-border-light mb-3">
              <Image
                src={product.gallery[activeImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {product.gallery.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImage((prev) => (prev - 1 + product.gallery.length) % product.gallery.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md transition-all"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => setActiveImage((prev) => (prev + 1) % product.gallery.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md transition-all"
                  >
                    <ChevronRight size={16} />
                  </button>
                </>
              )}
            </div>
            {product.gallery.length > 1 && (
              <div className="flex gap-2">
                {product.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      i === activeImage ? 'border-primary shadow-md' : 'border-border-light hover:border-primary/40'
                    }`}
                  >
                    <Image src={img} alt={`${product.name} ${i + 1}`} fill className="object-cover" sizes="80px" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-4">
              {product.category}
            </span>
            <h1 className="font-playfair text-3xl sm:text-4xl text-text-main mb-4">{product.name}</h1>
            <p className="text-text-muted leading-relaxed mb-6 text-sm sm:text-base">{product.description}</p>

            {product.specs.length > 0 && (
              <div className="mb-8">
                <h3 className="font-semibold text-text-main mb-3 text-sm uppercase tracking-wider">Specifications</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-sm text-text-muted bg-surface rounded-lg px-3 py-2.5">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3">
              <Button href={`/contact?product=${slug}`} variant="primary" size="lg">
                Contact About This Product
              </Button>
              <Button href={`/products/${categorySlug}`} variant="outline" size="lg">
                View All {product.category}
              </Button>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <div className="mt-16 pt-10 border-t border-border-light">
            <h2 className="font-playfair text-xl sm:text-2xl text-text-main mb-6">Related Products</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map((rel) => (
                <Link key={rel.slug} href={`/product/${rel.slug}`} className="group">
                  <div className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-border-light hover:border-primary/20 aspect-[4/3]">
                    <Image
                      src={rel.image}
                      alt={rel.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-sm">{rel.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
