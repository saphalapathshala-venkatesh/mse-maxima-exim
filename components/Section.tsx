interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  glass?: boolean
  spacing?: 'default' | 'tight' | 'cta' | 'none'
}

export default function Section({ children, className = '', id, glass = false, spacing = 'default' }: SectionProps) {
  const spacingClasses = {
    default: 'py-16',
    tight: 'py-10',
    cta: 'py-20',
    none: ''
  }
  
  return (
    <section 
      id={id} 
      className={`${spacingClasses[spacing]} ${glass ? 'glass-panel' : ''} ${className}`}
    >
      <div className="container-main">
        {children}
      </div>
    </section>
  )
}
