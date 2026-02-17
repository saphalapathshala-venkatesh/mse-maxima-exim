# Image Audit Report

Generated: 2026-02-17T10:07:47.341Z

## Summary

| Metric | Count |
|---|---|
| Total image references | 19 |
| Public image files on disk | 17 |
| Reused images (multi-location) | 3 |
| Missing explicit sizing | 0 |
| Assets registry entries | 31 |

---

## Section 1: Page-wise Image Listing

### Route: `/`
**File:** `app/page.tsx`

| # | Type | Variable | Resolved Path | Exists | Declared Size | Fill | CSS Sizing | Parent Sizing |
|---|---|---|---|---|---|---|---|---|
| 1 | next/image | `cat.image` | `(unresolved)` | - | - | yes | - | - |
| 2 | next/image | `site.qualityLab` | `/images/site/quality-lab.png` | YES | - | yes | - | w-hidden, w-xl, aspect-[4/3] |

### Route: `/about`
**File:** `app/about/page.tsx`

| # | Type | Variable | Resolved Path | Exists | Declared Size | Fill | CSS Sizing | Parent Sizing |
|---|---|---|---|---|---|---|---|---|
| 1 | next/image | `site.facility` | `/images/site/facility.jpg` | YES | - | yes | - | - |

### Route: `/product/[slug]`
**File:** `app/product/[slug]/page.tsx`

| # | Type | Variable | Resolved Path | Exists | Declared Size | Fill | CSS Sizing | Parent Sizing |
|---|---|---|---|---|---|---|---|---|
| 1 | next/image | `product.gallery[activeImage]` | `(unresolved)` | - | - | yes | - | - |
| 2 | next/image | `img` | `(unresolved)` | - | - | yes | - | - |
| 3 | next/image | `rel.image` | `(unresolved)` | - | - | yes | - | - |

### Route: `/products/cocoa`
**File:** `app/products/cocoa/page.tsx`

| # | Type | Variable | Resolved Path | Exists | Declared Size | Fill | CSS Sizing | Parent Sizing |
|---|---|---|---|---|---|---|---|---|
| 1 | next/image | `product.image` | `(unresolved)` | - | - | yes | - | - |

### Route: `/products/grains`
**File:** `app/products/grains/page.tsx`

| # | Type | Variable | Resolved Path | Exists | Declared Size | Fill | CSS Sizing | Parent Sizing |
|---|---|---|---|---|---|---|---|---|
| 1 | next/image | `product.image` | `(unresolved)` | - | - | yes | - | - |

### Route: `/products/spices`
**File:** `app/products/spices/page.tsx`

| # | Type | Variable | Resolved Path | Exists | Declared Size | Fill | CSS Sizing | Parent Sizing |
|---|---|---|---|---|---|---|---|---|
| 1 | next/image | `product.image` | `(unresolved)` | - | - | yes | - | - |

### Route: `/products/vegetables`
**File:** `app/products/vegetables/page.tsx`

| # | Type | Variable | Resolved Path | Exists | Declared Size | Fill | CSS Sizing | Parent Sizing |
|---|---|---|---|---|---|---|---|---|
| 1 | next/image | `product.image` | `(unresolved)` | - | - | yes | - | - |

### Route: `/quality`
**File:** `app/quality/page.tsx`

| # | Type | Variable | Resolved Path | Exists | Declared Size | Fill | CSS Sizing | Parent Sizing |
|---|---|---|---|---|---|---|---|---|
| 1 | next/image | `site.qualityHeroLab` | `/images/site/quality-hero-lab.jpg` | YES | - | yes | - | - |
| 2 | next/image | `item.image` | `(unresolved)` | - | - | yes | - | - |
| 3 | next/image | `site.qualityLab` | `/images/site/quality-lab.png` | YES | - | yes | - | - |
| 4 | next/image | `banners.quality` | `/images/banners/hero-quality.jpg` | YES | - | yes | - | - |

