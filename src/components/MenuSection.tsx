import { useMemo, useState } from 'react';
import { BookOpen, Check, Plus, Search, ShoppingBag } from 'lucide-react';
import {
  CAFE_INFO,
  Language,
  MENU_CATEGORIES,
  MENU_ITEMS,
  MenuCategoryId,
  MenuItem,
  UI_COPY,
} from '../data/cafeData';
import { SafeImage } from './SafeImage';

interface MenuSectionProps {
  lang: Language;
  cartQuantities: Record<string, number>;
  onAddToCart: (item: MenuItem) => void;
  onOpenCart: () => void;
  onOpenOriginalMenu: () => void;
}

const FEATURED_HIGHLIGHTS: {
  itemId: string;
  image: string;
  alt: string;
}[] = [
  {
    itemId: 'saraya-palace',
    image: '/assets/aistudio/unnamed_12__31d2cd35.jpg',
    alt: 'Formule Petit Déjeuner Saraya Palace servie sur planche',
  },
  {
    itemId: 'the-menthe-palace',
    image: '/assets/aistudio/unnamed_7__ada98a71.jpg',
    alt: 'Thé à la menthe en théière d’argent avec pâtisseries marocaines',
  },
  {
    itemId: 'chebakia-sesame',
    image: '/assets/aistudio/unnamed_13__1ef6d213.jpg',
    alt: 'Chebakia traditionnelle au miel et graines de sésame',
  },
];

