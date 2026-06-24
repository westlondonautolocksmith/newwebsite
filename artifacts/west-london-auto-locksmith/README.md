# West London Auto Locksmith — Website

A production website for West London Auto Locksmith, a vehicle lockout specialist
based in Uxbridge, West London.

---

## How to make changes

**You do not need to edit code directly.** Tell your Replit Agent assistant what
you want to change and it will update the site for you.

Examples:
- "Add my phone number to the site"
- "Show the from-£100 price on the homepage"
- "Add these customer reviews: ..."
- "Add Hayes to the coverage areas list"
- "Enable the WhatsApp button with this number: ..."

---

## Where all the editable content lives

**One file controls all the business text, pricing, reviews, photos, and settings:**

```
src/content/siteContent.ts
```

This is the single source of truth. It contains:

| Section | What it controls |
|---|---|
| `business` | Name, tagline, phone, WhatsApp, coverage areas |
| `pricing` | Price wording, show/hide from-price, payment methods |
| `reviews` | Customer reviews, Google reviews URL |
| `recentJobs` | Job photo gallery entries |
| `trust` | Legal name, address, company number, VAT, invoice |
| `analytics` | Google Analytics ID, Google Ads ID, master enable switch |
| `seo` | Site URL (used for canonical tags and sitemap) |
| `legal` | Privacy/cookie policy dates |

**Always ask your agent to make changes rather than editing this file yourself.**

---

## Pages

| URL | File | Purpose |
|---|---|---|
| `/` | `src/pages/HomePage.tsx` | Main landing page |
| `/vehicle-lockout` | `src/pages/VehicleLockoutPage.tsx` | Primary SEO/PPC landing page |
| `/areas-we-cover` | `src/pages/AreasPage.tsx` | Service area page |
| `/pricing` | `src/pages/PricingPage.tsx` | Pricing and payment |
| `/reviews` | `src/pages/ReviewsPage.tsx` | Reviews and job photos |
| `/faqs` | `src/pages/FAQsPage.tsx` | Frequently asked questions |
| `/about` | `src/pages/AboutPage.tsx` | About the business |
| `/contact` | `src/pages/ContactPage.tsx` | Contact and click-to-call |
| `/privacy` | `src/pages/PrivacyPage.tsx` | Privacy policy |
| `/cookies` | `src/pages/CookiesPage.tsx` | Cookie policy |

---

## Analytics

Analytics is **not active** until you provide a Google Analytics ID.

To enable:
1. Add your GA4 Measurement ID to `siteContent.analytics.gaId`
2. Add the Google Analytics script to `index.html` (there is a comment placeholder)
3. Set `siteContent.analytics.enabled: true`

Call button clicks fire named events (`call_click_hero`, `call_click_sticky`, etc.)
via `src/lib/analytics.ts`. These will appear in GA4 once enabled.

---

## Images

Upload real job photos to `public/images/jobs/` and then add them to
`siteContent.recentJobs.photos`. See `public/images/README.md` for exact
instructions and privacy rules.

---

## Before launching

See `PUBLISH_CHECKLIST.md` for a full pre-launch checklist.

---

## Stack

- React + Vite (TypeScript)
- Tailwind CSS v4
- Wouter (routing)
- No backend or database — pure static site
