import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Phone } from "lucide-react";
import { siteContent } from "@/content/siteContent";
import { trackCallClick } from "@/lib/analytics";

const navLinks = [
  { label: "Vehicle Lockout", href: "/vehicle-lockout" },
  { label: "Areas We Cover", href: "/areas-we-cover" },
  { label: "Prices", href: "/pricing" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQs", href: "/faqs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const phone = siteContent.business.phone;
const phoneHref = `tel:${phone.replace(/\s/g, "")}`;

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

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
              className="h-full w-full object-cover object-left"
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

        {/* Tagline strip — scrolls away with the logo */}
        <div className="bg-[#1a1a1a] border-t border-white/10 px-2 py-2 text-center">
          <p className="text-white/80 text-xs font-medium tracking-wide leading-relaxed">
            — Vehicle lockout specialists —<br />— Serving Uxbridge and surrounding areas —
          </p>
        </div>

      </header>

      {/* ── Sticky: pins to top once logo scrolls away ── */}
      <div className="sticky top-0 z-40" data-testid="sticky-reviews-bar">

        {/* Reviews strip + hamburger on same row */}
        <div className="flex items-center bg-[#121212] border-b border-white/10 px-4 py-1">
          <p className="flex-1 text-center text-[11px] tracking-wide">
            <span className="text-[#C9A227]">★★★★★</span>
            <span className="text-white/70 ml-1.5">5.0 on Google</span>
            <span className="text-white/30 mx-2">·</span>
            <span className="text-white/50 text-[10px]">Read our Google reviews (2 Reviews)</span>
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
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center py-3.5 border-b border-white/10 text-white/80 hover:text-white text-sm font-medium transition-colors last:border-0"
                  data-testid={`nav-link-${link.href.replace(/\//g, "")}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </>
  );
}
