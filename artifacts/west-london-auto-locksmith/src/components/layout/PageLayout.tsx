import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import StickyCallBar from "./StickyCallBar";
import SEOMeta from "@/components/SEOMeta";

interface PageLayoutProps {
  children: React.ReactNode;
  meta: {
    title: string;
    description: string;
    canonical?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    structuredData?: object;
  };
}

export default function PageLayout({ children, meta }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F4]">
      <SEOMeta {...meta} />
      <SiteHeader />
      <main className="flex-1 pb-20 md:pb-0" id="main-content">
        {children}
      </main>
      <SiteFooter />
      <StickyCallBar />
    </div>
  );
}
