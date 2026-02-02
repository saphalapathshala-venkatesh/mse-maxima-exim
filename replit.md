# MSE Website - Premium Export Company

## Overview
A premium export company website for Magna SSK Exim Solutions Pvt Ltd (MSE), built with Next.js 14+ App Router, TypeScript, and Tailwind CSS. The website showcases their products (spices, oleoresins, vegetables), quality assurance process, certifications, and company information.

## Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Playfair Display (headings), Inter (body) via next/font
- **Images**: Local images in /public/images/

## Design System
- **Primary Navy**: #0B1B33
- **Navy Alt**: #102A4C
- **Gold Accent**: #C8A24A (gradient: #D1AE57 to #B8892E)
- **Off-white**: #F5F1E8
- **Muted text**: #C7D2E1
- **Card surface**: rgba(255,255,255,0.08)
- **Border**: rgba(255,255,255,0.14)

## Button Styles
- **Primary**: Glossy gold gradient with shadow and hover lift
- **Secondary**: Glass effect with gold border outline

## Project Structure
```
app/
├── layout.tsx          # Root layout with fonts, Header, Footer
├── page.tsx            # Homepage with 8 sections
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
├── Header.tsx          # Sticky header with navigation
├── Footer.tsx          # Footer with links and contact
├── Button.tsx          # Glossy button component (primary/secondary)
├── Section.tsx         # Reusable section wrapper
└── Card.tsx            # Premium card component

public/images/
├── export-bulk-spices.png  # Hero single image (bulk spices in burlap sacks)
├── export-spices-banner.png # Transition banner (spices in wooden bowls)
├── hero-spices.jpg     # Legacy hero spices image
├── hero-vegetables.jpg # Legacy hero vegetables image
├── facility.jpg        # Processing facility image (unused)
├── quality-lab.png     # Quality testing laboratory image
├── spices.jpg          # Spices category image
├── oleoresins-new.png  # Oleoresins product image (lab glassware)
└── vegetables.jpg      # Vegetables category image
```

## Running the Project
- Development: `npm run dev` (runs on port 5000)
- Build: `npm run build`
- Start: `npm start`

## Key Features
1. Sticky header with navigation and CTAs
2. Hero section with headline, glossy buttons, and credibility strip
3. Products section with premium cards
4. Why Choose MSE section with strengths
5. Quality assurance timeline
6. Certifications grid with View Certificate buttons
7. CTA band
8. Responsive footer

## Recent Changes
- **Hero Image Upgrade** - Single premium export image (no collage)
- New export-bulk-spices.png (bulk spices in burlap sacks, wooden bowls, dark slate)
- Replaced image collage with single rounded image + dark overlay gradient
- **Footer 3-Layer Premium Design**
- Top divider strip: warm ivory/gold gradient (8px)
- Body: deep navy gradient (#07162C to #0B1B33) with subtle noise texture
- Bottom bar: darker navy (#061225) for copyright
- Glossy gold CTA button in footer
- Links: soft ivory default, gold hover with underline
- **Previous: Final Visual Corrections**
- Removed factory/industrial image from Why Choose MSE section
- Why Choose MSE now uses 2x2 slate-panel card grid layout
- **Premium Corrections Update** - Enhanced contrast and visual variety
- Products section now on warm ivory (#F5F1E8) background with navy cards
- Certifications section on warm ivory background with 4 navy cards
- FSSAI moved to text note below certification grid
- Gold divider lines between major sections
- Card component supports 'dark' variant for ivory backgrounds
