import { siteContent } from "@/content/siteContent";
import { trackCallClick } from "@/lib/analytics";

const hasPhone = siteContent.business.phone !== "PHONE_NUMBER_PLACEHOLDER";

export default function StickyCallBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-[#1a2332] border-t border-white/10 px-4 py-3"
      data-testid="sticky-call-bar"
    >
      <div className="flex items-center justify-between">
        {/* Logo on the left */}
        <img
          src="/images/key-logo.png"
          alt=""
          className="h-10 w-10 object-contain opacity-80"
          aria-hidden="true"
        />

        {/* Call Now button — narrower, right side */}
        <a
          href={hasPhone ? `tel:${siteContent.business.phone.replace(/\s/g, "")}` : "/contact"}
          onClick={() => trackCallClick("sticky")}
          className="flex items-center justify-center bg-[#E8A020] text-[#1a2332] font-bold text-base rounded px-8 py-3 min-h-[52px] hover:bg-[#d4911c] transition-colors active:scale-[0.99]"
          data-testid="button-call-sticky"
        >
          Call Now
        </a>
      </div>
    </div>
  );
}
