'use client'

import { useState } from 'react'
import Link from 'next/link'
import Button from './Button'

const navItems = [
  { name: 'Products', href: '/products' },
  { name: 'Quality', href: '/quality' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-primary/95 backdrop-blur-sm border-b border-card-border">
      <div className="container-main">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex flex-col">
            <span className="text-3xl font-playfair font-bold text-off-white tracking-wide">MSE</span>
            <span className="text-[10px] text-muted-text tracking-[0.2em] uppercase">Magna SSK Exim Solutions Pvt Ltd</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-text hover:text-off-white transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button href="/contact" variant="primary">Request Quote</Button>
            <Button href="#" variant="outline">Download Catalogue</Button>
          </div>

          <button
            className="lg:hidden p-2 text-off-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-card-border">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-text hover:text-off-white transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Button href="/contact" variant="primary">Request Quote</Button>
                <Button href="#" variant="outline">Download Catalogue</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
