import Section from '@/components/Section'
import Card from '@/components/Card'

const products = [
  {
    title: 'Spices',
    description: 'Premium whole and ground spices including turmeric, chili, cumin, coriander, and more. Sourced from the finest farms across India.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80',
    href: '/products/spices',
  },
  {
    title: 'Oleoresins',
    description: 'Natural extracts with concentrated flavor, aroma, and color. Perfect for food processing, pharmaceuticals, and cosmetics industries.',
    image: 'https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=800&q=80',
    href: '/products/oleoresins',
  },
  {
    title: 'Vegetables',
    description: 'Dehydrated and fresh vegetables processed in state-of-the-art facilities. Meeting international quality and safety standards.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800&q=80',
    href: '/products/vegetables',
  },
]

export default function ProductsPage() {
  return (
    <div className="pt-20">
      <Section>
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl md:text-5xl text-off-white mb-4">Our Products</h1>
          <p className="text-muted-text max-w-2xl mx-auto">
            We export a comprehensive range of agri-products, each meeting the highest international quality standards and certifications.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.title}
              title={product.title}
              description={product.description}
              imageSrc={product.image}
              imageAlt={product.title}
              href={product.href}
              buttonText="Explore Category"
            />
          ))}
        </div>
      </Section>

      <Section className="bg-navy-alt/30">
        <div className="text-center">
          <h2 className="font-playfair text-2xl md:text-3xl text-off-white mb-6">Custom Requirements?</h2>
          <p className="text-muted-text max-w-2xl mx-auto mb-8">
            We offer customized solutions for specific product requirements, packaging needs, and volume specifications.
          </p>
          <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium bg-gold-accent text-navy-primary hover:bg-gold-accent/90 rounded-sm transition-all duration-200">
            Request Custom Quote
          </a>
        </div>
      </Section>
    </div>
  )
}
