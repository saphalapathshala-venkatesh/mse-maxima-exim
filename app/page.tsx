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
      <section className="min-h-screen pt-20 flex items-center">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center py-12">
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-12 border-t border-card-border">
            {credibilityItems.map((item) => (
              <div key={item} className="text-center">
                <p className="text-sm text-muted-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <Section>
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
      <Section className="bg-navy-alt/30">
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
      <Section>
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl text-off-white mb-4">Quality Assurance Process</h2>
          <p className="text-muted-text max-w-2xl mx-auto">
            Our comprehensive quality control ensures every product meets international export standards.
          </p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[1px] bg-white/25" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step) => {
              const IconComponent = step.icon
              return (
                <div key={step.step} className="relative text-center">
                  <div 
                    className="w-20 h-20 mx-auto mb-4 rounded-full flex flex-col items-center justify-center relative z-10 shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
                    style={{ 
                      border: `2px solid ${step.color}`,
                      backgroundColor: `${step.color}10`
                    }}
                  >
                    <IconComponent size={28} strokeWidth={1.5} style={{ color: step.color }} />
                    <span className="text-[10px] text-off-white/60 mt-1">{step.step}</span>
                  </div>
                  <h4 className="text-off-white font-medium mb-2">{step.title}</h4>
                  <p className="text-xs text-muted-text">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Certifications */}
      <Section className="bg-navy-alt/30">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl text-off-white mb-4">Certifications</h2>
          <p className="text-muted-text max-w-2xl mx-auto">
            Our certifications reflect our commitment to quality, safety, and compliance.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {certifications.map((cert) => (
            <div key={cert.name} className="bg-white/[0.08] border border-white/[0.14] rounded-xl p-6 text-center hover:border-gold-accent/40 hover:shadow-lg transition-all duration-200">
              <h4 className="font-playfair text-lg text-off-white mb-2">{cert.name}</h4>
              <p className="text-xs text-muted-text mb-5">{cert.desc}</p>
              <Button href="#" variant="secondary" size="md">
                View Certificate
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Band */}
      <section className="py-16 bg-navy-primary border-y border-gold-accent/20">
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
