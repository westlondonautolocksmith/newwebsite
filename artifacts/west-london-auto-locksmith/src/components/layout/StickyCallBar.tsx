import { Phone } from "lucide-react";
import { siteContent } from "@/content/siteContent";
import { trackCallClick } from "@/lib/analytics";

const hasPhone = siteContent.business.phone !== "PHONE_NUMBER_PLACEHOLDER";

export default function StickyCallBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-[#1a2332] border-t border-white/10 p-3"
      data-testid="sticky-call-bar"
    >
      <a
        href={hasPhone ? `tel:${siteContent.business.phone.replace(/\s/g, "")}` : "/contact"}
        onClick={() => trackCallClick("sticky")}
        className="flex items-center justify-center gap-2 w-full bg-[#E8A020] text-[#1a2332] font-bold text-base rounded py-3 min-h-[52px] hover:bg-[#d4911c] transition-colors active:scale-[0.99]"
        data-testid="button-call-sticky"
      >
        <Phone size={18} />
        {hasPhone
          ? `Call Now — ${siteContent.business.phone}`
          : "Call to Check Availability"}
      </a>
    </div>
  );
}
