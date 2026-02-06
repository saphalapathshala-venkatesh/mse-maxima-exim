'use client'

import { useState } from 'react'
import { MapPin, Mail, Phone } from 'lucide-react'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    port: '',
    product: '',
    quantity: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const inputClass = 'w-full px-4 py-3 bg-white border border-border-light rounded-xl text-text-main placeholder-text-light focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm'

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
                  onClick={() => { setSubmitted(false); setFormData({ name: '', company: '', email: '', phone: '', country: '', port: '', product: '', quantity: '', message: '' }) }}
                  className="px-6 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-dark transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <div className="bg-surface rounded-2xl p-6 sm:p-8">
                <h2 className="font-playfair text-xl text-text-main mb-6">Request a Quote</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-text-muted mb-1.5">Full Name *</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs font-medium text-text-muted mb-1.5">Company</label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className={inputClass} placeholder="Your company" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-text-muted mb-1.5">Email *</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className={inputClass} placeholder="you@company.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs font-medium text-text-muted mb-1.5">Phone</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+1 234 567 8900" />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-xs font-medium text-text-muted mb-1.5">Country *</label>
                      <input type="text" id="country" name="country" required value={formData.country} onChange={handleChange} className={inputClass} placeholder="Your country" />
                    </div>
                    <div>
                      <label htmlFor="port" className="block text-xs font-medium text-text-muted mb-1.5">Delivery Port/City</label>
                      <input type="text" id="port" name="port" value={formData.port} onChange={handleChange} className={inputClass} placeholder="Destination port" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="product" className="block text-xs font-medium text-text-muted mb-1.5">Product of Interest</label>
                      <select id="product" name="product" value={formData.product} onChange={handleChange} className={inputClass}>
                        <option value="">Select a product</option>
                        <option>Dry Red Chilies</option>
                        <option>Chilli Powder</option>
                        <option>Turmeric Rhizomes</option>
                        <option>Turmeric Powder</option>
                        <option>Black Pepper</option>
                        <option>Cardamom</option>
                        <option>Cinnamon</option>
                        <option>Cocoa Beans</option>
                        <option>Onions</option>
                        <option>Green Chilies</option>
                        <option>Ragi (Finger Millet)</option>
                        <option>Bajra (Pearl Millet)</option>
                        <option>Jowar (Sorghum)</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-xs font-medium text-text-muted mb-1.5">Quantity (KG)</label>
                      <input type="text" id="quantity" name="quantity" value={formData.quantity} onChange={handleChange} className={inputClass} placeholder="e.g. 100 KG" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-text-muted mb-1.5">Message / Requirements *</label>
                    <textarea id="message" name="message" required rows={4} value={formData.message} onChange={handleChange} className={`${inputClass} resize-none`} placeholder="Tell us about your requirements..." />
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
