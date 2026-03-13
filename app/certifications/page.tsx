import Button from '@/components/Button'
import { Download } from 'lucide-react'

// To update certificate files: replace the `fileUrl` values below with the correct hosted PDF URLs.
const certificates = [
  {
    title: 'FSSAI',
    description: 'Food Safety and Standards Authority of India license for food business operations.',
    scope: 'All products manufactured and exported from India.',
    fileUrl: '/certificates/fssai.pdf',
  },
  {
    title: 'Spices Board',
    description: 'Registration with the Spices Board of India for export of spices and spice products.',
    scope: 'Export of all spice products.',
    fileUrl: '/certificates/spices-board.pdf',
  },
  {
    title: 'APEDA',
    description: 'Agricultural and Processed Food Products Export Development Authority registration for export of agri and processed food products.',
    scope: 'All agricultural and processed food exports.',
    fileUrl: '/certificates/apeda.pdf',
  },
]

export default function CertificationsPage() {
  return (
    <div className="pt-[74px] bg-white">
      <div className="container-main py-10 sm:py-14">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-3">
            Standards
          </span>
          <h1 className="font-playfair text-3xl sm:text-4xl text-text-main mb-3">Certifications</h1>
          <p className="text-text-muted max-w-2xl mx-auto text-sm sm:text-base">
            Our certifications reflect our commitment to maintaining the highest standards of quality, safety, and compliance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert) => (
            <div key={cert.title} className="bg-white border border-border-light rounded-xl p-6 hover:border-primary/30 hover:shadow-md transition-all duration-200 flex flex-col">
              <span className="inline-block px-2.5 py-0.5 text-[9px] font-bold tracking-wider uppercase text-primary bg-primary/10 rounded-full self-start mb-3">
                Certified
              </span>
              <h3 className="font-playfair text-lg text-text-main mb-2">{cert.title}</h3>
              <p className="text-sm text-text-muted mb-3 flex-grow leading-relaxed">{cert.description}</p>
              <p className="text-xs text-text-light mb-4">
                <span className="text-saffron font-medium">Scope:</span> {cert.scope}
              </p>
              <a
                href={cert.fileUrl}
                download
                className="inline-flex items-center justify-center gap-2 h-9 px-4 rounded-full text-xs font-semibold border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
              >
                <Download size={13} />
                Download Certificate
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface py-12 sm:py-14">
        <div className="container-main text-center">
          <h2 className="font-playfair text-xl sm:text-2xl text-text-main mb-3">Need Specific Certifications?</h2>
          <p className="text-text-muted max-w-xl mx-auto mb-6 text-sm sm:text-base">
            Contact us if you require specific certifications or compliance documentation for your market.
          </p>
          <Button href="/contact" variant="primary" size="lg">Contact Us</Button>
        </div>
      </div>
    </div>
  )
}
