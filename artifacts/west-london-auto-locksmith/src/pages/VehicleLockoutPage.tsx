import { useState } from "react";
import { ChevronRight } from "lucide-react";
import PageLayout from "@/components/layout/PageLayout";
import CallCTA from "@/components/sections/CallCTA";
import ReviewsList from "@/components/sections/ReviewsList";
import { siteContent } from "@/content/siteContent";
import { trackCallClick } from "@/lib/analytics";
import { Phone } from "lucide-react";
import { Link } from "wouter";

const hasPhone = siteContent.business.phone !== "PHONE_NUMBER_PLACEHOLDER";

const faqs = [
  {
    q: "Can you help if my keys are locked inside the car?",
    a: "Yes. Keys locked inside the vehicle is one of the primary situations we assist with. Call us to check availability and confirm the price before we travel.",
  },
  {
    q: "How is the price confirmed?",
    a: "We confirm the price before travelling to you. The final cost depends on your location, vehicle type, and the nature of the job. There are no hidden charges.",
  },
  {
    q: "Do you cover my area?",
    a: `We operate within approximately ${siteContent.business.coverageRadius} of ${siteContent.business.baseArea}. Call us with your location and we'll confirm immediately.`,
  },
  {
    q: "Do you need proof I can access the vehicle?",
    a: "We may ask for confirmation that you are entitled to access the vehicle before carrying out entry. This is a standard precaution.",
  },
  {
    q: "Do you offer key programming or replacement keys?",
    a: "No. We provide vehicle entry only. We do not offer key programming, key cutting, replacement keys, or ignition repairs.",
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
        data-testid={`faq-toggle-vl-${q.substring(0, 15).replace(/\s/g, "-").toLowerCase()}`}
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

export default function VehicleLockoutPage() {
  return (
    <PageLayout
      meta={{
        title: "Vehicle Lockout West London | Car Entry Uxbridge | West London Auto Locksmith",
        description:
          "Locked out of your vehicle in West London? We specialise in vehicle entry across Uxbridge and surrounding areas. Clear price confirmed before we travel.",
        canonical: `${siteContent.seo.siteUrl}/vehicle-lockout`,
        ogTitle: "Vehicle Lockout & Car Entry — West London Auto Locksmith",
        ogDescription:
          "Vehicle lockout specialist covering Uxbridge and surrounding areas. Call for a confirmed price before we travel.",
      }}
    >
      {/* Hero */}
      <section className="bg-[#1a2332] text-white py-14 md:py-16 px-4" data-testid="section-vl-hero">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4 text-white">
            Vehicle Lockout &amp; Car Entry in West London
          </h1>
          <p className="text-base text-white/75 mb-6 max-w-xl leading-relaxed">
            We help people who are locked out of their vehicles, have keys locked inside, or
            cannot access their car. Vehicle entry only — we do not offer key programming,
            replacement keys, or house locksmithing.
          </p>
          <a
            href={hasPhone ? `tel:${siteContent.business.phone.replace(/\s/g, "")}` : "/contact"}
            onClick={() => trackCallClick("vl-hero")}
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#E8A020] text-[#1a2332] font-bold text-base rounded hover:bg-[#d4911c] transition-colors min-h-[52px]"
            data-testid="button-call-vl-hero"
          >
            <Phone size={18} />
            {hasPhone ? `Call Now — ${siteContent.business.phone}` : "Call to Check Availability"}
          </a>
        </div>
      </section>

      {/* What we handle */}
      <section className="py-12 px-4 bg-white" data-testid="section-vl-what-we-do">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-bold text-[#1a2332] mb-4">What We Help With</h2>
            <ul className="space-y-3">
              {[
                "Keys locked inside the car",
                "Locked out of your vehicle",
                "Cannot open your car door",
                "Lost access to your vehicle",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#1a2332]/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8A020] mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#1a2332] mb-4">What We Do Not Offer</h2>
            <ul className="space-y-3">
              {[
                "Key programming or key coding",
                "Replacement keys or spare keys",
                "Key cutting",
                "Ignition repairs",
                "House or commercial locksmithing",
                "General roadside recovery",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#1a2332]/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-8 px-4 bg-gray-50 border-y border-gray-100" data-testid="section-vl-mid-cta">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#1a2332] font-medium text-sm">
            {siteContent.pricing.defaultWording}
          </p>
          <a
            href={hasPhone ? `tel:${siteContent.business.phone.replace(/\s/g, "")}` : "/contact"}
            onClick={() => trackCallClick("vl-mid")}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[#E8A020] text-[#1a2332] font-bold text-sm rounded hover:bg-[#d4911c] transition-colors min-h-[48px]"
            data-testid="button-call-vl-mid"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>
      </section>

      {/* When to call */}
      <section className="py-12 px-4 bg-white" data-testid="section-vl-scenarios">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a2332] mb-6">When to Call Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                title: "Keys Locked In",
                desc: "You can see your keys inside the vehicle but cannot open it.",
              },
              {
                title: "Locked Out",
                desc: "You are outside your vehicle and cannot gain entry through normal means.",
              },
              {
                title: "Not Sure If We Can Help",
                desc: "Call and describe your situation. We'll tell you honestly whether we can assist.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="border border-gray-100 rounded-lg p-5 bg-gray-50"
                data-testid={`vl-scenario-${s.title.replace(/\s/g, "-").toLowerCase()}`}
              >
                <h3 className="font-bold text-[#1a2332] mb-2">{s.title}</h3>
                <p className="text-sm text-[#1a2332]/65 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 px-4 bg-gray-50" data-testid="section-vl-how">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a2332] mb-6">How the Callout Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { n: "1", title: "You Call", desc: "Tell us your location and vehicle." },
              { n: "2", title: "We Confirm", desc: "We confirm we can help and check availability." },
              { n: "3", title: "Price and ETA", desc: "We give you the price and estimated arrival time before travelling." },
              { n: "4", title: "Vehicle Entry", desc: "We attend and carry out vehicle entry." },
            ].map((step) => (
              <div key={step.n} data-testid={`vl-step-${step.n}`}>
                <div className="w-9 h-9 rounded-full bg-[#1a2332] text-white flex items-center justify-center font-bold text-sm mb-3">
                  {step.n}
                </div>
                <h3 className="font-bold text-[#1a2332] text-sm mb-1">{step.title}</h3>
                <p className="text-xs text-[#1a2332]/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs text-[#1a2332]/50 border-l-2 border-[#E8A020] pl-3">
            We may need to confirm you are entitled to access the vehicle before entry.
          </p>
        </div>
      </section>

      {/* Pricing clarity */}
      <section className="py-12 px-4 bg-white" data-testid="section-vl-pricing">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a2332] mb-3">Pricing</h2>
          <p className="text-[#1a2332]/70 text-sm leading-relaxed mb-3">
            {siteContent.pricing.showFromPrice
              ? siteContent.pricing.approvedWording
              : siteContent.pricing.defaultWording}
          </p>
          <p className="text-xs text-[#1a2332]/50">
            The final price depends on your location, vehicle type, and how straightforward the
            job is. We confirm the price before travelling.
          </p>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-[#1a2332] underline underline-offset-2 hover:text-[#1a2332]/70 transition-colors"
            data-testid="link-pricing"
          >
            More about pricing <ChevronRight size={14} />
          </Link>
        </div>
      </section>

      {/* Coverage snippet */}
      <section className="py-10 px-4 bg-gray-50" data-testid="section-vl-coverage">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-[#1a2332]">
              Covering {siteContent.business.baseArea} and surrounding areas
            </p>
            <p className="text-sm text-[#1a2332]/60 mt-1">
              Approximately {siteContent.business.coverageRadius} radius.
            </p>
          </div>
          <Link
            href="/areas-we-cover"
            className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a2332] border border-[#1a2332]/20 rounded px-4 py-2.5 hover:border-[#1a2332]/50 transition-colors min-h-[44px]"
            data-testid="link-vl-areas"
          >
            See Areas <ChevronRight size={14} />
          </Link>
        </div>
      </section>

      <ReviewsList />

      {/* FAQs */}
      <section className="py-12 px-4 bg-white" data-testid="section-vl-faqs">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#1a2332] mb-4">Common Questions</h2>
          <div className="divide-y divide-gray-100">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <CallCTA
        heading="Need Vehicle Entry in West London?"
        subtext="Call to check availability and confirm price before we travel."
        source="vl-final"
      />
    </PageLayout>
  );
}
