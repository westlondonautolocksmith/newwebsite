---
name: West London Auto Locksmith site
description: Key rules and architecture for the WLAL marketing website
---

## Core rules (enforce on every session)

- UK English throughout
- No fake reviews — `siteContent.reviews.items` must only contain real verified reviews
- No unverified claims — never add "24/7", "30-minute arrival", "DBS checked", "fully insured", or similar unless the owner explicitly confirms and approves
- No fixed pricing displayed — controlled by `siteContent.pricing.showFromPrice` (false by default); only set to true when owner approves specific wording in `approvedWording`
- Vehicle lockouts ONLY — all pages state no key programming, no house locksmithing, no replacement keys
- Price confirmed before travel — this is a core brand message, do not remove it

**Why:** Owner requested strict content rules to avoid regulatory or reputational issues from unverified claims.

## Single source of truth

`artifacts/west-london-auto-locksmith/src/content/siteContent.ts` controls everything:
- Phone number (placeholder until owner provides real number)
- Pricing wording and from-price toggle
- Coverage areas list
- Reviews items and Google reviews URL
- Recent job photos
- Trust/legal details
- Analytics IDs and master enable switch
- Legal policy dates

**How to apply:** Always edit siteContent.ts rather than hardcoding values in page components.

## Phone number guard

The string `"PHONE_NUMBER_PLACEHOLDER"` is checked via `const hasPhone = siteContent.business.phone !== "PHONE_NUMBER_PLACEHOLDER"`. All call buttons conditionally render tel: links or fall back to /contact. Never remove this guard.

## Analytics

Analytics module is in `src/lib/analytics.ts`, gated by the `siteContent.analytics.enabled` master switch. A Google Ads tag (`gadsId` = `AW-18144470949`) is loaded in `index.html` and `enabled` is `true`.

Click-to-call conversion: `reportCallConversion()` fires the Google Ads conversion (`gadsCallConversionLabel`, value 1.0 GBP) and is called from inside `trackCallClick()`. **Why there:** every Call Now (tel:) button already routes through `trackCallClick`, so wiring the conversion there covers all of them in one place — do NOT add per-button conversion calls. It does NOT preventDefault/navigate via callback: tel: links don't unload the page, so the beacon sends fine and the dialer must never be blocked.

CookieConsent banner shows when `gaId` OR `gadsId` is set (informational only — it does not actually gate gtag firing; true consent-gating / Google Consent Mode is a future task). GA4 (`gaId`, a `G-` id) is not yet configured.

## Conditional sections

ReviewsList, JobGallery, WhatsApp button, legal details block, trust block — all check siteContent data before rendering. They render nothing if data is absent. This is intentional — no empty/placeholder sections.

## Structured data (JSON-LD)

Site-wide LocalBusiness/Locksmith JSON-LD is injected once via `src/components/StructuredData.tsx` (built by `src/lib/structuredData.ts`), mounted in `App.tsx`. It uses id `"ld-localbusiness"`, deliberately distinct from `SEOMeta`'s per-page `"structured-data"` id so the two never clobber each other.

**Why / rules:** Deliberately OMITS `aggregateRating`/`review` (Google advises against self-serving review markup on your own site) and OMITS `image` (no owner-approved schema image exists; the no-fabrication rule extends to schema — never point it at unverified `job*.png` photos). `areaServed` uses `@type: "Place"` (coverage areas aren't all cities). Phone is normalised to E.164 via `toE164UK()`.

## coverageRadius wording gotcha

`siteContent.business.coverageRadius` is the bare value `"12 miles"` — call sites prepend "approximately" themselves (e.g. "within approximately {coverageRadius}"). Do NOT put "approximately" back into the value or it double-prints ("approximately approximately 12 miles"). This bug was present across most pages until fixed.
