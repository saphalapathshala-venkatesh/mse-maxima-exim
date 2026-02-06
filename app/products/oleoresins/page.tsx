import Image from 'next/image'
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
    <div className="pt-[74px] bg-white">
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/oleoresins-new.png" alt="Oleoresins background" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
        </div>
        <div className="container-main relative z-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-saffron bg-saffron/20 rounded-full mb-4">Premium Extract</span>
          <h1 className="font-playfair text-3xl sm:text-4xl text-white mb-3">Oleoresins</h1>
          <p className="text-base text-white/80 max-w-2xl">
            Natural spice extracts with concentrated flavor, aroma, and color. Ideal for food processing, pharmaceutical, and cosmetic applications.
          </p>
        </div>
      </section>

      <div className="container-main py-10 sm:py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {oleoresins.map((item) => (
            <div key={item.name} className="bg-white border border-border-light rounded-xl p-6 hover:border-primary/30 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <h3 className="font-playfair text-lg text-text-main mb-2">{item.name}</h3>
              <p className="text-sm text-text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface py-10 sm:py-14">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-playfair text-2xl sm:text-3xl text-text-main mb-5">Applications</h2>
              <ul className="space-y-3 text-text-muted text-sm">
                <li className="flex gap-3"><span className="w-1.5 h-1.5 mt-2 bg-primary rounded-full flex-shrink-0" />Food and beverage flavoring</li>
                <li className="flex gap-3"><span className="w-1.5 h-1.5 mt-2 bg-primary rounded-full flex-shrink-0" />Natural food coloring</li>
                <li className="flex gap-3"><span className="w-1.5 h-1.5 mt-2 bg-primary rounded-full flex-shrink-0" />Pharmaceutical formulations</li>
                <li className="flex gap-3"><span className="w-1.5 h-1.5 mt-2 bg-primary rounded-full flex-shrink-0" />Nutraceutical supplements</li>
                <li className="flex gap-3"><span className="w-1.5 h-1.5 mt-2 bg-primary rounded-full flex-shrink-0" />Cosmetic and personal care products</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-border-light">
              <h3 className="font-playfair text-xl text-text-main mb-3">Technical Specifications</h3>
              <p className="text-sm text-text-muted mb-5">Request detailed technical data sheets, samples, and custom formulation options.</p>
              <Button href="/contact" variant="primary" size="lg">Request Specs</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
