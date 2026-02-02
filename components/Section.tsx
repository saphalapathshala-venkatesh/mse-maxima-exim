interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  glass?: boolean
}

export default function Section({ children, className = '', id, glass = false }: SectionProps) {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-24 ${glass ? 'glass-panel' : ''} ${className}`}
    >
      <div className="container-main">
        {children}
      </div>
    </section>
  )
}
