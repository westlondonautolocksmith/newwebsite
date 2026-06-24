import PageLayout from "@/components/layout/PageLayout";
import CallCTA from "@/components/sections/CallCTA";
import { siteContent } from "@/content/siteContent";
import { Phone } from "lucide-react";
import { trackCallClick } from "@/lib/analytics";

const hasPhone = siteContent.business.phone !== "PHONE_NUMBER_PLACEHOLDER";

export default function PricingPage() {
  return (
    <PageLayout
      meta={{
        title: "Vehicle Lockout Prices | West London Auto Locksmith",
        description:
          "Clear vehicle lockout pricing for Uxbridge and West London. Call for a confirmed price before we travel.",
        canonical: `${siteContent.seo.siteUrl}/pricing`,
        ogTitle: "Vehicle Lockout Prices — West London Auto Locksmith",
        ogDescription:
          "Call us with your location and vehicle for a clear price before we travel.",
      }}
    >
      {/* Hero */}
      <section className="bg-[#1a2332] text-white py-14 px-4" data-testid="section-pricing-hero">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4 text-white">
            Vehicle Lockout Prices
          </h1>
          <p className="text-base text-white/75 max-w-xl leading-relaxed">
            Call us with your location and vehicle for a clear price before we travel.
          </p>
        </div>
      </section>

      <section className="py-14 px-4 bg-white" data-testid="section-pricing-main">
        <div className="max-w-3xl mx-auto space-y-8">

          {/* Main pricing statement */}
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 md:p-8">
            <h2 className="text-xl font-bold text-[#1a2332] mb-3">How Pricing Works</h2>
            <p className="text-[#1a2332]/80 text-sm leading-relaxed mb-4">
              {siteContent.pricing.defaultWording}
            </p>
            {siteContent.pricing.showFromPrice && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-base font-semibold text-[#1a2332]">
                  {siteContent.pricing.approvedWording}
                </p>
              </div>
            )}
          </div>

          {/* Why price varies */}
          <div>
            <h2 className="text-xl font-bold text-[#1a2332] mb-4">What Affects the Price</h2>
            <p className="text-sm text-[#1a2332]/70 mb-4 leading-relaxed">
              The final cost of vehicle entry can vary depending on several factors. We are
              straightforward about this:
            </p>
            <ul className="space-y-3">
              {[
                { label: "Your location", desc: "Distance from our base in Uxbridge." },
                { label: "Your vehicle", desc: "Some vehicle types require more time or specialist approach." },
                { label: "Access difficulty", desc: "How straightforward the entry is for your specific vehicle." },
                { label: "Time and availability", desc: "We will be upfront about any factors affecting your specific job." },
              ].map((item) => (
                <li
                  key={item.label}
                  className="flex items-start gap-3 text-sm"
                  data-testid={`pricing-factor-${item.label.replace(/\s/g, "-").toLowerCase()}`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8A020] mt-2 shrink-0" />
                  <span>
                    <strong className="text-[#1a2332]">{item.label}</strong>
                    <span className="text-[#1a2332]/60"> — {item.desc}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Confirmation commitment */}
          {siteContent.pricing.priceConfirmBeforeTravel && (
            <div className="border-l-4 border-[#E8A020] bg-[#E8A020]/5 rounded-r-lg p-5">
              <p className="text-sm font-medium text-[#1a2332]">
                We confirm the price before we travel to you.
              </p>
              <p className="text-xs text-[#1a2332]/60 mt-1">
                You will know the cost before we leave — no surprises.
              </p>
            </div>
          )}

          {/* Payment methods */}
          {siteContent.pricing.paymentMethods.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-[#1a2332] mb-3">Payment Methods</h2>
              <div className="flex flex-wrap gap-2">
                {siteContent.pricing.paymentMethods.map((method) => (
                  <span
                    key={method}
                    className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded text-sm text-[#1a2332]"
                    data-testid={`payment-${method.replace(/\s/g, "-").toLowerCase()}`}
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="pt-4">
            <a
              href={hasPhone ? `tel:${siteContent.business.phone.replace(/\s/g, "")}` : "/contact"}
              onClick={() => trackCallClick("pricing")}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E8A020] text-[#1a2332] font-bold text-base rounded hover:bg-[#d4911c] transition-colors min-h-[52px]"
              data-testid="button-call-pricing"
            >
              <Phone size={18} />
              {hasPhone ? `Call for a Price — ${siteContent.business.phone}` : "Call to Check Price"}
            </a>
          </div>
        </div>
      </section>

      <CallCTA
        heading="Call for a Clear Price"
        subtext="We confirm the price before we travel. No hidden charges."
        source="pricing-final"
      />
    </PageLayout>
  );
}
