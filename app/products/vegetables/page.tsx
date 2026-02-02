import Image from 'next/image'
import Section from '@/components/Section'
import Button from '@/components/Button'

const vegetables = [
  { name: 'Dehydrated Onion', desc: 'Flakes, minced, chopped, powder, and granules.' },
  { name: 'Dehydrated Garlic', desc: 'Flakes, minced, chopped, powder, and granules.' },
  { name: 'Green Peas', desc: 'Whole and split, fresh and dehydrated options.' },
  { name: 'Tomato Products', desc: 'Flakes, powder, and spray-dried varieties.' },
  { name: 'Cabbage', desc: 'Shredded and flaked dehydrated cabbage.' },
  { name: 'Carrots', desc: 'Diced, sliced, and powdered forms.' },
  { name: 'Beetroot', desc: 'Flakes and powder for food applications.' },
  { name: 'Capsicum', desc: 'Red and green bell pepper in various cuts.' },
]

export default function VegetablesPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?w=1600&q=80"
            alt="Vegetables background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-primary via-navy-primary/90 to-navy-primary/70" />
        </div>
        <div className="container-main relative z-10">
          <h1 className="font-playfair text-4xl md:text-5xl text-off-white mb-4">Vegetables</h1>
          <p className="text-lg text-muted-text max-w-2xl">
            Premium dehydrated vegetables processed in state-of-the-art facilities. Meeting international food safety and quality standards.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vegetables.map((veg) => (
            <div key={veg.name} className="bg-card-surface border border-card-border rounded-sm p-6 hover:border-gold-accent/30 transition-colors duration-200">
              <h3 className="font-playfair text-lg text-off-white mb-2">{veg.name}</h3>
              <p className="text-sm text-muted-text">{veg.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-navy-alt/30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-playfair text-2xl md:text-3xl text-off-white mb-6">Processing Standards</h2>
            <ul className="space-y-4 text-muted-text">
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 mt-2 bg-gold-accent rounded-full flex-shrink-0" />
                Advanced dehydration technology
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 mt-2 bg-gold-accent rounded-full flex-shrink-0" />
                Consistent moisture levels
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 mt-2 bg-gold-accent rounded-full flex-shrink-0" />
                Color and flavor retention
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 mt-2 bg-gold-accent rounded-full flex-shrink-0" />
                Custom sizing and cuts available
              </li>
              <li className="flex gap-3">
                <span className="w-1.5 h-1.5 mt-2 bg-gold-accent rounded-full flex-shrink-0" />
                Extended shelf life packaging
              </li>
            </ul>
          </div>
          <div className="text-center bg-card-surface border border-card-border rounded-sm p-8">
            <h3 className="font-playfair text-xl text-off-white mb-4">Bulk Orders</h3>
            <p className="text-sm text-muted-text mb-6">Contact us for bulk pricing, custom specifications, and sample requests.</p>
            <Button href="/contact" variant="primary">Get Quote</Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
