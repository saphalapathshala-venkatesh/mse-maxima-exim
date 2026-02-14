# IMAGE AUDIT REPORT

**Project:** MSE Website (Magna SSK Exim Solutions Pvt Ltd)
**Date:** February 14, 2026
**Registry:** `data/assets.ts` (single source of truth — all components import from here)
**Hardcoded paths:** NONE found — all image references go through the registry.

---

## 1. PAGE-WISE IMAGE USAGE

---

### Route: `/` (Homepage)

**Component: `components/ProductBanner.tsx` (Hero Carousel)**

| # | Purpose | Registry Key | Public Path | Exists? | Recommended Size |
|---|---------|-------------|-------------|---------|-----------------|
| 1 | Hero banner – Spices (Whole) | `banners.spices` | `public/images/banners/hero-spices.jpg` | YES | 1920×600+ (16:9 landscape) |
| 2 | Hero banner – Spices (Powders) | `banners.quality` | `public/images/banners/hero-quality.jpg` | YES | 1920×600+ (16:9 landscape) |
| 3 | Hero banner – Vegetables | `banners.vegetables` | `public/images/banners/hero-vegetables.jpg` | YES | 1920×600+ (16:9 landscape) |
| 4 | Hero banner – Cocoa | `banners.cocoa` | `public/images/banners/hero-cocoa.jpg` | YES | 1920×600+ (16:9 landscape) |
| 5 | Hero banner – Grains | `banners.grains` | `public/images/banners/hero-grains.jpg` | YES | 1920×600+ (16:9 landscape) |

**Component: `app/page.tsx` (Category Cards section)**

| # | Purpose | Registry Key | Public Path | Exists? | Recommended Size |
|---|---------|-------------|-------------|---------|-----------------|
| 1 | Category card – Spices | `categories.spices` | `public/images/categories/spices.jpg` | YES | 600×450 (4:3) |
| 2 | Category card – Vegetables | `categories.vegetables` | `public/images/categories/vegetables.jpg` | YES | 600×450 (4:3) |
| 3 | Category card – Cocoa | `categories.cocoa` | `public/images/categories/cocoa.jpg` | YES | 600×450 (4:3) |
| 4 | Category card – Grains | `categories.grains` | `public/images/categories/grains.jpg` | YES | 600×450 (4:3) |

**Component: `app/page.tsx` (Source to Shipment section)**

| # | Purpose | Registry Key | Public Path | Exists? | Recommended Size |
|---|---------|-------------|-------------|---------|-----------------|
| 1 | Section image – Quality Lab | `site.qualityLab` | `public/images/site/quality-lab.png` | YES | 800×600 (4:3) |
| 2 | Overlay thumbnail – Facility | `site.facility` | `public/images/site/facility.jpg` | YES | 256×256 (1:1 square) |

---

### Route: `/quality`

**Component: `app/quality/page.tsx`**

| # | Purpose | Registry Key | Public Path | Exists? | Recommended Size |
|---|---------|-------------|-------------|---------|-----------------|
| 1 | Hero image – Quality Lab | `site.qualityHeroLab` | `public/images/site/quality-hero-lab.jpg` | YES | 800×600 (4:3) |
| 2 | Step 1 thumbnail – Sourcing | `site.qaStepSourcing` | `public/images/site/qa-step-sourcing.jpg` | YES | 440×320 (≈4:3) |
| 3 | Step 2 thumbnail – Inspection | `site.qaStepInspection` | `public/images/site/qa-step-inspection.jpg` | YES | 440×320 (≈4:3) |
| 4 | Step 3 thumbnail – Processing | `site.qaStepProcessing` | `public/images/site/qa-step-processing.jpg` | YES | 440×320 (≈4:3) |
| 5 | Step 4 thumbnail – Lab Testing | `site.qaStepLabTesting` | `public/images/site/qa-step-labtesting.jpg` | YES | 440×320 (≈4:3) |
| 6 | Step 5 thumbnail – Final Check | `site.qaStepLabTesting` (reused) | `public/images/site/qa-step-labtesting.jpg` | YES | 440×320 (≈4:3) |
| 7 | Commitment section image | `site.qualityLab` | `public/images/site/quality-lab.png` | YES | 800×600 (4:3) |
| 8 | Infrastructure section image | `banners.quality` | `public/images/banners/hero-quality.jpg` | YES | 800×600 (4:3) |

---

### Route: `/certifications`

**Component: `app/certifications/page.tsx`**

| # | Purpose | Registry Key | Public Path | Exists? | Recommended Size |
|---|---------|-------------|-------------|---------|-----------------|
| — | *No images used* | — | — | — | — |

> This page uses only Lucide icons for certification badges. No image files required.

