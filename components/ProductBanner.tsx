'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const banners = [
  {
    id: 1,
    title: 'Spices (Whole)',
    subtitle: 'Dry Red Chilies • Turmeric • Black Pepper • Cardamom • Cinnamon',
    image: '/images/spices.jpg',
  },
  {
    id: 2,
    title: 'Spices (Powders)',
    subtitle: 'Chilli Powder • Turmeric Powder',
    image: '/images/hero-spices.jpg',
  },
  {
    id: 3,
    title: 'Vegetables',
    subtitle: 'Onions • Green Chilies',
    image: '/images/vegetables.jpg',
  },
  {
    id: 4,
    title: 'Cocoa Beans',
    subtitle: 'Premium Export Quality',
    image: '/images/export-bulk-spices.png',
  },
  {
    id: 5,
    title: 'Millets & Grains',
    subtitle: 'Ragi • Bajra • Jowar',
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
      className="relative w-full"
      aria-roledescription="carousel"
      aria-label="Product showcase carousel"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="relative h-[350px] sm:h-[400px] lg:h-[480px] overflow-hidden">
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-12">
              <div className="container-main">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                  <div>
                    <span className="inline-block px-3 py-1 mb-3 text-[10px] font-medium tracking-wider uppercase bg-accent-green text-white rounded-full">
                      Export Quality
                    </span>
                    <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl text-white mb-2 leading-tight">
                      {banner.title}
                    </h2>
                    <p className="text-white/80 text-sm sm:text-base">
                      {banner.subtitle}
                    </p>
                  </div>
                  <Link 
                    href="/products"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-accent hover:bg-gold-accent/90 text-navy-primary font-medium text-sm rounded-lg transition-all shadow-lg hover:shadow-xl self-start sm:self-auto"
                  >
                    View Products
                    <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={goToPrevious}
          className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={22} />
        </button>

        <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 right-6 sm:right-8 lg:right-12 z-20 flex gap-2" role="tablist" aria-label="Slide navigation">
          {banners.map((banner, index) => (
            <button
              key={index}
              role="tab"
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-gold-accent w-6 sm:w-8'
                  : 'bg-white/50 hover:bg-white/70'
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
