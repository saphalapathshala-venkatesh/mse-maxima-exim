'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Button from './Button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const banners = [
  {
    id: 1,
    title: 'Spices (Whole)',
    subtitle: 'Dry Red Chilies, Turmeric Rhizomes, Black Pepper, Cardamom, Cinnamon',
    description: 'Export-grade whole spices with complete traceability and compliance.',
    image: '/images/spices.jpg',
  },
  {
    id: 2,
    title: 'Spices (Powders)',
    subtitle: 'Chilli Powder, Turmeric Powder',
    description: 'Premium ground spices meeting international quality standards.',
    image: '/images/hero-spices.jpg',
  },
  {
    id: 3,
    title: 'Vegetables',
    subtitle: 'Onions, Green Chilies',
    description: 'Fresh and dehydrated vegetables for global markets.',
    image: '/images/vegetables.jpg',
  },
  {
    id: 4,
    title: 'Cocoa Beans',
    subtitle: 'Premium Cocoa Beans',
    description: 'High-quality cocoa beans sourced from certified farms.',
    image: '/images/export-bulk-spices.png',
  },
  {
    id: 5,
    title: 'Millets & Grains',
    subtitle: 'Ragi (Finger Millet), Bajra (Pearl Millet), Jowar (Sorghum)',
    description: 'Nutritious ancient grains for health-conscious markets.',
    image: '/images/banner-spices-export.png',
  },
]

export default function ProductBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % banners.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section 
      className="relative w-full bg-navy-primary"
      aria-roledescription="carousel"
      aria-label="Product showcase carousel"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] overflow-hidden">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${banners.length}: ${banner.title}`}
            aria-hidden={index !== currentIndex}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={banner.image}
              alt={banner.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-primary/90 via-navy-primary/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/80 via-transparent to-navy-primary/30" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="container-main">
                <div className="max-w-xl">
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider uppercase bg-accent-green/90 text-white rounded-full">
                    Export Quality
                  </span>
                  <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-white mb-3 leading-tight">
                    {banner.title}
                  </h2>
                  <p className="text-gold-accent font-medium mb-2 text-sm sm:text-base">
                    {banner.subtitle}
                  </p>
                  <p className="text-white/80 mb-6 text-sm sm:text-base leading-relaxed">
                    {banner.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button href="/products" variant="primary" size="md">
                      View Products
                    </Button>
                    <Button href="/contact" variant="secondary" size="md">
                      Request Quote
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2" role="tablist" aria-label="Slide navigation">
          {banners.map((banner, index) => (
            <button
              key={index}
              role="tab"
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-gold-accent w-8'
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to ${banner.title}`}
              aria-selected={index === currentIndex}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
