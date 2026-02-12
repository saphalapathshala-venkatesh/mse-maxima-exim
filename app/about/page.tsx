import Image from 'next/image'
import Button from '@/components/Button'
import { site } from '@/data/assets'

const stats = [
  { value: '50+', label: 'Countries Served' },
  { value: '100+', label: 'MT Monthly Capacity' },
  { value: '15+', label: 'Years Experience' },
  { value: '13+', label: 'Product Lines' },
]

const values = [
  { title: 'Quality First', desc: 'Uncompromising commitment to product quality and food safety standards.' },
  { title: 'Customer Focus', desc: 'Understanding and meeting the unique requirements of each customer.' },
  { title: 'Integrity', desc: 'Transparent business practices and honest relationships with all stakeholders.' },
  { title: 'Innovation', desc: 'Continuous improvement in processes, products, and services.' },
]

export default function AboutPage() {
  return (
    <div className="pt-[74px] bg-white">
      <div className="container-main py-10 sm:py-14">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-4">
              About Us
            </span>
            <h1 className="font-playfair text-3xl sm:text-4xl text-text-main mb-5">About MSE</h1>
            <p className="text-text-muted mb-4 leading-relaxed text-sm sm:text-base">
              Magna SSK Exim Solutions Pvt Ltd (MSE) is a leading exporter of premium spices, vegetables, grains and cocoa beans. With years of experience in the export industry, we have established ourselves as a trusted partner for businesses worldwide.
            </p>
            <p className="text-text-muted mb-4 leading-relaxed text-sm sm:text-base">
              Our state-of-the-art processing facilities, combined with rigorous quality control measures, ensure that every product we export meets the highest international standards.
            </p>
            <p className="text-text-muted leading-relaxed text-sm sm:text-base">
              We are committed to building long-term relationships with our customers through consistent quality, competitive pricing, and reliable service.
            </p>
          </div>
          <div className="relative h-[300px] sm:h-[380px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={site.facility}
              alt="MSE processing facility"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>

      <div className="bg-primary py-12 sm:py-14">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-playfair text-3xl sm:text-4xl text-saffron font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-main py-12 sm:py-14">
        <div className="text-center mb-10">
          <h2 className="font-playfair text-2xl sm:text-3xl text-text-main mb-3">Our Values</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((value) => (
            <div key={value.title} className="bg-white border border-border-light rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all duration-200">
              <h3 className="font-playfair text-lg text-text-main mb-2">{value.title}</h3>
              <p className="text-sm text-text-muted leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface py-12 sm:py-14">
        <div className="container-main text-center">
          <h2 className="font-playfair text-xl sm:text-2xl text-text-main mb-3">Partner With Us</h2>
          <p className="text-text-muted max-w-xl mx-auto mb-6 text-sm sm:text-base">
            Looking for a reliable export partner for your agri-product needs? Let&apos;s discuss how we can work together.
          </p>
          <Button href="/contact" variant="primary" size="lg">Contact Us</Button>
        </div>
      </div>
    </div>
  )
}
