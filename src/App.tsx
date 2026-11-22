import { useEffect, useState } from 'react';
import { AtmosphereSection } from './components/AtmosphereSection';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Lightbox, LightboxPayload } from './components/Lightbox';
import { MenuSection } from './components/MenuSection';
import { Navbar } from './components/Navbar';
import { OrderDrawer } from './components/OrderDrawer';
import { ReservationContactSection } from './components/ReservationContactSection';
import { CAFE_INFO, GALLERY_ITEMS, GalleryItem, Language, MenuItem, UI_COPY } from './data/cafeData';

export default function App() {
  const [lang, setLang] = useState<Language>('fr');
  const [cartQuantities, setCartQuantities] = useState<Record<string, number>>({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [lightboxState, setLightboxState] = useState<{
    mode: 'gallery' | 'menu';
    galleryIndex: number;
  } | null>(null);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const scrollToSection = (selector: string) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToCart = (item: MenuItem) => {
    setCartQuantities((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
    }));
  };

  const handleUpdateQty = (itemId: string, delta: number) => {
    setCartQuantities((prev) => {
      const next = (prev[itemId] || 0) + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[itemId];
        return copy;
      }
      return { ...prev, [itemId]: next };
    });
  };

  const handleClearCart = () => {
    setCartQuantities({});
  };

  const handleSelectPhoto = (item: GalleryItem) => {
    const idx = GALLERY_ITEMS.findIndex((g) => g.id === item.id);
    setLightboxState({
      mode: 'gallery',
      galleryIndex: idx >= 0 ? idx : 0,
    });
  };

  const handleOpenOriginalMenu = () => {
    setLightboxState({
      mode: 'menu',
      galleryIndex: 0,
    });
  };

  const activeLightboxPayload: LightboxPayload | null = (() => {
    if (!lightboxState) return null;
    if (lightboxState.mode === 'menu') {
      return {
        src: CAFE_INFO.menuPhotoSrc,
        title: UI_COPY[lang].menu.viewOriginalMenu,
        subtitle: `${CAFE_INFO.brandName} · ${CAFE_INFO.city}`,
        canCycle: false,
      };
    }
    const item = GALLERY_ITEMS[lightboxState.galleryIndex];
    return {
      src: item.src,
      title: item.title[lang],
      subtitle: item.subtitle[lang],
      canCycle: true,
    };
  })();

  const handlePrevPhoto = () => {
    setLightboxState((prev) => {
      if (!prev || prev.mode !== 'gallery') return prev;
      return {
        ...prev,
        galleryIndex: (prev.galleryIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length,
      };
    });
  };

  const handleNextPhoto = () => {
    setLightboxState((prev) => {
      if (!prev || prev.mode !== 'gallery') return prev;
      return {
        ...prev,
        galleryIndex: (prev.galleryIndex + 1) % GALLERY_ITEMS.length,
      };
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#181615]">
      <Navbar lang={lang} onNavigateReserve={() => scrollToSection('#reservation')} />

      <main className="flex-1">
        <Hero
          lang={lang}
          onChangeLang={setLang}
          onReserveClick={() => scrollToSection('#reservation')}
          onMenuClick={() => scrollToSection('#la-carte')}
        />

        <MenuSection
          lang={lang}
          cartQuantities={cartQuantities}
          onAddToCart={handleAddToCart}
          onOpenCart={() => setDrawerOpen(true)}
          onOpenOriginalMenu={handleOpenOriginalMenu}
        />

        <AtmosphereSection lang={lang} onSelectPhoto={handleSelectPhoto} />

        <ReservationContactSection lang={lang} />
      </main>

      <Footer lang={lang} onChangeLang={setLang} />

      <OrderDrawer
        open={drawerOpen}
        lang={lang}
        quantities={cartQuantities}
        onClose={() => setDrawerOpen(false)}
        onUpdateQty={handleUpdateQty}
        onClearCart={handleClearCart}
      />

      <Lightbox
        item={activeLightboxPayload}
        onClose={() => setLightboxState(null)}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
      />
    </div>
  );
}
