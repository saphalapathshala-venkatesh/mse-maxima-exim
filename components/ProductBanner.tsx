'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const banners = [
  {
    id: 1,
    title: 'Spices (Whole)',
    subtitle: 'Dry Red Chilies • Turmeric • Black Pepper • Cardamom • Cinnamon',
    badge: 'EXPORT GRADE',
    image: '/images/banners/spices.jpg',
  },
  {
    id: 2,
    title: 'Spices (Powders)',
    subtitle: 'Chilli Powder • Turmeric Powder',
    badge: 'PREMIUM QUALITY',
    image: '/images/banners/hero-spices.jpg',
  },
  {
    id: 3,
    title: 'Vegetables (Fresh)',
    subtitle: 'Onions • Green Chilies',
    badge: 'FARM FRESH',
    image: '/images/banners/vegetables.jpg',
  },
  {
    id: 4,
    title: 'Cocoa Beans',
    subtitle: 'Premium Export Quality Cocoa',
    badge: 'CERTIFIED',
    image: '/images/banners/export-bulk-spices.png',
  },
  {
    id: 5,
    title: 'Millets & Grains',
    subtitle: 'Ragi • Bajra • Jowar',
    badge: 'ORGANIC',
    image: '/images/banners/banner-spices-export.png',
  },
]

interface ProductBannerProps {
  onGetQuote?: (productName: string) => void
}

export default function ProductBanner({ onGetQuote }: ProductBannerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % banners.length)
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, goToNext])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return
    const diff = touchStart - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      setIsAutoPlaying(false)
      if (diff > 0) goToNext()
      else goToPrevious()
    }
    setTouchStart(null)
  }

  return (
    <section
      className="relative w-full"
      aria-roledescription="carousel"
      aria-label="Product showcase carousel"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div
        className="relative h-[320px] sm:h-[400px] lg:h-[500px] overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${banners.length}: ${banner.title}`}
            aria-hidden={index !== currentIndex}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-105'
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-10">
              <div className="container-main">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 max-w-5xl">
                  <div>
                    <span className="inline-block px-3 py-1 mb-3 text-[10px] font-bold tracking-[0.15em] uppercase bg-primary text-white rounded-full">
                      {banner.badge}
                    </span>
                    <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl text-white mb-1.5 leading-tight">
                      {banner.title}
                    </h2>
                    <p className="text-white/80 text-sm sm:text-base">
                      {banner.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => onGetQuote?.(banner.title)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-saffron hover:bg-saffron-dark text-white font-semibold text-sm rounded-full transition-all shadow-lg hover:shadow-xl self-start sm:self-auto hover:-translate-y-0.5"
                  >
                    Get Quote
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={() => { setIsAutoPlaying(false); goToPrevious() }}
          className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-text-main shadow-md transition-all hover:scale-105"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => { setIsAutoPlaying(false); goToNext() }}
          className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-text-main shadow-md transition-all hover:scale-105"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-5 sm:bottom-8 lg:bottom-10 right-5 sm:right-8 lg:right-10 z-20 flex gap-2" role="tablist" aria-label="Slide navigation">
          {banners.map((banner, index) => (
            <button
              key={index}
              role="tab"
              onClick={() => { setIsAutoPlaying(false); setCurrentIndex(index) }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-saffron w-7'
                  : 'bg-white/60 hover:bg-white/80 w-2'
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
