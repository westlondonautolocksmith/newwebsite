import { Link } from "wouter";
import { Phone, ChevronRight } from "lucide-react";
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
      <section className="bg-[#121212] text-white pt-10 pb-10 px-4" data-testid="section-hero">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-2 text-white">
            What Do You Need Help With?
          </h1>
          <p className="text-white/60 text-sm leading-relaxed">
            Choose the service you need. We'll confirm availability, price and ETA before dispatch.
          </p>
        </div>
      </section>

      {/* ── SERVICE CARDS ─────────────────────────────────────────────────── */}
      <section className="bg-white py-12 px-4" data-testid="section-service-selector">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col gap-5">

            {/* Card 1 — Vehicle Lockout */}
            <div
              className="bg-[#F7F7F4] border border-[#D8D8D3] rounded-xl p-6 flex flex-col"
              data-testid="service-card-lockout"
            >
              <h2 className="font-bold text-[#121212] text-lg mb-2">
                Keys Locked Inside Your Car?
              </h2>
              <p className="text-sm text-[#121212]/70 leading-relaxed mb-5 flex-1">
                Locked your keys inside the car? We provide mobile vehicle entry across West London and surrounding areas.
              </p>
              <Link
                href="/vehicle-lockout"
                onClick={() => trackEvent("services_page_lockout_click")}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#121212] text-white font-semibold text-sm rounded hover:bg-[#2a2a2a] transition-colors min-h-[44px]"
                data-testid="button-lockout-card"
              >
                Vehicle Lockout Service
                <ChevronRight size={15} />
              </Link>
            </div>

            {/* Card 2 — Spare Car Key */}
            <div
              className="bg-[#F7F7F4] border border-[#D8D8D3] rounded-xl p-6 flex flex-col"
              data-testid="service-card-spare-key"
            >
              <h2 className="font-bold text-[#121212] text-lg mb-2">
                Need a Spare Car Key?
              </h2>
              <p className="text-sm text-[#121212]/70 leading-relaxed mb-5 flex-1">
                Already have a working key? We may be able to supply, cut and program a spare key for your vehicle. Call with your vehicle details to confirm.
              </p>
              <Link
                href="/spare-car-key"
                onClick={() => trackEvent("services_page_spare_key_click")}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-[#121212] text-white font-semibold text-sm rounded hover:bg-[#2a2a2a] transition-colors min-h-[44px]"
                data-testid="button-spare-key-card"
              >
                Spare Car Key Service
                <ChevronRight size={15} />
              </Link>
            </div>

          </div>

          {/* Not sure — call CTA */}
          <div className="mt-8 border-t border-[#D8D8D3] pt-8 text-center">
            <p className="text-sm text-[#121212]/60 mb-4">
              Not sure which applies to you? Just call — we'll ask a few quick questions and let you know if and how we can help.
            </p>
            <a
              href={hasPhone ? phoneHref : "/contact"}
              onClick={() => trackCallClick("services-page-bottom")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C79A1B] text-[#121212] font-bold rounded hover:bg-[#A07A10] transition-colors min-h-[48px]"
              data-testid="button-call-services"
            >
              <Phone size={17} />
              {hasPhone ? `Call Now — ${siteContent.business.phone}` : "Call to Check Availability"}
            </a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
