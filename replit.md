# MSE Website - Premium Export Company

## Overview
A premium, bright, category-driven export company website for Magna SSK Exim Solutions Pvt Ltd (MSE), built with Next.js 14+ App Router, TypeScript, and Tailwind CSS. The website showcases 13 products across 4 categories (Spices, Vegetables, Cocoa, Millets & Grains) with a white/bright modern design, Products dropdown navigation, individual product detail pages, and a contact form with country-based phone code.

## Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Playfair Display (headings), Inter (body) via next/font
- **Icons**: lucide-react
- **Images**: Local images in /public/images/, managed via `data/assets.ts` registry

## Design System
- **Background**: #FFFFFF (white)
- **Surface**: #EEF1F4 (light gray for alternate sections)
- **Primary (Green)**: #2D6A4F (buttons, links, accents)
- **CTA (Saffron)**: #E09F3E (primary CTA buttons, highlights)
- **Text Main**: #343A40 (body text)
- **Text Muted**: #6C757D (secondary text)
- **Border Light**: #DEE2E6

## Button Styles
- **Primary**: Saffron (#E09F3E) with white text, rounded-full
- **Secondary**: Green (#2D6A4F) with white text, rounded-full
- **Outline**: Transparent with green border, fills on hover

## Project Structure
```
app/
├── layout.tsx              # Root layout with fonts, Header, Footer
├── page.tsx                # Homepage (carousel, category cards, trust, certs, CTA)
├── globals.css             # Global styles, Tailwind, animations
├── products/
│   ├── page.tsx            # Redirects to /products/spices
│   ├── spices/page.tsx     # Spices category page
│   ├── vegetables/page.tsx # Vegetables category page
│   ├── cocoa/page.tsx      # Cocoa category page
│   └── grains/page.tsx     # Millets & Grains category page
├── product/
│   └── [slug]/page.tsx     # Dynamic product detail page (gallery, specs, CTA)
├── quality/page.tsx        # Quality assurance page
├── certifications/page.tsx # Certifications page
├── about/page.tsx          # About page
└── contact/page.tsx        # Contact form (country dropdown, phone code, validation)

components/
├── Header.tsx          # Sticky header with Products dropdown (hover/click)
├── Footer.tsx          # White footer with colored links
├── Button.tsx          # Rounded button component (primary/secondary/outline)
├── Section.tsx         # Reusable section wrapper
├── ProductBanner.tsx   # 5-banner carousel with touch/swipe support

data/
├── assets.ts           # Central image path registry (single source of truth)
└── products.ts         # Product metadata (name, slug, category, description, gallery, specs)

public/images/
├── banners/            # Homepage carousel banners (hero-*.jpg)
├── categories/         # Category page header images
├── products/           # Individual product images (awaiting uploads)
└── site/               # Site-wide images (facility, quality lab)
```

## Data Layer
- **data/assets.ts**: Single source of truth for all image paths. No hardcoded paths in components.
- **data/products.ts**: Product metadata (imports from assets.ts). Contains:
  - `allProducts[]` - Array of 13 products with name, slug, category, description, image, gallery, specs
  - `categoryInfo{}` - Category metadata (title, slug, description, image)
  - `getProductBySlug()` - Lookup product by URL slug
  - `getProductsByCategory()` - Filter products by category

## Navigation
- **Products** is a dropdown with 4 categories (hover on desktop, click on mobile):
  - Spices → /products/spices
  - Vegetables → /products/vegetables
  - Cocoa → /products/cocoa
  - Millets & Grains → /products/grains
- Other nav: Quality, Certifications, About, Contact

## Key Features
1. **White/Bright Theme** - Clean, modern international exporter feel
2. **Sticky Header** - White with green→saffron→green gradient divider, Products dropdown
3. **5-Banner Carousel** - Image-dominant with category badges, touch/swipe, Get Quote CTA
4. **4 Category Cards** - Homepage shows category cards linking to category pages
5. **Credibility Strip** - 50+ countries, 100+ MT capacity, 13+ products, 4 certifications
6. **Why Choose MSE** - 4 trust points (Traceability, Export Standards, Quality Testing, Logistics)
7. **Certifications Strip** - 6 certification badges on homepage
8. **Category Pages** - Banner + intro + filtered product grid per category
9. **Product Detail Pages** - /product/[slug] with 2-4 image gallery, specs, related products, contact CTA
10. **Contact Form** - Country dropdown with auto phone code, product selector, validation
11. **CTA Section** - Green background CTA section on homepage linking to Contact

## Products (13 items across 4 categories)
**Spices (7):** Dry Red Chilli, Chilli Powder, Turmeric Rhizomes, Turmeric Powder, Black Pepper, Cardamom, Cinnamon
**Cocoa (1):** Cocoa Beans
**Vegetables (2):** Onions, Green Chillies
**Grains (3):** Ragi (Finger Millet), Bajra (Pearl Millet), Jowar (Sorghum)

## Running the Project
- Development: `npm run dev` (runs on port 5000)
- Build: `npm run build`
- Start: `npm start`

## Still Missing (awaiting manual upload)
- All 13 product images in `public/images/products/`