---

### Route: `/about`

**Component: `app/about/page.tsx`**

| # | Purpose | Registry Key | Public Path | Exists? | Recommended Size |
|---|---------|-------------|-------------|---------|-----------------|
| 1 | Hero image – Facility | `site.facility` | `public/images/site/facility.jpg` | YES | 800×600 (4:3) |

---

### Route: `/contact`

**Component: `app/contact/page.tsx`**

| # | Purpose | Registry Key | Public Path | Exists? | Recommended Size |
|---|---------|-------------|-------------|---------|-----------------|
| — | *No images used* | — | — | — | — |

> Text-only form page with Lucide icons. No image files required.

---

### Route: `/products/spices`

**Component: `app/products/spices/page.tsx`**

| # | Purpose | Registry Key (via products.ts) | Public Path | Exists? | Recommended Size |
|---|---------|-------------------------------|-------------|---------|-----------------|
| 1 | Category banner background | `categories.spices` | `public/images/categories/spices.jpg` | YES | 1920×400 (wide, used with opacity overlay) |
| 2 | Product card – Dry Red Chilli | `products.dryRedChilli` | `public/images/products/dry-red-chilli.jpg` | **NO** | 600×450 (4:3) |
| 3 | Product card – Chilli Powder | `products.chilliPowder` | `public/images/products/chilli-powder.jpg` | **NO** | 600×450 (4:3) |
| 4 | Product card – Turmeric Rhizomes | `products.turmericRhizomes` | `public/images/products/turmeric-rhizomes.jpg` | **NO** | 600×450 (4:3) |
| 5 | Product card – Turmeric Powder | `products.turmericPowder` | `public/images/products/turmeric-powder.jpg` | **NO** | 600×450 (4:3) |
| 6 | Product card – Black Pepper | `products.blackPepper` | `public/images/products/black-pepper.jpg` | **NO** | 600×450 (4:3) |
| 7 | Product card – Cardamom | `products.cardamom` | `public/images/products/cardamom.jpg` | **NO** | 600×450 (4:3) |
| 8 | Product card – Cinnamon | `products.cinnamon` | `public/images/products/cinnamon.jpg` | **NO** | 600×450 (4:3) |

---

### Route: `/products/vegetables`

**Component: `app/products/vegetables/page.tsx`**

| # | Purpose | Registry Key (via products.ts) | Public Path | Exists? | Recommended Size |
|---|---------|-------------------------------|-------------|---------|-----------------|
| 1 | Category banner background | `categories.vegetables` | `public/images/categories/vegetables.jpg` | YES | 1920×400 (wide) |
| 2 | Product card – Onions | `products.onions` | `public/images/products/onions.jpg` | **NO** | 600×450 (4:3) |
| 3 | Product card – Green Chillies | `products.greenChillies` | `public/images/products/green-chillies.jpg` | **NO** | 600×450 (4:3) |

---

### Route: `/products/cocoa`

**Component: `app/products/cocoa/page.tsx`**

| # | Purpose | Registry Key (via products.ts) | Public Path | Exists? | Recommended Size |
|---|---------|-------------------------------|-------------|---------|-----------------|
| 1 | Category banner background | `categories.cocoa` | `public/images/categories/cocoa.jpg` | YES | 1920×400 (wide) |
| 2 | Product card – Cocoa Beans | `products.cocoaBeans` | `public/images/products/cocoa-beans.jpg` | **NO** | 600×450 (4:3) |

---

### Route: `/products/grains`

**Component: `app/products/grains/page.tsx`**

| # | Purpose | Registry Key (via products.ts) | Public Path | Exists? | Recommended Size |
|---|---------|-------------------------------|-------------|---------|-----------------|
| 1 | Category banner background | `categories.grains` | `public/images/categories/grains.jpg` | YES | 1920×400 (wide) |
| 2 | Product card – Ragi | `products.ragi` | `public/images/products/ragi.jpg` | **NO** | 600×450 (4:3) |
| 3 | Product card – Bajra | `products.bajra` | `public/images/products/bajra.jpg` | **NO** | 600×450 (4:3) |
| 4 | Product card – Jowar | `products.jowar` | `public/images/products/jowar.jpg` | **NO** | 600×450 (4:3) |

---

### Route: `/product/[slug]` (13 dynamic product detail pages)

**Component: `app/product/[slug]/page.tsx`**

Each product detail page renders a main gallery (2-4 images) + related product cards. All image paths come from `data/products.ts` which imports from `data/assets.ts`. The gallery arrays cross-reference products within the same category.

**Gallery usage per product:**

