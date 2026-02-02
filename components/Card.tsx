import Image from 'next/image'
import Button from './Button'

interface CardProps {
  title: string
  description?: string
  imageSrc?: string
  imageAlt?: string
  href?: string
  buttonText?: string
  className?: string
  tag?: string
}

export default function Card({ 
  title, 
  description, 
  imageSrc, 
  imageAlt = '',
  href,
  buttonText,
  className = '',
  tag
}: CardProps) {
  return (
    <div className={`group flex flex-col h-full bg-slate-glass border border-slate-border rounded-xl overflow-hidden transition-all duration-300 hover:border-gold-accent/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 ${className}`}>
      {imageSrc && (
        <div className="relative h-52 overflow-hidden flex-shrink-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/90 via-navy-primary/30 to-transparent" />
          {tag && (
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 text-[10px] uppercase tracking-wider text-gold-accent border border-gold-accent/50 rounded-full bg-navy-primary/60 backdrop-blur-sm">
                {tag}
              </span>
            </div>
          )}
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-playfair text-xl text-off-white mb-2">{title}</h3>
        {description && (
          <p className="text-sm text-muted-text mb-5 leading-relaxed flex-1">{description}</p>
        )}
        {href && buttonText && (
          <div className="mt-auto">
            <Button href={href} variant="primary" size="md">
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
