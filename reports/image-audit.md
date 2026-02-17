# Image Audit Report

Generated: 2026-02-17T10:02:00.060Z

## Summary

| Metric | Count |
|---|---|
| Total image references | 19 |
| Public image files on disk | 17 |
| Reused images (multi-location) | 3 |
| Missing explicit sizing | 0 |

---

## Section 1: Page-wise Image Listing

### Route: `/about`

| # | Type | Source | Declared Size | Fill | CSS Sizing Hints | Parent Sizing |
|---|---|---|---|---|---|---|
| 1 | next/image | `site.facility` (variable) | none | yes | - | h-[300px], h-[380px], w-hidden, w-xl |

### Route: `/`

| # | Type | Source | Declared Size | Fill | CSS Sizing Hints | Parent Sizing |
|---|---|---|---|---|---|---|
| 1 | next/image | `cat.image` (variable) | none | yes | - | - |
| 2 | next/image | `site.qualityLab` (variable) | none | yes | - | w-hidden, w-xl, aspect-[4/3] |

### Route: `/product/[slug]`

| # | Type | Source | Declared Size | Fill | CSS Sizing Hints | Parent Sizing |
|---|---|---|---|---|---|---|
| 1 | next/image | `product.gallery[activeImage]` (variable) | none | yes | - | - |
| 2 | next/image | `img` (variable) | none | yes | - | - |
| 3 | next/image | `rel.image` (variable) | none | yes | - | - |

### Route: `/products/cocoa`

| # | Type | Source | Declared Size | Fill | CSS Sizing Hints | Parent Sizing |
|---|---|---|---|---|---|---|
| 1 | next/image | `product.image` (variable) | none | yes | - | - |

### Route: `/products/grains`

| # | Type | Source | Declared Size | Fill | CSS Sizing Hints | Parent Sizing |
|---|---|---|---|---|---|---|
| 1 | next/image | `product.image` (variable) | none | yes | - | - |

### Route: `/products/spices`

| # | Type | Source | Declared Size | Fill | CSS Sizing Hints | Parent Sizing |
|---|---|---|---|---|---|---|
| 1 | next/image | `product.image` (variable) | none | yes | - | - |

### Route: `/products/vegetables`

| # | Type | Source | Declared Size | Fill | CSS Sizing Hints | Parent Sizing |
|---|---|---|---|---|---|---|
| 1 | next/image | `product.image` (variable) | none | yes | - | - |

### Route: `/quality`

| # | Type | Source | Declared Size | Fill | CSS Sizing Hints | Parent Sizing |
|---|---|---|---|---|---|---|
| 1 | next/image | `site.qualityHeroLab` (variable) | none | yes | - | w-hidden, w-xl, aspect-[4/3] |
| 2 | next/image | `item.image` (variable) | none | yes | - | - |
| 3 | next/image | `site.qualityLab` (variable) | none | yes | - | - |
| 4 | next/image | `banners.quality` (variable) | none | yes | - | - |

### Shared Components

#### `components/Card.tsx`

| # | Type | Source | Declared Size | Fill | CSS Sizing Hints |
|---|---|---|---|---|---|
| 1 | next/image | `imageSrc` (variable) | none | yes | - |

#### `components/ProductBanner.tsx`

| # | Type | Source | Declared Size | Fill | CSS Sizing Hints |
|---|---|---|---|---|---|
| 1 | next/image | `banner.image` (variable) | none | yes | - |

#### `components/ProductGrid.tsx`

| # | Type | Source | Declared Size | Fill | CSS Sizing Hints |
|---|---|---|---|---|---|
| 1 | next/image | `product.image` (variable) | none | yes | - |

#### `components/ProductHero.tsx`

| # | Type | Source | Declared Size | Fill | CSS Sizing Hints |
|---|---|---|---|---|---|
| 1 | next/image | `imageSrc` (variable) | none | yes | - |
| 2 | next/image | `imageSrc` (variable) | none | yes | - |

---

## Section 2: Reused Images Summary

| Image Source | Occurrences | Files | Sizing Differences |
|---|---|---|---|
| `site.qualityLab` | 2 | app/page.tsx, app/quality/page.tsx | no |
| `product.image` | 5 | app/products/cocoa/page.tsx, app/products/grains/page.tsx, app/products/spices/page.tsx, app/products/vegetables/page.tsx, components/ProductGrid.tsx | no |
| `imageSrc` | 3 | components/Card.tsx, components/ProductHero.tsx | no |

---

## Section 3: Missing/Unknown Sizing

All next/image usages have explicit sizing (width/height or fill).

---

## Section 4: Public Image Files on Disk

| # | Path |
|---|---|
| 1 | `/images/banners/hero-cocoa.jpg` |
| 2 | `/images/banners/hero-grains.jpg` |
| 3 | `/images/banners/hero-quality.jpg` |
| 4 | `/images/banners/hero-spices.jpg` |
| 5 | `/images/banners/hero-vegetables.jpg` |
| 6 | `/images/categories/cocoa.jpg` |
| 7 | `/images/categories/grains.jpg` |
| 8 | `/images/categories/oleoresins.jpg` |
| 9 | `/images/categories/spices.jpg` |
| 10 | `/images/categories/vegetables.jpg` |
| 11 | `/images/site/facility.jpg` |
| 12 | `/images/site/qa-step-inspection.jpg` |
| 13 | `/images/site/qa-step-labtesting.jpg` |
| 14 | `/images/site/qa-step-processing.jpg` |
| 15 | `/images/site/qa-step-sourcing.jpg` |
| 16 | `/images/site/quality-hero-lab.jpg` |
| 17 | `/images/site/quality-lab.png` |

