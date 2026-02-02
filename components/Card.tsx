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
  variant?: 'default' | 'dark'
}

export default function Card({ 
  title, 
  description, 
  imageSrc, 
  imageAlt = '',
  href,
  buttonText,
  className = '',
  tag,
  variant = 'default'
}: CardProps) {
  const cardStyles = variant === 'dark' 
    ? 'bg-navy-primary border-navy-primary/30 shadow-lg hover:shadow-xl' 
    : 'bg-slate-glass border-slate-border hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]'
  
  return (
    <div 
      className={`group grid h-full ${cardStyles} rounded-xl overflow-hidden transition-all duration-300 hover:border-gold-accent/40 hover:-translate-y-1 ${className}`}
      style={{ gridTemplateRows: 'auto 1fr auto' }}
    >
      {imageSrc && (
        <div className="relative h-52 overflow-hidden">
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
      <div className="px-6 pt-6 pb-2">
        <h3 className="font-playfair text-xl text-off-white mb-2">{title}</h3>
        {description && (
          <p className="text-sm text-muted-text leading-relaxed">{description}</p>
        )}
      </div>
      {href && buttonText && (
        <div className="flex justify-center items-center px-6 py-5">
          <Button href={href} variant="primary" size="md">
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  )
}
