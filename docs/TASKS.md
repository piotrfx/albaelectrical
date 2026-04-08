# Alba Electrical — MVP Tasks

> Goal: Ship a functional MVP for albaelectrical.co.uk to secure customer deposit.

## Infrastructure

- [x] Docker container running (nginx:alpine, port 8088)
- [x] proxy-tier network created
- [ ] Configure NPM — add proxy host for albaelectrical.co.uk → albaelectrical-web:80, SSL via Let's Encrypt
- [ ] Git repo initialised and pushed to git@github.com:piotrfx/albaelectrical.git
- [ ] Start the container (currently stopped/exited — `docker compose up -d`)

## Content Update (2026-04-08 — partially done)

Customer provided full copy. Applied to index.html:

- [x] Hero: heading, description, CTA updated to Alba content
- [x] Services: 6 cards updated (EICR, Installations, Solar PV, EV Charging, Battery Storage, Heat Pumps)
- [x] About section: heading updated ("Scotland's Specialists in Renewables")
- [x] Why Choose Us → "The Alba Advantage" (Decades of Expertise, Spotless Workmanship, Client-First Pricing)
- [x] CTA section: "Ready to Get Started?" with booking reference
- [x] Partners → "Our Certifications" / "MCS & NICEIC Certified"
- [x] Footer copyright: "2025 Alba Electrical and Renewable Services"
- [ ] About section: body text still has generic template copy — update with Alba-specific content
- [ ] Testimonials: still placeholder Lorem ipsum — need real testimonials or remove section
- [ ] FAQ: still placeholder — update with Alba-relevant Q&As or remove

## Navigation & Pages

- [x] Fix navigation links — replaced template demo URLs with anchor links (#, #services, #about, #contact)
- [ ] **Split services into separate page** — homepage is too long. Create services.html with same theme, move detailed service cards there. Homepage keeps brief summary + "View Our Services" link
- [ ] Add anchor IDs to homepage sections (id="services", id="about", id="contact") so nav links work
- [ ] Ensure mobile nav / hamburger menu works correctly

## Contact Form

- [x] Replace MetForm with CRM form embed (FormEmbed.render, uuid: e1e01b7a-6d87-46c4-9b47-08c76748af52)
- [x] CRM form has fields: Full Name, Phone (+44), Email, Address & Info
- [x] Removed ~190 lines of broken MetForm template code
- [ ] Test form submission end-to-end (needs container running)
- [ ] Add albaelectrical.co.uk to CRM form's allowed_domains (currently allows all)

## Branding & Content

- [x] Update company name throughout (PowerFix → Alba Electrical)
- [x] Update service descriptions to match Alba Electrical offerings
- [x] Update footer info — company name
- [ ] Replace PowerFix logo SVG with Alba Electrical logo
- [ ] Replace placeholder images with Alba Electrical photos (or appropriate stock for solar/EV/electrical)
- [ ] Update footer — add real phone, email, address, social links
- [ ] Add booking page URL to CTA buttons (customer mentioned "Go to Our Online Booking Page")

## Cleanup

- [x] Remove WordPress meta tags — RSS feeds, oEmbed, API links, canonical to template, noindex
- [ ] Remove remaining WordPress artefacts — generator meta, emoji loader JS, MetForm JS, WP API references in inline scripts
- [ ] Remove unused WP/Elementor JS and CSS where possible (reduce page weight)
- [ ] Clean up any broken asset references
- [ ] Remove `index.html.bak` if no longer needed

## SEO & Meta

- [x] Update page title ("Alba Electrical and Renewable Services | MCS & NICEIC Certified | Scotland")
- [x] Add meta description
- [ ] Set canonical URL to https://albaelectrical.co.uk
- [ ] Add Open Graph / social sharing tags
- [ ] Add proper favicon for Alba Electrical (currently uses PowerFix favicon)

## Priority Order

1. **Start container + configure NPM** — make site accessible at albaelectrical.co.uk
2. **Logo + favicon** — first thing the customer sees
3. **Services page split** — reduce homepage length
4. **Contact form** — must work for lead generation
5. **Images** — replace stock photos
6. **Cleanup** — remove WordPress artifacts, reduce page weight
7. **SEO** — canonical, OG tags, favicon
