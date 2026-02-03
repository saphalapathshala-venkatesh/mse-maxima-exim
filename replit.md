# MSE Website - Premium Export Company

## Overview
A premium export company website for Magna SSK Exim Solutions Pvt Ltd (MSE), built with Next.js 14+ App Router, TypeScript, and Tailwind CSS. The website showcases their products (spices, oleoresins, vegetables, cocoa beans, millets & grains), quality assurance process, certifications, and company information.

## Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Playfair Display (headings), Inter (body) via next/font
- **Images**: Local images in /public/images/

## Design System (Updated Feb 2026)
- **Primary Navy**: #0B1F3B (header, footer, hero, select feature blocks)
- **Navy Alt**: #102A4C
- **Gold Accent**: #D6A84A (CTA buttons, highlights)
- **Accent Green**: #2E7D32 (links, small highlights)
- **Warm Ivory**: #F7F3EA (main body background)
- **Warm Cream**: #FBF9F4 (alternate sections)
- **Off-white**: #F5F1E8
- **Muted text**: #C7D2E1

## Button Styles
- **Primary**: Glossy gold gradient with shadow and hover lift
- **Secondary**: Glass effect with gold border outline

## Project Structure
```
app/
├── layout.tsx          # Root layout with fonts, Header, Footer
├── page.tsx            # Homepage with sections
├── globals.css         # Global styles, Tailwind, theme
├── products/
│   ├── page.tsx        # Products overview
│   ├── spices/page.tsx # Spices category
│   ├── oleoresins/page.tsx # Oleoresins category
│   └── vegetables/page.tsx # Vegetables category
├── quality/page.tsx    # Quality assurance page
├── certifications/page.tsx # Certifications page
├── about/page.tsx      # About page
└── contact/page.tsx    # Contact page with form

components/
├── Header.tsx          # Sticky header with navigation (navy bg, green hover links)
├── Footer.tsx          # Footer with links and contact (3-layer navy design)
├── Button.tsx          # Glossy button component (primary/secondary)
├── Section.tsx         # Reusable section wrapper
├── Card.tsx            # Premium card component
└── ProductBanner.tsx   # 5-banner carousel for products (NEW)

public/images/
├── hero-spices-vegetables.png # Main hero image
├── export-bulk-spices.png     # Banner image
├── export-spices-banner.png   # Banner image
├── banner-spices-export.png   # Banner image
├── hero-spices.jpg            # Spices banner image
├── hero-vegetables.jpg        # Vegetables banner image
├── quality-lab.png            # Quality testing laboratory image
├── spices.jpg                 # Spices category image
├── oleoresins-new.png         # Oleoresins product image
└── vegetables.jpg             # Vegetables category image
```

## Running the Project
- Development: `npm run dev` (runs on port 5000)
- Build: `npm run build`
- Start: `npm start`

## Key Features
1. Sticky navy header with navigation (accent green hover states) and gold CTAs
2. Hero section with headline, glossy buttons, and credibility strip on navy background
3. **5-Banner Product Carousel** with auto-play (NEW):
   - Banner 1: Spices (Whole) - Dry Red Chilies, Turmeric, Black Pepper, Cardamom, Cinnamon
   - Banner 2: Spices (Powders) - Chilli Powder, Turmeric Powder
   - Banner 3: Vegetables - Onions, Green Chilies
   - Banner 4: Cocoa Beans
   - Banner 5: Millets & Grains - Ragi, Bajra, Jowar
4. Products section on warm ivory with navy cards (3-col desktop)
5. Why Choose MSE section on warm cream with white cards and green accents
6. Quality assurance section with 5-step process (navy background)
7. Certifications grid on warm ivory with navy cards
8. CTA band with navy gradient
9. 3-layer premium footer (ivory divider, navy body, dark navy bottom)

## Recent Changes (Feb 2026)
- **Color Scheme Update** - Reduced navy dominance, added warm backgrounds
  - Body background changed to warm ivory (#F7F3EA)
  - Added accent green (#2E7D32) for links and highlights
  - Updated gold accent to #D6A84A
- **5-Banner Product Carousel** - New ProductBanner.tsx component
  - Full-width responsive banners with dark gradient overlays
  - Auto-play with 5-second intervals
  - Manual navigation with arrows and dots
  - Green "Export Quality" badges
  - Responsive for all screen sizes
- **Section Backgrounds Updated**
  - Products section: warm ivory background
  - Why Choose MSE: warm cream background with white cards
  - Quality Assurance: navy slate background (preserved)
  - Certifications: warm ivory background
- **Header Updated** - Links now hover to accent green
- **Hero Responsiveness** - clamp() sizing for H1, centered on mobile
- **Layout Fixes** - Products 3-col desktop, QA steps responsive grid
