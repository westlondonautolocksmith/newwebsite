import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { siteContent } from "@/content/siteContent";
import { trackCallClick } from "@/lib/analytics";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Vehicle Lockout", href: "/vehicle-lockout" },
  { label: "Car Keys", href: "/car-keys" },
  { label: "Lost Car Keys", href: "/lost-car-keys" },
  { label: "Areas We Cover", href: "/areas-we-cover" },
  { label: "Prices", href: "/pricing" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQs", href: "/faqs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const phone = siteContent.business.phone;
const phoneHref = `tel:${siteContent.business.phoneE164}`;

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location, navigate] = useLocation();

  const isHome = location === "/" || location === "";
  const tagline = isHome
    ? "Mobile car locksmith\u00a0·\u00a0Serving the whole of West London"
    : "Vehicle lockout specialists\u00a0·\u00a0Serving Uxbridge and surrounding areas";

  const rating = siteContent.reviews.rating;
  const reviewCount = siteContent.reviews.reviewCount;

  function handleHashLink(e: React.MouseEvent, href: string) {
    e.preventDefault();
    const id = href.replace("/#", "");
    setMenuOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 120);
    }
  }

  return (
    <>
      {/* ── Non-sticky: scrolls away with the page ── */}
      <header className="bg-[#121212]" data-testid="site-header">

        {/* Main bar: logo 3/4 + phone button 1/4 */}
        <div className="flex items-stretch h-24">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center w-3/4 overflow-hidden"
            data-testid="header-logo"
            aria-label="West London Auto Locksmith — home"
          >
            <img
              src="/images/logo-new.png"
              alt="West London Auto Locksmith"
              className="h-full w-full object-cover object-left md:w-auto md:object-contain"
              style={{ objectPosition: "20% center" }}
            />
          </Link>

          {/* Phone call box */}
          <a
            href={phoneHref}
            onClick={() => trackCallClick("header")}
            className="flex w-1/4 flex-col items-center justify-center bg-[#C9A227] hover:bg-[#A88417] transition-colors"
            aria-label={`Call us on ${phone}`}
            data-testid="button-call-header"
          >
            <Phone size={34} className="text-[#121212]" />
            <span className="text-[#121212] font-bold text-[10px] mt-0.5 hidden sm:block tracking-wide">
              CALL
            </span>
          </a>
        </div>

        {/* Tagline strip — route-aware, scrolls away with the logo */}
        <div className="bg-[#1a1a1a] border-t border-white/10 px-2 py-1 text-center overflow-hidden">
          <p className="text-white/80 text-[10px] font-medium tracking-wide whitespace-nowrap">
            {tagline}
          </p>
        </div>

      </header>

      {/* ── Sticky: pins to top once logo scrolls away ── */}
      <div className="sticky top-0 z-40" data-testid="sticky-reviews-bar">

        {/* Reviews strip + hamburger on same row */}
        <div className="flex items-center bg-[#1e1a0e] border-y border-[#C9A227]/30 px-4 py-1.5">
          <p className="flex-1 text-center text-[11px] tracking-wide whitespace-nowrap overflow-hidden font-semibold">
            <span className="text-[#C9A227]">★★★★★</span>
            <span className="text-white ml-1.5">{rating} on Google</span>
            {reviewCount && (
              <span className="text-white/50 ml-1">({reviewCount} reviews)</span>
            )}
            <span className="text-[#C9A227]/50 mx-2">·</span>
            {siteContent.reviews.googleReviewsUrl ? (
              <a
                href={siteContent.reviews.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 underline underline-offset-2 hover:text-white transition-colors"
              >
                Read our Google reviews
              </a>
            ) : (
              <span className="text-white/70">Read our Google reviews</span>
            )}
          </p>

          {/* Hamburger always accessible */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-2 flex items-center justify-center w-8 h-8 text-white/60 hover:text-white transition-colors shrink-0"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            data-testid="button-menu-toggle"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Nav drawer drops below sticky bar */}
        {menuOpen && (
          <div className="bg-[#2A2A2A] border-b border-white/10" data-testid="nav-menu">
            <nav className="max-w-6xl mx-auto px-4 py-2" aria-label="Site navigation">
              {navLinks.map((link) => (
                link.href.startsWith("/#") ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleHashLink(e, link.href)}
                    className="flex items-center py-3.5 border-b border-white/10 text-white/80 hover:text-white text-sm font-medium transition-colors last:border-0"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center py-3.5 border-b border-white/10 text-white/80 hover:text-white text-sm font-medium transition-colors last:border-0"
                    data-testid={`nav-link-${link.href.replace(/\//g, "")}`}
                  >
                    {link.label}
                  </Link>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
