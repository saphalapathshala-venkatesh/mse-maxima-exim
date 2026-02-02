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
  },
  {
    title: 'Oleoresins',
    description: 'Natural extracts with concentrated flavor and color for food industries.',
    image: '/images/oleoresins.jpg',
    href: '/products/oleoresins',
  },
  {
    title: 'Vegetables',
    description: 'Dehydrated and fresh vegetables meeting international quality standards.',
    image: '/images/vegetables.jpg',
    href: '/products/vegetables',
  },
]

const strengths = [
  { title: 'Global Compliance', desc: 'Meeting FDA, EU, and international regulatory standards.' },
  { title: 'Quality Assurance', desc: 'Rigorous testing at every stage of production.' },
  { title: 'Full Traceability', desc: 'Complete supply chain transparency from farm to port.' },
  { title: 'Customized Packaging', desc: 'Flexible packaging solutions for diverse market needs.' },
]

const processSteps = [
  { step: 1, title: 'Sourcing', desc: 'Careful selection from certified farms and suppliers.', color: '#6F8F72', icon: Sprout },
  { step: 2, title: 'Processing', desc: 'State-of-the-art cleaning, sorting, and processing.', color: '#4F8FA8', icon: Settings },
  { step: 3, title: 'Testing', desc: 'Comprehensive quality and safety testing.', color: '#C8A24A', icon: ShieldCheck },
  { step: 4, title: 'Packaging', desc: 'Hygienic packaging in controlled environments.', color: '#7A7FA8', icon: Package },
  { step: 5, title: 'Global Logistics', desc: 'Efficient delivery to destinations worldwide.', color: '#5C7C99', icon: Globe },
]

const certifications = [
  { name: 'ISO 22000', desc: 'Food Safety Management System' },
  { name: 'BRCGS', desc: 'Global Food Safety Standard' },
  { name: 'FSSC 22000', desc: 'Food Safety System Certification' },
  { name: 'HALAL', desc: 'Halal Certified Products' },
  { name: 'FSSAI', desc: 'Food Safety and Standards Authority of India' },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-20">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-off-white leading-tight mb-6">
                Premium Agri-Exports with Global Compliance
              </h1>
              <p className="text-lg text-muted-text mb-8 leading-relaxed max-w-lg">
                Your trusted partner for high-quality spices, oleoresins, and vegetables. Complete traceability and international certifications guaranteed.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/products" variant="primary" size="lg">View Products</Button>
                <Button href="/contact" variant="secondary" size="lg">Request Quote</Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/images/hero-spices.jpg"
                alt="Premium spices and vegetables display"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-primary/40 to-transparent" />
            </div>
          </div>

          {/* Credibility Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-8 border-t border-card-border">
            {credibilityItems.map((item) => (
              <div key={item} className="text-center">
                <p className="text-sm text-muted-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Transition Image */}
      <section className="py-10">
        <div className="relative w-full h-[200px] md:h-[280px]">
          <Image
            src="/images/hero-transition.png"
            alt="Premium spices and vegetables"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-primary via-transparent to-navy-primary" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(11,27,51,0.8)_100%)]" />
        </div>
      </section>

      {/* Products Section */}
      <Section className="bg-[#0F2847]">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl text-off-white mb-4">Our Products</h2>
          <p className="text-muted-text max-w-2xl mx-auto">
            Explore our range of premium export-quality products sourced and processed to meet the highest international standards.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.title}
              title={product.title}
              description={product.description}
              imageSrc={product.image}
              imageAlt={product.title}
              href={product.href}
              buttonText="View Products"
            />
          ))}
        </div>
      </Section>

      {/* Why Choose MSE */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-3xl md:text-4xl text-off-white mb-8">Why Choose MSE</h2>
            <ul className="space-y-6">
              {strengths.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="w-2 h-2 mt-2 bg-gold-accent rounded-full flex-shrink-0" />
                  <div>
                    <h4 className="text-off-white font-medium mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-text">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/images/facility.jpg"
              alt="MSE processing facility"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      {/* Quality Assurance Process */}
      <Section className="bg-[#0F2847]">
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: QA Image */}
          <div className="lg:col-span-2 relative h-[300px] lg:h-full min-h-[400px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/quality-lab.png"
              alt="Quality testing laboratory"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0F2847]/40" />
          </div>
          
          {/* Right: Content */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h2 className="font-playfair text-3xl md:text-4xl text-off-white mb-4">Quality Assurance Process</h2>
              <p className="text-muted-text max-w-xl">
                Our comprehensive quality control ensures every product meets international export standards.
              </p>
            </div>
            
            {/* Process Panel */}
            <div className="bg-[#162D4A] rounded-2xl p-8 shadow-[inset_0_2px_4px_rgba(0,0,0,0.2)]">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                {processSteps.map((step) => {
                  const IconComponent = step.icon
                  return (
                    <div key={step.step} className="text-center">
                      <div 
                        className="w-16 h-16 md:w-18 md:h-18 mx-auto mb-3 rounded-full flex flex-col items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.2)]"
                        style={{ 
                          border: `2px solid ${step.color}`,
                          backgroundColor: `${step.color}15`
                        }}
                      >
                        <IconComponent size={24} strokeWidth={1.5} style={{ color: step.color }} />
                        <span className="text-[9px] text-off-white/50 mt-0.5">{step.step}</span>
                      </div>
                      <h4 className="text-off-white font-medium text-sm mb-1">{step.title}</h4>
                      <p className="text-[11px] text-muted-text leading-tight">{step.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl text-off-white mb-4">Certifications</h2>
          <p className="text-muted-text max-w-2xl mx-auto">
            Our certifications reflect our commitment to quality, safety, and compliance.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex flex-col h-full bg-white/[0.06] border border-white/[0.12] rounded-xl p-6 text-center hover:border-gold-accent/30 hover:shadow-lg transition-all duration-200">
              <div className="flex-1">
                <h4 className="font-playfair text-lg text-off-white mb-2">{cert.name}</h4>
                <p className="text-xs text-muted-text mb-5">{cert.desc}</p>
              </div>
              <div className="mt-auto">
                <button className="w-full py-2.5 px-4 text-sm text-off-white bg-navy-primary/60 border border-gold-accent/40 rounded-lg hover:bg-navy-primary/80 hover:border-gold-accent/60 transition-all duration-200">
                  View Certificate
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Band */}
      <section className="py-20 bg-gradient-to-b from-navy-primary to-[#081422] border-y border-gold-accent/20">
        <div className="container-main text-center">
          <div className="w-20 h-0.5 bg-gold-accent mx-auto mb-8" />
          <h2 className="font-playfair text-2xl md:text-3xl text-off-white mb-6">
            Partner with a trusted exporter for your agri-product needs.
          </h2>
          <Button href="/contact" variant="primary" size="lg">Request a Quote</Button>
        </div>
      </section>
    </>
  )
}
