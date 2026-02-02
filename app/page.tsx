import Image from 'next/image'
import Section from '@/components/Section'
import Button from '@/components/Button'
import Card from '@/components/Card'
import { Sprout, Settings, ShieldCheck, Package, Globe } from 'lucide-react'

const credibilityItems = [
  'ISO/BRC/FSSC Certified',
  'Exporting to 50+ Countries',
  'State-of-the-Art Facilities',
  '100+ MT Capacity',
]

const products = [
  {
    title: 'Spices',
    description: 'Premium whole and ground spices sourced from the finest farms across India.',
    image: '/images/spices.jpg',
    href: '/products/spices',
    tag: 'Export Grade',
  },
  {
    title: 'Oleoresins',
    description: 'Natural extracts with concentrated flavor and color for food industries.',
    image: '/images/oleoresins-new.png',
    href: '/products/oleoresins',
    tag: 'Premium Extract',
  },
  {
    title: 'Vegetables',
    description: 'Dehydrated and fresh vegetables meeting international quality standards.',
    image: '/images/vegetables.jpg',
    href: '/products/vegetables',
    tag: 'Export Grade',
  },
]

const strengths = [
  { title: 'Global Compliance', desc: 'Meeting FDA, EU, and international regulatory standards.' },
  { title: 'Quality Assurance', desc: 'Rigorous testing at every stage of production.' },
  { title: 'Full Traceability', desc: 'Complete supply chain transparency from farm to port.' },
  { title: 'Customized Packaging', desc: 'Flexible packaging solutions for diverse market needs.' },
]

const processSteps = [
  { step: 1, title: 'Sourcing', desc: 'Careful selection from certified farms.', color: '#6F8F72', icon: Sprout },
  { step: 2, title: 'Processing', desc: 'State-of-the-art cleaning and sorting.', color: '#4F8FA8', icon: Settings },
  { step: 3, title: 'Testing', desc: 'Comprehensive quality testing.', color: '#C8A24A', icon: ShieldCheck },
  { step: 4, title: 'Packaging', desc: 'Hygienic controlled environments.', color: '#7A7FA8', icon: Package },
  { step: 5, title: 'Logistics', desc: 'Efficient global delivery.', color: '#5C7C99', icon: Globe },
]

