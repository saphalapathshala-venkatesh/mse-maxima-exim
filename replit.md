# MSE Website - Premium Export Company

## Overview
A premium, bright, image-first export company website for Magna SSK Exim Solutions Pvt Ltd (MSE), built with Next.js 14+ App Router, TypeScript, and Tailwind CSS. The website showcases spices, vegetables, grains, and cocoa beans with a white/bright modern design, uniform product grid, and interactive quote modal.

## Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Playfair Display (headings), Inter (body) via next/font
- **Icons**: lucide-react
- **Images**: Local images in /public/images/, managed via `data/assets.ts` registry

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
├── Header.tsx          # Sticky white header with gradient divider
├── Footer.tsx          # White footer with colored links
├── Button.tsx          # Rounded button component (primary/secondary/outline)
├── Section.tsx         # Reusable section wrapper
├── Card.tsx            # Card component (legacy)
├── ProductBanner.tsx   # 5-banner carousel with touch/swipe support
├── ProductGrid.tsx     # Uniform grid (13 products + CTA card)
└── QuoteModal.tsx      # Quote modal with calculator + contact form

data/
└── assets.ts           # Central image path registry (single source of truth)

public/images/
├── banners/            # Banner/carousel images (banner-spices.jpg, etc.)
├── categories/         # Category page header images (category-spices.jpg, etc.)
├── products/           # Individual product images (dry-red-chillies.jpg, etc.)
└── site/               # Facility, quality lab, and general site images
    ├── facility.jpg
    └── quality-lab.png
```

## Image Registry (data/assets.ts)
All image paths are centralized in `data/assets.ts`. Components import from this registry instead of hardcoding paths. To add/change images:
1. Upload the file to the correct folder with the exact filename from the registry
2. No code changes needed — the registry already points to the correct path

### Expected Files:
**Banners** (`public/images/banners/`):
- banner-spices.jpg, banner-vegetables.jpg, banner-cocoa.jpg, banner-grains.jpg, banner-quality.jpg

**Categories** (`public/images/categories/`):
- category-spices.jpg, category-vegetables.jpg, category-cocoa.jpg, category-grains.jpg

**Products** (`public/images/products/`):
- dry-red-chillies.jpg, chilli-powder.jpg, turmeric-rhizomes.jpg, turmeric-powder.jpg
- black-pepper.jpg, cardamom.jpg, cinnamon.jpg, cocoa-beans.jpg
- onions.jpg, green-chillies.jpg, ragi.jpg, bajra.jpg, jowar.jpg

**Site** (`public/images/site/`):
- facility.jpg (exists), quality-lab.png (exists)

## Running the Project
- Development: `npm run dev` (runs on port 5000)
- Build: `npm run build`
- Start: `npm start`

## Key Features
1. **White/Bright Theme** - Clean, modern international exporter feel
2. **Sticky Header** - White with green→saffron→green gradient divider
3. **Hero Section** - 2-column layout (text left, image right), responsive
4. **5-Banner Carousel** - Image-dominant with minimal text overlay, touch/swipe, Get Quote top-right
5. **Uniform Product Grid** - 13 product tiles + CTA card, aspect-[4/3], 4-column desktop
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

## Recent Changes (Feb 2026)
- **Image Registry** - Created `data/assets.ts` as single source of truth for all image paths
  - All components now import paths from registry instead of hardcoding
  - Folder structure: banners/, categories/, products/, site/
  - No code changes needed when uploading images — just use exact filenames
- **Header Divider** - 2px gradient line (green→saffron→green) container-width
- **Banner Carousel** - Renders immediately below header, Get Quote button top-right
- **Uniform Product Grid** - Fixed aspect-[4/3] cards, 14th CTA card fills last row
- **Complete Theme Overhaul** - White/bright theme with green + saffron accents
