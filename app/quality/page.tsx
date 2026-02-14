import Image from 'next/image'
import Button from '@/components/Button'
import { site, banners } from '@/data/assets'
import { Sprout, Search, Settings, FlaskConical, PackageCheck, CheckCircle } from 'lucide-react'

const qualitySteps = [
  { step: 1, title: 'Raw Material Sourcing', desc: 'Careful selection from certified farms and approved suppliers with complete traceability documentation.', icon: Sprout, color: '#2D6A4F' },
  { step: 2, title: 'Incoming Inspection', desc: 'Every batch undergoes rigorous inspection for quality parameters, foreign matter, and contamination.', icon: Search, color: '#E09F3E' },
  { step: 3, title: 'Processing Control', desc: 'State-of-the-art processing with continuous monitoring of temperature, humidity, and hygiene standards.', icon: Settings, color: '#2D6A4F' },
  { step: 4, title: 'Laboratory Testing', desc: 'Comprehensive testing for microbiological, chemical, and physical parameters in our in-house lab.', icon: FlaskConical, color: '#E09F3E' },
  { step: 5, title: 'Final Quality Check', desc: 'Pre-shipment verification ensuring all products meet customer specifications and regulatory requirements.', icon: PackageCheck, color: '#2D6A4F' },
]

const commitmentPoints = [
  'Every batch is traceable from farm origin to final shipment',
  'In-house laboratory testing for microbiological and chemical parameters',
  'Compliance with FDA, EU, and international food safety regulations',
  'Continuous monitoring of temperature, humidity, and hygiene during processing',
  'Pre-shipment inspection to meet customer specifications',
  'Documentation and certificates provided with every consignment',
]

const infrastructurePoints = [
  'State-of-the-art processing facility with modern equipment',
  'Dedicated in-house quality testing laboratory',
  'Temperature-controlled storage and warehousing',
  'Clean room environment for powder processing',
  'Automated sorting and grading systems',
  'Pest control and allergen management protocols',
]

export default function QualityPage() {
  return (
    <div className="pt-[74px] bg-white">
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={site.qualityLab} alt="Quality Assurance" fill className="object-cover opacity-15" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
        </div>
        <div className="container-main relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-saffron bg-saffron/20 rounded-full mb-4">
              Our Process
            </span>
            <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">Quality Assurance</h1>
            <p className="text-base sm:text-lg text-white/85 leading-relaxed">
              Quality is not just a checkpoint — it is embedded into every stage of our operations. From sourcing raw materials to final shipment, we maintain rigorous controls that meet the highest international standards.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-2xl sm:text-3xl text-text-main mb-3">5-Step Quality Process</h2>
            <p className="text-text-muted max-w-2xl mx-auto text-sm sm:text-base">
              Every product passes through our structured quality pipeline before reaching your port.
            </p>
          </div>

          <div className="space-y-6">
            {qualitySteps.map((item, index) => {
              const IconComp = item.icon
              return (
                <div key={item.step} className="flex gap-5 items-start group">
                  <div className="w-14 h-14 flex-shrink-0 rounded-full flex items-center justify-center border-2 transition-all group-hover:scale-110" style={{ borderColor: item.color, backgroundColor: `${item.color}10` }}>
                    <IconComp size={22} style={{ color: item.color }} />
                  </div>
                  <div className={`flex-1 pb-6 ${index < qualitySteps.length - 1 ? 'border-b border-border-light' : ''}`}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-text-light">STEP {item.step}</span>
                    </div>
                    <h3 className="font-playfair text-lg text-text-main mb-1.5">{item.title}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-surface">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-4">
                Commitment
              </span>
              <h2 className="font-playfair text-2xl sm:text-3xl text-text-main mb-6">Our Quality Commitment</h2>
              <ul className="space-y-3">
                {commitmentPoints.map((point) => (
                  <li key={point} className="flex gap-3 items-start">
                    <CheckCircle size={18} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-muted leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={site.facility}
                alt="MSE Processing Facility"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={banners.quality}
                alt="Quality Testing Infrastructure"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-saffron bg-saffron/10 rounded-full mb-4">
                Infrastructure
              </span>
              <h2 className="font-playfair text-2xl sm:text-3xl text-text-main mb-6">Infrastructure & Testing</h2>
              <ul className="space-y-3">
                {infrastructurePoints.map((point) => (
                  <li key={point} className="flex gap-3 items-start">
                    <CheckCircle size={18} className="text-saffron flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-muted leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-primary">
        <div className="container-main text-center">
          <h2 className="font-playfair text-2xl sm:text-3xl text-white mb-4 leading-snug">
            Looking for a Reliable Supply Partner?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto text-sm sm:text-base">
            We combine rigorous quality controls with efficient logistics to deliver consistent, export-ready products to your doorstep. Let&apos;s discuss how we can support your business.
          </p>
          <Button href="/contact" variant="primary" size="lg">Contact Us</Button>
        </div>
      </section>
    </div>
  )
}
