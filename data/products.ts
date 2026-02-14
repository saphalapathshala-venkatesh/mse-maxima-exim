import { products, categories } from './assets'

export interface Product {
  name: string
  slug: string
  category: 'Spices' | 'Vegetables' | 'Cocoa' | 'Grains'
  description: string
  image: string
  gallery: string[]
  specs: string[]
}

export const allProducts: Product[] = [
  {
    name: 'Dry Red Chilli',
    slug: 'dry-red-chilli',
    category: 'Spices',
    description: 'Premium export-grade dried red chillies sourced from the finest farms across India. Available in various heat levels (Teja, Byadgi, S4/S7, Wrinkled) with ASTA color values ranging from 60 to 220. Carefully sorted, cleaned, and packed to meet international food safety standards.',
    image: products.dryRedChilli,
    gallery: [products.dryRedChilli, products.chilliPowder],
    specs: ['Moisture: ≤12%', 'Heat: 15,000–80,000 SHU', 'ASTA Color: 60–220', 'Packaging: 25/50 KG PP bags'],
  },
  {
    name: 'Chilli Powder',
    slug: 'chilli-powder',
    category: 'Spices',
    description: 'Finely ground, vibrant red chilli powder made from selected dried chillies. Available in different mesh sizes and heat levels. Steam-sterilized for safe consumption with consistent color and pungency across batches.',
    image: products.chilliPowder,
    gallery: [products.chilliPowder, products.dryRedChilli],
    specs: ['Mesh: 40–80', 'Moisture: ≤10%', 'Sterilization: Steam / ETO', 'Packaging: 25 KG craft bags'],
  },
  {
    name: 'Turmeric Rhizomes',
    slug: 'turmeric-rhizomes',
    category: 'Spices',
    description: 'High-curcumin turmeric rhizomes (fingers and bulbs) from premium growing regions. Polished and unpolished variants available. Known for deep golden color and rich aroma, meeting international quality benchmarks.',
    image: products.turmericRhizomes,
    gallery: [products.turmericRhizomes, products.turmericPowder],
    specs: ['Curcumin: 2–5%', 'Moisture: ≤12%', 'Grades: Finger / Bulb', 'Packaging: 25/50 KG jute bags'],
  },
  {
    name: 'Turmeric Powder',
    slug: 'turmeric-powder',
    category: 'Spices',
    description: 'Lab-tested golden turmeric powder with high curcumin content. Processed in hygienic facilities with strict contamination controls. Ideal for food processing, seasoning blends, and health supplement applications.',
    image: products.turmericPowder,
    gallery: [products.turmericPowder, products.turmericRhizomes],
    specs: ['Curcumin: 2–5%', 'Mesh: 60–100', 'Moisture: ≤10%', 'Sterilization: Available'],
  },
  {
    name: 'Black Pepper',
    slug: 'black-pepper',
    category: 'Spices',
    description: 'Bold and aromatic black peppercorns in Malabar and Tellicherry grades. Sun-dried and machine-cleaned for uniform size. High piperine content ensures excellent flavor for culinary and industrial applications.',
    image: products.blackPepper,
    gallery: [products.blackPepper, products.cinnamon],
    specs: ['Piperine: ≥4%', 'Moisture: ≤12%', 'Grades: MG1 / TGSEB', 'Packaging: 25/50 KG PP bags'],
  },
  {
    name: 'Cardamom',
    slug: 'cardamom',
    category: 'Spices',
    description: 'Fragrant green cardamom pods hand-picked from plantations in Kerala and Karnataka. Carefully dried to preserve essential oil content and vibrant green color. Available in multiple size grades for export markets.',
    image: products.cardamom,
    gallery: [products.cardamom, products.cinnamon],
    specs: ['Size: 6–8mm / 7–8mm', 'Moisture: ≤12%', 'Essential Oil: ≥3%', 'Packaging: 5/10/25 KG cartons'],
  },
  {
    name: 'Cinnamon',
    slug: 'cinnamon',
    category: 'Spices',
    description: 'Premium cinnamon sticks (quills) and split cassia bark sourced from certified suppliers. Rich aroma and warm flavor profile suitable for baking, beverages, and food processing applications worldwide.',
    image: products.cinnamon,
    gallery: [products.cinnamon, products.cardamom],
    specs: ['Type: Cassia / Ceylon', 'Moisture: ≤14%', 'Oil Content: ≥1%', 'Packaging: 25 KG cartons'],
  },
  {
    name: 'Cocoa Beans',
    slug: 'cocoa-beans',
    category: 'Cocoa',
    description: 'Export-grade fermented and dried cocoa beans meeting international cocoa standards. Carefully processed to develop rich chocolate flavor and aroma. Suitable for chocolate manufacturing and cocoa processing industries.',
    image: products.cocoaBeans,
    gallery: [products.cocoaBeans],
    specs: ['Fermentation: 5–7 days', 'Moisture: ≤7.5%', 'Bean Count: ≤100 per 100g', 'Packaging: 60 KG jute bags'],
  },
  {
    name: 'Onions',
    slug: 'onions',
    category: 'Vegetables',
    description: 'Fresh red and white onions from Nashik and other prime growing regions. Sorted by size and quality for export. Available year-round with consistent supply chain and cold storage facilities to maintain freshness.',
    image: products.onions,
    gallery: [products.onions, products.greenChillies],
    specs: ['Varieties: Red / White / Rose', 'Size: 40–80mm', 'Shelf Life: 45–60 days', 'Packaging: 5/10/25 KG mesh bags'],
  },
  {
    name: 'Green Chillies',
    slug: 'green-chillies',
    category: 'Vegetables',
    description: 'Farm-fresh spicy green chillies harvested at peak ripeness. Available in varieties like Bullet, Finger Hot, and Bird Eye. Packed in controlled atmosphere packaging for extended freshness during export transit.',
    image: products.greenChillies,
    gallery: [products.greenChillies, products.onions],
    specs: ['Varieties: Bullet / Finger Hot', 'Heat: Medium–High', 'Shelf Life: 15–20 days', 'Packaging: 5/10 KG cartons'],
  },
  {
    name: 'Ragi (Finger Millet)',
    slug: 'ragi',
    category: 'Grains',
    description: 'Nutritious finger millet (ragi) rich in calcium and dietary fiber. Sourced from organic and conventional farms. Increasingly popular in health-conscious markets worldwide for its superior nutritional profile.',
    image: products.ragi,
    gallery: [products.ragi, products.bajra, products.jowar],
    specs: ['Protein: ≥7%', 'Moisture: ≤12%', 'Calcium: ~344mg/100g', 'Packaging: 25/50 KG PP bags'],
  },
  {
    name: 'Bajra (Pearl Millet)',
    slug: 'bajra',
    category: 'Grains',
    description: 'Wholesome pearl millet grains known for high energy content and essential minerals. Suitable for flour production, animal feed, and health food applications. Sourced from Rajasthan and Gujarat growing regions.',
    image: products.bajra,
    gallery: [products.bajra, products.ragi, products.jowar],
    specs: ['Protein: ≥10%', 'Moisture: ≤12%', 'Iron: ~8mg/100g', 'Packaging: 25/50 KG PP bags'],
  },
  {
    name: 'Jowar (Sorghum)',
    slug: 'jowar',
    category: 'Grains',
    description: 'Gluten-free sorghum grains in demand across health food markets. Available in white and red varieties for diverse applications including flour milling, brewing, and animal feed. Naturally drought-resistant crop.',
    image: products.jowar,
    gallery: [products.jowar, products.ragi, products.bajra],
    specs: ['Varieties: White / Red', 'Protein: ≥9%', 'Moisture: ≤12%', 'Packaging: 25/50 KG PP bags'],
  },
]

