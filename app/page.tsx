'use client'

import { useState } from 'react'
import Image from 'next/image'
import Button from '@/components/Button'
import { site } from '@/data/assets'
import ProductBanner from '@/components/ProductBanner'
import ProductGrid from '@/components/ProductGrid'
import QuoteModal from '@/components/QuoteModal'
import { Shield, Truck, FlaskConical, Globe } from 'lucide-react'

const trustPoints = [
  { icon: Shield, title: 'Traceability', desc: 'Complete supply chain transparency from farm to port.' },
  { icon: Globe, title: 'Export Standards', desc: 'Meeting FDA, EU, and international regulatory standards.' },
  { icon: FlaskConical, title: 'Quality Testing', desc: 'Rigorous lab testing at every stage of production.' },
  { icon: Truck, title: 'Global Logistics', desc: 'Efficient, reliable delivery to 50+ countries worldwide.' },
]

const credibilityItems = [
  { value: '50+', label: 'Countries Served' },
  { value: '100+ MT', label: 'Monthly Capacity' },
  { value: '13+', label: 'Product Lines' },
  { value: '4', label: 'Certifications' },
]

export default function Home() {
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState('')

  const openQuote = (productName: string) => {
    setQuoteProduct(productName)
    setQuoteOpen(true)
  }

  return (
    <>
      {/* Banner Carousel — immediately below header */}
      <div className="pt-[74px]">
        <ProductBanner onGetQuote={openQuote} />
      </div>

      {/* Credibility Strip */}
      <section className="py-8 sm:py-10 bg-surface">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {credibilityItems.map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-playfair text-2xl sm:text-3xl text-primary font-bold">{item.value}</p>
                <p className="text-xs sm:text-sm text-text-muted mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero / About Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-5">
                Trusted Global Exporter
              </span>
              <h1 className="font-playfair text-[clamp(2rem,5vw,3.25rem)] text-text-main leading-[1.15] mb-5">
                Premium Agri-Exports with Global Compliance
              </h1>
              <p className="text-base sm:text-lg text-text-muted mb-7 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Your trusted partner for high-quality spices, vegetables, grains and cocoa beans. Complete traceability and international certifications guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button href="/products" variant="secondary" size="lg">View Products</Button>
                <Button href="/contact" variant="primary" size="lg">Request Quote</Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[280px] sm:h-[340px] lg:h-[420px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={site.heroMain}
                  alt="Premium spices and fresh vegetables for global export"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="py-14 sm:py-20 bg-surface">
        <div className="container-main">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-saffron bg-saffron/10 rounded-full mb-3">
              Our Range
            </span>
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl text-text-main mb-3">All Products</h2>
            <p className="text-text-muted max-w-xl mx-auto text-sm sm:text-base">
              Click any product to get an instant quote with pricing and quantity options.
            </p>
          </div>
          <ProductGrid onProductClick={openQuote} />
        </div>
      </section>

      {/* Trust / Certifications Strip */}
      <section className="py-14 sm:py-16 bg-white">
        <div className="container-main">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-2xl sm:text-3xl text-text-main mb-3">Why Choose MSE</h2>
            <p className="text-text-muted max-w-xl mx-auto text-sm sm:text-base">
              Trusted by global importers for quality, compliance, and reliability.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustPoints.map((item) => {
              const IconComp = item.icon
              return (
                <div key={item.title} className="bg-surface rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-200 border border-border-light hover:border-primary/20 hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <IconComp size={22} className="text-primary" />
                  </div>
                  <h4 className="font-semibold text-text-main mb-2">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-14 sm:py-20 bg-primary">
        <div className="container-main text-center">
          <h2 className="font-playfair text-2xl sm:text-3xl text-white mb-4 leading-snug">
            Partner with a trusted exporter for your agri-product needs
          </h2>
          <p className="text-white/80 mb-7 max-w-xl mx-auto text-sm sm:text-base">
            Get competitive pricing, reliable supply, and full quality assurance for your import requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button href="/contact" variant="primary" size="lg">Request a Quote</Button>
            <button
              onClick={() => openQuote('')}
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white border-2 border-white/40 rounded-full hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              Quick Quote
            </button>
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        productName={quoteProduct}
      />
    </>
  )
}
