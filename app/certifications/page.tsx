import Section from '@/components/Section'
import Button from '@/components/Button'

const certifications = [
  {
    name: 'ISO 22000:2018',
    description: 'Food Safety Management System certification ensuring systematic approach to food safety hazards.',
    scope: 'Processing and export of spices, oleoresins, and dehydrated vegetables.',
  },
  {
    name: 'BRCGS Food Safety',
    description: 'Global Standard for Food Safety recognized by the Global Food Safety Initiative (GFSI).',
    scope: 'Manufacturing facility and export operations.',
  },
  {
    name: 'FSSC 22000',
    description: 'Food Safety System Certification providing a complete certification scheme for food safety management.',
    scope: 'All product categories and processing facilities.',
  },
  {
    name: 'HALAL',
    description: 'Certification confirming products are prepared according to Islamic dietary laws.',
    scope: 'Selected product range for markets requiring Halal certification.',
  },
  {
    name: 'FSSAI',
    description: 'Food Safety and Standards Authority of India license for food business operations.',
    scope: 'All products manufactured and exported from India.',
  },
  {
    name: 'Spices Board',
    description: 'Registration with the Spices Board of India for export of spices and spice products.',
    scope: 'Export of all spice products and oleoresins.',
  },
]

export default function CertificationsPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl text-off-white mb-4">Certifications</h1>
          <p className="text-muted-text max-w-2xl mx-auto">
            Our certifications reflect our commitment to maintaining the highest standards of quality, safety, and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div key={cert.name} className="bg-card-surface border border-card-border rounded-sm p-6 hover:border-gold-accent/30 transition-colors duration-200">
              <h3 className="font-playfair text-xl text-off-white mb-3">{cert.name}</h3>
              <p className="text-sm text-muted-text mb-4">{cert.description}</p>
              <p className="text-xs text-muted-text/70 mb-4">
                <span className="text-gold-accent">Scope:</span> {cert.scope}
              </p>
              <Button href="#" variant="ghost" className="text-sm px-0">
                View Certificate →
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-navy-alt/30">
        <div className="text-center">
          <h2 className="font-playfair text-2xl md:text-3xl text-off-white mb-6">Need Specific Certifications?</h2>
          <p className="text-muted-text max-w-2xl mx-auto mb-8">
            Contact us if you require specific certifications or compliance documentation for your market.
          </p>
          <Button href="/contact" variant="primary">Contact Us</Button>
        </div>
      </Section>
    </div>
  )
}
