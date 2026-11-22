import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { SafeImage } from './SafeImage';

export interface LightboxPayload {
  src: string;
  title: string;
  subtitle?: string;
  canCycle?: boolean;
}

interface LightboxProps {
  item: LightboxPayload | null;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
}

export function Lightbox({ item, onClose, onPrev, onNext }: LightboxProps) {
  useEffect(() => {
    if (!item) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [item, onClose, onPrev, onNext]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#181615] border border-white/15 rounded-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10">
          <div>
            <h3 className="font-serif text-lg font-semibold text-white">{item.title}</h3>
            {item.subtitle && <p className="text-xs text-[#B8AFA6]">{item.subtitle}</p>}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer l'aperçu"
            className="w-10 h-10 inline-flex items-center justify-center rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative bg-black flex items-center justify-center max-h-[75vh]">
          <SafeImage
            src={item.src}
            alt={item.title}
            className="max-h-[75vh] w-auto max-w-full object-contain"
          />

          {item.canCycle && onPrev && (
            <button
              type="button"
              onClick={onPrev}
              aria-label="Image précédente"
              className="absolute start-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/65 text-white hover:bg-black flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
            </button>
          )}

          {item.canCycle && onNext && (
            <button
              type="button"
              onClick={onNext}
              aria-label="Image suivante"
              className="absolute end-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/65 text-white hover:bg-black flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-5 h-5 rtl:rotate-180" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