---

## Section 2: Shared Component Images

### `components/Card.tsx`

| # | Type | Variable | Resolved Path | Exists | Declared Size | Fill | CSS Sizing | Parent Sizing |
|---|---|---|---|---|---|---|---|---|
| 1 | next/image | `imageSrc` | `(unresolved)` | - | - | yes | - | w-hidden, h-52 |

### `components/ProductBanner.tsx`

| # | Type | Variable | Resolved Path | Exists | Declared Size | Fill | CSS Sizing | Parent Sizing |
|---|---|---|---|---|---|---|---|---|
| 1 | next/image | `banner.image` | `(unresolved)` | - | - | yes | - | - |

### `components/ProductGrid.tsx`

| # | Type | Variable | Resolved Path | Exists | Declared Size | Fill | CSS Sizing | Parent Sizing |
|---|---|---|---|---|---|---|---|---|
| 1 | next/image | `product.image` | `(unresolved)` | - | - | yes | - | - |

### `components/ProductHero.tsx`

| # | Type | Variable | Resolved Path | Exists | Declared Size | Fill | CSS Sizing | Parent Sizing |
|---|---|---|---|---|---|---|---|---|
| 1 | next/image | `imageSrc` | `(unresolved)` | - | - | yes | - | w-hidden |
| 2 | next/image | `imageSrc` | `(unresolved)` | - | - | yes | - | w-md, h-11 |

---

## Section 3: Reused Images Detail

| Resolved File | Occurrences | Used In Files | Pages | Sizing Differs |
|---|---|---|---|---|
| `quality-lab.png` (`/images/site/quality-lab.png`) | 2 | `app/page.tsx`, `app/quality/page.tsx` | /, /quality | YES |
| `product.image` (`product.image`) | 5 | `app/products/cocoa/page.tsx`, `app/products/grains/page.tsx`, `app/products/spices/page.tsx`, `app/products/vegetables/page.tsx`, `components/ProductGrid.tsx` | /products/cocoa, /products/grains, /products/spices, /products/vegetables, (component) | no |
| `imageSrc` (`imageSrc`) | 3 | `components/Card.tsx`, `components/ProductHero.tsx` | (component), (component) | YES |

### Sizing Differences Detail

**`/images/site/quality-lab.png`**:
  - app/page.tsx: fill [w-hidden, w-xl, aspect-[4/3]]
  - app/quality/page.tsx: fill

**`imageSrc`**:
  - components/Card.tsx: fill [w-hidden, h-52]
  - components/ProductHero.tsx: fill [w-hidden]
  - components/ProductHero.tsx: fill [w-md, h-11]

---

## Section 4: Missing/Unknown Sizing

All next/image usages have explicit sizing (width/height or fill).

---

## Section 5: Public Image Files on Disk

| # | Path | Referenced | File Name |
|---|---|---|---|
| 1 | `/images/banners/hero-cocoa.jpg` | NO | hero-cocoa.jpg |
| 2 | `/images/banners/hero-grains.jpg` | NO | hero-grains.jpg |
| 3 | `/images/banners/hero-quality.jpg` | YES | hero-quality.jpg |
| 4 | `/images/banners/hero-spices.jpg` | NO | hero-spices.jpg |
| 5 | `/images/banners/hero-vegetables.jpg` | NO | hero-vegetables.jpg |
| 6 | `/images/categories/cocoa.jpg` | NO | cocoa.jpg |
| 7 | `/images/categories/grains.jpg` | NO | grains.jpg |
| 8 | `/images/categories/oleoresins.jpg` | NO | oleoresins.jpg |
| 9 | `/images/categories/spices.jpg` | NO | spices.jpg |
| 10 | `/images/categories/vegetables.jpg` | NO | vegetables.jpg |
| 11 | `/images/site/facility.jpg` | YES | facility.jpg |
| 12 | `/images/site/qa-step-inspection.jpg` | NO | qa-step-inspection.jpg |
| 13 | `/images/site/qa-step-labtesting.jpg` | NO | qa-step-labtesting.jpg |
| 14 | `/images/site/qa-step-processing.jpg` | NO | qa-step-processing.jpg |
| 15 | `/images/site/qa-step-sourcing.jpg` | NO | qa-step-sourcing.jpg |
| 16 | `/images/site/quality-hero-lab.jpg` | YES | quality-hero-lab.jpg |
| 17 | `/images/site/quality-lab.png` | YES | quality-lab.png |

