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

export function trackCallClick(source: string) {
  trackEvent("call_click", { source });
  trackEvent(`call_click_${source}`);
  
  // Google Ads conversion tracking example
  // if (siteContent.analytics.enabled && siteContent.analytics.gadsId && (window as any).gtag) {
  //   (window as any).gtag('event', 'conversion', {
  //     'send_to': `${siteContent.analytics.gadsId}/AW-CONVERSION-ID`
  //   });
  // }
}