| Product Slug | Gallery Images (registry keys) | All Exist? |
|---|---|---|
| `dry-red-chilli` | `products.dryRedChilli`, `products.chilliPowder` | **NO** (both missing) |
| `chilli-powder` | `products.chilliPowder`, `products.dryRedChilli` | **NO** (both missing) |
| `turmeric-rhizomes` | `products.turmericRhizomes`, `products.turmericPowder` | **NO** (both missing) |
| `turmeric-powder` | `products.turmericPowder`, `products.turmericRhizomes` | **NO** (both missing) |
| `black-pepper` | `products.blackPepper`, `products.cinnamon` | **NO** (both missing) |
| `cardamom` | `products.cardamom`, `products.cinnamon` | **NO** (both missing) |
| `cinnamon` | `products.cinnamon`, `products.cardamom` | **NO** (both missing) |
| `cocoa-beans` | `products.cocoaBeans` | **NO** (missing) |
| `onions` | `products.onions`, `products.greenChillies` | **NO** (both missing) |
| `green-chillies` | `products.greenChillies`, `products.onions` | **NO** (both missing) |
| `ragi` | `products.ragi`, `products.bajra`, `products.jowar` | **NO** (all missing) |
| `bajra` | `products.bajra`, `products.ragi`, `products.jowar` | **NO** (all missing) |
| `jowar` | `products.jowar`, `products.ragi`, `products.bajra` | **NO** (all missing) |

---

### Components with NO images

| Component | Notes |
|---|---|
| `components/Header.tsx` | Text + Lucide icons only |
| `components/Footer.tsx` | Text + links only |
| `components/Button.tsx` | Styled link, no images |
| `components/Section.tsx` | Layout wrapper, no images |

---

## 2. FOLDER INVENTORY

### `public/images/banners/` (5 files)

| Filename | Referenced By | Status |
|---|---|---|
| `hero-spices.jpg` | `banners.spices`, `site.heroMain` | In use |
| `hero-vegetables.jpg` | `banners.vegetables` | In use |
| `hero-cocoa.jpg` | `banners.cocoa` | In use |
| `hero-grains.jpg` | `banners.grains` | In use |
| `hero-quality.jpg` | `banners.quality` | In use |

### `public/images/categories/` (5 files)

| Filename | Referenced By | Status |
|---|---|---|
| `spices.jpg` | `categories.spices` | In use |
| `vegetables.jpg` | `categories.vegetables` | In use |
| `cocoa.jpg` | `categories.cocoa` | In use |
| `grains.jpg` | `categories.grains` | In use |
| `oleoresins.jpg` | `categories.oleoresins` | **UNUSED** — registered in assets.ts but never referenced by any component or page |

### `public/images/products/` (0 files)

| Filename | Referenced By | Status |
|---|---|---|
| *(empty folder)* | — | **ALL 13 PRODUCT IMAGES MISSING** |

### `public/images/site/` (7 files)

| Filename | Referenced By | Status |
|---|---|---|
| `facility.jpg` | `site.facility` | In use |
| `quality-lab.png` | `site.qualityLab` | In use |
| `quality-hero-lab.jpg` | `site.qualityHeroLab` | In use |
| `qa-step-sourcing.jpg` | `site.qaStepSourcing` | In use |
| `qa-step-inspection.jpg` | `site.qaStepInspection` | In use |
| `qa-step-processing.jpg` | `site.qaStepProcessing` | In use |
| `qa-step-labtesting.jpg` | `site.qaStepLabTesting` | In use |

### Summary

| Folder | Files on Disk | Referenced | Unused |
|---|---|---|---|
| `banners/` | 5 | 5 | 0 |
| `categories/` | 5 | 4 | 1 (`oleoresins.jpg`) |
| `products/` | 0 | 13 | 0 |
| `site/` | 7 | 7 | 0 |
| **Total** | **17** | **29** | **1** |

**Duplicates:** `site.heroMain` points to the same file as `banners.spices` (`hero-spices.jpg`). This is intentional (alias), not a duplicate file.

---

## 3. UPLOAD CHECKLIST

### Required Uploads: `public/images/products/` (13 files)

All files must be `.jpg` format, minimum 600×450px (4:3 aspect ratio). These are used as product cards (4:3 aspect, object-cover) and gallery images on detail pages.

