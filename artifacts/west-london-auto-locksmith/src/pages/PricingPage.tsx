import PageLayout from "@/components/layout/PageLayout";
import { siteContent } from "@/content/siteContent";
import { Phone, CheckCircle } from "lucide-react";
import { trackCallClick } from "@/lib/analytics";

const hasPhone = siteContent.business.phone !== "PHONE_NUMBER_PLACEHOLDER";

export default function PricingPage() {
  return (
    <PageLayout
      meta={{
        title: "£100 Fixed-Price Vehicle Entry | West London Auto Locksmith",
        description:
          "Vehicle entry is £100 across our advertised service area, including VAT. No call-out fee, no mileage charge, no hidden extras.",
        canonical: `${siteContent.seo.siteUrl}/pricing`,
        ogTitle: "£100 Fixed-Price Vehicle Entry — West London Auto Locksmith",
        ogDescription:
          "£100 fixed price for vehicle entry across our service area. No call-out fee. No hidden extras.",
      }}
    >
      {/* Hero */}
      <section className="bg-[#121212] text-white py-14 px-4" data-testid="section-pricing-hero">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4 text-white">
            £100 Fixed-Price Vehicle Entry
          </h1>
          <p className="text-base text-white/75 max-w-xl leading-relaxed mb-2">
            Locked out of your car? Vehicle entry is £100 across our advertised service area, including VAT.
          </p>
          <p className="text-sm text-white/50 mb-8">
            No call-out fee. No mileage charge. No hidden extras.
          </p>
          <a
            href={hasPhone ? `tel:${siteContent.business.phone.replace(/\s/g, "")}` : "/contact"}
            onClick={() => trackCallClick("pricing-hero")}
            className="inline-flex flex-col items-center justify-center gap-0.5 px-8 py-4 bg-[#C79A1B] text-[#121212] rounded hover:bg-[#A07A10] transition-colors min-h-[64px]"
            data-testid="button-call-pricing-hero"
          >
            <span className="flex items-center gap-2 font-bold text-base sm:text-lg">
              <Phone size={20} />
              {hasPhone ? `Call Now — £100 Fixed Price` : "Call to Check Availability"}
            </span>
            {hasPhone && (
              <span className="text-sm font-semibold opacity-80">{siteContent.business.phone}</span>
            )}
          </a>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-14 px-4 bg-white" data-testid="section-pricing-included">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#121212] mb-6">What's Included</h2>
          <div className="space-y-4">
            {[
              "£100 fixed vehicle-entry price",
              "No call-out, mileage or hidden charges",
              "Live ETA confirmed before dispatch",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-[#C79A1B] shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-[#121212]">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Ask */}
      <section className="py-14 px-4 bg-[#F7F7F4]" data-testid="section-pricing-why-we-ask">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-[#121212] mb-3">
            Why We Ask for Your Location and Vehicle
          </h2>
          <p className="text-sm text-[#121212]/70 leading-relaxed">
            We ask for your location so we can confirm you are within our service area and give you a
            live estimated arrival time. We ask for your vehicle details so we can arrive prepared.
            Your vehicle-entry price remains £100.
          </p>
        </div>
      </section>

      {/* Payment Methods */}
      {siteContent.pricing.paymentMethods.length > 0 && (
        <section className="py-14 px-4 bg-white" data-testid="section-pricing-payment">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-[#121212] mb-3">Payment Methods</h2>
            <p className="text-sm text-[#121212]/70 mb-4">
              Card, cash and bank transfer accepted.
            </p>
            <div className="flex flex-wrap gap-2">
              {siteContent.pricing.paymentMethods.map((method) => (
                <span
                  key={method}
                  className="px-3 py-1.5 bg-[#F7F7F4] border border-[#D8D8D3] rounded text-sm text-[#121212]"
                  data-testid={`payment-${method.replace(/\s/g, "-").toLowerCase()}`}
                >
                  {method}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-[#121212] text-white py-16 px-4" data-testid="section-pricing-final-cta">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Need Help Now?</h2>
          <p className="text-white/65 text-base mb-8 max-w-md mx-auto">
            £100 fixed-price vehicle entry across our service area. Call now for your live ETA.
          </p>
          <a
            href={hasPhone ? `tel:${siteContent.business.phone.replace(/\s/g, "")}` : "/contact"}
            onClick={() => trackCallClick("pricing-final")}
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C79A1B] text-[#121212] font-bold text-base sm:text-lg rounded hover:bg-[#A07A10] transition-colors min-h-[56px] whitespace-nowrap"
            data-testid="button-call-pricing-final"
          >
            <Phone size={20} />
            {hasPhone ? `Call Now — ${siteContent.business.phone}` : "Call to Check Availability"}
          </a>
          <p className="mt-4 text-xs text-white/35">Vehicle lockouts only</p>
        </div>
      </section>
    </PageLayout>
  );
}
