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
  { name: 'Spices (Whole)', href: '/products/spices?type=whole' },
  { name: 'Spices (Powder)', href: '/products/spices?type=powder' },
  { name: 'Vegetables', href: '/products/vegetables' },
  { name: 'Cocoa Beans', href: '/products/cocoa' },
  { name: 'Millets & Grains', href: '/products/grains' },
]

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-light">
      <div className="container-main pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div>
            <div className="flex flex-col mb-4">
              <span className="text-2xl font-playfair font-bold text-primary tracking-wide">MSE</span>
              <span className="text-[8px] text-text-muted tracking-[0.15em] uppercase mt-0.5">Magna SSK Exim Solutions Pvt Ltd</span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed mb-5">
              Premium exporter of spices, vegetables, grains and cocoa beans. Committed to quality, compliance, and global partnerships.
            </p>
            <Button href="/contact" variant="primary" size="md">
              Request a Quote
            </Button>
          </div>

          <div>
            <h4 className="font-playfair text-base text-text-main font-semibold mb-4">Company</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary hover:text-saffron hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-base text-text-main font-semibold mb-4">Products</h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary hover:text-saffron hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Edit contact address here */}
          <div>
            <h4 className="font-playfair text-base text-text-main font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-text-muted leading-relaxed">
              <li>1-26-4/E, 4th Floor,</li>
              <li>Necklace Road, SVR Circle,</li>
              <li>Tadepalligudem, West Godavari,</li>
              <li>Andhra Pradesh - 534101</li>
              <li className="pt-3">
                <a
                  href="mailto:we@magnasskexim.in"
                  className="text-primary hover:text-saffron hover:underline underline-offset-4 transition-colors duration-200"
                >
                  we@magnasskexim.in
                </a>
              </li>
              <li>
                <a
                  href="tel:+919281437604"
                  className="text-primary hover:text-saffron hover:underline underline-offset-4 transition-colors duration-200"
                >
                  +91 9281437604
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border-light">
        <div className="container-main py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs text-text-light">
              &copy; {new Date().getFullYear()} Magna SSK Exim Solutions Pvt Ltd. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-xs text-text-light hover:text-primary transition-colors duration-200">Privacy Policy</Link>
              <Link href="#" className="text-xs text-text-light hover:text-primary transition-colors duration-200">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
