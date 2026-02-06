'use client'

import { useState } from 'react'
import ProductGrid from '@/components/ProductGrid'
import QuoteModal from '@/components/QuoteModal'
import Button from '@/components/Button'

const categories = ['All', 'Spices', 'Vegetables', 'Cocoa', 'Grains']

export default function ProductsPage() {
  const [filter, setFilter] = useState('All')
  const [quoteOpen, setQuoteOpen] = useState(false)
  const [quoteProduct, setQuoteProduct] = useState('')

  const openQuote = (productName: string) => {
    setQuoteProduct(productName)
    setQuoteOpen(true)
  }

  return (
    <>
      <div className="pt-[74px] bg-white min-h-screen">
        <div className="container-main py-10 sm:py-14">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-3">
              Our Range
            </span>
            <h1 className="font-playfair text-3xl sm:text-4xl text-text-main mb-3">All Products</h1>
            <p className="text-text-muted max-w-xl mx-auto text-sm sm:text-base">
              Browse our complete range of export-quality products. Click any product to request a quote.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat
                    ? 'bg-primary text-white shadow-sm'
                    : 'bg-surface text-text-main hover:bg-primary/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <ProductGrid onProductClick={openQuote} filter={filter} />

          <div className="mt-14 text-center bg-surface rounded-2xl p-8 sm:p-12">
            <h2 className="font-playfair text-xl sm:text-2xl text-text-main mb-3">Custom Requirements?</h2>
            <p className="text-text-muted max-w-xl mx-auto mb-6 text-sm sm:text-base">
              We offer customized solutions for specific product requirements, packaging needs, and volume specifications.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </div>

      <QuoteModal
        isOpen={quoteOpen}
        onClose={() => setQuoteOpen(false)}
        productName={quoteProduct}
      />
    </>
  )
}