| # | Exact Filename | Product | Pages That Break If Missing |
|---|---|---|---|
| 1 | `dry-red-chilli.jpg` | Dry Red Chilli | `/products/spices`, `/product/dry-red-chilli`, `/product/chilli-powder` (gallery) |
| 2 | `chilli-powder.jpg` | Chilli Powder | `/products/spices`, `/product/chilli-powder`, `/product/dry-red-chilli` (gallery) |
| 3 | `turmeric-rhizomes.jpg` | Turmeric Rhizomes | `/products/spices`, `/product/turmeric-rhizomes`, `/product/turmeric-powder` (gallery) |
| 4 | `turmeric-powder.jpg` | Turmeric Powder | `/products/spices`, `/product/turmeric-powder`, `/product/turmeric-rhizomes` (gallery) |
| 5 | `black-pepper.jpg` | Black Pepper | `/products/spices`, `/product/black-pepper` |
| 6 | `cardamom.jpg` | Cardamom | `/products/spices`, `/product/cardamom`, `/product/cinnamon` (gallery) |
| 7 | `cinnamon.jpg` | Cinnamon | `/products/spices`, `/product/cinnamon`, `/product/cardamom` (gallery), `/product/black-pepper` (gallery) |
| 8 | `cocoa-beans.jpg` | Cocoa Beans | `/products/cocoa`, `/product/cocoa-beans` |
| 9 | `onions.jpg` | Onions | `/products/vegetables`, `/product/onions`, `/product/green-chillies` (gallery) |
| 10 | `green-chillies.jpg` | Green Chillies | `/products/vegetables`, `/product/green-chillies`, `/product/onions` (gallery) |
| 11 | `ragi.jpg` | Ragi (Finger Millet) | `/products/grains`, `/product/ragi`, `/product/bajra` (gallery), `/product/jowar` (gallery) |
| 12 | `bajra.jpg` | Bajra (Pearl Millet) | `/products/grains`, `/product/bajra`, `/product/ragi` (gallery), `/product/jowar` (gallery) |
| 13 | `jowar.jpg` | Jowar (Sorghum) | `/products/grains`, `/product/jowar`, `/product/ragi` (gallery), `/product/bajra` (gallery) |

### Optional Cleanup

| # | File | Action | Reason |
|---|---|---|---|
| 1 | `public/images/categories/oleoresins.jpg` | Remove or repurpose | Registered in `assets.ts` (`categories.oleoresins`) but never used by any page or component |

---

## 4. QUICK REFERENCE: REGISTRY TO FILE MAPPING

### `banners` object
```
banners.spices        → /images/banners/hero-spices.jpg       ✅
banners.vegetables    → /images/banners/hero-vegetables.jpg   ✅
banners.cocoa         → /images/banners/hero-cocoa.jpg        ✅
banners.grains        → /images/banners/hero-grains.jpg       ✅
banners.quality       → /images/banners/hero-quality.jpg      ✅
```

### `categories` object
```
categories.spices     → /images/categories/spices.jpg         ✅
categories.vegetables → /images/categories/vegetables.jpg     ✅
categories.cocoa      → /images/categories/cocoa.jpg          ✅
categories.grains     → /images/categories/grains.jpg         ✅
categories.oleoresins → /images/categories/oleoresins.jpg     ✅ (unused)
```

### `products` object
```
products.dryRedChilli     → /images/products/dry-red-chilli.jpg      ❌ MISSING
products.chilliPowder     → /images/products/chilli-powder.jpg       ❌ MISSING
products.turmericRhizomes → /images/products/turmeric-rhizomes.jpg   ❌ MISSING
products.turmericPowder   → /images/products/turmeric-powder.jpg     ❌ MISSING
products.blackPepper      → /images/products/black-pepper.jpg        ❌ MISSING
products.cardamom         → /images/products/cardamom.jpg            ❌ MISSING
products.cinnamon         → /images/products/cinnamon.jpg            ❌ MISSING
products.cocoaBeans       → /images/products/cocoa-beans.jpg         ❌ MISSING
products.onions           → /images/products/onions.jpg              ❌ MISSING
products.greenChillies    → /images/products/green-chillies.jpg      ❌ MISSING
products.ragi             → /images/products/ragi.jpg                ❌ MISSING
products.bajra            → /images/products/bajra.jpg               ❌ MISSING
products.jowar            → /images/products/jowar.jpg               ❌ MISSING
```

### `site` object
```
site.facility         → /images/site/facility.jpg             ✅
site.qualityLab       → /images/site/quality-lab.png          ✅
site.heroMain         → /images/banners/hero-spices.jpg       ✅ (alias)
site.qualityHeroLab   → /images/site/quality-hero-lab.jpg     ✅
site.qaStepSourcing   → /images/site/qa-step-sourcing.jpg     ✅
site.qaStepInspection → /images/site/qa-step-inspection.jpg   ✅
site.qaStepProcessing → /images/site/qa-step-processing.jpg   ✅
site.qaStepLabTesting → /images/site/qa-step-labtesting.jpg   ✅
```

---

**End of audit. 17 files exist on disk. 13 product images need to be uploaded to `public/images/products/`.**
