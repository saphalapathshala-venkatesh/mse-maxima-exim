import Image from 'next/image'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { WHATSAPP_URL } from '@/lib/contacts'

interface ProductHeroProps {
  badge: string
  title: string
  intro: string
  bullets: string[]
  imageSrc: string
  productSlug: string
}

export default function ProductHero({
  badge,
  title,
  intro,
  bullets,
  imageSrc,
  productSlug,
}: ProductHeroProps) {
  const quoteUrl = `/contact?product=${productSlug}`

  return (
    <section className="relative py-12 sm:py-16 overflow-hidden">
      <div className="absolute inset-0">
        <Image src={imageSrc} alt={title} fill className="object-cover opacity-20" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/70" />
      </div>
      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_400px] gap-6 items-stretch">
          <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 sm:p-8 flex flex-col">
            <span className="inline-block self-start px-3 py-1 text-xs font-semibold tracking-wider uppercase text-saffron bg-saffron/20 rounded-full mb-4">
              {badge}
            </span>
            <h1 className="font-playfair text-3xl sm:text-4xl text-white mb-3">{title}</h1>
            <p className="text-sm sm:text-base text-white/80 leading-relaxed mb-5 max-w-xl">{intro}</p>

            <ul className="space-y-2 mb-6">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5 text-sm text-white/90">
                  <Check className="w-4 h-4 text-saffron mt-0.5 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>

            <p className="text-xs text-white/60 mb-4 italic">Looking for reliable bulk export supply?</p>

            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <Link
                href={quoteUrl}
                className="inline-flex items-center justify-center h-11 px-6 rounded-full text-sm font-semibold text-white bg-saffron hover:bg-[#c98a2e] shadow-md hover:shadow-lg transition-all duration-200"
              >
                Request Quote
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 px-6 rounded-full text-sm font-semibold text-primary bg-white border border-primary/30 hover:bg-primary/5 hover:shadow-md transition-all duration-200"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-white/20 aspect-[16/10] lg:aspect-auto lg:min-h-[300px]">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 340px, 400px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
