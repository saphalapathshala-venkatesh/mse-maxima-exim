import Button from '@/components/Button'
import Image from 'next/image'

// To update: replace fileUrl with your hosted PDF path, and logoSrc with your logo image.
// Place PDF files in public/certificates/ and logos in public/images/certs/
const certificates = [
  {
    title: 'FSSAI',
    logoSrc: '/images/certs/fssai.png',
    fileUrl: '/certificates/fssai.pdf',
  },
  {
    title: 'Spices Board',
    logoSrc: '/images/certs/spices-board.png',
    fileUrl: '/certificates/spices-board.pdf',
  },
  {
    title: 'APEDA',
    logoSrc: '/images/certs/apeda.png',
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

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {certificates.map((cert) => (
            <a
              key={cert.title}
              href={cert.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="group flex items-center justify-center bg-white border border-border-light rounded-2xl p-8 hover:border-primary/40 hover:shadow-lg transition-all duration-200 cursor-pointer"
              title={`Download ${cert.title} certificate`}
            >
              <div className="w-full bg-white rounded-xl p-2">
                <Image
                  src={cert.logoSrc}
                  alt={`${cert.title} Certificate`}
                  width={280}
                  height={160}
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-200"
                />
              </div>
            </a>
          ))}
        </div>

        <p className="text-center text-xs text-text-muted mt-6">
          Click on a logo to view or download the certificate
        </p>
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
