'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { MapPin, Mail, Phone } from 'lucide-react'
import { allProducts } from '@/data/products'

const countries = [
  { name: 'United States', code: '+1' },
  { name: 'United Kingdom', code: '+44' },
  { name: 'United Arab Emirates', code: '+971' },
  { name: 'Saudi Arabia', code: '+966' },
  { name: 'Germany', code: '+49' },
  { name: 'France', code: '+33' },
  { name: 'Netherlands', code: '+31' },
  { name: 'Canada', code: '+1' },
  { name: 'Australia', code: '+61' },
  { name: 'Singapore', code: '+65' },
  { name: 'Malaysia', code: '+60' },
  { name: 'Japan', code: '+81' },
  { name: 'South Korea', code: '+82' },
  { name: 'China', code: '+86' },
  { name: 'India', code: '+91' },
  { name: 'Indonesia', code: '+62' },
  { name: 'Thailand', code: '+66' },
  { name: 'Vietnam', code: '+84' },
  { name: 'Bangladesh', code: '+880' },
  { name: 'Sri Lanka', code: '+94' },
  { name: 'South Africa', code: '+27' },
  { name: 'Nigeria', code: '+234' },
  { name: 'Kenya', code: '+254' },
  { name: 'Egypt', code: '+20' },
  { name: 'Brazil', code: '+55' },
  { name: 'Mexico', code: '+52' },
  { name: 'Turkey', code: '+90' },
  { name: 'Russia', code: '+7' },
  { name: 'Spain', code: '+34' },
  { name: 'Italy', code: '+39' },
]

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="pt-[74px] bg-white min-h-screen" />}>
      <ContactPageInner />
    </Suspense>
  )
}

function ContactPageInner() {
  const searchParams = useSearchParams()
  const preselectedProduct = searchParams.get('product') || ''

  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    phone: '',
    product: '',
    message: '',
  })
  const [phoneCode, setPhoneCode] = useState('')

  useEffect(() => {
    if (preselectedProduct) {
      const found = allProducts.find(p => p.slug === preselectedProduct)
      if (found) {
        setFormData(prev => ({ ...prev, product: found.name }))
      }
    }
  }, [preselectedProduct])

  const selectedCountry = countries.find(c => c.name === formData.country)

  useEffect(() => {
    if (selectedCountry) {
      setPhoneCode(selectedCountry.code)
    }
  }, [selectedCountry])

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email'
    if (!formData.country) newErrors.country = 'Please select a country'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => { const n = { ...prev }; delete n[name]; return n })
    }
  }

  const inputClass = (field: string) =>
    `w-full px-4 py-3 bg-white border rounded-xl text-text-main placeholder-text-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm ${
      errors[field] ? 'border-red-400' : 'border-border-light'
    }`

  return (
    <div className="pt-[74px] bg-white min-h-screen">
      <div className="container-main py-10 sm:py-14">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          <div className="lg:col-span-2">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase text-primary bg-primary/10 rounded-full mb-4">
              Get in Touch
            </span>
            <h1 className="font-playfair text-3xl sm:text-4xl text-text-main mb-5">Contact Us</h1>
            <p className="text-text-muted mb-8 leading-relaxed text-sm sm:text-base">
              Ready to discuss your requirements? Fill out the form or reach out to us directly. Our team will respond within 24 business hours.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-main text-sm mb-1">Registered Office</h3>
                  <p className="text-sm text-text-muted">
                    123 Export Avenue, Industrial Area<br />
                    City, State 000000, India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-main text-sm mb-1">Email</h3>
                  <a href="mailto:info@mseexports.com" className="text-sm text-primary hover:text-saffron transition-colors">
                    info@mseexports.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-main text-sm mb-1">Phone</h3>
                  <a href="tel:+910000000000" className="text-sm text-primary hover:text-saffron transition-colors">
                    +91 00000 00000
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-surface rounded-2xl p-10 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-playfair text-2xl text-text-main mb-3">Thank You!</h2>
                <p className="text-text-muted mb-6">Your inquiry has been submitted. We&apos;ll get back to you within 24 business hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', country: '', phone: '', product: '', message: '' }); setErrors({}) }}
                  className="px-6 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-dark transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <div className="bg-surface rounded-2xl p-6 sm:p-8">
                <h2 className="font-playfair text-xl text-text-main mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-text-muted mb-1.5">Full Name *</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={inputClass('name')} placeholder="Your name" />
                      {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-text-muted mb-1.5">Email *</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputClass('email')} placeholder="you@company.com" />
                      {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="country" className="block text-xs font-medium text-text-muted mb-1.5">Country *</label>
                      <select id="country" name="country" value={formData.country} onChange={handleChange} className={inputClass('country')}>
                        <option value="">Select your country</option>
                        {countries.map((c) => (
                          <option key={c.name} value={c.name}>{c.name}</option>
                        ))}
                      </select>
                      {errors.country && <p className="text-xs text-red-500 mt-1">{errors.country}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-text-muted mb-1.5">Phone</label>
                      <div className="flex gap-2">
                        <span className="flex items-center px-3 bg-white border border-border-light rounded-xl text-sm text-text-muted min-w-[60px] justify-center">
                          {phoneCode || '—'}
                        </span>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass('phone')} placeholder="Phone number" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product" className="block text-xs font-medium text-text-muted mb-1.5">Product Interested In</label>
                    <select id="product" name="product" value={formData.product} onChange={handleChange} className={inputClass('product')}>
                      <option value="">Select a product</option>
                      {allProducts.map((p) => (
                        <option key={p.slug} value={p.name}>{p.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-text-muted mb-1.5">Message *</label>
                    <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className={`${inputClass('message')} resize-none`} placeholder="Tell us about your requirements..." />
                    {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                  </div>

                  <button type="submit" className="w-full py-3.5 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-all shadow-md text-sm">
                    Submit Inquiry
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
