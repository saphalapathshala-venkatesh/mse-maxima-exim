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
├── hero-transition.png # Cinematic transition image (spices on dark surface)
├── hero-vegetables.jpg # Hero vegetables image
├── facility.jpg        # Processing facility image
├── quality-lab.png     # Quality testing laboratory image
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
- **Design V2 Overhaul** - Complete agency-grade premium redesign
- 3-surface material system: deep navy base, slate glass panels, warm ivory strips
- Hero section with image collage (2 stacked images) and gold accent line
- Hero spotlight radial gradient for cinematic effect
- Cinematic hero transition banner with vignette overlay
- Product cards with "Export Grade" category tag pills
- QA section with side-by-side lab image card and process panel
- Process circles with Lucide icons inside slate-panel container
- Certification cards with "Certified" badge pills and secondary buttons
- Footer with warm ivory gradient divider and Request Quote CTA
- Consistent spacing: Hero pt-24 pb-16, Content py-16, CTA py-18
- All CTAs converted to proper buttons (no text-link CTAs)
- Equal-height cards with flex layout and mt-auto button alignment
