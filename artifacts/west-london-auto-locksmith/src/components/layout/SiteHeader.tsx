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
    <header className="sticky top-0 z-40 bg-[#121212]" data-testid="site-header">
      {/* Main bar */}
      <div className="flex items-stretch h-24">

        {/* Logo — left 3/4 */}
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

        {/* Right 1/4 — phone button + optional hamburger */}
        <div className="flex items-stretch w-1/4">
          {/* Phone call box */}
          <a
            href={phoneHref}
            onClick={() => trackCallClick("header")}
            className="flex-1 flex flex-col items-center justify-center bg-[#C9A227] hover:bg-[#A88417] transition-colors min-w-0"
            aria-label={`Call us on ${phone}`}
            data-testid="button-call-header"
          >
            <Phone size={20} className="text-[#121212]" />
            <span className="text-[#121212] font-bold text-[10px] mt-0.5 hidden sm:block tracking-wide">
              CALL
            </span>
          </a>

          {/* Hamburger — nav menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center w-12 bg-[#121212] border-l border-white/10 text-white/70 hover:text-white transition-colors shrink-0"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            data-testid="button-menu-toggle"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Tagline strip */}
      <div className="bg-[#2A2A2A] border-t border-white/10 px-4 py-1.5 text-center">
        <p className="text-white/80 text-xs tracking-wide">
          Vehicle lockout specialist&nbsp;&nbsp;·&nbsp;&nbsp;Fast quote &amp; ETA confirmed before dispatch
        </p>
      </div>

      {/* Mobile/desktop nav drawer */}
      {menuOpen && (
        <div className="bg-[#2A2A2A] border-t border-white/10" data-testid="nav-menu">
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
    </header>
  );
}