export const categoryInfo = {
  spices: {
    title: 'Spices',
    slug: 'spices',
    description: 'Premium whole and ground spices sourced from the finest farms across India. Each batch undergoes rigorous quality testing for purity, aroma, and compliance with international food safety standards.',
    image: categories.spices,
  },
  vegetables: {
    title: 'Vegetables',
    slug: 'vegetables',
    description: 'Fresh export-quality vegetables processed in state-of-the-art facilities. Our supply chain ensures consistent quality from farm to port, with cold storage and controlled atmosphere packaging.',
    image: categories.vegetables,
  },
  cocoa: {
    title: 'Cocoa',
    slug: 'cocoa',
    description: 'Export-grade cocoa beans carefully fermented and dried to develop rich chocolate flavor. Meeting international cocoa standards for the global chocolate and confectionery industry.',
    image: categories.cocoa,
  },
  grains: {
    title: 'Millets & Grains',
    slug: 'grains',
    description: 'Nutritious millets and grains including ragi, bajra, and jowar. Increasingly popular in health-conscious markets worldwide for their superior nutritional profiles and gluten-free properties.',
    image: categories.grains,
  },
}

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find(p => p.slug === slug)
}

export function getProductsByCategory(category: string): Product[] {
  const catMap: Record<string, string> = {
    spices: 'Spices',
    vegetables: 'Vegetables',
    cocoa: 'Cocoa',
    grains: 'Grains',
  }
  return allProducts.filter(p => p.category === (catMap[category] || category))
}
