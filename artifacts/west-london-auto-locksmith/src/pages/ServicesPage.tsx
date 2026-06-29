import { Link } from "wouter";
import { Phone, Lock, KeyRound } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import { siteContent } from "@/content/siteContent";
import { trackCallClick, trackEvent } from "@/lib/analytics";

const phoneHref = `tel:${siteContent.business.phoneE164}`;
const hasPhone = siteContent.business.phone !== "PHONE_NUMBER_PLACEHOLDER";

export default function ServicesPage() {
  return (
    <PageLayout
      meta={{
        title: "Services | West London Auto Locksmith",
        description:
          "Vehicle lockouts and spare car keys across West London. Call with your location and vehicle details. We confirm availability, price and ETA before dispatch.",
        canonical: `${siteContent.seo.siteUrl}/services`,
        ogTitle: "Services | West London Auto Locksmith",
        ogDescription:
          "Vehicle lockouts and spare car keys across West London. Call to confirm availability, price and ETA before we attend.",
      }}
    >
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#121212] text-white pt-10 pb-10 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-3 text-white">
            What Do You Need Help With?
          </h1>
          <p className="text-white/60 text-sm leading-relaxed">
            We provide mobile vehicle lockout and spare key services across West London and surrounding areas.
          </p>
        </div>
      </section>

      {/* ── SERVICE CARDS ─────────────────────────────────────────────────── */}
      <section className="bg-white py-10 px-4" data-testid="section-service-selector">
        <div className="max-w-2xl mx-auto flex flex-col gap-4">

          {/* Card 1 — Vehicle Lockout (primary / more prominent) */}
          <Link
            href="/vehicle-lockout"
            onClick={() => trackEvent("services_page_lockout_click")}
            className="group block bg-[#F7F7F4] border-2 border-[#C79A1B] rounded-xl p-6 hover:bg-[#faf8f2] transition-colors cursor-pointer"
            data-testid="service-card-lockout"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#C79A1B]/10 mb-5">
              <Lock size={22} className="text-[#C79A1B]" strokeWidth={1.5} />
            </div>
            <h2 className="font-bold text-[#121212] text-xl mb-2 group-hover:text-[#A07A10] transition-colors">
              Locked Your Keys in the Car?
            </h2>
            <p className="text-sm text-[#121212]/70 leading-relaxed mb-5">
              Mobile vehicle entry across West London and surrounding areas.
            </p>
            <div className="flex flex-col gap-1.5 mb-5">
              {["£100 Fixed Price", "No Call-Out Fee"].map((point) => (
                <span key={point} className="inline-flex items-center gap-2 text-sm text-[#121212]/70">
                  <span className="text-[#C79A1B] font-bold">✓</span>
                  {point}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#C79A1B]">
              Vehicle Lockout Service
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

          {/* Card 2 — Spare Car Key */}
          <Link
            href="/spare-car-key"
            onClick={() => trackEvent("services_page_spare_key_click")}
            className="group block bg-[#F7F7F4] border border-[#D8D8D3] rounded-xl p-6 hover:border-[#C79A1B]/40 hover:bg-[#faf8f2] transition-colors cursor-pointer"
            data-testid="service-card-spare-key"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#121212]/5 mb-5">
              <KeyRound size={22} className="text-[#121212]/60" strokeWidth={1.5} />
            </div>
            <h2 className="font-bold text-[#121212] text-xl mb-2 group-hover:text-[#A07A10] transition-colors">
              Need a Spare Car Key?
            </h2>
            <p className="text-sm text-[#121212]/70 leading-relaxed mb-5">
              Already have a working key? We can supply, cut and program spare keys for many vehicles. Call to confirm availability.
            </p>
            <div className="flex flex-col gap-1.5 mb-5">
              {["Mobile Service", "Programming Available"].map((point) => (
                <span key={point} className="inline-flex items-center gap-2 text-sm text-[#121212]/70">
                  <span className="text-[#C79A1B] font-bold">✓</span>
                  {point}
                </span>
              ))}
            </div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#121212]/60 group-hover:text-[#A07A10] transition-colors">
              Spare Car Key Service
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>

        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#F7F7F4] py-10 px-4">
        <div className="max-w-2xl mx-auto border border-[#D8D8D3] rounded-xl p-6 sm:p-8 text-center">
          <h2 className="text-xl font-bold text-[#121212] mb-3">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-sm text-[#121212]/65 leading-relaxed mb-6 max-w-md mx-auto">
            Call with your vehicle make, model, year and location. We'll recommend the right service, confirm availability, give you a clear price and a live ETA before dispatch.
          </p>
          <a
            href={hasPhone ? phoneHref : "/contact"}
            onClick={() => trackCallClick("services-page-cta")}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C79A1B] text-[#121212] font-bold rounded hover:bg-[#A07A10] transition-colors min-h-[52px] text-base"
            data-testid="button-call-services"
          >
            <Phone size={18} />
            {hasPhone ? `Call Now — ${siteContent.business.phone}` : "Call to Check Availability"}
          </a>
        </div>
      </section>

    </PageLayout>
  );
}
