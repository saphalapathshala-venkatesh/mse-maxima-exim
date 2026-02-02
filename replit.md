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
├── hero-spices.jpg     # Hero section spices image
├── hero-vegetables.jpg # Hero vegetables image
├── facility.jpg        # Processing facility image
├── spices.jpg          # Spices category image
├── oleoresins.jpg      # Oleoresins category image
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
- Enhanced Button component with glossy gradient styles
- Added local stock images to /public/images/
- Updated all CTAs to use glossy buttons (no arrow-only links)
- Improved card styling with glass effects and hover animations
- Rounded corners (rounded-xl) throughout for premium feel
