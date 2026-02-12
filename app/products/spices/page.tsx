import Image from 'next/image'
import Button from '@/components/Button'
import { categories } from '@/data/assets'

const spices = [
  { name: 'Dry Red Chilies', desc: 'Various heat levels and ASTA color values available.' },
  { name: 'Chilli Powder', desc: 'Finely ground, vibrant red chilli powder.' },
  { name: 'Turmeric Rhizomes', desc: 'High curcumin content turmeric from premium farms.' },
  { name: 'Turmeric Powder', desc: 'Golden turmeric powder, lab-tested for purity.' },
  { name: 'Black Pepper', desc: 'Premium Malabar and Tellicherry peppercorns.' },
  { name: 'Cardamom', desc: 'Green cardamom pods with rich, aromatic flavor.' },
  { name: 'Cinnamon', desc: 'Premium cinnamon sticks and quills.' },
]

export default function SpicesPage() {
  return (
    <div className="pt-[74px] bg-white">
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={categories.spices} alt="Spices background" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
        </div>
        <div className="container-main relative z-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-saffron bg-saffron/20 rounded-full mb-4">Export Grade</span>
          <h1 className="font-playfair text-3xl sm:text-4xl text-white mb-3">Spices</h1>
          <p className="text-base text-white/80 max-w-2xl">
            Premium whole and ground spices sourced from the finest farms across India. Each batch is tested for quality, purity, and compliance.
          </p>
        </div>
      </section>

      <div className="container-main py-10 sm:py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {spices.map((spice) => (
            <div key={spice.name} className="bg-white border border-border-light rounded-xl p-6 hover:border-primary/30 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <h3 className="font-playfair text-lg text-text-main mb-2">{spice.name}</h3>
              <p className="text-sm text-text-muted">{spice.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface py-10 sm:py-14">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-playfair text-2xl sm:text-3xl text-text-main mb-5">Quality Specifications</h2>
              <ul className="space-y-3 text-text-muted text-sm">
                <li className="flex gap-3"><span className="w-1.5 h-1.5 mt-2 bg-primary rounded-full flex-shrink-0" />Moisture content as per international standards</li>
                <li className="flex gap-3"><span className="w-1.5 h-1.5 mt-2 bg-primary rounded-full flex-shrink-0" />Pesticide residue within permissible limits</li>
                <li className="flex gap-3"><span className="w-1.5 h-1.5 mt-2 bg-primary rounded-full flex-shrink-0" />Aflatoxin and heavy metals tested</li>
                <li className="flex gap-3"><span className="w-1.5 h-1.5 mt-2 bg-primary rounded-full flex-shrink-0" />Custom grinding and mesh sizes available</li>
                <li className="flex gap-3"><span className="w-1.5 h-1.5 mt-2 bg-primary rounded-full flex-shrink-0" />Sterilization options: Steam, ETO, Irradiation</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-border-light">
              <h3 className="font-playfair text-xl text-text-main mb-3">Request Product Specifications</h3>
              <p className="text-sm text-text-muted mb-5">Get detailed specifications, COA samples, and pricing for our spice range.</p>
              <Button href="/contact" variant="primary" size="lg">Get Quote</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
