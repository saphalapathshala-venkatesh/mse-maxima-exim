import Image from 'next/image'
import Button from '@/components/Button'
import { site, banners } from '@/data/assets'
import { Sprout, Search, Settings, FlaskConical, PackageCheck, CheckCircle, ScanLine, FileCheck, Droplets, Bug, Beaker } from 'lucide-react'

const qualitySteps = [
  { step: 1, title: 'Raw Material Sourcing', desc: 'Certified farms and approved suppliers with full traceability from origin to warehouse.', icon: Sprout, color: '#2D6A4F', image: site.qaStepSourcing },
  { step: 2, title: 'Incoming Inspection', desc: 'Rigorous batch inspection for quality parameters, foreign matter, and contamination.', icon: Search, color: '#E09F3E', image: site.qaStepInspection },
  { step: 3, title: 'Processing Control', desc: 'Continuous monitoring of temperature, humidity, and hygiene throughout processing.', icon: Settings, color: '#2D6A4F', image: site.qaStepProcessing },
  { step: 4, title: 'Laboratory Testing', desc: 'Comprehensive microbiological, chemical, and physical parameter testing in-house.', icon: FlaskConical, color: '#E09F3E', image: site.qaStepLabTesting },
  { step: 5, title: 'Final Quality Check', desc: 'Pre-shipment verification to meet customer specs and regulatory requirements.', icon: PackageCheck, color: '#2D6A4F', image: site.qaStepFinalCheck },
]

const credibilityStrip = [
  { icon: FlaskConical, label: 'In-house Testing' },
  { icon: ScanLine, label: 'Traceability' },
  { icon: FileCheck, label: 'Export Compliance' },
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

const qualityControls = [
  {
    title: 'Moisture & Purity',
    icon: Droplets,
    points: ['Moisture content analysis', 'Foreign matter detection', 'Purity percentage verification', 'Ash content testing'],
  },
  {
    title: 'Microbiology',
    icon: Bug,
    points: ['Total plate count (TPC)', 'Yeast & mold analysis', 'E. coli / Salmonella screening', 'Coliform count testing'],
  },
  {
    title: 'Residue & Contaminants',
    icon: Beaker,
    points: ['Pesticide residue analysis', 'Heavy metal screening', 'Aflatoxin level testing', 'Sulphur dioxide limits'],
  },
]

export default function QualityPage() {
  return (
    <div className="pt-[74px] bg-white">
      <section className="py-14 sm:py-20 lg:py-24 bg-white">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-left" style={{ hyphens: 'none', wordBreak: 'normal', overflowWrap: 'normal' }}>
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-saffron bg-saffron/20 rounded-full mb-4">
                Our Process
              </span>
              <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl text-text-main mb-4 leading-tight break-normal" style={{ textWrap: 'balance' } as React.CSSProperties}>
                <span className="whitespace-nowrap">From Source to Shipment:</span><br />Quality at every step
              </h1>
              <p className="text-text-muted leading-relaxed mb-6 text-sm sm:text-base break-normal">
                Quality is not just a checkpoint — it is embedded into every stage of our operations. From sourcing raw materials to final shipment, we maintain rigorous controls that meet the highest international standards.
              </p>

              <div className="flex flex-wrap gap-4 sm:gap-6 mb-8">
                {credibilityStrip.map((item) => {
                  const IconComp = item.icon
                  return (
                    <div key={item.label} className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <IconComp size={15} className="text-primary" />
                      </div>
                      <span className="text-xs font-semibold text-text-main tracking-wide">{item.label}</span>
                    </div>
                  )
                })}
              </div>

              <Button href="/contact" variant="secondary" size="lg">Get in Touch with Us</Button>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={site.qualityHeroLab}
                alt="MSE Quality Laboratory"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-surface">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-2xl sm:text-3xl text-text-main mb-3">5-Step Quality Process</h2>
            <p className="text-text-muted max-w-2xl mx-auto text-sm sm:text-base">
              Every product passes through our structured quality pipeline before reaching your port.
            </p>
          </div>

          <div className="space-y-5">
            {qualitySteps.map((item) => {
              const IconComp = item.icon
              return (
                <div key={item.step} className="flex flex-col sm:flex-row gap-5 items-stretch group bg-white rounded-xl border border-border-light shadow-sm hover:shadow-md transition-all overflow-hidden">
                  <div className="flex gap-4 items-start flex-1 min-w-0 p-5 sm:p-6">
                    <div className="w-11 h-11 flex-shrink-0 rounded-full flex items-center justify-center border-2 transition-all group-hover:scale-110" style={{ borderColor: item.color, backgroundColor: `${item.color}10` }}>
                      <IconComp size={18} style={{ color: item.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold text-text-light tracking-wider">STEP {item.step}</span>
                      <h3 className="font-playfair text-lg text-text-main mb-1">{item.title}</h3>
                      <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                  <div className="relative w-full sm:w-[220px] h-[160px] sm:h-auto flex-shrink-0 bg-surface">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                      sizes="220px"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="container-main">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-3">
              Testing Standards
            </span>
            <h2 className="font-playfair text-2xl sm:text-3xl text-text-main mb-3">Quality Controls We Follow</h2>
            <p className="text-text-muted max-w-2xl mx-auto text-sm sm:text-base">
              Every consignment is tested across three critical quality dimensions.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {qualityControls.map((ctrl) => {
              const IconComp = ctrl.icon
              return (
                <div key={ctrl.title} className="bg-surface rounded-xl p-6 border border-border-light hover:border-primary/20 hover:shadow-md transition-all">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <IconComp size={18} className="text-primary" />
                  </div>
                  <h3 className="font-semibold text-text-main mb-3">{ctrl.title}</h3>
                  <ul className="space-y-2">
                    {ctrl.points.map((pt) => (
                      <li key={pt} className="flex gap-2 items-start text-sm text-text-muted">
                        <span className="w-1.5 h-1.5 mt-1.5 bg-primary rounded-full flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
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
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {commitmentPoints.map((point) => (
                  <div key={point} className="flex gap-3 items-start">
                    <CheckCircle size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-muted leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={site.qualityLab}
                alt="MSE Quality Lab"
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
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {infrastructurePoints.map((point) => (
                  <div key={point} className="flex gap-3 items-start">
                    <CheckCircle size={16} className="text-saffron flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-text-muted leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
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