const certifications = [
  { name: 'ISO 22000', desc: 'Food Safety Management System' },
  { name: 'BRCGS', desc: 'Global Food Safety Standard' },
  { name: 'FSSC 22000', desc: 'Food Safety System Certification' },
  { name: 'HALAL', desc: 'Halal Certified Products' },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-10 md:pt-24 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 hero-spotlight pointer-events-none" />
        <div className="container-main relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            {/* Left: Content */}
            <div className="order-1">
              <h1 className="font-playfair text-3xl md:text-4xl lg:text-[3.5rem] text-off-white leading-[1.15] mb-4">
                Premium Agri-Exports with Global Compliance
              </h1>
              <div className="w-16 md:w-20 h-0.5 bg-gradient-to-r from-gold-accent to-transparent mb-5 md:mb-6" />
              <p className="text-base md:text-lg text-muted-text mb-6 md:mb-8 leading-relaxed max-w-lg">
                Your trusted partner for high-quality spices, oleoresins, and vegetables. Complete traceability and international certifications guaranteed.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button href="/products" variant="primary" size="lg">View Products</Button>
                <Button href="/contact" variant="secondary" size="lg">Request Quote</Button>
              </div>
            </div>

            {/* Right: Premium Visual Panel */}
            <div className="relative h-[280px] sm:h-[340px] lg:h-[460px] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10 order-2 mt-6 lg:mt-0">
              <Image
                src="/images/hero-spices-vegetables.png"
                alt="Premium spices and fresh vegetables for global export"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/70 via-navy-primary/20 to-transparent" />
              {/* Trust Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5">
                <p className="text-[10px] lg:text-xs text-off-white/80 tracking-wide text-center">
                  ISO 22000 · BRCGS · FSSC 22000 · HALAL · Global Exports
                </p>
              </div>
            </div>
          </div>

          {/* Credibility Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8 md:pt-10 mt-6 border-t border-white/10">
            {credibilityItems.map((item) => (
              <div key={item} className="text-center">
                <p className="text-xs md:text-sm text-muted-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Transition Banner - Premium Export Spices */}
      <section className="py-6">
        <div className="container-main">
          <div className="h-px bg-gradient-to-r from-transparent via-gold-accent/40 to-transparent mb-6" />
        </div>
        <div className="relative w-full h-[160px] md:h-[200px]">
          <Image
            src="/images/export-spices-banner.png"
            alt="Bulk export spices in wooden bowls"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-primary/50 via-transparent to-warm-ivory/80" />
        </div>
      </section>

      {/* Products Section - Warm Ivory Background */}
      <section className="py-12 md:py-16 bg-warm-ivory">
        <div className="container-main">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-navy-primary mb-3">Our Products</h2>
            <p className="text-sm md:text-base text-navy-primary/70 max-w-2xl mx-auto px-4 md:px-0">
              Explore our range of premium export-quality products sourced and processed to meet the highest international standards.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {products.map((product, index) => (
              <div key={product.title} className={`${index === 2 ? 'sm:col-span-2 sm:max-w-[50%] sm:mx-auto md:col-span-1 md:max-w-none' : ''}`}>
                <Card
                  title={product.title}
                  description={product.description}
                  imageSrc={product.image}
                  imageAlt={product.title}
                  href={product.href}
                  buttonText="View Products"
                  tag={product.tag}
                  variant="dark"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="bg-warm-ivory py-4">
        <div className="container-main">
          <div className="h-px bg-gradient-to-r from-transparent via-gold-accent/50 to-transparent" />
        </div>
      </div>

      {/* Why Choose MSE */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-off-white mb-3 md:mb-4">Why Choose MSE</h2>
            <p className="text-sm md:text-base text-muted-text px-4 md:px-0">Trusted by global importers for quality, compliance, and reliability.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {strengths.map((item) => (
              <div key={item.title} className="slate-panel p-5 md:p-6 hover:border-gold-accent/30 transition-all duration-200">
                <div className="flex gap-3 md:gap-4">
                  <span className="w-2 h-2 mt-1.5 md:mt-2 bg-gold-accent rounded-full flex-shrink-0" />
                  <div>
                    <h4 className="text-off-white font-medium mb-1 md:mb-2 text-sm md:text-base">{item.title}</h4>
                    <p className="text-xs md:text-sm text-muted-text leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Gold Divider */}
      <div className="py-4">
        <div className="container-main">
          <div className="h-px bg-gradient-to-r from-transparent via-gold-accent/30 to-transparent" />
        </div>
      </div>

      {/* Quality Assurance Process - Slate Panel */}
      <section className="py-16 bg-navy-slate">
        <div className="container-main">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left: QA Image Card */}
            <div className="lg:col-span-2">
              <div className="slate-panel overflow-hidden">
                <div className="relative h-[280px]">
                  <Image
                    src="/images/quality-lab.png"
                    alt="Quality testing laboratory"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
                <div className="p-5">
                  <h4 className="font-playfair text-lg text-off-white mb-2">Quality Lab</h4>
                  <p className="text-sm text-muted-text">State-of-the-art testing facilities ensuring every batch meets global standards.</p>
                </div>
              </div>
            </div>
            
            {/* Right: Content + Process Panel */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="font-playfair text-3xl md:text-4xl text-off-white mb-3">Quality Assurance Process</h2>
                <p className="text-muted-text max-w-xl">
                  Our comprehensive quality control ensures every product meets international export standards.
                </p>
              </div>
              
              {/* Process Panel */}
              <div className="slate-panel p-6 md:p-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
                  {processSteps.map((step) => {
                    const IconComponent = step.icon
                    return (
                      <div key={step.step} className="text-center">
                        <div 
                          className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 rounded-full flex flex-col items-center justify-center"
                          style={{ 
                            border: `2px solid ${step.color}`,
                            backgroundColor: `${step.color}12`
                          }}
                        >
                          <IconComponent size={22} strokeWidth={1.5} style={{ color: step.color }} />
                          <span className="text-[9px] text-off-white/50 mt-0.5">{step.step}</span>
                        </div>
                        <h4 className="text-off-white font-medium text-xs md:text-sm mb-1">{step.title}</h4>
                        <p className="text-[10px] md:text-[11px] text-muted-text leading-tight hidden sm:block">{step.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications - Warm Ivory Background */}
      <section className="py-12 md:py-16 bg-warm-ivory">
        <div className="container-main">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-navy-primary mb-3">Certifications</h2>
            <p className="text-sm md:text-base text-navy-primary/70 max-w-2xl mx-auto px-4 md:px-0">
              Our certifications reflect our commitment to quality, safety, and compliance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex flex-col h-full bg-navy-primary border border-navy-primary/20 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-200">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-[9px] uppercase tracking-wider text-gold-accent border border-gold-accent/40 rounded-full bg-gold-accent/10">
                    Certified
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-playfair text-lg text-off-white mb-2">{cert.name}</h4>
                  <p className="text-xs text-muted-text mb-5 leading-relaxed">{cert.desc}</p>
                </div>
                <div className="mt-auto">
                  <button className="w-full py-2.5 px-4 text-sm text-off-white bg-white/[0.06] border border-gold-accent/50 rounded-lg hover:bg-white/[0.10] hover:border-gold-accent/70 transition-all duration-200">
                    View Certificate
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* FSSAI Note */}
          <p className="text-center text-navy-primary/60 text-sm mt-8">
            Also certified by FSSAI (Food Safety and Standards Authority of India)
          </p>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="bg-warm-ivory py-4">
        <div className="container-main">
          <div className="h-px bg-gradient-to-r from-transparent via-gold-accent/50 to-transparent" />
        </div>
      </div>

      {/* CTA Band */}
      <section className="py-12 md:py-[4.5rem] bg-gradient-to-b from-navy-primary via-navy-alt to-navy-primary border-y border-gold-accent/15">
        <div className="container-main text-center px-4 md:px-6">
          <div className="w-12 md:w-16 h-0.5 bg-gold-accent mx-auto mb-5 md:mb-6" />
          <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl text-off-white mb-5 leading-snug">
            Partner with a trusted exporter for your agri-product needs.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button href="/contact" variant="primary" size="lg">Request a Quote</Button>
            <Button href="/products" variant="secondary" size="lg">Download Catalogue</Button>
          </div>
        </div>
      </section>
    </>
  )
}
