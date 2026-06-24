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

Analytics module is in `src/lib/analytics.ts`. It is a no-op until `siteContent.analytics.gaId` is set and `siteContent.analytics.enabled = true`. GA script must also be added to `index.html` manually — there is a comment placeholder.

## Conditional sections

ReviewsList, JobGallery, WhatsApp button, legal details block, trust block — all check siteContent data before rendering. They render nothing if data is absent. This is intentional — no empty/placeholder sections.
