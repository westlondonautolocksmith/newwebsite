# Pre-Launch Checklist — West London Auto Locksmith

Work through this list before making the site live. Each item maps to a field
in `src/content/siteContent.ts` unless otherwise noted.

---

## Business information (required before launch)

- [ ] **Phone number** — set `siteContent.business.phone` (replace `PHONE_NUMBER_PLACEHOLDER`)
- [ ] Test that the phone number works for click-to-call on a real mobile
- [ ] **WhatsApp** (optional) — set `siteContent.business.whatsappNumber` and `whatsappEnabled: true`
- [ ] **Coverage areas** — review and update `siteContent.business.coverageAreas` with the exact towns you want listed

---

## Pricing

- [ ] Decide whether to show "from £100" — set `siteContent.pricing.showFromPrice: true` and confirm the wording in `approvedWording`
- [ ] **Payment methods** — add to `siteContent.pricing.paymentMethods` array (e.g. `["Cash", "Bank transfer"]`)
- [ ] Confirm `priceConfirmBeforeTravel: true` is accurate for how you operate

---

## Reviews and social proof

- [ ] Set up Google Business Profile (if not already done)
- [ ] Add Google reviews URL to `siteContent.reviews.googleReviewsUrl`
- [ ] Add genuine customer reviews to `siteContent.reviews.items` (name, rating, text, source, date)
- [ ] Upload real job photos to `public/images/jobs/` — see `public/images/README.md`
- [ ] Add each photo to `siteContent.recentJobs.photos`

---

## Legal and trust details

- [ ] **Legal company name** — set `siteContent.trust.legalName`
- [ ] **Registered address** — set `siteContent.trust.legalAddress`
- [ ] **Company registration number** (if applicable) — set `siteContent.trust.companyRegistration`
- [ ] **VAT number** (if VAT registered) — set `siteContent.trust.vatNumber`
- [ ] **Year established** (optional) — set `siteContent.trust.yearEstablished`
- [ ] **Invoice/receipt** — set `siteContent.trust.invoiceAvailable: true` only if you actually provide these
- [ ] Read through the Privacy Policy (`/privacy`) and confirm it is accurate
- [ ] Read through the Cookie Policy (`/cookies`) and confirm it is accurate
- [ ] Update `siteContent.legal.privacyLastUpdated` and `cookiesLastUpdated` to the date you approve the text

---

## SEO

- [ ] Confirm your domain name — update `siteContent.seo.siteUrl`
- [ ] Update `public/sitemap.xml` with the correct domain (replace `westlondonautolocksmith.co.uk`)
- [ ] Update `public/robots.txt` Sitemap URL with the correct domain
- [ ] Update `index.html` Open Graph `og:url` with the correct domain
- [ ] After launch: submit sitemap to Google Search Console
- [ ] Set up and verify Google Business Profile

---

## Analytics (do not enable until IDs are confirmed and tested)

- [ ] Set up a Google Analytics 4 property — get your Measurement ID (starts with `G-`)
- [ ] Add to `siteContent.analytics.gaId`
- [ ] Add the GA script tag to `index.html` (replace the comment placeholder)
- [ ] Set `siteContent.analytics.enabled: true`
- [ ] Test call button click events appear in GA4 DebugView before going live
- [x] Google Ads tag (`AW-18144470949`) added to `index.html` and `siteContent.analytics.gadsId`
- [x] Click-to-call conversion wired to all Call Now buttons via `siteContent.analytics.gadsCallConversionLabel`

---

## Technical checks before launch

- [ ] Test all 10 pages load correctly on a real mobile device
- [ ] Test the click-to-call button opens the phone dialler on mobile
- [ ] Test the sticky bottom call bar appears on mobile
- [ ] Test all navigation links work (desktop and mobile menu)
- [ ] Test FAQ accordions open and close correctly
- [ ] Confirm no console errors in the browser
- [ ] Confirm no red/placeholder colours visible anywhere
- [ ] Confirm `/robots.txt` is accessible
- [ ] Confirm `/sitemap.xml` is accessible

---

## Content check

- [ ] Read every page from top to bottom — check for any inaccurate wording
- [ ] Confirm `PHONE_NUMBER_PLACEHOLDER` does not appear anywhere on the live site
- [ ] Confirm no unverified claims (no "24/7", "30-minute arrival", "DBS checked", etc.)
- [ ] Confirm the Coverage Areas list matches where you actually operate

---

## Before going live

- [ ] Connect your domain
- [ ] Confirm SSL is active (https://)
- [ ] Do a final read-through of every page
- [ ] Announce via Google Business Profile if applicable
