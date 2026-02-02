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
    <footer className="bg-navy-primary">
      <div className="h-1 bg-gradient-to-r from-transparent via-warm-ivory/30 to-transparent" />
      
      <div className="container-main pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex flex-col mb-5">
              <span className="text-3xl font-playfair font-bold text-off-white tracking-wide">MSE</span>
              <span className="text-[10px] text-muted-text tracking-[0.2em] uppercase">Magna SSK Exim Solutions Pvt Ltd</span>
            </div>
            <p className="text-sm text-muted-text leading-relaxed mb-6">
              Premium exporter of spices, oleoresins, and dehydrated vegetables. Committed to quality, compliance, and global partnerships.
            </p>
            <Button href="/contact" variant="secondary" size="md">
              Request Quote
            </Button>
          </div>

          <div>
            <h4 className="font-playfair text-lg text-off-white mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-text hover:text-gold-accent transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg text-off-white mb-5">Products</h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-muted-text hover:text-gold-accent transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg text-off-white mb-5">Contact</h4>
            <ul className="space-y-2.5 text-sm text-muted-text">
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

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-text/70">
            &copy; {new Date().getFullYear()} Magna SSK Exim Solutions Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-muted-text/70 hover:text-gold-accent transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-muted-text/70 hover:text-gold-accent transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
