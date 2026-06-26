import { useState } from "react";
import { Link } from "wouter";
import { Phone, ChevronRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { siteContent } from "@/content/siteContent";
import { trackCallClick, trackEvent } from "@/lib/analytics";

const phoneHref = `tel:${siteContent.business.phoneE164}`;
const hasPhone = siteContent.business.phone !== "PHONE_NUMBER_PLACEHOLDER";

// ── Local FAQ component ──────────────────────────────────────────────────────

const homeFaqs = [
  {
    q: "Can you help if I am locked out of my car?",
    a: "Yes. Vehicle lockout is our core service. We offer £100 fixed-price entry across our advertised service area. Call to confirm we can reach your location.",
  },
  {
    q: "Can you make a spare or replacement car key?",
    a: "We offer spare and replacement key services for supported vehicles. Call with your vehicle make, model, year and whether you still have a working key and we will confirm whether we can help.",
  },
  {
    q: "Can you help if I have lost all my car keys?",
    a: "All-keys-lost work depends on the vehicle make, model and year. Call us with those details and your location and we will confirm whether we can assist.",
  },
  {
    q: "What details do you need when I call?",
    a: "Your current location, the vehicle make, model and year, and a description of the situation — for example, keys locked inside, need a spare key, or all keys lost.",
  },
  {
    q: "Do you need proof that I own the vehicle?",
    a: "Yes. We ask for proof of ownership or entitlement to access the vehicle before any work begins.",
  },
  {
    q: "How is the price confirmed?",
    a: "We confirm a clear price before travelling to you. The cost depends on your location, vehicle and the service needed. There are no hidden charges.",
  },
  {
    q: "Which areas do you cover?",
    a: `We cover Uxbridge and surrounding areas within approximately ${siteContent.business.coverageRadius}. Call with your location and we will confirm immediately.`,
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#D8D8D3]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-4 flex items-center justify-between gap-4 font-medium text-[#121212] hover:text-[#121212]/70 transition-colors min-h-[56px]"
        aria-expanded={open}
      >
        <span>{q}</span>
        <ChevronRight
          size={18}
          className={`shrink-0 text-[#121212]/40 transition-transform ${open ? "rotate-90" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-4 text-sm text-[#121212]/70 leading-relaxed">{a}</p>
      )}
    </div>
  );
}

// ── Star icon ────────────────────────────────────────────────────────────────

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-[#C9A227]" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <PageLayout
      meta={{
        title: "Car Locksmith in Uxbridge & West London | West London Auto Locksmith",
        description:
          "Locked out, need a spare car key or lost all your keys? Mobile car locksmith services across Uxbridge and surrounding West London. Call for availability, a clear price and a live ETA.",
        canonical: `${siteContent.seo.siteUrl}/`,
        ogTitle: "Car Locksmith in Uxbridge & West London | West London Auto Locksmith",
        ogDescription:
          "Locked out, need a spare car key or lost all your keys? Mobile car locksmith services across Uxbridge and West London.",
      }}
    >

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#121212] text-white pt-10 pb-8 px-4" data-testid="section-hero">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-bold leading-tight mb-4 text-white">
            <span className="block text-3xl sm:text-4xl md:text-5xl">
              Mobile Car Locksmith
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl">
              Serving West London
            </span>
          </h1>
          <p className="text-white text-lg sm:text-xl font-medium leading-snug mb-2 max-w-lg mx-auto">
            Locked out, need a spare car key, or lost all your keys?
          </p>
          <p className="text-white/55 text-sm leading-relaxed mb-7 max-w-lg mx-auto">
            Call for a clear price and a live ETA.
          </p>
          <a
            href={phoneHref}
            onClick={() => trackCallClick("homepage-hero")}
            className="flex items-center justify-center gap-3 w-full px-4 py-5 bg-[#C9A227] text-[#121212] font-bold text-base sm:text-xl rounded hover:bg-[#A88417] transition-colors min-h-[64px]"
            data-testid="button-call-hero"
          >
            <Phone size={24} />
            {hasPhone ? `Call Now — ${siteContent.business.phone}` : "Call to Check Availability"}
          </a>
        </div>
      </section>

      {/* ── PHOTO COLLAGE ─────────────────────────────────────────────────── */}
      <section className="bg-[#121212] px-4 pt-2 pb-6" data-testid="section-photo-collage">
        <div className="max-w-4xl mx-auto flex flex-col gap-2 md:gap-3">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            <div className="col-span-2 aspect-[16/9] overflow-hidden rounded-lg">
              <img src="/images/job4.png" alt="West London Auto Locksmith technician beside branded vehicle in Uxbridge" className="w-full h-full object-cover" loading="eager" />
            </div>
            <div className="col-span-1 overflow-hidden rounded-lg hidden md:block">
              <img src="/images/job6.png" alt="West London Auto Locksmith technician by van" className="w-full h-full object-cover object-top" loading="lazy" />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src="/images/job1.png" alt="West London Auto Locksmith branded vehicle" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src="/images/job2.png" alt="Technician opening a locked car" className="w-full h-full object-cover object-top" loading="lazy" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src="/images/job3.png" alt="West London Auto Locksmith technician" className="w-full h-full object-cover object-top" loading="lazy" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src="/images/job5.png" alt="Technician working on a vehicle door" className="w-full h-full object-cover object-top" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE SELECTOR ──────────────────────────────────────────────── */}
      <section className="bg-white py-10 px-4" data-testid="section-service-selector">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-[#121212] mb-6 text-center">
            What do you need help with?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

            {/* Card 1 — Vehicle Lockout */}
            <div
              className="bg-[#F7F7F4] border border-[#D8D8D3] rounded-xl p-6 flex flex-col"
              data-testid="service-card-lockout"
            >
              <h3 className="font-bold text-[#121212] text-base mb-2">
                Locked Out of Your Car?
              </h3>
              <p className="text-sm text-[#121212]/65 leading-relaxed mb-5 flex-1">
                £100 fixed-price vehicle entry across our advertised service area. Live ETA confirmed before dispatch.
              </p>
              <Link
                href="/vehicle-lockout"
                onClick={() => trackEvent("homepage_lockout_card_click")}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#121212] text-white font-semibold text-sm rounded hover:bg-[#2a2a2a] transition-colors min-h-[44px]"
                data-testid="button-lockout-card"
              >
                Vehicle Lockout Service
                <ChevronRight size={15} />
              </Link>
            </div>

            {/* Card 2 — Car Keys */}
            <div
              className="bg-[#F7F7F4] border border-[#D8D8D3] rounded-xl p-6 flex flex-col"
              data-testid="service-card-car-keys"
            >
              <h3 className="font-bold text-[#121212] text-base mb-2">
                Need a Spare or Replacement Key?
              </h3>
              <p className="text-sm text-[#121212]/65 leading-relaxed mb-5 flex-1">
                Spare keys, replacement keys, remote keys and programming for supported vehicles.
              </p>
              <a
                href="#car-keys"
                onClick={() => trackEvent("homepage_car_keys_card_click")}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#121212] text-white font-semibold text-sm rounded hover:bg-[#2a2a2a] transition-colors min-h-[44px]"
                data-testid="button-car-keys-card"
              >
                Car Key Services
                <ChevronRight size={15} />
              </a>
            </div>

            {/* Card 3 — Lost Keys */}
            <div
              className="bg-[#F7F7F4] border border-[#D8D8D3] rounded-xl p-6 flex flex-col"
              data-testid="service-card-lost-keys"
            >
              <h3 className="font-bold text-[#121212] text-base mb-2">
                Lost All Your Car Keys?
              </h3>
              <p className="text-sm text-[#121212]/65 leading-relaxed mb-5 flex-1">
                Call with your make, model, year and location so we can confirm availability, price and ETA before travel.
              </p>
              <a
                href="#lost-car-keys"
                onClick={() => trackEvent("homepage_lost_keys_card_click")}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#121212] text-white font-semibold text-sm rounded hover:bg-[#2a2a2a] transition-colors min-h-[44px]"
                data-testid="button-lost-keys-card"
              >
                Lost Car Key Help
                <ChevronRight size={15} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICE DETAIL A — Vehicle Lockouts ───────────────────────────── */}
      <section
        id="vehicle-lockouts"
        className="bg-white py-14 px-4 scroll-mt-20"
        data-testid="section-detail-lockouts"
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest mb-2">Vehicle Entry</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#121212] mb-4">
            Vehicle Lockout Service
          </h2>
          <p className="text-[#121212]/65 text-base leading-relaxed mb-8 max-w-xl">
            Locked keys in your car? We provide £100 fixed-price vehicle entry across our advertised service area. Your live ETA is confirmed before we set off.
          </p>
          <Link
            href="/vehicle-lockout"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A227] text-[#121212] font-bold rounded hover:bg-[#A88417] transition-colors min-h-[48px] text-sm"
            data-testid="link-view-lockout-service"
          >
            View Vehicle Lockout Service
            <ChevronRight size={15} />
          </Link>
        </div>
      </section>

      {/* ── SERVICE DETAIL B — Car Keys ───────────────────────────────────── */}
      <section
        id="car-keys"
        className="bg-[#F7F7F4] py-14 px-4 scroll-mt-20"
        data-testid="section-detail-car-keys"
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest mb-2">Key Services</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#121212] mb-4">
            Spare &amp; Replacement Car Keys
          </h2>
          <p className="text-[#121212]/65 text-base leading-relaxed mb-8 max-w-xl">
            Need another working key, a replacement remote or key programming? Tell us your vehicle make, model, year and whether you still have a working key. We will confirm availability and price before travelling.
          </p>
          <a
            href={phoneHref}
            onClick={() => trackCallClick("homepage-car-keys-section")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A227] text-[#121212] font-bold rounded hover:bg-[#A88417] transition-colors min-h-[48px] text-sm"
            data-testid="button-call-car-keys"
          >
            <Phone size={16} />
            Call About Car Keys
          </a>
        </div>
      </section>

      {/* ── SERVICE DETAIL C — Lost Car Keys ──────────────────────────────── */}
      <section
        id="lost-car-keys"
        className="bg-white py-14 px-4 scroll-mt-20"
        data-testid="section-detail-lost-keys"
      >
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest mb-2">All Keys Lost</p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#121212] mb-4">
            Lost All Your Car Keys?
          </h2>
          <p className="text-[#121212]/65 text-base leading-relaxed mb-8 max-w-xl">
            All-keys-lost work depends on the vehicle. Call with your make, model, year and location so we can check whether we can help and confirm price and ETA before travel.
          </p>
          <a
            href={phoneHref}
            onClick={() => trackCallClick("homepage-lost-keys-section")}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A227] text-[#121212] font-bold rounded hover:bg-[#A88417] transition-colors min-h-[48px] text-sm"
            data-testid="button-call-lost-keys"
          >
            <Phone size={16} />
            Call About Lost Car Keys
          </a>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <section className="bg-[#F7F7F4] py-14 px-4" data-testid="section-how-it-works">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#121212] mb-10 text-center">
            How It Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                n: "1",
                title: "Call Us",
                desc: "Tell us your location, vehicle make, model, year and what has happened.",
              },
              {
                n: "2",
                title: "Price and ETA Confirmed",
                desc: "We confirm availability, a clear price and your estimated arrival time before we set off.",
              },
              {
                n: "3",
                title: "We Help You Get Moving",
                desc: "We attend with the right equipment for the service you need, where the job is supported.",
              },
            ].map((step) => (
              <div key={step.n} className="flex flex-col items-start" data-testid={`step-${step.n}`}>
                <div className="w-11 h-11 rounded-full bg-[#121212] text-white flex items-center justify-center font-bold text-base mb-4 shrink-0">
                  {step.n}
                </div>
                <h3 className="font-bold text-[#121212] mb-2">{step.title}</h3>
                <p className="text-sm text-[#121212]/65 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST ─────────────────────────────────────────────────────────── */}
      <section className="bg-white py-14 px-4" data-testid="section-trust">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#121212] mb-8">
            A Straightforward Service
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: "Clear price before dispatch",
                desc: "You know the cost before we travel to you.",
              },
              {
                title: "Proof of ownership checked",
                desc: "We verify your entitlement to the vehicle before any work begins.",
              },
              {
                title: "Card, cash and bank transfer accepted",
                desc: siteContent.pricing.paymentMethods.join(", "),
              },
              {
                title: "Real local technician and branded vehicle",
                desc: `Based in ${siteContent.business.baseArea}, covering West London.`,
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="text-[#C9A227] font-bold text-lg leading-none mt-0.5 shrink-0">✓</span>
                <div>
                  <p className="font-semibold text-sm text-[#121212]">{item.title}</p>
                  <p className="text-xs text-[#121212]/55 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ──────────────────────────────────────────────────── */}
      <section className="bg-[#F7F7F4] py-14 px-4" data-testid="section-coverage">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#121212] mb-3">
            Based in Uxbridge, Serving West London
          </h2>
          <p className="text-[#121212]/65 text-base leading-relaxed mb-7 max-w-xl">
            We serve Uxbridge and surrounding areas including Hillingdon, Ickenham, West Drayton, Yiewsley, Hayes, Ruislip and nearby locations. Call with your location and we will confirm immediately.
          </p>
          <Link
            href="/areas-we-cover"
            onClick={() => trackEvent("homepage_areas_click")}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#121212] border border-[#121212]/25 rounded px-5 py-2.5 hover:border-[#121212]/50 transition-colors min-h-[44px]"
            data-testid="link-areas"
          >
            View Areas We Cover <ChevronRight size={15} />
          </Link>
        </div>
      </section>

      {/* ── REVIEWS ───────────────────────────────────────────────────────── */}
      {siteContent.reviews.items.length > 0 && (
        <section className="bg-white py-14 px-4" data-testid="section-reviews">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-[#121212] mb-2">
              Rated by Local Customers
            </h2>
            <div className="flex items-center gap-2 mb-8">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(s => <StarIcon key={s} />)}
              </div>
              <span className="text-sm font-semibold text-[#121212]">
                {siteContent.reviews.rating} on Google
                {siteContent.reviews.reviewCount && (
                  <span className="font-normal text-[#121212]/50 ml-1">
                    ({siteContent.reviews.reviewCount} reviews)
                  </span>
                )}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {siteContent.reviews.items.slice(0, 2).map((review) => (
                <article
                  key={review.name}
                  className="bg-[#F7F7F4] border border-[#D8D8D3] rounded-xl p-5"
                  data-testid={`review-card-${review.name.replace(/\s/g, "-").toLowerCase()}`}
                >
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => <StarIcon key={i} />)}
                  </div>
                  <blockquote className="text-sm text-[#121212]/75 leading-relaxed whitespace-pre-line mb-4">
                    "{review.text}"
                  </blockquote>
                  <footer className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-[#121212]">{review.name}</p>
                      <p className="text-xs text-[#C9A227]">{review.source} Review</p>
                    </div>
                    <p className="text-xs text-[#121212]/40">{review.date}</p>
                  </footer>
                </article>
              ))}
            </div>
            {siteContent.reviews.googleReviewsUrl && (
              <a
                href={siteContent.reviews.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("homepage_reviews_click")}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#121212] border border-[#121212]/25 rounded px-5 py-2.5 hover:border-[#121212]/50 transition-colors min-h-[44px]"
                data-testid="link-google-reviews"
              >
                Read Our Google Reviews <ChevronRight size={15} />
              </a>
            )}
          </div>
        </section>
      )}

      {/* ── PHOTOS ────────────────────────────────────────────────────────── */}
      <section className="bg-[#121212] py-10 px-4" data-testid="section-photos">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-lg font-bold text-white mb-4">
            West London Auto Locksmith
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {[
              { src: "/images/job1.png", alt: "West London Auto Locksmith branded vehicle" },
              { src: "/images/job2.png", alt: "Technician opening a locked car" },
              { src: "/images/job3.png", alt: "West London Auto Locksmith technician" },
              { src: "/images/job5.png", alt: "Technician working on a vehicle door" },
              { src: "/images/job6.png", alt: "West London Auto Locksmith technician by van" },
            ].map((photo) => (
              <div key={photo.src} className="aspect-square overflow-hidden rounded-lg">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="bg-white py-14 px-4" data-testid="section-faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#121212] mb-6">
            Car Locksmith Questions
          </h2>
          <div className="divide-y divide-[#D8D8D3]">
            {homeFaqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/faqs"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#121212] border border-[#121212]/20 rounded px-5 py-2.5 hover:border-[#121212]/50 transition-colors min-h-[44px]"
              data-testid="link-all-faqs"
            >
              See All FAQs <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-[#121212] py-16 px-4" data-testid="section-final-cta">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Help With Your Car Keys?
          </h2>
          <p className="text-white/65 text-base mb-8 max-w-lg mx-auto leading-relaxed">
            Call now with your location and vehicle details. We will confirm availability, price and a live ETA before we set off.
          </p>
          <a
            href={phoneHref}
            onClick={() => trackCallClick("homepage-final")}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C9A227] text-[#121212] font-bold text-lg rounded hover:bg-[#A88417] transition-colors min-h-[56px] min-w-[240px]"
            data-testid="button-call-final"
          >
            <Phone size={22} />
            {hasPhone ? `Call Now — ${siteContent.business.phone}` : "Call to Check Availability"}
          </a>
          <p className="mt-5 text-xs text-white/35">
            Vehicle lockouts, spare keys, replacement keys and all-keys-lost help for supported vehicles.
          </p>
        </div>
      </section>

    </PageLayout>
  );
}
