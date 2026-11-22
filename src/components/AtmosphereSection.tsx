import { Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, Language, UI_COPY } from '../data/cafeData';
import { SafeImage } from './SafeImage';

interface AtmosphereSectionProps {
  lang: Language;
  onSelectPhoto: (item: GalleryItem) => void;
}

export function AtmosphereSection({ lang, onSelectPhoto }: AtmosphereSectionProps) {
  const copy = UI_COPY[lang];

  return (
    <>
      {/* Section 3: Savoir-Faire & Three Atmospheres */}
      <section id="savoir-faire" className="py-16 sm:py-20 border-t border-[#E5DEC9] bg-[#FAF8F5]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Editorial Intro + Numbered Pillars */}
            <div className="lg:col-span-6">
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#8C2332] mb-2">
                {copy.atmosphere.eyebrow}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#181615] text-balance mb-4">
                {copy.atmosphere.title}
              </h2>
              <p className="text-base text-[#4A433D] leading-relaxed mb-8">
                {copy.atmosphere.subtitle}
              </p>

              <div className="divide-y divide-[#E5DEC9] border-t border-b border-[#E5DEC9]">
                {copy.atmosphere.pillars.map((pillar) => (
                  <div key={pillar.num} className="py-5">
                    <div className="flex items-baseline gap-3 mb-1.5">
                      <span className="text-sm font-semibold text-[#8C2332] tabular-nums">
                        {pillar.num}
                      </span>
                      <h3 className="font-serif text-xl font-semibold text-[#181615]">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#4A433D] leading-relaxed ps-7">{pillar.body}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Asymmetric Photo Pair */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
              <button
                type="button"
                onClick={() => onSelectPhoto(GALLERY_ITEMS[0])}
                className="group relative rounded-xl overflow-hidden border border-[#E5DEC9] bg-[#EFEAE1] text-start aspect-[3/4] sm:aspect-auto sm:h-[460px]"
              >
                <SafeImage
                  src="/assets/aistudio/unnamed_6__2e22fde6.jpg"
                  alt="Façade Saraya Palace Meknès avec terrasse et jardin"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-4">
                  <p className="text-xs text-white/80 mb-0.5">
                    {GALLERY_ITEMS[0].category[lang]}
                  </p>
                  <p className="font-serif text-base font-medium text-white">
                    {GALLERY_ITEMS[0].title[lang]}
                  </p>
                </div>
              </button>

              <div className="flex flex-col gap-4 sm:h-[460px]">
                <button
                  type="button"
                  onClick={() => onSelectPhoto(GALLERY_ITEMS[2])}
                  className="group relative flex-1 rounded-xl overflow-hidden border border-[#E5DEC9] bg-[#EFEAE1] text-start min-h-[210px]"
                >
                  <SafeImage
                    src="/assets/aistudio/unnamed_11__80b2b619.jpg"
                    alt="Terrasse ensoleillée bordée de palmiers"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-4">
                    <p className="font-serif text-base font-medium text-white">
                      {GALLERY_ITEMS[2].title[lang]}
                    </p>
                  </div>
                </button>

                <div className="rounded-xl overflow-hidden border border-[#E5DEC9] bg-[#EFEAE1] flex-1 min-h-[210px] relative">
                  <SafeImage
                    src="/assets/aistudio/unnamed_5__665aec00.jpg"
                    alt="Espresso servi avec eau Sidi Ali au café Saraya Palace"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4">
                    <p className="font-serif text-base font-medium text-white">
                      Espresso & Eau Fraîche
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Photo Gallery Grid */}
      <section id="galerie" className="py-16 sm:py-20 border-t border-[#E5DEC9] bg-[#F5F1EA]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#8C2332] mb-2">
                {copy.gallery.eyebrow}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#181615]">
                {copy.gallery.title}
              </h2>
            </div>
            <p className="text-sm text-[#6B5D52]">{copy.gallery.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_ITEMS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onSelectPhoto(item)}
                className="group bg-[#FAF8F5] border border-[#E5DEC9] rounded-xl overflow-hidden text-start flex flex-col transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFEAE1]">
                  <SafeImage
                    src={item.src}
                    alt={item.title[lang]}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                  <span className="absolute top-3 end-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/65 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <Maximize2 className="w-3 h-3" aria-hidden="true" />
                    <span>{copy.gallery.zoomHint}</span>
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-xs text-[#70655B] mb-1">{item.category[lang]}</p>
                  <h3 className="font-serif text-lg font-semibold text-[#181615] mb-1">
                    {item.title[lang]}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A433D] line-clamp-2">
                    {item.subtitle[lang]}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