export function MenuSection({
  lang,
  cartQuantities,
  onAddToCart,
  onOpenCart,
  onOpenOriginalMenu,
}: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategoryId>('breakfast');
  const [searchQuery, setSearchQuery] = useState('');
  const [justAddedId, setJustAddedId] = useState<string | null>(null);

  const copy = UI_COPY[lang];

  const totalSelectedCount = useMemo(
    () => Object.values(cartQuantities).reduce((sum, qty) => sum + qty, 0),
    [cartQuantities]
  );

  const filteredItems = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return MENU_ITEMS.filter((item) => {
      if (item.category !== activeCategory) return false;
      if (!q) return true;
      return (
        item.name[lang].toLowerCase().includes(q) ||
        item.description[lang].toLowerCase().includes(q)
      );
    });
  }, [activeCategory, searchQuery, lang]);

  const handleAdd = (item: MenuItem) => {
    onAddToCart(item);
    setJustAddedId(item.id);
    window.setTimeout(() => {
      setJustAddedId((curr) => (curr === item.id ? null : curr));
    }, 900);
  };

  return (
    <section id="la-carte" className="py-16 sm:py-20 border-t border-[#E5DEC9] bg-[#F5F1EA]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#8C2332] mb-2">
              {copy.menu.eyebrow}
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#181615] text-balance mb-3">
              {copy.menu.title}
            </h2>
            <p className="text-base text-[#4A433D] leading-relaxed">{copy.menu.subtitle}</p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenOriginalMenu}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[#181615] bg-[#FAF8F5] border border-[#D8CEBE] hover:border-[#8C2332] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              <BookOpen className="w-4 h-4 text-[#8C2332]" aria-hidden="true" />
              <span>{copy.menu.viewOriginalMenu}</span>
            </button>

            <button
              type="button"
              onClick={onOpenCart}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#181615] hover:bg-[#2E2A27] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0"
            >
              <ShoppingBag className="w-4 h-4" aria-hidden="true" />
              <span>{copy.menu.selectionButton}</span>
              <span className="tabular-nums text-xs px-1.5 py-0.5 rounded bg-white/15">
                {totalSelectedCount}
              </span>
            </button>
          </div>
        </div>

        {/* 3-Column Uniform Signature Photo Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {FEATURED_HIGHLIGHTS.map((highlight) => {
            const item = MENU_ITEMS.find((m) => m.id === highlight.itemId);
            if (!item) return null;
            const qty = cartQuantities[item.id] || 0;
            const isAdded = justAddedId === item.id;

            return (
              <article
                key={item.id}
                className="group bg-[#FAF8F5] border border-[#E5DEC9] rounded-xl overflow-hidden flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div>
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#EFEAE1]">
                    <SafeImage
                      src={highlight.image}
                      alt={highlight.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-3 text-xs text-[#70655B] mb-1.5">
                      <span>{item.tag ? item.tag[lang] : CAFE_INFO.brandName}</span>
                      <span className="font-semibold text-[#181615] tabular-nums text-sm">
                        {item.priceDh} DH
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-semibold text-[#181615] mb-2">
                      {item.name[lang]}
                    </h3>
                    <p className="text-sm text-[#4A433D] leading-relaxed line-clamp-3">
                      {item.description[lang]}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-[#EFEAE1]">
                  <span className="text-xs text-[#70655B] tabular-nums">
                    {qty > 0 ? `${qty} × ${item.priceDh} DH` : copy.strip.hoursValue}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleAdd(item)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 ${
                      isAdded
                        ? 'bg-[#1F5E3B] text-white'
                        : 'bg-[#8C2332] text-white hover:bg-[#731B28]'
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{copy.menu.addedButton}</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>{copy.menu.addButton}</span>
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Category Filter Bar + Search Input */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#DFD7C8]">
          <div
            role="tablist"
            aria-label="Catégories du menu"
            className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EAE3D7] rounded-lg"
          >
            {MENU_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-[#FAF8F5] text-[#181615] shadow-xs'
                      : 'text-[#5A5047] hover:text-[#181615]'
                  }`}
                >
                  {category.label[lang]}
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72">
            <Search
              className="w-4 h-4 text-[#70655B] absolute start-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={copy.menu.searchPlaceholder}
              aria-label={copy.menu.searchPlaceholder}
              className="w-full ps-10 pe-4 py-2.5 text-sm bg-[#FAF8F5] text-[#181615] placeholder:text-[#8A7E72] border border-[#D8CEBE] rounded-md focus:border-[#8C2332] focus:outline-none"
            />
          </div>
        </div>

        {/* Uniform Editorial Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="bg-[#FAF8F5] border border-[#E5DEC9] rounded-xl p-10 text-center">
            <p className="text-sm text-[#4A433D] mb-4">{copy.menu.emptySearch}</p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="px-4 py-2 text-xs font-semibold text-[#181615] bg-[#EFEAE1] hover:bg-[#E5DEC9] rounded-md transition-colors"
            >
              {copy.menu.resetFilter}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item) => {
              const qty = cartQuantities[item.id] || 0;
              const isAdded = justAddedId === item.id;

              return (
                <div
                  key={item.id}
                  className="bg-[#FAF8F5] border border-[#E5DEC9] rounded-xl p-5 flex flex-col justify-between gap-4 hover:border-[#CBBFA9] transition-colors duration-150"
                >
                  <div>
                    <div className="flex items-baseline justify-between gap-4 mb-1.5">
                      <h3 className="font-serif text-lg sm:text-xl font-semibold text-[#181615]">
                        {item.name[lang]}
                      </h3>
                      <span className="text-base font-semibold text-[#8C2332] tabular-nums whitespace-nowrap shrink-0">
                        {item.priceDh} DH
                      </span>
                    </div>

                    {item.tag && (
                      <p className="text-xs font-medium text-[#70655B] mb-2">
                        {item.tag[lang]}
                      </p>
                    )}

                    <p className="text-sm text-[#4A433D] leading-relaxed">
                      {item.description[lang]}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-[#EFEAE1]">
                    <span className="text-xs text-[#70655B] tabular-nums">
                      {qty > 0 ? `${qty} sélectionné${qty > 1 ? 's' : ''}` : 'Disponible 06:00 – 23:00'}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleAdd(item)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 ${
                        isAdded
                          ? 'bg-[#1F5E3B] text-white'
                          : 'bg-[#EFEAE1] text-[#181615] hover:bg-[#8C2332] hover:text-white'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>{copy.menu.addedButton}</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>{copy.menu.addButton}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
