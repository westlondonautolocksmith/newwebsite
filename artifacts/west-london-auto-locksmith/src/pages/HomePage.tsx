import PageLayout from "@/components/layout/PageLayout";
import { siteContent } from "@/content/siteContent";

export default function HomePage() {
  return (
    <PageLayout
      meta={{
        title: "West London Auto Locksmith | Vehicle Lockouts Uxbridge",
        description:
          "Vehicle lockout specialist covering Uxbridge and surrounding areas in West London.",
        canonical: `${siteContent.seo.siteUrl}/`,
        ogTitle: "West London Auto Locksmith",
        ogDescription: "Vehicle lockout specialist covering Uxbridge and West London.",
      }}
    >
      <section className="min-h-[60vh] flex items-center justify-center px-4 bg-white">
        <p className="text-[#121212]/30 text-sm">Home page — coming soon</p>
      </section>
    </PageLayout>
  );
}
