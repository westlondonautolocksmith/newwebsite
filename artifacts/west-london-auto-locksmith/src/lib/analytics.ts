import { siteContent } from "../content/siteContent";

export function trackEvent(eventName: string, params?: Record<string, string | number>) {
  if (typeof window === "undefined") return;
  
  if (siteContent.analytics.enabled && (window as any).gtag) {
    (window as any).gtag("event", eventName, params);
  }
}

export function trackWhatsAppClick(source: string) {
  trackEvent("whatsapp_click", { source });
}

// Fires the Google Ads "click to call" conversion. Called on every call button.
export function reportCallConversion() {
  if (typeof window === "undefined") return;
  const label = siteContent.analytics.gadsCallConversionLabel;
  if (siteContent.analytics.enabled && label && (window as any).gtag) {
    (window as any).gtag("event", "conversion", {
      send_to: label,
      value: 1.0,
      currency: "GBP",
    });
  }
}

export function trackCallClick(source: string) {
  trackEvent("call_click", { source });
  trackEvent(`call_click_${source}`);
  reportCallConversion();
}
