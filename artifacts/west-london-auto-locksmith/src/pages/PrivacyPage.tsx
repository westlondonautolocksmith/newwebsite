import { Link } from "wouter";
import PageLayout from "@/components/layout/PageLayout";
import { siteContent } from "@/content/siteContent";

export default function PrivacyPage() {
  return (
    <PageLayout
      meta={{
        title: "Privacy Policy | West London Auto Locksmith",
        description: "Privacy policy for West London Auto Locksmith.",
        canonical: `${siteContent.seo.siteUrl}/privacy`,
      }}
    >
      <section className="bg-[#121212] text-white py-12 px-4" data-testid="section-privacy-hero">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-sm text-white/50">
            Last updated: {siteContent.legal.privacyLastUpdated}
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-white" data-testid="section-privacy-content">
        <div className="max-w-3xl mx-auto prose prose-sm prose-slate max-w-none">
          <h2>Who We Are</h2>
          <p>
            {siteContent.trust.legalName || siteContent.business.name} operates the website at{" "}
            {siteContent.seo.siteUrl}. We provide vehicle lockout services in West London.
          </p>

          <h2>What Data We Collect</h2>
          <p>
            This website does not have a contact form, user accounts, or checkout. We do not
            directly collect names, email addresses, or payment details through this website.
          </p>
          <p>
            If you call us, we will take only the information needed to carry out the job
            (location and vehicle details). This information is not stored in a database on
            this website.
          </p>

          <h2>Analytics Cookies</h2>
          <p>
            This site uses Google Analytics to understand how visitors find us and which
            pages are most useful. Analytics is only enabled if you accept cookies via the
            cookie consent notice. If you decline, no analytics data is collected.
          </p>
          <p>
            Google Analytics collects anonymised data such as page views, device type, and
            approximate location (city level). It does not identify you personally.
          </p>

          <h2>Your Rights</h2>
          <p>
            You have the right to request access to any personal data we hold about you, and
            to request its deletion. As this site does not store personal data directly,
            such requests would relate only to any data held from telephone or other contact.
          </p>
          <p>
            To make a request, contact us at the telephone number or address listed in the
            footer of this site.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            We use Google Analytics (provided by Google LLC). Google&rsquo;s privacy policy can be
            found at{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              policies.google.com/privacy
            </a>
            .
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this policy from time to time. The date at the top of the page
            indicates when it was last revised.
          </p>

          <h2>Cookie Policy</h2>
          <p>
            For information about the cookies used on this site, see our{" "}
            <Link href="/cookies">Cookie Policy</Link>.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
