# MSE Website - Premium Export Company

## Overview
A premium, bright, image-first export company website for Magna SSK Exim Solutions Pvt Ltd (MSE), built with Next.js 14+ App Router, TypeScript, and Tailwind CSS. The website showcases spices, vegetables, grains, and cocoa beans with a white/bright modern design, Pinterest-style product grid, and interactive quote modal.

## Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Playfair Display (headings), Inter (body) via next/font
- **Icons**: lucide-react
- **Images**: Local images in /public/images/

## Design System (Updated Feb 2026)
- **Background**: #FFFFFF (white)
- **Surface**: #EEF1F4 (light gray for alternate sections)
- **Primary (Green)**: #2D6A4F (buttons, links, accents)
- **CTA (Saffron)**: #E09F3E (primary CTA buttons, highlights)
- **Text Main**: #343A40 (body text)
- **Text Muted**: #6C757D (secondary text)
- **Chili Red**: #C0392B (small accents only)
- **Border Light**: #DEE2E6

## Button Styles
- **Primary**: Saffron (#E09F3E) with white text, rounded-full
- **Secondary**: Green (#2D6A4F) with white text, rounded-full
- **Outline**: Transparent with green border, fills on hover

## Project Structure
```
app/
├── layout.tsx              # Root layout with fonts, Header, Footer
├── page.tsx                # Homepage (client component with quote modal)
├── globals.css             # Global styles, Tailwind, animations
├── products/
│   ├── page.tsx            # Products overview with filters
│   ├── spices/page.tsx     # Spices category
│   ├── oleoresins/page.tsx # Oleoresins category
│   └── vegetables/page.tsx # Vegetables category
├── quality/page.tsx        # Quality assurance page
├── certifications/page.tsx # Certifications page
├── about/page.tsx          # About page
└── contact/page.tsx        # Contact page with full form

components/
├── Header.tsx          # Sticky white header with scroll effect
├── Footer.tsx          # White footer with colored links
├── Button.tsx          # Rounded button component (primary/secondary/outline)
├── Section.tsx         # Reusable section wrapper
├── Card.tsx            # Card component (legacy)
├── ProductBanner.tsx   # 5-banner carousel with touch/swipe support
├── ProductGrid.tsx     # Pinterest-style masonry grid (13 products)
└── QuoteModal.tsx      # Quote modal with calculator + contact form

public/images/
├── oleoresins-new.png              # Oleoresins image (needs manual decision)
├── site/
│   ├── facility.jpg                # Facility/about image
│   └── quality-lab.png             # Quality lab image
├── banners/
│   ├── hero-spices-vegetables.png  # Main hero image
│   ├── hero-spices.jpg             # Spices banner image
│   ├── hero-vegetables.jpg         # Vegetables banner image
│   ├── hero-transition.png         # Hero transition overlay
│   ├── spices.jpg                  # Spices category banner
│   ├── vegetables.jpg              # Vegetables category banner
│   ├── oleoresins.jpg              # Oleoresins category banner
│   ├── export-bulk-spices.png      # Export banner image
│   ├── export-spices-banner.png    # Export banner image
│   ├── export-spices-vegetables.png# Export banner image
│   └── banner-spices-export.png    # Banner image
└── products/                       # (empty - ready for individual product images)
```

## Running the Project
- Development: `npm run dev` (runs on port 5000)
- Build: `npm run build`
- Start: `npm start`

## Key Features
1. **White/Bright Theme** - Clean, modern international exporter feel
2. **Sticky Header** - White with scroll shadow effect, hamburger mobile menu
3. **Hero Section** - 2-column layout (text left, image right), responsive
4. **5-Banner Carousel** - Image-dominant with minimal text overlay, touch/swipe
5. **Pinterest Product Grid** - 13 individual product tiles with masonry layout
6. **Quote Modal** - 2-step flow:
   - Step 1: Product selection, quantity picker, auto-calculated total
   - Step 2: Contact form with all fields pre-filled
7. **Filter System** - Category filters on /products page (All, Spices, Vegetables, Cocoa, Grains)
8. **Trust Strip** - 4 trust points with icons
9. **Contact Page** - Full form with all fields
10. **Colored Footer Links** - Green links with saffron hover

## Products (13 individual items)
- Dry Red Chilies, Chilli Powder, Turmeric Rhizomes, Turmeric Powder
- Black Pepper, Cardamom, Cinnamon
- Cocoa Beans
- Onions, Green Chilies
- Ragi (Finger Millet), Bajra (Pearl Millet), Jowar (Sorghum)

## Image Replacement Guide
To replace placeholder images with actual product photos:
1. Save new images to `/public/images/`
2. Use filenames like: `product-turmeric-rhizomes.jpg`, `banner-spices-whole.jpg`
3. Update references in `components/ProductGrid.tsx` (for product tiles)
4. Update references in `components/ProductBanner.tsx` (for banner carousel)
5. Recommended image sizes:
   - Banner images: 1920x800px (landscape)
   - Product tiles: 600x400px minimum
   - Hero image: 1200x800px

## Recent Changes (Feb 2026)
- **Complete Theme Overhaul** - Switched from navy to white/bright theme
  - Removed all navy backgrounds, replaced with white (#FFFFFF)
  - New primary green (#2D6A4F) and saffron (#E09F3E) accent colors
  - All text uses dark (#343A40) for readability on white
- **Pinterest Product Grid** - New ProductGrid.tsx with masonry layout
  - 13 individual product tiles (not grouped by category)
  - 4-column desktop, 2-3 column tablet, 1 column mobile
  - Hover zoom effect with shadow
- **Quote Modal** - New QuoteModal.tsx component
  - Auto-calculated pricing with quantity selection
  - 2-step flow (product selection → contact details)
  - Opens from banner "Get Quote" and product tile clicks
- **Updated All Pages** - Quality, Certifications, About, Contact
  - All pages now use white/bright theme consistently
  - Contact page has comprehensive form with all fields
  - Products page has category filter buttons
