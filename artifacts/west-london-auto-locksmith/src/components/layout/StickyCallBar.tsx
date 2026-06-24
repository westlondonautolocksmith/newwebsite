import { Phone } from "lucide-react";
import { siteContent } from "@/content/siteContent";
import { trackCallClick } from "@/lib/analytics";

const hasPhone = siteContent.business.phone !== "PHONE_NUMBER_PLACEHOLDER";

export default function StickyCallBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-30 md:hidden bg-[#121212] border-t border-white/10 py-3 pr-4"
      data-testid="sticky-call-bar"
    >
      <div className="flex items-center">
        {/* Logo — centred in the 1/4 space between screen edge and button */}
        <div className="w-1/4 flex items-center justify-center shrink-0">
          <img
            src="/images/key-logo.png"
            alt=""
            className="h-10 w-10 object-contain opacity-80"
            aria-hidden="true"
          />
        </div>

        {/* Call Now button — fills remaining 3/4 */}
        <a
          href={hasPhone ? `tel:${siteContent.business.phone.replace(/\s/g, "")}` : "/contact"}
          onClick={() => trackCallClick("sticky")}
          className="flex-1 flex items-center justify-center gap-2 bg-[#C9A227] text-[#121212] font-bold text-base rounded py-3 min-h-[52px] hover:bg-[#A88417] transition-colors active:scale-[0.99]"
          data-testid="button-call-sticky"
        >
          <Phone size={18} />
          Call Now
        </a>
      </div>
    </div>
  );
}
