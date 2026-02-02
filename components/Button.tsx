import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'outline' | 'ghost'
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  onClick, 
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 text-sm font-medium transition-all duration-200 rounded-sm'
  
  const variants = {
    primary: 'bg-gold-accent text-navy-primary hover:bg-gold-accent/90 hover:shadow-lg hover:shadow-gold-accent/20',
    outline: 'border border-gold-accent text-gold-accent hover:bg-gold-accent/10',
    ghost: 'text-off-white hover:text-gold-accent',
  }

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  )
}
