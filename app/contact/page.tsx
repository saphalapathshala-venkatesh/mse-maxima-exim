'use client'

import { useState } from 'react'
import Section from '@/components/Section'
import Button from '@/components/Button'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry. We will get back to you shortly.')
    setFormData({ name: '', email: '', company: '', country: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="pt-20">
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h1 className="font-playfair text-4xl md:text-5xl text-off-white mb-6">Contact Us</h1>
            <p className="text-muted-text mb-8 leading-relaxed">
              Ready to discuss your requirements? Fill out the form or reach out to us directly. Our team will respond within 24 business hours.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-playfair text-lg text-off-white mb-2">Registered Office</h3>
                <p className="text-sm text-muted-text">
                  123 Export Avenue, Industrial Area<br />
                  City, State 000000<br />
                  India
                </p>
              </div>

              <div>
                <h3 className="font-playfair text-lg text-off-white mb-2">Email</h3>
                <a href="mailto:info@mseexports.com" className="text-sm text-gold-accent hover:underline">
                  info@mseexports.com
                </a>
              </div>

              <div>
                <h3 className="font-playfair text-lg text-off-white mb-2">Phone</h3>
                <a href="tel:+910000000000" className="text-sm text-gold-accent hover:underline">
                  +91 00000 00000
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/[0.08] border border-white/[0.14] rounded-xl p-8">
            <h2 className="font-playfair text-2xl text-off-white mb-6">Request a Quote</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-text mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-alt border border-card-border rounded-xl text-off-white placeholder-muted-text/50 focus:outline-none focus:border-gold-accent transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-muted-text mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-alt border border-card-border rounded-xl text-off-white placeholder-muted-text/50 focus:outline-none focus:border-gold-accent transition-colors duration-200"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm text-muted-text mb-2">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-alt border border-card-border rounded-xl text-off-white placeholder-muted-text/50 focus:outline-none focus:border-gold-accent transition-colors duration-200"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm text-muted-text mb-2">Country</label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-alt border border-card-border rounded-xl text-off-white placeholder-muted-text/50 focus:outline-none focus:border-gold-accent transition-colors duration-200"
                  placeholder="Your country"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-muted-text mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-navy-alt border border-card-border rounded-xl text-off-white placeholder-muted-text/50 focus:outline-none focus:border-gold-accent transition-colors duration-200 resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  )
}
