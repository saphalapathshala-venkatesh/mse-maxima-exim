import Image from 'next/image'
import Button from '@/components/Button'

const vegetables = [
  { name: 'Onions', desc: 'Fresh red and white onions, export quality.' },
  { name: 'Green Chilies', desc: 'Farm-fresh spicy green chilies.' },
  { name: 'Dehydrated Onion', desc: 'Flakes, minced, chopped, powder, and granules.' },
  { name: 'Dehydrated Garlic', desc: 'Flakes, minced, chopped, powder, and granules.' },
]

export default function VegetablesPage() {
  return (
    <div className="pt-[74px] bg-white">
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/banners/vegetables.jpg" alt="Vegetables background" fill className="object-cover opacity-20" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
        </div>
        <div className="container-main relative z-10">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-saffron bg-saffron/20 rounded-full mb-4">Farm Fresh</span>
          <h1 className="font-playfair text-3xl sm:text-4xl text-white mb-3">Vegetables</h1>
          <p className="text-base text-white/80 max-w-2xl">
            Premium fresh and dehydrated vegetables processed in state-of-the-art facilities. Meeting international food safety standards.
          </p>
        </div>
      </section>

      <div className="container-main py-10 sm:py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {vegetables.map((veg) => (
            <div key={veg.name} className="bg-white border border-border-light rounded-xl p-6 hover:border-primary/30 hover:shadow-md hover:-translate-y-1 transition-all duration-200">
              <h3 className="font-playfair text-lg text-text-main mb-2">{veg.name}</h3>
              <p className="text-sm text-text-muted">{veg.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface py-10 sm:py-14">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-playfair text-2xl sm:text-3xl text-text-main mb-5">Processing Standards</h2>
              <ul className="space-y-3 text-text-muted text-sm">
                <li className="flex gap-3"><span className="w-1.5 h-1.5 mt-2 bg-primary rounded-full flex-shrink-0" />Advanced dehydration technology</li>
                <li className="flex gap-3"><span className="w-1.5 h-1.5 mt-2 bg-primary rounded-full flex-shrink-0" />Consistent moisture levels</li>
                <li className="flex gap-3"><span className="w-1.5 h-1.5 mt-2 bg-primary rounded-full flex-shrink-0" />Color and flavor retention</li>
                <li className="flex gap-3"><span className="w-1.5 h-1.5 mt-2 bg-primary rounded-full flex-shrink-0" />Custom sizing and cuts available</li>
                <li className="flex gap-3"><span className="w-1.5 h-1.5 mt-2 bg-primary rounded-full flex-shrink-0" />Extended shelf life packaging</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-border-light">
              <h3 className="font-playfair text-xl text-text-main mb-3">Bulk Orders</h3>
              <p className="text-sm text-text-muted mb-5">Contact us for bulk pricing, custom specifications, and sample requests.</p>
              <Button href="/contact" variant="primary" size="lg">Get Quote</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
