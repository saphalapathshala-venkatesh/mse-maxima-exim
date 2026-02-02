import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  size?: 'md' | 'lg'
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
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-xl relative overflow-hidden'
  
  const sizeStyles = {
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const variants = {
    primary: `
      bg-gradient-to-b from-[#D1AE57] to-[#B8892E] 
      text-navy-primary font-semibold
      shadow-[0_4px_14px_rgba(200,162,74,0.35)]
      before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/25 before:to-transparent before:pointer-events-none
      hover:shadow-[0_6px_20px_rgba(200,162,74,0.45)] hover:-translate-y-0.5
      active:translate-y-0 active:shadow-[0_2px_8px_rgba(200,162,74,0.3)]
    `,
    secondary: `
      bg-white/[0.06] 
      border border-[rgba(200,162,74,0.55)] 
      text-off-white
      backdrop-blur-sm
      hover:bg-white/[0.10] hover:-translate-y-0.5
      active:translate-y-0
    `,
  }

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
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
