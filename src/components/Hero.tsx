import { ArrowRight, Clock, MapPin, Phone, Utensils } from 'lucide-react';
import { CAFE_INFO, Language, UI_COPY } from '../data/cafeData';
import { SafeImage } from './SafeImage';

interface HeroProps {
  lang: Language;
  onChangeLang: (lang: Language) => void;
  onReserveClick: () => void;
  onMenuClick: () => void;
}

export function Hero({ lang, onChangeLang, onReserveClick, onMenuClick }: HeroProps) {
  const copy = UI_COPY[lang];

  return (
    <section id="top" className="pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Hero Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Editorial Value Proposition */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              {/* Quiet kicker + Inline Language Selector */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <p className="text-xs sm:text-sm font-medium tracking-wide text-[#70655B]">
                  {copy.hero.kicker}
                </p>

                <div
                  role="group"
                  aria-label="Language selector"
                  className="inline-flex items-center gap-1 p-1 rounded-md bg-[#EFEAE1] border border-[#E5DEC9]"
                >
                  {(['fr', 'ar', 'en'] as Language[]).map((code) => (
                    <button
                      key={code}
                      type="button"
                      onClick={() => onChangeLang(code)}
                      className={`px-2.5 py-1 text-xs font-semibold rounded transition-colors duration-150 whitespace-nowrap shrink-0 ${
                        lang === code
                          ? 'bg-white text-[#181615] shadow-xs'
                          : 'text-[#6B5D52] hover:text-[#181615]'
                      }`}
                    >
                      {code === 'fr' ? 'FR' : code === 'ar' ? 'العربية' : 'EN'}
                    </button>
                  ))}
                </div>
              </div>

              <h1
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.65rem)' }}
                className="font-serif font-semibold leading-[1.12] tracking-tight text-[#181615] text-balance mb-6"
              >
                {copy.hero.headline}
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-[#4A433D] max-w-xl mb-8">
                {copy.hero.subtitle}
              </p>

              {/* Single Dominant Primary CTA + Clean Text Secondary Link */}
              <div className="flex flex-wrap items-center gap-5">
                <button
                  type="button"
                  onClick={onReserveClick}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#8C2332] hover:bg-[#731B28] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0"
                >
                  <span>{copy.hero.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={onMenuClick}
                  className="inline-flex items-center gap-2 py-2.5 px-1 text-sm sm:text-base font-semibold text-[#181615] border-b border-[#181615]/30 hover:border-[#8C2332] hover:text-[#8C2332] transition-colors duration-150 whitespace-nowrap shrink-0"
                >
                  {copy.hero.ctaSecondary}
                </button>
              </div>
            </div>

            {/* Subtle Brand Heritage Signature */}
            <div className="mt-10 pt-6 border-t border-[#E5DEC9] flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-[#6B5D52]">
              <span>
                {CAFE_INFO.arabicName} · {CAFE_INFO.brandName}
              </span>
              <span className="tabular-nums">{CAFE_INFO.coordinates}</span>
            </div>
          </div>

          {/* Right Column: Real Architectural Interior Photo */}
          <div className="lg:col-span-6">
            <div className="relative h-[340px] sm:h-[420px] lg:h-full min-h-[440px] rounded-xl overflow-hidden border border-[#E5DEC9] bg-[#EFEAE1]">
              <SafeImage
                src="/assets/aistudio/unnamed_8__a6f6ead8.jpg"
                alt="Intérieur lumineux du café Saraya Palace à Meknès"
                loading="eager"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-5 sm:p-6">
                <p className="text-xs sm:text-sm font-medium text-white/95">
                  {copy.hero.photoCaption}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Architectural Strip Below Hero */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5DEC9] border border-[#E5DEC9] rounded-xl overflow-hidden">
          <div className="bg-[#FAF8F5] p-5 flex items-start gap-3.5">
            <Clock className="w-5 h-5 text-[#8C2332] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs font-medium text-[#70655B] mb-1">{copy.strip.hoursLabel}</p>
              <p className="text-sm font-semibold text-[#181615] tabular-nums">
                {copy.strip.hoursValue}
              </p>
            </div>
          </div>

          <div className="bg-[#FAF8F5] p-5 flex items-start gap-3.5">
            <MapPin className="w-5 h-5 text-[#8C2332] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs font-medium text-[#70655B] mb-1">{copy.strip.addressLabel}</p>
              <p className="text-sm font-semibold text-[#181615]">{copy.strip.addressValue}</p>
            </div>
          </div>

          <a
            href={CAFE_INFO.phoneHref}
            className="bg-[#FAF8F5] hover:bg-[#F3EFE7] transition-colors p-5 flex items-start gap-3.5"
          >
            <Phone className="w-5 h-5 text-[#8C2332] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs font-medium text-[#70655B] mb-1">{copy.strip.phoneLabel}</p>
              <p className="text-sm font-semibold text-[#181615] tabular-nums" dir="ltr">
                {copy.strip.phoneValue}
              </p>
            </div>
          </a>

          <div className="bg-[#FAF8F5] p-5 flex items-start gap-3.5">
            <Utensils className="w-5 h-5 text-[#8C2332] shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-xs font-medium text-[#70655B] mb-1">{copy.strip.craftLabel}</p>
              <p className="text-sm font-semibold text-[#181615]">{copy.strip.craftValue}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
