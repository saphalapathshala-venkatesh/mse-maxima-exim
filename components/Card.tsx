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
}

export default function Card({ 
  title, 
  description, 
  imageSrc, 
  imageAlt = '',
  href,
  buttonText,
  className = '' 
}: CardProps) {
  return (
    <div className={`group bg-card-surface border border-card-border rounded-sm overflow-hidden transition-all duration-300 hover:border-gold-accent/30 hover:translate-y-[-2px] ${className}`}>
      {imageSrc && (
        <div className="relative h-56 overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-primary/60 to-transparent" />
        </div>
      )}
      <div className="p-6">
        <h3 className="font-playfair text-xl text-off-white mb-2">{title}</h3>
        {description && (
          <p className="text-sm text-muted-text mb-4 leading-relaxed">{description}</p>
        )}
        {href && buttonText && (
          <Button href={href} variant="ghost" className="px-0 hover:translate-x-1">
            {buttonText} →
          </Button>
        )}
      </div>
    </div>
  )
}
