import { useState } from "react";
import { Link } from "wouter";
import { Phone, CheckCircle, ChevronRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { siteContent } from "@/content/siteContent";
import { trackCallClick } from "@/lib/analytics";

const hasPhone = siteContent.business.phone !== "PHONE_NUMBER_PLACEHOLDER";
const phoneHref = `tel:${siteContent.business.phoneE164}`;

const coverageAreas = [
  "Uxbridge", "Hayes", "Southall", "Hillingdon", "Ruislip", "Northolt",
  "Greenford", "Ealing", "Slough", "West Drayton", "Yiewsley", "Harlington",
  "Ickenham", "Denham", "Acton", "Hanwell",
];

const pageFaqs = [
  {
    q: "Do I need a working key?",
    a: "For spare key jobs, yes, a working key is normally required. If you have lost all keys, call us first so we can confirm whether we can help.",
  },
  {
    q: "Can you make remote keys?",
    a: "We can help with many remote key jobs, but support depends on the vehicle, key type and available stock. Call with your make, model and year and we'll check before booking.",
  },
  {
    q: "How much does a spare car key cost?",
    a: "The price depends on the vehicle, key type and whether remote programming is required. We'll confirm the price before dispatch.",
  },
  {
    q: "Do you cover my area?",
    a: "We operate from Uxbridge and cover many areas across West London and nearby locations. Call with your exact location and we'll confirm availability.",
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
        data-testid={`faq-toggle-${q.substring(0, 20).replace(/\s/g, "-").toLowerCase()}`}
      >
        <span>{q}</span>
        <ChevronRight
          size={18}
          className={`shrink-0 text-[#121212]/40 transition-transform ${open ? "rotate-90" : ""}`}
        />
      </button>
      {open && <p className="pb-4 text-sm text-[#121212]/70 leading-relaxed">{a}</p>}
    </div>
  );
}

export default function SpareCarKeyPage() {
  return (
    <PageLayout
      meta={{
        title: "Spare Car Key West London | Mobile Auto Locksmith",
        description:
          "Need a spare car key in West London? Mobile spare car key service from Uxbridge. Call with your vehicle make, model and year to confirm availability, price and ETA.",
        canonical: `${siteContent.seo.siteUrl}/spare-car-key`,
        ogTitle: "Spare Car Key West London | West London Auto Locksmith",
        ogDescription:
          "Mobile spare car key service across West London. Call with your vehicle details to confirm availability and price before dispatch.",
      }}
    >
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#121212] text-white pt-12 pb-8 px-4" data-testid="section-hero">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-2 text-white">
            Need a Spare Car Key?
          </h1>
          <p className="text-white/80 text-lg font-medium mb-3">
            Mobile spare car key service across West London and surrounding areas.
          </p>
          <p className="text-white/55 text-sm leading-relaxed mb-7 max-w-xl">
            Already have a working key? Call with your vehicle make, model, year and location. We'll confirm whether we can supply and program a spare key before we attend.
          </p>
          <a
            href={hasPhone ? phoneHref : "/contact"}
            onClick={() => trackCallClick("spare-key-hero")}
            className="flex items-center justify-center gap-3 w-full sm:w-auto sm:inline-flex px-6 py-4 bg-[#C79A1B] text-[#121212] font-bold text-base sm:text-lg rounded hover:bg-[#A07A10] transition-colors min-h-[56px]"
            data-testid="button-call-hero"
          >
            <Phone size={20} />
            {hasPhone ? `Call Now — ${siteContent.business.phone}` : "Call to Check Availability"}
          </a>
          <div className="mt-6 flex flex-col gap-2">
            {["Working Key Required", "Price Confirmed Before Dispatch", "Mobile Service from Uxbridge"].map((point) => (
              <span key={point} className="inline-flex items-center gap-2 text-sm text-white/60">
                <span className="text-[#C79A1B] font-bold">✓</span>
                {point}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PHOTO ─────────────────────────────────────────────────────────── */}
      <section className="bg-[#121212] px-4 pt-2 pb-8">
        <div className="max-w-3xl mx-auto">
          <img
            src="/images/jobs/locksmith-working.png"
            alt="Mobile spare car key cutting and programming in West London"
            className="w-full rounded-lg object-cover max-h-72 md:max-h-96"
            loading="lazy"
          />
        </div>
      </section>

      {/* ── REVIEW CARD ───────────────────────────────────────────────────── */}
      <section className="bg-[#121212] px-4 pb-8" data-testid="section-review">
        <div className="max-w-3xl mx-auto">
          <article className="bg-[#1e1e1e] border border-white/10 rounded-lg p-5">
            <p className="text-sm font-semibold text-white mb-1">Trusted Local Auto Locksmith</p>
            <div className="flex gap-0.5 mb-2">
              {[1,2,3,4,5].map(s => (
                <svg key={s} className="w-4 h-4 text-[#C79A1B]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-white/70 mb-4">Rated 5.0 on Google by local customers.</p>
            {siteContent.reviews.googleReviewsUrl && (
              <a
                href={siteContent.reviews.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#C79A1B] underline hover:text-[#A07A10]"
              >
                Read our Google reviews
              </a>
            )}
          </article>
        </div>
      </section>

      {/* ── WHAT DO YOU NEED ──────────────────────────────────────────────── */}
      <section className="py-14 px-4 bg-white" data-testid="section-services">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#121212] mb-2">
            What Do You Need Help With?
          </h2>
          <p className="text-[#121212]/60 mb-8 text-sm">
            We provide spare car key services for customers who already have a working key.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-[#F7F7F4] border border-[#D8D8D3] rounded-lg p-6" data-testid="service-card-spare-key">
              <h3 className="font-bold text-[#121212] mb-2">Spare Car Key</h3>
              <p className="text-sm text-[#121212]/65 leading-relaxed">Need a second key for your car? We can help with many spare key jobs where you already have a working key. Call with your vehicle details and we'll confirm availability, key options and price.</p>
            </div>
            <div className="bg-[#F7F7F4] border border-[#D8D8D3] rounded-lg p-6" data-testid="service-card-lockout-link">
              <h3 className="font-bold text-[#121212] mb-2">Locked Out?</h3>
              <p className="text-sm text-[#121212]/65 leading-relaxed mb-4">If you're locked out of your car, see our vehicle lockout service — £100 fixed-price entry across our service area.</p>
              <Link
                href="/vehicle-lockout"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#121212] border border-[#121212]/20 rounded px-4 py-2 hover:border-[#121212]/50 transition-colors min-h-[40px]"
              >
                Vehicle Lockout Service <ChevronRight size={14} />
              </Link>
            </div>
          </div>
          <div className="text-center">
            <a
              href={hasPhone ? phoneHref : "/contact"}
              onClick={() => trackCallClick("spare-key-services")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C79A1B] text-[#121212] font-bold rounded hover:bg-[#A07A10] transition-colors min-h-[48px]"
              data-testid="button-call-services"
            >
              <Phone size={17} />
              Call to Check Availability
            </a>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ──────────────────────────────────────────────────── */}
      <section className="py-14 px-4 bg-[#F7F7F4]" data-testid="section-how-it-works">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#121212] mb-8">
            What Happens When You Call
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {[
              { n: "1", title: "Tell Us Your Vehicle Details", desc: "Give us your vehicle make, model, year, key type and your location." },
              { n: "2", title: "We Check Key Availability", desc: "We confirm whether we can supply and program a spare key for your vehicle." },
              { n: "3", title: "Price & ETA Confirmed", desc: "We confirm the price, arrival time and what key options are available before dispatch." },
              { n: "4", title: "We Cut & Program the Key", desc: "Once checked, we cut and program the spare key where supported." },
            ].map((step) => (
              <div key={step.n} className="flex flex-col" data-testid={`step-${step.n}`}>
                <div className="w-10 h-10 rounded-full bg-[#121212] text-white flex items-center justify-center font-bold text-base mb-3 shrink-0">
                  {step.n}
                </div>
                <h3 className="font-bold text-[#121212] mb-1.5">{step.title}</h3>
                <p className="text-sm text-[#121212]/65 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#121212]/50 border-l-2 border-[#C79A1B] pl-3 max-w-2xl">
            A working key is normally required for this service. If you have lost all keys, call first so we can confirm whether we can help.
          </p>
        </div>
      </section>

      {/* ── COVERAGE ──────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 bg-white" data-testid="section-coverage">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#121212] mb-3">
            Mobile Spare Car Keys Across West London
          </h2>
          <p className="text-[#121212]/65 text-sm leading-relaxed mb-3 max-w-xl">
            Based in Uxbridge, we provide mobile spare car key services across West London and nearby areas. Call with your location and vehicle details and we'll confirm availability before we set off.
          </p>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#121212]/40 mb-3">Some of the areas we cover</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {coverageAreas.map((area) => (
              <span
                key={area}
                className="px-3 py-1.5 bg-[#F7F7F4] border border-[#D8D8D3] rounded text-sm text-[#121212] font-medium"
              >
                {area}
              </span>
            ))}
          </div>
          <p className="text-sm text-[#121212]/60 mb-6">Don't see your area listed? Call us to check availability for your location.</p>
          <Link
            href="/areas-we-cover"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#121212] border border-[#121212]/20 rounded px-5 py-2.5 hover:border-[#121212]/50 transition-colors min-h-[44px]"
            data-testid="link-areas"
          >
            See Areas We Cover <ChevronRight size={15} />
          </Link>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ───────────────────────────────────────────────── */}
      <section className="py-14 px-4 bg-[#F7F7F4]" data-testid="section-whats-included">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#121212] mb-6">
            What's Included With a Spare Key Service
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              "Vehicle details checked before booking",
              "Key availability confirmed before dispatch",
              "Key cut where required",
              "Transponder programming where supported",
              "Remote programming where supported",
              "Price confirmed before attendance",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-[#C79A1B] shrink-0 mt-0.5" />
                <p className="text-sm text-[#121212]">{item}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#121212]/5 border border-[#121212]/10 rounded-lg p-5 max-w-2xl">
            <p className="text-sm text-[#121212]/75 leading-relaxed">
              Spare key service requires a working key unless confirmed otherwise. Some vehicles, key types and remote functions may not be supported. We'll confirm this before booking.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-14 px-4 bg-white" data-testid="section-faq">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#121212] mb-6">
            Common Questions
          </h2>
          <div className="divide-y divide-[#D8D8D3]">
            {pageFaqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-[#121212] py-16 px-4" data-testid="section-final-cta">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need a Spare Car Key in West London?
          </h2>
          <p className="text-white/70 text-base mb-8 max-w-lg mx-auto leading-relaxed">
            Call with your vehicle make, model, year and location. We'll confirm availability, price and ETA before dispatch.
          </p>
          <a
            href={hasPhone ? phoneHref : "/contact"}
            onClick={() => trackCallClick("spare-key-final")}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C79A1B] text-[#121212] font-bold text-lg rounded hover:bg-[#A07A10] transition-colors min-h-[56px]"
            data-testid="button-call-final"
          >
            <Phone size={22} />
            {hasPhone ? `Call Now — ${siteContent.business.phone}` : "Call Now"}
          </a>
          <p className="mt-5 text-xs text-white/40">Vehicle lockouts and spare car keys only.</p>
        </div>
      </section>

    </PageLayout>
  );
}
