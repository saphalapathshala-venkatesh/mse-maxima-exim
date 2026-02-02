import Section from '@/components/Section'
import Button from '@/components/Button'

const qualitySteps = [
  {
    step: 1,
    title: 'Raw Material Sourcing',
    desc: 'Careful selection from certified farms and approved suppliers with complete traceability documentation.',
  },
  {
    step: 2,
    title: 'Incoming Inspection',
    desc: 'Every batch undergoes rigorous inspection for quality parameters, foreign matter, and contamination.',
  },
  {
    step: 3,
    title: 'Processing Control',
    desc: 'State-of-the-art processing with continuous monitoring of temperature, humidity, and hygiene standards.',
  },
  {
    step: 4,
    title: 'Laboratory Testing',
    desc: 'Comprehensive testing for microbiological, chemical, and physical parameters in our in-house lab.',
  },
  {
    step: 5,
    title: 'Final Quality Check',
    desc: 'Pre-shipment verification ensuring all products meet customer specifications and regulatory requirements.',
  },
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
    <div className="pt-20">
      <Section>
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl text-off-white mb-4">Quality Assurance</h1>
          <p className="text-muted-text max-w-2xl mx-auto">
            Our commitment to quality is reflected in every step of our process, from sourcing to final delivery.
          </p>
        </div>

        <div className="space-y-8">
          {qualitySteps.map((item, index) => (
            <div key={item.step} className="flex gap-6 items-start">
              <div className="w-16 h-16 flex-shrink-0 rounded-full bg-navy-alt border-2 border-gold-accent flex items-center justify-center">
                <span className="font-playfair text-xl text-gold-accent">{item.step}</span>
              </div>
              <div className={`flex-1 pb-8 ${index < qualitySteps.length - 1 ? 'border-b border-card-border' : ''}`}>
                <h3 className="font-playfair text-xl text-off-white mb-2">{item.title}</h3>
                <p className="text-muted-text">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-navy-alt/30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-2xl md:text-3xl text-off-white mb-8">Our Quality Standards</h2>
            <ul className="space-y-4">
              {standards.map((standard) => (
                <li key={standard} className="flex gap-3 text-muted-text">
                  <span className="w-1.5 h-1.5 mt-2 bg-gold-accent rounded-full flex-shrink-0" />
                  {standard}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card-surface border border-card-border rounded-sm p-8">
            <h3 className="font-playfair text-xl text-off-white mb-4">Quality Documentation</h3>
            <p className="text-sm text-muted-text mb-6">
              Request our quality manual, HACCP plan, or specific test reports for our products.
            </p>
            <Button href="/contact" variant="primary">Request Documents</Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
