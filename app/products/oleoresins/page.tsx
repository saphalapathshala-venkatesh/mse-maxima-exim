import Image from 'next/image'
import Section from '@/components/Section'
import Button from '@/components/Button'

const oleoresins = [
  { name: 'Turmeric Oleoresin', desc: 'High curcumin content for food coloring and supplements.' },
  { name: 'Paprika Oleoresin', desc: 'Natural coloring with high ASTA values.' },
  { name: 'Capsicum Oleoresin', desc: 'Various Scoville heat units available.' },
  { name: 'Black Pepper Oleoresin', desc: 'Concentrated piperine for flavor applications.' },
  { name: 'Ginger Oleoresin', desc: 'Aromatic extract for beverages and confectionery.' },
  { name: 'Cardamom Oleoresin', desc: 'Premium extract for flavor and fragrance.' },
]

export default function OleoresinsPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=1600&q=80"
            alt="Oleoresins background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-primary via-navy-primary/90 to-navy-primary/70" />
        </div>
        <div className="container-main relative z-10">
          <h1 className="font-playfair text-4xl md:text-5xl text-off-white mb-4">Oleoresins</h1>
          <p className="text-lg text-muted-text max-w-2xl">
            Natural spice extracts with concentrated flavor, aroma, and color. Ideal for food processing, pharmaceutical, and cosmetic applications.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {oleoresins.map((item) => (
            <div key={item.name} className="bg-card-surface border border-card-border rounded-sm p-6 hover:border-gold-accent/30 transition-colors duration-200">
              <h3 className="font-playfair text-lg text-off-white mb-2">{item.name}</h3>
              <p className="text-sm text-muted-text">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-navy-alt/30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-2xl md:text-3xl text-off-white mb-6">Applications</h2>
            <ul className="space-y-4 text-muted-text">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 mt-2 bg-gold-accent rounded-full flex-shrink-0" />
                Food and beverage flavoring
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 mt-2 bg-gold-accent rounded-full flex-shrink-0" />
                Natural food coloring
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 mt-2 bg-gold-accent rounded-full flex-shrink-0" />
                Pharmaceutical formulations
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 mt-2 bg-gold-accent rounded-full flex-shrink-0" />
                Nutraceutical supplements
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 mt-2 bg-gold-accent rounded-full flex-shrink-0" />
                Cosmetic and personal care products
              </li>
            </ul>
          </div>
          <div className="text-center bg-card-surface border border-card-border rounded-sm p-8">
            <h3 className="font-playfair text-xl text-off-white mb-4">Technical Specifications</h3>
            <p className="text-sm text-muted-text mb-6">Request detailed technical data sheets, samples, and custom formulation options.</p>
            <Button href="/contact" variant="primary">Request Specs</Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
