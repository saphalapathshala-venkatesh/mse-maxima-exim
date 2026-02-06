'use client'

import { useState, useEffect } from 'react'
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
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'}`}>
      <div className="container-main">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-playfair font-bold text-primary tracking-wide">MSE</span>
            <span className="text-[8px] text-text-muted tracking-[0.15em] uppercase leading-tight">Magna SSK Exim Solutions Pvt Ltd</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-text-main hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button href="/contact" variant="primary" size="sm">Request Quote</Button>
            <Button href="#" variant="outline" size="sm">Download Catalogue</Button>
          </div>

          <button
            className="lg:hidden p-2 text-text-main"
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
          <div className="lg:hidden py-4 border-t border-border-light animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-text-main hover:text-primary hover:bg-surface rounded-lg px-4 py-3 transition-colors duration-200 font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 px-4">
                <Button href="/contact" variant="primary" size="md">Request Quote</Button>
                <Button href="#" variant="outline" size="md">Download Catalogue</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
