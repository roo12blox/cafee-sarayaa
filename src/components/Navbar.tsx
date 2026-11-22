import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CAFE_INFO, Language, UI_COPY } from '../data/cafeData';

interface NavbarProps {
  lang: Language;
  onNavigateReserve: () => void;
}

export function Navbar({ lang, onNavigateReserve }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const copy = UI_COPY[lang];

  const navLinks = [
    { href: '#la-carte', label: copy.nav.menu },
    { href: '#savoir-faire', label: copy.nav.space },
    { href: '#galerie', label: copy.nav.gallery },
    { href: '#reservation', label: copy.nav.contact },
  ];

  const handleMobileNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5DEC9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="#top"
          className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-[#181615] whitespace-nowrap shrink-0 hover:text-[#8C2332] transition-colors duration-150"
        >
          {CAFE_INFO.brandName}
        </a>

        {/* Zone 2: 4 concise single-line text links */}
        <nav
          aria-label="Navigation principale"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A433D]"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:text-[#181615] hover:border-[#8C2332] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary CTA + mobile drawer button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onNavigateReserve}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#8C2332] hover:bg-[#731B28] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            {copy.nav.reserve}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md border border-[#E5DEC9] text-[#181615] hover:bg-[#EFEAE1] transition-colors duration-150"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-[#E5DEC9] bg-[#FAF8F5] px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleMobileNavClick(link.href);
              }}
              className="block py-3 px-3 text-base font-medium text-[#181615] rounded-md hover:bg-[#EFEAE1] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onNavigateReserve();
              }}
              className="w-full py-3 px-5 text-sm font-semibold text-white bg-[#8C2332] hover:bg-[#731B28] rounded-md transition-colors"
            >
              {copy.nav.reserve}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
