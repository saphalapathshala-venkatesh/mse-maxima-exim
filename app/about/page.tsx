import Image from 'next/image'
import Section from '@/components/Section'
import Button from '@/components/Button'

const stats = [
  { value: '50+', label: 'Countries Served' },
  { value: '100+', label: 'MT Monthly Capacity' },
  { value: '15+', label: 'Years Experience' },
  { value: '200+', label: 'Products Range' },
]

const values = [
  {
    title: 'Quality First',
    desc: 'Uncompromising commitment to product quality and food safety standards.',
  },
  {
    title: 'Customer Focus',
    desc: 'Understanding and meeting the unique requirements of each customer.',
  },
  {
    title: 'Integrity',
    desc: 'Transparent business practices and honest relationships with all stakeholders.',
  },
  {
    title: 'Innovation',
    desc: 'Continuous improvement in processes, products, and services.',
  },
]

export default function AboutPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-playfair text-4xl md:text-5xl text-off-white mb-6">About MSE</h1>
            <p className="text-muted-text mb-6 leading-relaxed">
              Magna SSK Exim Solutions Pvt Ltd (MSE) is a leading exporter of premium spices, oleoresins, and dehydrated vegetables. With years of experience in the export industry, we have established ourselves as a trusted partner for businesses worldwide.
            </p>
            <p className="text-muted-text mb-6 leading-relaxed">
              Our state-of-the-art processing facilities, combined with rigorous quality control measures, ensure that every product we export meets the highest international standards.
            </p>
            <p className="text-muted-text leading-relaxed">
              We are committed to building long-term relationships with our customers through consistent quality, competitive pricing, and reliable service.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/images/facility.jpg"
              alt="MSE office and team"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-navy-alt/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-playfair text-4xl md:text-5xl text-gold-accent mb-2">{stat.value}</div>
              <div className="text-sm text-muted-text">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl text-off-white mb-4">Our Values</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => (
            <div key={value.title} className="bg-white/[0.08] border border-white/[0.14] rounded-xl p-6 hover:border-gold-accent/40 transition-colors duration-200">
              <h3 className="font-playfair text-lg text-off-white mb-3">{value.title}</h3>
              <p className="text-sm text-muted-text">{value.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-navy-alt/30">
        <div className="text-center">
          <h2 className="font-playfair text-2xl md:text-3xl text-off-white mb-6">Partner With Us</h2>
          <p className="text-muted-text max-w-2xl mx-auto mb-8">
            Looking for a reliable export partner for your agri-product needs? Let&apos;s discuss how we can work together.
          </p>
          <Button href="/contact" variant="primary" size="lg">Contact Us</Button>
        </div>
      </Section>
    </div>
  )
}
