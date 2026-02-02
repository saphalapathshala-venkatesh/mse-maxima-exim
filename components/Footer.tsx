import Link from 'next/link'
import Button from './Button'

const quickLinks = [
  { name: 'Products', href: '/products' },
  { name: 'Quality', href: '/quality' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const productLinks = [
  { name: 'Spices', href: '/products/spices' },
  { name: 'Oleoresins', href: '/products/oleoresins' },
  { name: 'Vegetables', href: '/products/vegetables' },
]

export default function Footer() {
  return (
    <footer>
      {/* Warm Divider Strip */}
      <div className="h-1.5 bg-gradient-to-r from-gold-accent/20 via-warm-ivory/50 to-gold-accent/20" />
      
      {/* Main Footer Body */}
      <div className="bg-gradient-to-b from-navy-primary via-navy-primary to-[#0A1628]">
        <div className="container-main pt-14 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Brand Column */}
            <div className="lg:pr-4">
              <div className="flex flex-col mb-4">
                <span className="text-3xl font-playfair font-bold text-off-white tracking-wide">MSE</span>
                <span className="text-[10px] text-muted-text/80 tracking-[0.2em] uppercase mt-0.5">Magna SSK Exim Solutions Pvt Ltd</span>
              </div>
              <p className="text-sm text-muted-text/90 leading-relaxed mb-5">
                Premium exporter of spices, oleoresins, and dehydrated vegetables. Committed to quality, compliance, and global partnerships.
              </p>
              <Button href="/contact" variant="secondary" size="md">
                Request Quote
              </Button>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-playfair text-base text-off-white mb-4 pb-2 border-b border-white/10">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-text/80 hover:text-gold-accent transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-playfair text-base text-off-white mb-4 pb-2 border-b border-white/10">Products</h4>
              <ul className="space-y-2">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-text/80 hover:text-gold-accent transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-playfair text-base text-off-white mb-4 pb-2 border-b border-white/10">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-text/80">
                <li>123 Export Avenue, Industrial Area</li>
                <li>City, State 000000</li>
                <li>India</li>
                <li className="pt-2">
                  <a href="mailto:info@mseexports.com" className="hover:text-gold-accent transition-colors duration-200">
                    info@mseexports.com
                  </a>
                </li>
                <li>
                  <a href="tel:+910000000000" className="hover:text-gold-accent transition-colors duration-200">
                    +91 00000 00000
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Darker Base Strip */}
      <div className="bg-[#050D18]">
        <div className="container-main py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-muted-text/50">
              &copy; {new Date().getFullYear()} Magna SSK Exim Solutions Pvt Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-xs text-muted-text/50 hover:text-gold-accent/70 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-text/50 hover:text-gold-accent/70 transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
