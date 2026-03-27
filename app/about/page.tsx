import Image from 'next/image'
import Button from '@/components/Button'
import { site } from '@/data/assets'
import { Quote } from 'lucide-react'

// ─── Director content — update here ───────────────────────────────────────────
const director = {
  name: 'Director',
  designation: 'Managing Director, Magna SSK Exim Solutions Pvt Ltd',
  imageUrl: site.director,
  message: [
    'Magna SSK Exim Solutions Pvt Ltd is a new company — but it is not built casually.',
    'We come from a professional background where discipline, accountability, and structured systems are non-negotiable. While our core experience has been in a different field, the values that guided us there — integrity, precision, and responsibility — are the same values on which this export venture is being built.',
    'When we decided to enter international trade, we did so with clarity. Agriculture is the backbone of India, and global markets depend on reliable sourcing partners. However, we also understood that export is not about quick transactions — it is about compliance, documentation accuracy, inspection standards, and long-term trust.',
    'As newcomers, we see this as our strength. We are building Magna SSK Exim Solutions step by step, with process-driven methods rather than shortcuts. Every product is handled with attention to sourcing quality, grading standards, and regulatory requirements of importing countries.',
    'We believe that trust in international trade is not earned by size, but by consistency. Our vision is to grow into a trusted export partner for buyers in Europe, GCC countries, and Asia — not through rapid expansion, but by building a foundation that is sustainable, compliant, and professionally managed.',
    'We look forward to building partnerships based on transparency, reliability, and mutual growth.',
  ],
}
// ──────────────────────────────────────────────────────────────────────────────

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
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-4">
              About Us
            </span>
            <h1 className="font-playfair text-3xl sm:text-4xl text-primary mb-5">About MSE</h1>
            <div className="bg-primary/5 border border-primary/10 rounded-2xl px-6 py-6 sm:px-10 sm:py-10">
              <div className="max-w-3xl space-y-5">
                <p className="text-text-muted leading-relaxed text-sm sm:text-base">
                  Magna SSK Exim Solutions Pvt Ltd (MSE) is a premium exporter of spices, vegetables, grains and cocoa beans, building a trusted global presence through process-driven trade practices.
                </p>
                <p className="text-text-muted leading-relaxed text-sm sm:text-base">
                  Our sourcing network, rigorous quality controls, and commitment to compliance ensure every shipment meets the regulatory standards of importing countries.
                </p>
                <p className="text-text-muted leading-relaxed text-sm sm:text-base">
                  We are committed to building long-term relationships through consistent quality, transparent pricing, and reliable export documentation.
                </p>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl min-h-[300px] sm:min-h-[380px] h-full">
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

      {/* ── Director's Message ─────────────────────────────────────────────── */}
      <div className="bg-surface py-12 sm:py-16">
        <div className="container-main">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-3">
              Leadership
            </span>
            <h2 className="font-playfair text-2xl sm:text-3xl text-text-main">Director&apos;s Message</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Message card — 60% */}
            <div className="w-full lg:w-[60%] bg-white rounded-2xl shadow-sm border border-border-light p-7 sm:p-10 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Quote size={18} className="text-primary" />
                </div>
                <div className="h-0.5 flex-1 bg-gradient-to-r from-primary/30 to-transparent rounded-full" />
              </div>

              <div className="space-y-4 flex-1">
                {director.message.map((para, i) => (
                  <p key={i} className="text-sm sm:text-base text-text-muted leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border-light">
                <p className="font-playfair text-lg text-primary font-semibold">{director.name}</p>
                <p className="text-xs text-text-muted mt-0.5">{director.designation}</p>
              </div>
            </div>

            {/* Image card — 40% */}
            <div className="w-full lg:w-[40%] bg-white rounded-2xl shadow-sm border border-border-light overflow-hidden">
              <div className="relative w-full aspect-[3/4]">
                <Image
                  src={director.imageUrl}
                  alt={`${director.name} — ${director.designation}`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="px-5 py-4 text-center border-t border-border-light">
                <p className="font-playfair text-base text-primary font-semibold">{director.name}</p>
                <p className="text-xs text-text-muted mt-0.5">{director.designation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ───────────────────────────────────────────────────────────────────── */}

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
            <div key={value.title} className="bg-white border border-border-light rounded-xl overflow-hidden hover:border-primary/30 hover:shadow-md transition-all duration-200">
              <div className="px-6 pt-5 pb-3">
                <h3 className="font-playfair text-lg text-primary">{value.title}</h3>
              </div>
              <div className="bg-primary/5 px-6 pt-3 pb-5">
                <p className="text-sm text-text-muted leading-relaxed">{value.desc}</p>
              </div>
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
