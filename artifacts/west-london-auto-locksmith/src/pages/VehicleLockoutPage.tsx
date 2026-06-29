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

const pageFaqs = [
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
      {open && (
        <p className="pb-4 text-sm text-[#121212]/70 leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function VehicleLockoutPage() {
  return (
    <PageLayout
      meta={{
        title: "Vehicle Lockout Uxbridge | West London Auto Locksmith",
        description:
          "Car locked out in West London? West London Auto Locksmith covers Uxbridge and surrounding areas. Call for a clear price and estimated arrival time before we travel.",
        canonical: `${siteContent.seo.siteUrl}/vehicle-lockout`,
        ogTitle: "West London Auto Locksmith — Vehicle Lockouts Uxbridge",
        ogDescription:
          "Locked out of your car in West London? Call for a clear price and estimated arrival time before we travel.",
      }}
    >
      {/* Hero heading + call button */}
      <section className="bg-[#121212] text-white pt-8 pb-3 px-4" data-testid="section-hero">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-bold leading-tight mb-3 text-white whitespace-nowrap">
            <span className="block text-2xl sm:text-3xl md:text-4xl">Locked Out of Your Car?</span>
            <span className="block text-3xl sm:text-4xl md:text-5xl">We Can Help</span>
          </h1>
          <p className="text-white/70 text-base">£100 fixed-price vehicle entry across our service area</p>
          <p className="text-white/50 text-sm mt-1">Live ETA confirmed before dispatch.</p>

          <div className="mt-6" data-testid="section-hero-cta">
            <a
              href={hasPhone ? `tel:${siteContent.business.phone.replace(/\s/g, "")}` : "/contact"}
              onClick={() => trackCallClick("hero")}
              className="flex items-center justify-center gap-3 w-full px-4 py-5 bg-[#C9A227] text-[#121212] font-bold text-base sm:text-xl rounded hover:bg-[#A88417] transition-colors min-h-[64px] whitespace-nowrap"
              data-testid="button-call-hero"
            >
              <Phone size={24} />
              {hasPhone ? `Call Now — ${siteContent.business.phone}` : "Call to Check Availability"}
            </a>
            {siteContent.pricing.showFromPrice && (
              <p className="mt-3 text-sm text-[#C9A227] font-medium">
                {siteContent.pricing.approvedWording}
              </p>
            )}
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-x-5 gap-y-1.5">
            {["£100 fixed price", "Proof of ownership checked", "No Call-Out Fee"].map((item) => (
              <span key={item} className="inline-flex items-center gap-1 text-xs text-white/55">
                <span className="text-[#C9A227] font-bold">✔</span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Job photo */}
      <section className="bg-[#121212] px-4 pt-2 pb-8">
        <div className="max-w-3xl mx-auto">
          <img
            src="/images/jobs/locksmith-working.png"
            alt="Locksmith opening a car door in West London"
            className="w-full rounded-lg object-cover max-h-72 md:max-h-96"
            loading="lazy"
          />
        </div>
      </section>

      {/* Review card */}
      <section className="bg-[#121212] px-4 pb-8" data-testid="section-home-review">
        <div className="max-w-3xl mx-auto">
          <article className="bg-[#1e1e1e] border border-white/10 rounded-lg p-5">
            <div className="flex gap-0.5 mb-3">
              {[1,2,3,4,5].map(s => (
                <svg key={s} className="w-4 h-4 text-[#C9A227]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-sm text-white/80 leading-relaxed whitespace-pre-line">
              "Great service this morning, arrived in 20 minutes to assist the keys being locked inside a 2025 BMW X3. Within 10 minutes we had access back in to the car with no damage.{"\n\n"}Professional and highly recommend."
            </blockquote>
            <footer className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-white">Jamie Allan</p>
                <p className="text-xs text-[#C9A227]">Google Review</p>
              </div>
              <p className="text-xs text-white/40">2 weeks ago</p>
            </footer>
          </article>
        </div>
      </section>

      {/* What we help with */}
      <section className="py-14 px-4 bg-white" data-testid="section-services">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#121212] mb-2">
            What Do You Need Help With?
          </h2>
          <p className="text-[#121212]/60 mb-8 text-sm">
            We specialise in vehicle entry.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-[#F7F7F4] border border-[#D8D8D3] rounded-lg p-6" data-testid="service-card-keys-locked-inside">
              <h3 className="font-bold text-[#121212] mb-2">Keys Locked Inside Your Car</h3>
              <p className="text-sm text-[#121212]/65 leading-relaxed">Locked keys in the car? We provide £100 fixed-price vehicle entry across our advertised service area.</p>
            </div>
          </div>
          <div className="text-center">
            <a
              href={hasPhone ? `tel:${siteContent.business.phone.replace(/\s/g, "")}` : "/contact"}
              onClick={() => trackCallClick("services")}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A227] text-[#121212] font-bold rounded hover:bg-[#A88417] transition-colors min-h-[48px]"
              data-testid="button-call-services"
            >
              <Phone size={17} />
              Call for Urgent Assistance
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 px-4 bg-[#F7F7F4]" data-testid="section-how-it-works">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#121212] mb-8">
            What Happens When You Call
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            {[
              { n: "1", title: "Tell Us Your Location", desc: "Give us your location, vehicle make and model." },
              { n: "2", title: "£100 Price & ETA Confirmed", desc: "We confirm availability, the £100 fixed price and your estimated arrival time before we set off." },
              { n: "3", title: "We Attend and Carry Out Entry", desc: "Once proof of ownership is checked, we attend and carry out vehicle entry." },
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
          <p className="text-xs text-[#121212]/50 border-l-2 border-[#C9A227] pl-3 max-w-2xl">
            We may need to confirm you are entitled to access the vehicle before entry.
          </p>
        </div>
      </section>

      {/* Coverage */}
      <section className="py-14 px-4 bg-white" data-testid="section-coverage">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#121212] mb-3">
            Mobile vehicle entry across West London
          </h2>
          <p className="text-[#121212]/60 mb-6 text-sm leading-relaxed max-w-xl">
            We provide mobile vehicle lockout help across West London.{" "}
            Call with your location and we'll confirm availability and give you a live ETA before we set off.
          </p>
          <p className="text-xs font-semibold uppercase tracking-wider text-[#121212]/40 mb-3">Some of the areas we cover</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {siteContent.business.coverageAreas.map((area) => (
              <span
                key={area}
                className="px-3 py-1.5 bg-[#F7F7F4] border border-[#D8D8D3] rounded text-sm text-[#121212] font-medium"
                data-testid={`area-tag-${area.replace(/\s/g, "-").toLowerCase()}`}
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

      {/* Reviews (hidden if empty) */}
      <ReviewsList />

      {/* Recent jobs (hidden if empty) */}
      <JobGallery />

      {/* Trust section */}
      <section className="py-14 px-4 bg-[#F7F7F4]" data-testid="section-trust">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#121212] mb-6">
            What's Included in the £100 Fixed Price
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "£100 fixed-price vehicle entry across our advertised service area",
              "No call-out, mileage or hidden charges",
              "Live ETA confirmed before dispatch",
              "Proof of ownership checked before entry",
              "Card, cash and bank transfer accepted",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-[#C9A227] shrink-0 mt-0.5" />
                <p className="text-sm text-[#121212]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="py-14 px-4 bg-white" data-testid="section-faq-preview">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#121212] mb-6">
            Common Questions
          </h2>
          <div className="divide-y divide-[#D8D8D3]">
            {pageFaqs.map((faq) => (
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

      {/* Final CTA */}
      <CallCTA
        heading="Locked Out Now?"
        subtext="Call West London Auto Locksmith to check availability, price and estimated arrival time."
        source="vehicle-lockout-final"
      />
    </PageLayout>
  );
}
