'use client'

import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import ProductBanner from '@/components/ProductBanner'
import { categories, site } from '@/data/assets'
import { categoryInfo } from '@/data/products'
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
  { value: '3', label: 'Certifications' },
]

const certList = [
  { name: 'FSSAI', logoSrc: '/images/certs/fssai.jpg' },
  { name: 'Spices Board', logoSrc: '/images/certs/spices-board.jpg' },
  { name: 'APEDA', logoSrc: '/images/certs/apeda.jpg' },
]

const categoryCards = [
  { key: 'spices' as const, ...categoryInfo.spices, image: categories.spices },
  { key: 'vegetables' as const, ...categoryInfo.vegetables, image: categories.vegetables },
  { key: 'cocoa' as const, ...categoryInfo.cocoa, image: categories.cocoa },
  { key: 'grains' as const, ...categoryInfo.grains, image: categories.grains },
]

export default function Home() {
  return (
    <>
      <div className="pt-[74px]">
        <ProductBanner />
      </div>

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

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-main">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-saffron bg-saffron/10 rounded-full mb-3">
              Our Range
            </span>
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl text-text-main mb-3">Product Categories</h2>
            <p className="text-text-muted max-w-xl mx-auto text-sm sm:text-base">
              Explore our diverse portfolio of premium export-quality agri-products.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categoryCards.map((cat) => (
              <Link key={cat.key} href={`/products/${cat.slug}`} className="group">
                <div className="relative overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-border-light hover:border-primary/20 aspect-[4/3]">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-white font-playfair text-lg font-semibold mb-1">{cat.title}</h3>
                    <p className="text-white/70 text-xs line-clamp-2">{cat.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16 bg-surface">
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
                <div key={item.title} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all duration-200 border border-border-light hover:border-primary/20 hover:-translate-y-1">
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

      <section className="py-16 sm:py-24 bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-left">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-4">
                Our Process
              </span>
              <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl text-text-main mb-4 leading-snug break-normal hyphens-none">
                From Source to Shipment:<br />Quality at every step
              </h2>
              <p className="text-text-muted leading-relaxed mb-8 text-sm sm:text-base break-normal hyphens-none">
                We follow a structured quality process to ensure consistency, compliance, and reliability for global buyers. Every product is traced from origin, tested in our in-house laboratory, and inspected before shipment.
              </p>
              <Button href="/quality" variant="secondary" size="lg">Explore Our Process</Button>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={site.qualityLab}
                alt="MSE Quality Laboratory"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-surface">
        <div className="container-main">
          <div className="text-center mb-8">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-3">
              Standards
            </span>
            <h2 className="font-playfair text-2xl sm:text-3xl text-text-main mb-3">Certifications</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl mx-auto">
            {certList.map((cert) => (
              <Link key={cert.name} href="/certifications" className="group bg-white rounded-2xl p-6 flex items-center justify-center border border-border-light hover:border-primary/30 hover:shadow-md transition-all duration-200">
                <img
                  src={cert.logoSrc}
                  alt={cert.name}
                  style={{ background: '#ffffff' }}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

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
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white border-2 border-white/40 rounded-full hover:bg-white/10 transition-all hover:-translate-y-0.5"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
