import Image from 'next/image'
import Button from '@/components/Button'
import { Sprout, Search, Settings, FlaskConical, PackageCheck } from 'lucide-react'

const qualitySteps = [
  { step: 1, title: 'Raw Material Sourcing', desc: 'Careful selection from certified farms and approved suppliers with complete traceability documentation.', icon: Sprout, color: '#2D6A4F' },
  { step: 2, title: 'Incoming Inspection', desc: 'Every batch undergoes rigorous inspection for quality parameters, foreign matter, and contamination.', icon: Search, color: '#E09F3E' },
  { step: 3, title: 'Processing Control', desc: 'State-of-the-art processing with continuous monitoring of temperature, humidity, and hygiene standards.', icon: Settings, color: '#2D6A4F' },
  { step: 4, title: 'Laboratory Testing', desc: 'Comprehensive testing for microbiological, chemical, and physical parameters in our in-house lab.', icon: FlaskConical, color: '#E09F3E' },
  { step: 5, title: 'Final Quality Check', desc: 'Pre-shipment verification ensuring all products meet customer specifications and regulatory requirements.', icon: PackageCheck, color: '#2D6A4F' },
]

const standards = [
  'HACCP Principles Implementation',
  'GMP (Good Manufacturing Practices)',
  'Food Safety Management Systems',
  'Traceability Systems',
  'Pest Control Management',
  'Allergen Management',
]

export default function QualityPage() {
  return (
    <div className="pt-[72px] bg-white">
      <div className="container-main py-10 sm:py-14">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-3">
            Our Process
          </span>
          <h1 className="font-playfair text-3xl sm:text-4xl text-text-main mb-3">Quality Assurance</h1>
          <p className="text-text-muted max-w-2xl mx-auto text-sm sm:text-base">
            Our commitment to quality is reflected in every step of our process, from sourcing to final delivery.
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

      <div className="bg-surface py-12 sm:py-16">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-playfair text-2xl sm:text-3xl text-text-main mb-6">Our Quality Standards</h2>
              <ul className="space-y-3">
                {standards.map((standard) => (
                  <li key={standard} className="flex gap-3 text-text-muted text-sm">
                    <span className="w-1.5 h-1.5 mt-2 bg-primary rounded-full flex-shrink-0" />
                    {standard}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-border-light">
              <h3 className="font-playfair text-xl text-text-main mb-3">Quality Documentation</h3>
              <p className="text-sm text-text-muted mb-6">
                Request our quality manual, HACCP plan, or specific test reports for our products.
              </p>
              <Button href="/contact" variant="primary" size="lg">Request Documents</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
