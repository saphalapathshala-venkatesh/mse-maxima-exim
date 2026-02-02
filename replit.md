# MSE Website - Premium Export Company

## Overview
A premium export company website for Magna SSK Exim Solutions Pvt Ltd (MSE), built with Next.js 14+ App Router, TypeScript, and Tailwind CSS. The website showcases their products (spices, oleoresins, vegetables), quality assurance process, certifications, and company information.

## Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Playfair Display (headings), Inter (body) via next/font
- **Images**: next/image with Unsplash images

## Design System
- **Primary Navy**: #0B1B33
- **Navy Alt**: #102A4C
- **Gold Accent**: #C8A24A
- **Off-white**: #F5F1E8
- **Muted text**: #C7D2E1
- **Card surface**: rgba(255,255,255,0.08)
- **Border**: rgba(255,255,255,0.14)

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
├── Button.tsx          # Reusable button component
├── Section.tsx         # Reusable section wrapper
└── Card.tsx            # Reusable card component
```

## Running the Project
- Development: `npm run dev` (runs on port 5000)
- Build: `npm run build`
- Start: `npm start`

## Key Features
1. Sticky header with navigation and CTAs
2. Hero section with headline, buttons, and credibility strip
3. Products section with category cards
4. Why Choose MSE section with strengths
5. Quality assurance timeline
6. Certifications grid
7. CTA band
8. Responsive footer

## Recent Changes
- Initial setup of Next.js 14 with TypeScript and Tailwind CSS
- Created all 9 pages as per requirements
- Implemented dark navy premium theme with gold accents
- Added responsive design for mobile/tablet/desktop
