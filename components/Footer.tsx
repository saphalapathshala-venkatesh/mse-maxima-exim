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
  { name: 'Vegetables', href: '/products/vegetables' },
  { name: 'Grains & Cocoa', href: '/products' },
]

export default function Footer() {
  return (
    <footer>
      {/* A) TOP DIVIDER STRIP - Warm Ivory / Gold */}
      <div className="h-2 bg-gradient-to-r from-gold-accent/30 via-warm-ivory/60 to-gold-accent/30" />
      
      {/* B) FOOTER BODY - Deep Navy Gradient with Noise */}
      <div className="relative bg-gradient-to-b from-[#07162C] to-[#0B1B33] overflow-hidden">
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
        
        <div className="container-main relative z-10 pt-14 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="lg:pr-6">
              <div className="flex flex-col mb-4">
                <span className="text-3xl font-playfair font-bold text-off-white tracking-wide">MSE</span>
                <span className="text-[10px] text-off-white/50 tracking-[0.2em] uppercase mt-1">Magna SSK Exim Solutions Pvt Ltd</span>
              </div>
              <p className="text-sm text-off-white/70 leading-relaxed mb-6">
                Premium exporter of spices, oleoresins, and dehydrated vegetables. Committed to quality, compliance, and global partnerships.
              </p>
              {/* C) FOOTER CTA BUTTON - Glossy Gold */}
              <Button href="/contact" variant="primary" size="md">
                Request Quote
              </Button>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-playfair text-base text-off-white mb-4 pb-2 border-b border-white/10">Quick Links</h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-off-white/70 hover:text-gold-accent hover:underline underline-offset-2 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-playfair text-base text-off-white mb-4 pb-2 border-b border-white/10">Products</h4>
              <ul className="space-y-2.5">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href} 
                      className="text-sm text-off-white/70 hover:text-gold-accent hover:underline underline-offset-2 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-playfair text-base text-off-white mb-4 pb-2 border-b border-white/10">Contact</h4>
              <ul className="space-y-2 text-sm text-off-white/70 leading-relaxed">
                <li>123 Export Avenue, Industrial Area</li>
                <li>City, State 000000</li>
                <li>India</li>
                <li className="pt-3">
                  <a 
                    href="mailto:info@mseexports.com" 
                    className="hover:text-gold-accent hover:underline underline-offset-2 transition-colors duration-200"
                  >
                    info@mseexports.com
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+910000000000" 
                    className="hover:text-gold-accent hover:underline underline-offset-2 transition-colors duration-200"
                  >
                    +91 00000 00000
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* D) FOOTER BOTTOM BAR - Darker Navy */}
      <div className="bg-[#061225]">
        <div className="container-main py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-off-white/40">
              &copy; {new Date().getFullYear()} Magna SSK Exim Solutions Pvt Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link 
                href="#" 
                className="text-xs text-off-white/40 hover:text-gold-accent hover:underline underline-offset-2 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                href="#" 
                className="text-xs text-off-white/40 hover:text-gold-accent hover:underline underline-offset-2 transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
