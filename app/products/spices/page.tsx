import Image from 'next/image'
import Section from '@/components/Section'
import Button from '@/components/Button'

const spices = [
  { name: 'Turmeric', desc: 'High curcumin content turmeric from premium farms.' },
  { name: 'Red Chili', desc: 'Various heat levels and ASTA color values available.' },
  { name: 'Cumin Seeds', desc: 'Bold and light varieties with high volatile oil content.' },
  { name: 'Coriander', desc: 'Whole seeds and ground powder with excellent aroma.' },
  { name: 'Black Pepper', desc: 'Premium Malabar and Tellicherry varieties.' },
  { name: 'Cardamom', desc: 'Green and black cardamom with rich aroma.' },
  { name: 'Fennel Seeds', desc: 'Sweet and aromatic fennel from Gujarat.' },
  { name: 'Fenugreek', desc: 'Seeds and leaves with consistent quality.' },
]

export default function SpicesPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/spices.jpg"
            alt="Spices background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-primary via-navy-primary/90 to-navy-primary/70" />
        </div>
        <div className="container-main relative z-10">
          <h1 className="font-playfair text-4xl md:text-5xl text-off-white mb-4">Spices</h1>
          <p className="text-lg text-muted-text max-w-2xl">
            Premium whole and ground spices sourced from the finest farms across India. Each batch is tested for quality, purity, and compliance with international standards.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {spices.map((spice) => (
            <div key={spice.name} className="bg-white/[0.08] border border-white/[0.14] rounded-xl p-6 hover:border-gold-accent/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
              <h3 className="font-playfair text-lg text-off-white mb-2">{spice.name}</h3>
              <p className="text-sm text-muted-text">{spice.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-navy-alt/30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-2xl md:text-3xl text-off-white mb-6">Quality Specifications</h2>
            <ul className="space-y-4 text-muted-text">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 mt-2 bg-gold-accent rounded-full flex-shrink-0" />
                Moisture content as per international standards
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 mt-2 bg-gold-accent rounded-full flex-shrink-0" />
                Pesticide residue within permissible limits
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 mt-2 bg-gold-accent rounded-full flex-shrink-0" />
                Aflatoxin and heavy metals tested
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 mt-2 bg-gold-accent rounded-full flex-shrink-0" />
                Custom grinding and mesh sizes available
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 mt-2 bg-gold-accent rounded-full flex-shrink-0" />
                Sterilization options: Steam, ETO, Irradiation
              </li>
            </ul>
          </div>
          <div className="text-center bg-white/[0.08] border border-white/[0.14] rounded-xl p-8">
            <h3 className="font-playfair text-xl text-off-white mb-4">Request Product Specifications</h3>
            <p className="text-sm text-muted-text mb-6">Get detailed specifications, COA samples, and pricing for our spice range.</p>
            <Button href="/contact" variant="primary" size="lg">Get Quote</Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
