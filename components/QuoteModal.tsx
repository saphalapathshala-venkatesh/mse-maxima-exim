'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
  productName?: string
}

const quantityOptions = ['10 KG', '25 KG', '50 KG', '100 KG', 'Custom']

const pricePerKg: Record<string, number> = {
  'Dry Red Chilies': 8.50,
  'Chilli Powder': 9.00,
  'Turmeric Rhizomes': 7.50,
  'Turmeric Powder': 8.00,
  'Black Pepper': 15.00,
  'Cardamom': 45.00,
  'Cinnamon': 12.00,
  'Cocoa Beans': 6.50,
  'Onions': 2.50,
  'Green Chilies': 4.00,
  'Ragi (Finger Millet)': 3.50,
  'Bajra (Pearl Millet)': 3.00,
  'Jowar (Sorghum)': 3.20,
}

export default function QuoteModal({ isOpen, onClose, productName = '' }: QuoteModalProps) {
  const [step, setStep] = useState<1 | 2>(1)
  const [selectedProduct, setSelectedProduct] = useState(productName)
  const [selectedQuantity, setSelectedQuantity] = useState('25 KG')
  const [customQuantity, setCustomQuantity] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: '', company: '', email: '', phone: '', country: '', port: '', message: ''
  })

  useEffect(() => {
    if (productName) setSelectedProduct(productName)
  }, [productName])

  useEffect(() => {
    if (isOpen) {
      setStep(1)
      setSubmitted(false)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  const quantityInKg = selectedQuantity === 'Custom'
    ? (parseFloat(customQuantity) || 0)
    : parseFloat(selectedQuantity)

  const unitPrice = pricePerKg[selectedProduct] || 0
  const totalAmount = (quantityInKg * unitPrice).toFixed(2)

  const handleGetQuote = () => {
    if (!selectedProduct) return
    setStep(2)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleContactChange = (field: string, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white w-full sm:w-[520px] sm:max-h-[90vh] max-h-[85vh] overflow-y-auto rounded-t-2xl sm:rounded-2xl shadow-2xl animate-slide-up">
        <div className="sticky top-0 bg-white z-10 flex items-center justify-between px-6 py-4 border-b border-border-light">
          <h3 className="font-playfair text-lg text-text-main font-semibold">
            {submitted ? 'Quote Requested!' : step === 1 ? 'Get a Quote' : 'Contact Details'}
          </h3>
          <button onClick={onClose} className="p-1.5 rounded-full hover:bg-surface transition-colors" aria-label="Close">
            <X size={20} className="text-text-muted" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="font-playfair text-xl text-text-main mb-2">Thank You!</h4>
              <p className="text-text-muted text-sm mb-2">Your quote request for <strong>{selectedProduct}</strong> has been submitted.</p>
              <p className="text-text-muted text-sm">We&apos;ll get back to you within 24 hours.</p>
              <button onClick={onClose} className="mt-6 px-6 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-dark transition-colors">
                Close
              </button>
            </div>
          ) : step === 1 ? (
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-text-main mb-1.5">Product</label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full px-4 py-2.5 border border-border-light rounded-lg text-sm text-text-main bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                >
                  <option value="">Select a product</option>
                  {Object.keys(pricePerKg).map(p => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-main mb-1.5">Quantity</label>
                <div className="flex flex-wrap gap-2">
                  {quantityOptions.map(q => (
                    <button
                      key={q}
                      onClick={() => setSelectedQuantity(q)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedQuantity === q
                          ? 'bg-primary text-white shadow-sm'
                          : 'bg-surface text-text-main hover:bg-primary/10'
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>
                {selectedQuantity === 'Custom' && (
                  <div className="mt-3 flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      value={customQuantity}
                      onChange={(e) => setCustomQuantity(e.target.value)}
                      placeholder="Enter quantity"
                      className="flex-1 px-4 py-2.5 border border-border-light rounded-lg text-sm text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
                    />
                    <span className="text-sm text-text-muted font-medium">KG</span>
                  </div>
                )}
              </div>

              {selectedProduct && unitPrice > 0 && (
                <div className="bg-surface rounded-xl p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Price per KG</span>
                    <span className="text-text-main font-medium">${unitPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-muted">Quantity</span>
                    <span className="text-text-main font-medium">{quantityInKg} KG</span>
                  </div>
                  <div className="border-t border-border-light pt-2 flex justify-between">
                    <span className="text-text-main font-semibold">Estimated Total</span>
                    <span className="text-primary font-bold text-lg">${totalAmount}</span>
                  </div>
                </div>
              )}

              <button
                onClick={handleGetQuote}
                disabled={!selectedProduct}
                className="w-full py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-md"
              >
                Get Quote
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-surface rounded-xl p-3 flex items-center justify-between text-sm">
                <span className="text-text-muted">Product:</span>
                <span className="font-medium text-text-main">{selectedProduct} — {quantityInKg} KG</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-text-muted mb-1">Name *</label>
                  <input required type="text" value={contactForm.name} onChange={(e) => handleContactChange('name', e.target.value)} className="w-full px-3 py-2.5 border border-border-light rounded-lg text-sm text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-muted mb-1">Company</label>
                  <input type="text" value={contactForm.company} onChange={(e) => handleContactChange('company', e.target.value)} className="w-full px-3 py-2.5 border border-border-light rounded-lg text-sm text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-muted mb-1">Email *</label>
                  <input required type="email" value={contactForm.email} onChange={(e) => handleContactChange('email', e.target.value)} className="w-full px-3 py-2.5 border border-border-light rounded-lg text-sm text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-muted mb-1">Phone</label>
                  <input type="tel" value={contactForm.phone} onChange={(e) => handleContactChange('phone', e.target.value)} className="w-full px-3 py-2.5 border border-border-light rounded-lg text-sm text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-muted mb-1">Country *</label>
                  <input required type="text" value={contactForm.country} onChange={(e) => handleContactChange('country', e.target.value)} className="w-full px-3 py-2.5 border border-border-light rounded-lg text-sm text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-text-muted mb-1">Delivery Port/City</label>
                  <input type="text" value={contactForm.port} onChange={(e) => handleContactChange('port', e.target.value)} className="w-full px-3 py-2.5 border border-border-light rounded-lg text-sm text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-text-muted mb-1">Message / Requirements</label>
                <textarea rows={3} value={contactForm.message} onChange={(e) => handleContactChange('message', e.target.value)} className="w-full px-3 py-2.5 border border-border-light rounded-lg text-sm text-text-main focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none resize-none" />
              </div>

              <div className="flex gap-3">
                <button type="button" onClick={() => setStep(1)} className="flex-1 py-3 border-2 border-border-light text-text-main rounded-full font-medium hover:bg-surface transition-colors text-sm">
                  Back
                </button>
                <button type="submit" className="flex-1 py-3 bg-saffron text-white font-semibold rounded-full hover:bg-saffron-dark transition-all shadow-md text-sm">
                  Submit Quote
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
