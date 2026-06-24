# West London Auto Locksmith

A production marketing website for a vehicle lockout specialist based in Uxbridge, West London. Pure frontend — no backend, no database.

## Run & Operate

- `pnpm --filter @workspace/west-london-auto-locksmith run dev` — run the site dev server (port 21438)
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- React + Vite (pure frontend, no backend)
- Tailwind CSS v4
- Wouter (client-side routing)
- No database, no API

## Where things live

- `artifacts/west-london-auto-locksmith/src/content/siteContent.ts` — **single source of truth** for all business content (phone, pricing, reviews, areas, trust details, analytics IDs)
- `artifacts/west-london-auto-locksmith/src/pages/` — 10 page components
- `artifacts/west-london-auto-locksmith/src/components/layout/` — SiteHeader, SiteFooter, StickyCallBar, PageLayout
- `artifacts/west-london-auto-locksmith/src/components/sections/` — CallCTA, ReviewsList, JobGallery
- `artifacts/west-london-auto-locksmith/src/lib/analytics.ts` — call tracking events
- `artifacts/west-london-auto-locksmith/public/images/jobs/` — upload real job photos here
- `artifacts/west-london-auto-locksmith/PUBLISH_CHECKLIST.md` — full pre-launch checklist
- `artifacts/west-london-auto-locksmith/README.md` — business owner guide

## Architecture decisions

- All editable content lives in one `siteContent.ts` file — phone, pricing wording, coverage areas, reviews, photos, analytics, legal details
- Phone number placeholder (`PHONE_NUMBER_PLACEHOLDER`) is checked across the site — no `tel:` links until a real number is added
- All conditional sections (reviews, photos, trust details, WhatsApp, legal) render nothing if the data is absent — no empty sections visible
- Analytics is a master-switched module: disabled unless both `gaId` and `enabled: true` are set; CookieConsent only appears if `gaId` is set
- Sticky call bar appears only on mobile (`md:hidden`) — pushes content above it with `pb-20 md:pb-0`

## Product

10-page marketing website: Home, Vehicle Lockout, Areas We Cover, Pricing, Reviews, FAQs, About, Contact, Privacy, Cookies. Designed to convert urgent phone calls. Amber CTAs, dark charcoal header/footer, Inter font, mobile-first.

## User preferences

- UK English throughout (lockout not lock-out, authorise not authorize etc.)
- No fake reviews — reviews section only renders if real items are in siteContent
- No unverified claims — no "24/7", "30-minute arrival", "DBS checked", or similar until confirmed
- No fixed pricing shown until approved — controlled by `siteContent.pricing.showFromPrice`
- Vehicle lockouts ONLY — all pages explicitly state no key programming, house locksmithing, etc.
- Price must be confirmed before travel — this is a core brand message on every page

## Gotchas

- Never set `siteContent.reviews.items` to fake/placeholder data — the owner will add real reviews
- `PHONE_NUMBER_PLACEHOLDER` must be replaced before launch — tracked in PUBLISH_CHECKLIST.md
- sitemap.xml and robots.txt Sitemap URL use `westlondonautolocksmith.co.uk` — update when real domain is known
- Google Analytics script must be added to `index.html` manually when a GA ID is provided

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- See `PUBLISH_CHECKLIST.md` for the complete pre-launch task list
