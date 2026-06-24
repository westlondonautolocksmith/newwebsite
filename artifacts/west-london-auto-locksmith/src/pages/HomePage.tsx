import { Link } from "wouter";
import { Phone, CheckCircle, ChevronRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import CallCTA from "@/components/sections/CallCTA";
import ReviewsList from "@/components/sections/ReviewsList";
import JobGallery from "@/components/sections/JobGallery";
import { siteContent } from "@/content/siteContent";
import { trackCallClick } from "@/lib/analytics";
import { useState } from "react";

const hasPhone = siteContent.business.phone !== "PHONE_NUMBER_PLACEHOLDER";

const homeFaqs = [
  {
    q: "What information should I have ready when I call?",
    a: "Your current location, the make and model of your vehicle, and a brief description of the situation — for example, whether keys are locked inside or you cannot open the car at all.",
  },
  {
    q: "Can you help if my keys are locked inside the car?",
    a: "Yes. Keys locked inside the vehicle is one of the main situations we assist with. Call us to confirm and we will give you a clear price and estimated arrival time.",
  },
  {
    q: "How much does vehicle entry cost?",
    a: siteContent.pricing.showFromPrice
      ? siteContent.pricing.approvedWording
      : siteContent.pricing.defaultWording,
  },
  {
    q: "Which areas do you cover?",
    a: `We operate within approximately ${siteContent.business.coverageRadius} of ${siteContent.business.baseArea}, covering areas including ${siteContent.business.coverageAreas.slice(0, 6).join(", ")} and surrounding locations.`,
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
        data-testid={`faq-toggle-${q.substring(0, 20).replace(/\s/g, "-").toLowerCase()}`}
      >
        <span>{q}</span>
        <ChevronRight
          size={18}
          className={`shrink-0 text-[#1a2332]/40 transition-transform ${open ? "rotate-90" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-4 text-sm text-[#1a2332]/70 leading-relaxed">{a}</p>
      )}
    </div>
  );
}

const trustItems = [
  { label: "Confirmed price before travel", condition: siteContent.pricing.priceConfirmBeforeTravel },
  { label: "Invoice available", condition: siteContent.trust.invoiceAvailable },
];

export default function HomePage() {
  return (
    <PageLayout
      meta={{
        title: "Vehicle Lockout Uxbridge | West London Auto Locksmith",
        description:
          "Car locked out in West London? West London Auto Locksmith covers Uxbridge and surrounding areas. Call for a clear price and estimated arrival time before we travel.",
        canonical: `${siteContent.seo.siteUrl}/`,
        ogTitle: "West London Auto Locksmith — Vehicle Lockouts Uxbridge",
        ogDescription:
          "Locked out of your car in West London? Call for a clear price and estimated arrival time before we travel.",
      }}
    >
      {/* Hero */}
      <section className="bg-[#1a2332] text-white py-16 md:py-20 px-4" data-testid="section-hero">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 text-white">
            Locked Out of Your Car in West London?
          </h1>
          <p className="text-base md:text-lg text-white/75 mb-8 max-w-xl mx-auto leading-relaxed">
            Vehicle entry across Uxbridge and surrounding areas. Call for a clear price and
            estimated arrival time before we travel.
          </p>
          <a
            href={hasPhone ? `tel:${siteContent.business.phone.replace(/\s/g, "")}` : "/contact"}
            onClick={() => trackCallClick("hero")}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E8A020] text-[#1a2332] font-bold text-lg rounded hover:bg-[#d4911c] transition-colors min-h-[56px]"
            data-testid="button-call-hero"
          >
            <Phone size={20} />
            {hasPhone ? `Call Now — ${siteContent.business.phone}` : "Call to Check Availability"}
          </a>
          {siteContent.pricing.showFromPrice && (
            <p className="mt-4 text-sm text-[#E8A020] font-medium">
              {siteContent.pricing.approvedWording}
            </p>
          )}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-white/50">
            <span>Vehicle lockouts only</span>
            <span className="hidden sm:inline">·</span>
            <span>Uxbridge and surrounding areas, up to around 12 miles</span>
          </div>
        </div>
      </section>

      {/* Clarity strip */}
      <section className="bg-white border-b border-gray-100 py-8 px-4" data-testid="section-clarity">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            "Vehicle Lockouts Only",
            "Clear Price Before Travel",
            `${siteContent.business.baseArea} + Surrounding Areas`,
          ].map((point) => (
            <div key={point} className="flex items-center gap-3 justify-center sm:justify-start">
              <CheckCircle size={18} className="text-[#E8A020] shrink-0" />
              <span className="text-sm font-semibold text-[#1a2332]">{point}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What we help with */}
      <section className="py-14 px-4 bg-white" data-testid="section-services">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-2">
            Locked Out of Your Vehicle?
          </h2>
          <p className="text-[#1a2332]/60 mb-8 text-sm">
            We specialise in vehicle entry only. We do not offer house locksmithing or key programming.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              {
                title: "Keys Locked Inside",
                desc: "Locked your keys in the car? We can open your vehicle without causing damage and retrieve your keys.",
              },
              {
                title: "Locked Out of Your Car",
                desc: "Can't open your vehicle? Call us with your location and vehicle details and we'll confirm whether we can help.",
              },
              {
                title: "Need Vehicle Entry",
                desc: "Lost access to your vehicle for another reason? Call and describe your situation — we'll tell you honestly if we can assist.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="bg-gray-50 border border-gray-100 rounded-lg p-6"
                data-testid={`service-card-${card.title.replace(/\s/g, "-").toLowerCase()}`}
              >
                <h3 className="font-bold text-[#1a2332] mb-2">{card.title}</h3>
                <p className="text-sm text-[#1a2332]/65 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href={hasPhone ? `tel:${siteContent.business.phone.replace(/\s/g, "")}` : "/contact"}
              onClick={() => trackCallClick("services")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E8A020] text-[#1a2332] font-bold rounded hover:bg-[#d4911c] transition-colors min-h-[48px]"
              data-testid="button-call-services"
            >
              <Phone size={17} />
              Call to Check Price &amp; Availability
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 px-4 bg-gray-50" data-testid="section-how-it-works">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-8">
            What Happens When You Call
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {[
              { n: "1", title: "Tell Us Your Location", desc: "Give us your current location and your vehicle make and model." },
              { n: "2", title: "We Confirm We Can Help", desc: "We'll tell you honestly whether this is something we can assist with." },
              { n: "3", title: "Price and Arrival Time", desc: "We give you a clear price and an estimated arrival time before we travel." },
              { n: "4", title: "We Attend and Open", desc: "We come to you and carry out vehicle entry." },
            ].map((step) => (
              <div key={step.n} className="flex flex-col" data-testid={`step-${step.n}`}>
                <div className="w-10 h-10 rounded-full bg-[#1a2332] text-white flex items-center justify-center font-bold text-base mb-3 shrink-0">
                  {step.n}
                </div>
                <h3 className="font-bold text-[#1a2332] mb-1.5">{step.title}</h3>
                <p className="text-sm text-[#1a2332]/65 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#1a2332]/50 border-l-2 border-[#E8A020] pl-3 max-w-2xl">
            We may need to confirm you are entitled to access the vehicle before entry.
          </p>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-14 px-4 bg-white" data-testid="section-coverage">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-3">
            Vehicle Lockout Coverage Around Uxbridge
          </h2>
          <p className="text-[#1a2332]/60 mb-6 text-sm leading-relaxed max-w-xl">
            We cover vehicle lockouts within approximately {siteContent.business.coverageRadius} of{" "}
            {siteContent.business.baseArea}. Arrival time depends on your location, traffic, and
            current availability. Call to confirm we can reach you.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {siteContent.business.coverageAreas.map((area) => (
              <span
                key={area}
                className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded text-sm text-[#1a2332] font-medium"
                data-testid={`area-tag-${area.replace(/\s/g, "-").toLowerCase()}`}
              >
                {area}
              </span>
            ))}
          </div>
          <Link
            href="/areas-we-cover"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a2332] border border-[#1a2332]/20 rounded px-5 py-2.5 hover:border-[#1a2332]/50 transition-colors min-h-[44px]"
            data-testid="link-areas"
          >
            See Areas We Cover <ChevronRight size={15} />
          </Link>
        </div>
      </section>

      {/* Reviews (hidden if empty) */}
      <ReviewsList />

      {/* Recent jobs (hidden if empty) */}
      <JobGallery />

      {/* Trust section */}
      <section className="py-14 px-4 bg-gray-50" data-testid="section-trust">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-6">
            A Clear, Straightforward Vehicle Entry Service
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <CheckCircle size={18} className="text-[#E8A020] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-[#1a2332]">{siteContent.business.name}</p>
                <p className="text-xs text-[#1a2332]/55">Based in {siteContent.business.baseArea}, West London</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={18} className="text-[#E8A020] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm text-[#1a2332]">Price confirmed before travel</p>
                <p className="text-xs text-[#1a2332]/55">You know the cost before we travel to you</p>
              </div>
            </div>
            {siteContent.trust.invoiceAvailable && (
              <div className="flex items-start gap-3">
                <CheckCircle size={18} className="text-[#E8A020] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-[#1a2332]">Invoice provided</p>
                  <p className="text-xs text-[#1a2332]/55">Receipt available on request</p>
                </div>
              </div>
            )}
            {siteContent.pricing.paymentMethods.length > 0 && (
              <div className="flex items-start gap-3">
                <CheckCircle size={18} className="text-[#E8A020] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-[#1a2332]">Payment methods</p>
                  <p className="text-xs text-[#1a2332]/55">
                    {siteContent.pricing.paymentMethods.join(", ")}
                  </p>
                </div>
              </div>
            )}
            {siteContent.reviews.googleReviewsUrl && (
              <div className="flex items-start gap-3">
                <CheckCircle size={18} className="text-[#E8A020] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-[#1a2332]">Google reviews</p>
                  <a
                    href={siteContent.reviews.googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#1a2332]/55 underline hover:text-[#1a2332]"
                    data-testid="link-trust-google-reviews"
                  >
                    View on Google
                  </a>
                </div>
              </div>
            )}
            {siteContent.trust.legalName && (
              <div className="flex items-start gap-3">
                <CheckCircle size={18} className="text-[#E8A020] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-sm text-[#1a2332]">Registered business</p>
                  <p className="text-xs text-[#1a2332]/55">{siteContent.trust.legalName}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="py-14 px-4 bg-white" data-testid="section-faq-preview">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1a2332] mb-6">
            Common Questions
          </h2>
          <div className="divide-y divide-gray-100">
            {homeFaqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/faqs"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a2332] border border-[#1a2332]/20 rounded px-5 py-2.5 hover:border-[#1a2332]/50 transition-colors min-h-[44px]"
              data-testid="link-all-faqs"
            >
              See All FAQs <ChevronRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CallCTA
        heading="Locked Out Now?"
        subtext="Call West London Auto Locksmith to check availability, price and estimated arrival time."
        source="home-final"
      />
    </PageLayout>
  );
}
