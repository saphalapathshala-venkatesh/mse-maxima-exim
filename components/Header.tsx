'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Button from './Button'
import { ChevronDown } from 'lucide-react'

const productCategories = [
  { name: 'Spices', href: '/products/spices' },
  { name: 'Vegetables', href: '/products/vegetables' },
  { name: 'Cocoa', href: '/products/cocoa' },
  { name: 'Millets & Grains', href: '/products/grains' },
]

const navItems = [
  { name: 'Quality', href: '/quality' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

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
            <Link
              href="/"
              className="text-sm text-text-main hover:text-primary transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <div ref={dropdownRef} className="relative group">
              <button className="flex items-center gap-1 text-sm text-text-main hover:text-primary transition-colors duration-200 font-medium">
                Products
                <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-xl shadow-lg border border-border-light py-2 min-w-[200px]">
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      className="block px-5 py-2.5 text-sm text-text-main hover:text-primary hover:bg-surface transition-colors"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
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
            <a href="https://wa.link/j2fx0w" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full relative overflow-hidden whitespace-nowrap px-4 py-2 text-xs bg-primary text-white font-semibold shadow-[0_2px_12px_rgba(45,106,79,0.25)] hover:bg-primary-dark hover:shadow-[0_4px_16px_rgba(45,106,79,0.35)] hover:-translate-y-0.5 active:translate-y-0"><span className="relative z-10">WhatsApp</span></a>
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
              <Link
                href="/"
                className="text-sm text-text-main hover:text-primary hover:bg-surface rounded-lg px-4 py-3 transition-colors duration-200 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <button
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="flex items-center justify-between text-sm text-text-main hover:text-primary hover:bg-surface rounded-lg px-4 py-3 transition-colors duration-200 font-medium"
              >
                Products
                <ChevronDown size={14} className={`transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileProductsOpen && (
                <div className="pl-4 space-y-1">
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.name}
                      href={cat.href}
                      className="block text-sm text-text-muted hover:text-primary hover:bg-surface rounded-lg px-4 py-2.5 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              )}
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
                <a href="https://wa.link/j2fx0w" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full relative overflow-hidden whitespace-nowrap px-6 py-3 text-sm bg-primary text-white font-semibold shadow-[0_2px_12px_rgba(45,106,79,0.25)] hover:bg-primary-dark hover:shadow-[0_4px_16px_rgba(45,106,79,0.35)] hover:-translate-y-0.5 active:translate-y-0"><span className="relative z-10">WhatsApp</span></a>
              </div>
            </nav>
          </div>
        )}
      </div>
      <div className="w-full flex justify-center">
        <div className="container-main">
          <div className="h-[2px] bg-gradient-to-r from-primary via-saffron to-primary rounded-full" />
        </div>
      </div>
    </header>
  )
}
