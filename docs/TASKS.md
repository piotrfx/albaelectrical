# Alba Electrical — MVP Tasks

> Goal: Ship a functional MVP for albaelectrical.co.uk to secure customer deposit.

## Infrastructure

- [x] Docker container running (nginx:alpine, port 8088)
- [x] proxy-tier network created
- [ ] Configure NPM — add proxy host for albaelectrical.co.uk → albaelectrical-web:80, SSL via Let's Encrypt
- [ ] Git repo initialised and pushed to git@github.com:piotrfx/albaelectrical.git

## Navigation & Pages

- [ ] Fix navigation links — currently point to fv.templateorbit.com demo URLs
- [ ] Decide page strategy: single-page with anchor links, or create separate pages (about, services, contact, etc.)
- [ ] Ensure mobile nav / hamburger menu works correctly

## Contact Form

- [ ] Replace MetForm (WordPress-dependent) with a static-friendly solution (Formspree, Netlify Forms, or custom)
- [ ] Wire up form validation
- [ ] Test form submission end-to-end

## Branding & Content

- [ ] Replace PowerFix logo with Alba Electrical logo
- [ ] Update company name, tagline, and about text throughout
- [ ] Replace placeholder images with Alba Electrical photos (or appropriate stock)
- [ ] Update service descriptions to match Alba Electrical offerings
- [ ] Update footer info — address, phone, email, social links

## Cleanup

- [ ] Remove WordPress artefacts — meta tags (generator, pingback, REST API, emoji loader, xmlrpc)
- [ ] Remove unused WP/Elementor JS and CSS where possible (reduce page weight)
- [ ] Clean up any broken asset references

## SEO & Meta

- [ ] Update page title and meta description
- [ ] Set canonical URL to https://albaelectrical.co.uk
- [ ] Update Open Graph / social sharing tags
- [ ] Add favicon for Alba Electrical
