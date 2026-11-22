import { CAFE_INFO, Language, UI_COPY } from '../data/cafeData';

interface FooterProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
}

export function Footer({ lang, onChangeLang }: FooterProps) {
  const copy = UI_COPY[lang];

  return (
    <footer className="border-t border-[#E5DEC9] bg-[#FAF8F5] py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-[#E5DEC9]">
          <div>
            <p className="font-serif text-2xl font-semibold text-[#181615] mb-1">
              {CAFE_INFO.brandName}
            </p>
            <p className="text-sm text-[#4A433D]">{copy.footer.tagline}</p>
            <p className="text-xs text-[#70655B] mt-2">
              {lang === 'ar' ? CAFE_INFO.addressAr : CAFE_INFO.address} · {copy.footer.hours}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-[#4A433D]">
            <a href="#la-carte" className="hover:text-[#181615] transition-colors">
              {copy.nav.menu}
            </a>
            <a href="#savoir-faire" className="hover:text-[#181615] transition-colors">
              {copy.nav.space}
            </a>
            <a href="#galerie" className="hover:text-[#181615] transition-colors">
              {copy.nav.gallery}
            </a>
            <a href="#reservation" className="hover:text-[#181615] transition-colors">
              {copy.nav.contact}
            </a>
            <a
              href={CAFE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8C2332] transition-colors"
            >
              Instagram
            </a>
            <a
              href={CAFE_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8C2332] transition-colors"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#70655B]">
          <p>© {new Date().getFullYear()} {copy.footer.rights}</p>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onChangeLang('fr')}
              className={`hover:text-[#181615] ${lang === 'fr' ? 'font-semibold text-[#181615]' : ''}`}
            >
              Français
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onChangeLang('ar')}
              className={`hover:text-[#181615] ${lang === 'ar' ? 'font-semibold text-[#181615]' : ''}`}
            >
              العربية
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onChangeLang('en')}
              className={`hover:text-[#181615] ${lang === 'en' ? 'font-semibold text-[#181615]' : ''}`}
            >
              English
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
