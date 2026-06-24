import { useState, useEffect } from "react";
import { siteContent } from "@/content/siteContent";

const CONSENT_KEY = "cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!siteContent.analytics.gaId && !siteContent.analytics.gadsId) return;
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) setVisible(true);
  }, []);

  const updateConsent = (granted: boolean) => {
    const value = granted ? "granted" : "denied";
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("consent", "update", {
        ad_storage: value,
        ad_user_data: value,
        ad_personalization: value,
        analytics_storage: value,
      });
    }
  };

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    updateConsent(true);
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    updateConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#121212] text-white border-t border-white/10 px-4 py-4 md:py-3"
      role="dialog"
      aria-label="Cookie consent"
      data-testid="cookie-consent-banner"
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
        <p className="text-sm text-white/90 flex-1">
          This site uses cookies for analytics and advertising to help us understand how visitors find us.{" "}
          <a href="/cookies" className="underline text-white hover:text-[#C9A227] transition-colors">
            Cookie Policy
          </a>
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={decline}
            className="text-sm px-4 py-2 rounded border border-white/30 text-white/80 hover:text-white hover:border-white/60 transition-colors min-h-[44px]"
            data-testid="cookie-decline"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="text-sm px-4 py-2 rounded bg-[#C9A227] text-[#121212] font-semibold hover:bg-[#A88417] transition-colors min-h-[44px]"
            data-testid="cookie-accept"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
