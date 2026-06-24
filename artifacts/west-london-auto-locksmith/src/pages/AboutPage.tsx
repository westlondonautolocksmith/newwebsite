import PageLayout from "@/components/layout/PageLayout";
import CallCTA from "@/components/sections/CallCTA";
import JobGallery from "@/components/sections/JobGallery";
import { siteContent } from "@/content/siteContent";

const hasTrust =
  siteContent.trust.legalName ||
  siteContent.trust.legalAddress ||
  siteContent.trust.companyRegistration ||
  siteContent.trust.vatNumber ||
  siteContent.trust.yearEstablished;

export default function AboutPage() {
  return (
    <PageLayout
      meta={{
        title: "About | West London Auto Locksmith — Uxbridge Vehicle Lockout",
        description:
          "About West London Auto Locksmith — a vehicle lockout specialist based in Uxbridge, covering surrounding areas.",
        canonical: `${siteContent.seo.siteUrl}/about`,
        ogTitle: "About West London Auto Locksmith",
        ogDescription:
          "Uxbridge-based vehicle lockout specialist covering approximately 12 miles. Clear pricing, honest service.",
      }}
    >
      <section className="bg-[#1a2332] text-white py-14 px-4" data-testid="section-about-hero">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4 text-white">
            About West London Auto Locksmith
          </h1>
          <p className="text-base text-white/75 max-w-xl leading-relaxed">
            A vehicle lockout specialist based in Uxbridge, covering the surrounding area.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 bg-white" data-testid="section-about-intro">
        <div className="max-w-3xl mx-auto space-y-6">
          <div>
            <h2 className="text-xl font-bold text-[#1a2332] mb-3">Who We Are</h2>
            <p className="text-sm text-[#1a2332]/75 leading-relaxed">
              {siteContent.business.name} is a vehicle lockout specialist operating from{" "}
              {siteContent.business.baseArea}, West London. We help people who are locked out
              of their cars, have keys locked inside their vehicles, or have lost access and
              need vehicle entry. We cover an area of approximately{" "}
              {siteContent.business.coverageRadius} around {siteContent.business.baseArea}.
            </p>
            {siteContent.trust.yearEstablished && (
              <p className="text-sm text-[#1a2332]/60 mt-2">
                Established {siteContent.trust.yearEstablished}.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* What we do / don't do */}
      <section className="py-12 px-4 bg-gray-50" data-testid="section-about-scope">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-xl font-bold text-[#1a2332] mb-4">What We Do</h2>
            <ul className="space-y-3">
              {[
                "Vehicle entry for cars and light vehicles",
                "Keys locked inside the vehicle",
                "Locked out of your car",
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
            <h2 className="text-xl font-bold text-[#1a2332] mb-4">What We Do Not Do</h2>
            <ul className="space-y-3">
              {[
                "House or commercial locksmithing",
                "Key programming or key coding",
                "Replacement keys or spare keys",
                "Key cutting",
                "Ignition repairs",
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

      {/* Photos (hidden if empty) */}
      <JobGallery heading="Examples of Our Work" />

      {/* How we work */}
      <section className="py-12 px-4 bg-white" data-testid="section-about-approach">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-[#1a2332] mb-4">How We Communicate</h2>
          <div className="space-y-4">
            <div className="border-l-2 border-[#E8A020] pl-4">
              <p className="text-sm font-semibold text-[#1a2332]">Price confirmed before travel</p>
              <p className="text-xs text-[#1a2332]/60 mt-1">
                We give you a clear price before we travel. You are never committed before
                agreeing on the cost.
              </p>
            </div>
            <div className="border-l-2 border-[#E8A020] pl-4">
              <p className="text-sm font-semibold text-[#1a2332]">Estimated arrival time given upfront</p>
              <p className="text-xs text-[#1a2332]/60 mt-1">
                We give an estimated arrival time when you call. We are honest if we are not
                available or cannot reach you in reasonable time.
              </p>
            </div>
            <div className="border-l-2 border-[#E8A020] pl-4">
              <p className="text-sm font-semibold text-[#1a2332]">We confirm whether we can help</p>
              <p className="text-xs text-[#1a2332]/60 mt-1">
                Not all vehicles or situations are the same. We tell you honestly if we can
                assist with your specific situation before we travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal identity */}
      {hasTrust && (
        <section className="py-10 px-4 bg-gray-50 border-y border-gray-100" data-testid="section-about-legal">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-bold text-[#1a2332] mb-4">Business Details</h2>
            <div className="text-sm text-[#1a2332]/60 space-y-1">
              {siteContent.trust.legalName && <p>{siteContent.trust.legalName}</p>}
              {siteContent.trust.legalAddress && <p>{siteContent.trust.legalAddress}</p>}
              {siteContent.trust.companyRegistration && (
                <p>Company Registration No. {siteContent.trust.companyRegistration}</p>
              )}
              {siteContent.trust.vatNumber && (
                <p>VAT Registration No. {siteContent.trust.vatNumber}</p>
              )}
            </div>
          </div>
        </section>
      )}

      <CallCTA
        heading="Want to Know More Before Calling?"
        subtext="We're happy to answer questions about whether we can help with your situation."
        source="about-final"
      />
    </PageLayout>
  );
}
