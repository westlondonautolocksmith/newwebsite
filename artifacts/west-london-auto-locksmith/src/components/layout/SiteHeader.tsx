import { useState } from "react";
import { Link, useLocation } from "wouter";
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
];

const hasPhone = siteContent.business.phone !== "PHONE_NUMBER_PLACEHOLDER";

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  const handleCallClick = () => {
    trackCallClick("header");
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#121212] text-white shadow-md" data-testid="site-header">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-tight hover:opacity-90 transition-opacity shrink-0" data-testid="header-logo">
          <span className="font-bold text-base md:text-lg tracking-tight text-white">
            West London Auto Locksmith
          </span>
          <span className="text-[10px] md:text-xs text-[#C9A227] font-medium tracking-wide uppercase">
            Vehicle Lockouts Only
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#C9A227] ${
                location === link.href ? "text-[#C9A227]" : "text-white/80"
              }`}
              data-testid={`nav-link-${link.href.replace(/\//g, "")}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm font-medium text-white/60 hover:text-white/80 transition-colors"
            data-testid="nav-link-contact"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {hasPhone && (
            <span className="text-sm text-white/70 font-medium">
              {siteContent.business.phone}
            </span>
          )}
          <a
            href={hasPhone ? `tel:${siteContent.business.phone.replace(/\s/g, "")}` : "/contact"}
            onClick={handleCallClick}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C9A227] text-[#121212] font-bold text-sm rounded hover:bg-[#A88417] transition-colors min-h-[44px]"
            data-testid="button-call-header"
          >
            <Phone size={15} />
            Call Now
          </a>
        </div>

        {/* Mobile: call button + hamburger */}
        <div className="flex md:hidden items-center gap-2 shrink-0">
          <a
            href={hasPhone ? `tel:${siteContent.business.phone.replace(/\s/g, "")}` : "/contact"}
            onClick={handleCallClick}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#C9A227] text-[#121212] font-bold text-sm rounded hover:bg-[#A88417] transition-colors min-h-[44px]"
            data-testid="button-call-header-mobile"
          >
            <Phone size={14} />
            Call
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-white/80 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            data-testid="button-menu-toggle"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#2A2A2A] border-t border-white/10" data-testid="mobile-menu">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`py-3 px-2 text-base font-medium border-b border-white/10 transition-colors hover:text-[#C9A227] ${
                  location === link.href ? "text-[#C9A227]" : "text-white/80"
                }`}
                data-testid={`mobile-nav-${link.href.replace(/\//g, "")}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="py-3 px-2 text-base font-medium text-white/60 hover:text-white/80 transition-colors"
              data-testid="mobile-nav-contact"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
