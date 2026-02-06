interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  spacing?: 'default' | 'tight' | 'cta' | 'none'
}

export default function Section({ children, className = '', id, spacing = 'default' }: SectionProps) {
  const spacingClasses = {
    default: 'py-14 sm:py-16',
    tight: 'py-10',
    cta: 'py-16 sm:py-20',
    none: ''
  }

  return (
    <section
      id={id}
      className={`${spacingClasses[spacing]} ${className}`}
    >
      <div className="container-main">
        {children}
      </div>
    </section>
  )
}