### Unreferenced Public Images

The following images exist on disk but were not found referenced in code:

- `/images/banners/hero-cocoa.jpg`
- `/images/banners/hero-grains.jpg`
- `/images/banners/hero-spices.jpg`
- `/images/banners/hero-vegetables.jpg`
- `/images/categories/cocoa.jpg`
- `/images/categories/grains.jpg`
- `/images/categories/oleoresins.jpg`
- `/images/categories/spices.jpg`
- `/images/categories/vegetables.jpg`
- `/images/site/qa-step-inspection.jpg`
- `/images/site/qa-step-labtesting.jpg`
- `/images/site/qa-step-processing.jpg`
- `/images/site/qa-step-sourcing.jpg`

---

## Section 6: Assets Registry (`data/assets.ts`)

| Variable | Resolved Path | File Exists |
|---|---|---|
| `banners.spices` | `/images/banners/hero-spices.jpg` | YES |
| `banners.vegetables` | `/images/banners/hero-vegetables.jpg` | YES |
| `banners.cocoa` | `/images/banners/hero-cocoa.jpg` | YES |
| `banners.grains` | `/images/banners/hero-grains.jpg` | YES |
| `banners.quality` | `/images/banners/hero-quality.jpg` | YES |
| `categories.spices` | `/images/categories/spices.jpg` | YES |
| `categories.vegetables` | `/images/categories/vegetables.jpg` | YES |
| `categories.cocoa` | `/images/categories/cocoa.jpg` | YES |
| `categories.grains` | `/images/categories/grains.jpg` | YES |
| `categories.oleoresins` | `/images/categories/oleoresins.jpg` | YES |
| `products.dryRedChilli` | `/images/products/dry-red-chilli.jpg` | NO |
| `products.chilliPowder` | `/images/products/chilli-powder.jpg` | NO |
| `products.turmericRhizomes` | `/images/products/turmeric-rhizomes.jpg` | NO |
| `products.turmericPowder` | `/images/products/turmeric-powder.jpg` | NO |
| `products.blackPepper` | `/images/products/black-pepper.jpg` | NO |
| `products.cardamom` | `/images/products/cardamom.jpg` | NO |
| `products.cinnamon` | `/images/products/cinnamon.jpg` | NO |
| `products.cocoaBeans` | `/images/products/cocoa-beans.jpg` | NO |
| `products.onions` | `/images/products/onions.jpg` | NO |
| `products.greenChillies` | `/images/products/green-chillies.jpg` | NO |
| `products.ragi` | `/images/products/ragi.jpg` | NO |
| `products.bajra` | `/images/products/bajra.jpg` | NO |
| `products.jowar` | `/images/products/jowar.jpg` | NO |
| `site.facility` | `/images/site/facility.jpg` | YES |
| `site.qualityLab` | `/images/site/quality-lab.png` | YES |
| `site.heroMain` | `/images/banners/hero-spices.jpg` | YES |
| `site.qualityHeroLab` | `/images/site/quality-hero-lab.jpg` | YES |
| `site.qaStepSourcing` | `/images/site/qa-step-sourcing.jpg` | YES |
| `site.qaStepInspection` | `/images/site/qa-step-inspection.jpg` | YES |
| `site.qaStepProcessing` | `/images/site/qa-step-processing.jpg` | YES |
| `site.qaStepLabTesting` | `/images/site/qa-step-labtesting.jpg` | YES |

