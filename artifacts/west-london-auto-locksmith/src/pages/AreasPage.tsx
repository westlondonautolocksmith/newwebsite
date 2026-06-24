import { useState } from "react";
import { ChevronRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import CallCTA from "@/components/sections/CallCTA";
import { siteContent } from "@/content/siteContent";
import { Phone } from "lucide-react";
import { trackCallClick } from "@/lib/analytics";

const hasPhone = siteContent.business.phone !== "PHONE_NUMBER_PLACEHOLDER";

const areaFaqs = [
  {
    q: "Do you cover my area?",
    a: `We cover vehicle lockouts within approximately ${siteContent.business.coverageRadius} of ${siteContent.business.baseArea}. The best way to check is to call us with your location — we will confirm immediately whether we can reach you.`,
  },
  {
    q: "How quickly can you get to me?",
    a: `Arrival time depends on your location within our coverage area, current traffic, and how busy we are at the time. We will give you an estimated arrival time when you call — before we travel.`,
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left py-4 flex items-center justify-between gap-4 font-medium text-[#1a2332] hover:text-[#1a2332]/70 transition-colors min-h-[56px]"
        aria-expanded={open}
        data-testid={`faq-toggle-areas-${q.substring(0, 15).replace(/\s/g, "-").toLowerCase()}`}
      >
        <span>{q}</span>
        <ChevronRight
          size={18}
          className={`shrink-0 text-[#1a2332]/40 transition-transform ${open ? "rotate-90" : ""}`}
        />
      </button>
      {open && <p className="pb-4 text-sm text-[#1a2332]/70 leading-relaxed">{a}</p>}
    </div>
  );
}

export default function AreasPage() {
  return (
    <PageLayout
      meta={{
        title: "Areas We Cover | Vehicle Lockout Near Uxbridge | West London Auto Locksmith",
        description:
          "West London Auto Locksmith covers vehicle lockouts within approximately 12 miles of Uxbridge. Call to check if we can reach you.",
        canonical: `${siteContent.seo.siteUrl}/areas-we-cover`,
        ogTitle: "Areas We Cover — West London Auto Locksmith",
        ogDescription:
          "Vehicle lockout coverage across Uxbridge and surrounding areas. Call to confirm we can reach your location.",
      }}
    >
      {/* Hero */}
      <section className="bg-[#1a2332] text-white py-14 px-4" data-testid="section-areas-hero">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4 text-white">
            Areas We Cover From Uxbridge
          </h1>
          <p className="text-base text-white/75 max-w-xl leading-relaxed">
            We cover vehicle lockouts within approximately {siteContent.business.coverageRadius} of{" "}
            {siteContent.business.baseArea}. Arrival time depends on your location, current
            traffic, and availability. Call us with your location to check instantly.
          </p>
        </div>
      </section>

      {/* Coverage explanation */}
      <section className="py-12 px-4 bg-white" data-testid="section-areas-main">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a2332] mb-4">Our Service Area</h2>
          <p className="text-[#1a2332]/70 text-sm leading-relaxed mb-8 max-w-2xl">
            We operate from {siteContent.business.baseArea} and travel to vehicle lockout jobs
            across West London and the surrounding area. The towns and areas listed below are
            examples within our operating radius. If your location is not listed, call us — we
            may still be able to help.
          </p>

          {/* Coverage radius visual */}
          <div className="mb-8 bg-gray-50 border border-gray-100 rounded-xl p-6 md:p-8 max-w-sm">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full border-4 border-[#E8A020]/30 flex items-center justify-center mb-4 relative">
                <div className="w-20 h-20 rounded-full border-2 border-[#E8A020]/50 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#E8A020]" />
                </div>
              </div>
              <p className="font-bold text-[#1a2332]">{siteContent.business.baseArea}</p>
              <p className="text-xs text-[#1a2332]/50 mt-1">
                Base location &mdash; {siteContent.business.coverageRadius} radius
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold text-[#1a2332] mb-4">Example Areas Covered</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
            {siteContent.business.coverageAreas.map((area) => (
              <div
                key={area}
                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-sm text-[#1a2332] font-medium text-center"
                data-testid={`area-item-${area.replace(/\s/g, "-").toLowerCase()}`}
              >
                {area}
              </div>
            ))}
          </div>

          <div className="bg-[#1a2332]/5 border border-[#1a2332]/10 rounded-lg p-5 max-w-2xl">
            <p className="text-sm text-[#1a2332]/80 leading-relaxed">
              <strong className="text-[#1a2332]">Not sure if we cover your area?</strong>{" "}
              Call us with your location and we will tell you immediately. We will not travel
              to you without first confirming the price and arrival time estimate.
            </p>
          </div>
        </div>
      </section>

      {/* CTA to call with location */}
      <section className="py-10 px-4 bg-gray-50 border-y border-gray-100" data-testid="section-areas-cta">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#1a2332] font-medium text-sm">
            Not sure if we cover your area? Call with your location and we'll confirm.
          </p>
          <a
            href={hasPhone ? `tel:${siteContent.business.phone.replace(/\s/g, "")}` : "/contact"}
            onClick={() => trackCallClick("areas-mid")}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#E8A020] text-[#1a2332] font-bold text-sm rounded hover:bg-[#d4911c] transition-colors min-h-[48px]"
            data-testid="button-call-areas-mid"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-4 bg-white" data-testid="section-areas-faqs">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a2332] mb-4">Coverage Questions</h2>
          <div className="divide-y divide-gray-100">
            {areaFaqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <CallCTA
        heading="Locked Out in West London?"
        subtext="Call us with your location and we'll confirm whether we can help."
        source="areas-final"
      />
    </PageLayout>
  );
}
