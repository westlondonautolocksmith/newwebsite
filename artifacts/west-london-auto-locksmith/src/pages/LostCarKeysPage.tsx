import PageLayout from "@/components/layout/PageLayout";
import { siteContent } from "@/content/siteContent";

export default function LostCarKeysPage() {
  return (
    <PageLayout
      meta={{
        title: "Lost All Car Keys | West London Auto Locksmith",
        description:
          "Lost all your car keys? Call West London Auto Locksmith with your make, model, year and location. We confirm availability and price before travel.",
        canonical: `${siteContent.seo.siteUrl}/lost-car-keys`,
        ogTitle: "Lost All Car Keys | West London Auto Locksmith",
        ogDescription:
          "Lost all your car keys? Call with your make, model, year and location. Price confirmed before we travel.",
      }}
    >
      <section className="min-h-[60vh] flex items-center justify-center px-4 bg-white">
        <p className="text-[#121212]/30 text-sm">Lost Car Keys page — coming soon</p>
      </section>
    </PageLayout>
  );
}
