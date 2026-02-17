import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  className?: string
  type?: 'button' | 'submit'
}

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  size = 'md',
  onClick, 
  className = '',
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full relative overflow-hidden whitespace-nowrap'
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-3.5 text-base',
  }

  const variants = {
    primary: `
      bg-saffron text-white font-semibold
      shadow-[0_2px_12px_rgba(224,159,62,0.3)]
      hover:bg-saffron-dark hover:shadow-[0_4px_16px_rgba(224,159,62,0.4)] hover:-translate-y-0.5
      active:translate-y-0
    `,
    secondary: `
      bg-primary text-white font-semibold
      shadow-[0_2px_12px_rgba(45,106,79,0.25)]
      hover:bg-primary-dark hover:shadow-[0_4px_16px_rgba(45,106,79,0.35)] hover:-translate-y-0.5
      active:translate-y-0
    `,
    outline: `
      bg-transparent
      border-2 border-primary text-primary font-semibold
      hover:bg-primary hover:text-white hover:-translate-y-0.5
      active:translate-y-0
    `,
  }

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedStyles} onClick={onClick}>
        <span className="relative z-10">{children}</span>
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      <span className="relative z-10">{children}</span>
    </button>
  )
}
