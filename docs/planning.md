# Services Page Split — Plan

## Goal

Move the 6 detailed service cards from index.html to a new services.html page. Homepage keeps a brief summary + link.

## Current State

- `index.html` is ~1400 lines, single page
- Services section: lines 660–825 (parent container `data-id="178898c"`)
  - "What We Offer" label
  - "Our Services – Electrical & Renewable Energy Solutions" heading
  - Description paragraph
  - 6 service cards (EICR, Installations, Solar PV, EV Charging, Battery Storage, Heat Pumps)
- Next section after services: "The Alba Advantage" (line 826, `data-id="2c8c3613"`)

## Tasks

### 1. Create services.html — DONE

- [x] Copy `index.html` as base (keeps all CSS, JS, header, footer intact)
- [x] Change `<title>` to "Our Services | Alba Electrical"
- [x] Change meta description to services-specific text
- [x] Remove sections that don't belong on services page:
  - Hero section (contact form + hero heading) — lines ~170–659
  - About section — lines ~421–659 (already inside the hero/about parent)
  - "The Alba Advantage" / Why Choose Us — lines 826–900
  - Partners/Certifications carousel — lines 901–927
  - Testimonials — lines 928–1005
  - FAQ — lines 1006–1100 approx
  - CTA "Ready to Get Started" — after FAQ
- [x] Keep: header + services section + footer (590 lines, 140/140 divs balanced)
- [x] Update nav: "Services" link → active state, "Home" link → `index.html`

### 2. Update index.html — replace services block — DONE

- [x] Remove lines 660–825 (149 lines of service cards removed)
- [x] Insert a compact replacement:
  - Same Elementor parent container structure (for consistent spacing)
  - Heading: "Our Services"
  - Brief paragraph: 2-3 sentences summarising electrical + renewables
  - Two sub-headings: "Professional Electrical" and "Renewable Energy"
  - Bullet points (not full cards) under each
  - CTA button: "View All Services" → `services.html`
- [ ] Keep the Elementor `e-con-boxed e-con e-parent` wrapper so the theme spacing works

### 3. Update navigation on both pages — DONE

- [x] index.html: "Services" link → `services.html`
- [x] services.html: "Home" link → `index.html`, "Services" → active/current
- [x] Add `id="services"` anchor to the services summary on index.html

### 4. Verify

- [x] Div balance: index.html 365/365, services.html 140/140
- [ ] Visual test: both pages load with correct theme styling (needs container running)
- [ ] Navigation works between pages
- [ ] Mobile hamburger menu works on both
- [ ] Footer appears on both pages

## Approach

The Elementor markup is deeply nested with specific CSS targeting container classes. Safest approach:
1. **services.html**: full copy of index.html, then DELETE unwanted sections (header/footer/CSS stays untouched)
2. **index.html**: replace the services container with clean HTML using existing Elementor classes for consistent styling

## Risk

- Removing Elementor containers might break closing tag balance → validate with `grep -c '<div' file` vs `grep -c '</div>' file` after edits
- Some CSS targets `:nth-of-type` selectors for parent containers → removing sections changes the count, might affect background lazy-loading. Low risk.
