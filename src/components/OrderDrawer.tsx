import { FormEvent, useMemo, useState } from 'react';
import { CheckCircle2, Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { Language, MENU_ITEMS, UI_COPY } from '../data/cafeData';

interface OrderDrawerProps {
  open: boolean;
  lang: Language;
  quantities: Record<string, number>;
  onClose: () => void;
  onUpdateQty: (itemId: string, delta: number) => void;
  onClearCart: () => void;
}

export function OrderDrawer({
  open,
  lang,
  quantities,
  onClose,
  onUpdateQty,
  onClearCart,
}: OrderDrawerProps) {
  const copy = UI_COPY[lang];
  const [mode, setMode] = useState<'table' | 'takeaway'>('table');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [pickupTime, setPickupTime] = useState('09:30');
  const [error, setError] = useState<string | null>(null);
  const [orderRef, setOrderRef] = useState<string | null>(null);

  const selectedItems = useMemo(() => {
    return Object.entries(quantities)
      .filter(([, qty]) => qty > 0)
      .map(([id, qty]) => {
        const item = MENU_ITEMS.find((m) => m.id === id);
        return item ? { item, qty } : null;
      })
      .filter((entry): entry is { item: (typeof MENU_ITEMS)[number]; qty: number } => entry !== null);
  }, [quantities]);

  const subtotal = useMemo(
    () => selectedItems.reduce((sum, entry) => sum + entry.item.priceDh * entry.qty, 0),
    [selectedItems]
  );

  if (!open) return null;

  const handleConfirmOrder = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!customerName.trim() || !customerPhone.trim()) {
      setError(copy.reservation.errorRequired);
      return;
    }

    const digits = customerPhone.replace(/\D/g, '');
    if (digits.length < 9) {
      setError(copy.reservation.errorPhone);
      return;
    }

    const ref = `SP-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderRef(ref);
  };

  const handleReset = () => {
    setOrderRef(null);
    setError(null);
    onClearCart();
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-label={copy.drawer.title}
    >
      <div className="w-full max-w-md bg-[#FAF8F5] h-full flex flex-col border-s border-[#E5DEC9] shadow-2xl">
        {/* Drawer Header */}
        <div className="px-6 py-4 border-b border-[#E5DEC9] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#8C2332]" aria-hidden="true" />
            <h2 className="font-serif text-xl font-semibold text-[#181615]">
              {copy.drawer.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Fermer"
            className="w-10 h-10 inline-flex items-center justify-center rounded-md text-[#4A433D] hover:bg-[#EFEAE1] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {orderRef ? (
            <div className="space-y-5 py-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-7 h-7 text-[#1F5E3B] shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold text-[#1F5E3B] tabular-nums mb-1">
                    #{orderRef} · {mode === 'table' ? copy.drawer.modeTable : copy.drawer.modeTakeaway}
                  </p>
                  <h3 className="font-serif text-2xl font-semibold text-[#181615]">
                    {copy.drawer.orderConfirmed}
                  </h3>
                </div>
              </div>

              <div className="bg-[#F5F1EA] border border-[#E5DEC9] rounded-lg p-4 space-y-2 text-sm">
                {selectedItems.map(({ item, qty }) => (
                  <div key={item.id} className="flex justify-between gap-2">
                    <span className="text-[#181615]">
                      {qty} × {item.name[lang]}
                    </span>
                    <span className="font-semibold tabular-nums text-[#181615]">
                      {item.priceDh * qty} DH
                    </span>
                  </div>
                ))}
                <div className="pt-2 mt-2 border-t border-[#E5DEC9] flex justify-between font-semibold text-base">
                  <span>{copy.drawer.subtotal}</span>
                  <span className="text-[#8C2332] tabular-nums">{subtotal} DH</span>
                </div>
              </div>

              <p className="text-sm text-[#4A433D] leading-relaxed">
                {copy.drawer.orderConfirmedDesc}
              </p>

              <button
                type="button"
                onClick={handleReset}
                className="w-full py-3 px-4 text-sm font-semibold text-white bg-[#181615] hover:bg-[#2E2A27] rounded-md transition-colors"
              >
                {copy.drawer.clearOrder}
              </button>
            </div>
          ) : selectedItems.length === 0 ? (
            <div className="text-center py-14 px-4">
              <ShoppingBag className="w-10 h-10 text-[#B8AEA2] mx-auto mb-4" aria-hidden="true" />
              <h3 className="font-serif text-xl font-semibold text-[#181615] mb-2">
                {copy.drawer.emptyTitle}
              </h3>
              <p className="text-sm text-[#6B5D52] mb-6 leading-relaxed">{copy.drawer.emptyBody}</p>
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-[#8C2332] hover:bg-[#731B28] rounded-md transition-colors"
              >
                {copy.drawer.browseMenu}
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Service Mode Toggle */}
              <div className="grid grid-cols-2 gap-1 p-1 bg-[#EFEAE1] rounded-lg">
                <button
                  type="button"
                  onClick={() => setMode('table')}
                  className={`py-2 text-xs font-semibold rounded-md transition-colors ${
                    mode === 'table' ? 'bg-white text-[#181615] shadow-xs' : 'text-[#5A5047]'
                  }`}
                >
                  {copy.drawer.modeTable}
                </button>
                <button
                  type="button"
                  onClick={() => setMode('takeaway')}
                  className={`py-2 text-xs font-semibold rounded-md transition-colors ${
                    mode === 'takeaway' ? 'bg-white text-[#181615] shadow-xs' : 'text-[#5A5047]'
                  }`}
                >
                  {copy.drawer.modeTakeaway}
                </button>
              </div>

              {/* Itemized List */}
              <div className="divide-y divide-[#E5DEC9] border-t border-b border-[#E5DEC9]">
                {selectedItems.map(({ item, qty }) => (
                  <div key={item.id} className="py-4 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <p className="font-medium text-sm text-[#181615] truncate">
                        {item.name[lang]}
                      </p>
                      <p className="text-xs text-[#70655B] tabular-nums">
                        {item.priceDh} DH
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        aria-label={`Retirer ${item.name[lang]}`}
                        onClick={() => onUpdateQty(item.id, -1)}
                        className="w-8 h-8 inline-flex items-center justify-center rounded border border-[#D8CEBE] text-[#181615] hover:bg-[#EFEAE1]"
                      >
                        {qty === 1 ? <Trash2 className="w-3.5 h-3.5" /> : <Minus className="w-3.5 h-3.5" />}
                      </button>
                      <span className="w-6 text-center text-sm font-semibold tabular-nums">
                        {qty}
                      </span>
                      <button
                        type="button"
                        aria-label={`Ajouter ${item.name[lang]}`}
                        onClick={() => onUpdateQty(item.id, 1)}
                        className="w-8 h-8 inline-flex items-center justify-center rounded border border-[#D8CEBE] text-[#181615] hover:bg-[#EFEAE1]"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pre-order Form */}
              <form id="order-form" onSubmit={handleConfirmOrder} className="space-y-4">
                {error && (
                  <div
                    role="alert"
                    className="p-3 rounded-md bg-[#FDECEC] border border-[#F2B8B5] text-xs font-medium text-[#8C1D18]"
                  >
                    {error}
                  </div>
                )}

                <div>
                  <label htmlFor="ord-name" className="block text-xs font-semibold text-[#4A433D] mb-1">
                    {copy.drawer.nameLabel}
                  </label>
                  <input
                    id="ord-name"
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder={copy.reservation.namePlaceholder}
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8CEBE] rounded-md focus:border-[#8C2332] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="ord-phone" className="block text-xs font-semibold text-[#4A433D] mb-1">
                      {copy.drawer.phoneLabel}
                    </label>
                    <input
                      id="ord-phone"
                      type="tel"
                      dir="ltr"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="06 XX XX XX XX"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8CEBE] rounded-md focus:border-[#8C2332] focus:outline-none tabular-nums"
                    />
                  </div>
                  <div>
                    <label htmlFor="ord-time" className="block text-xs font-semibold text-[#4A433D] mb-1">
                      {copy.drawer.timeLabel}
                    </label>
                    <input
                      id="ord-time"
                      type="time"
                      min="06:00"
                      max="22:45"
                      value={pickupTime}
                      onChange={(e) => setPickupTime(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#D8CEBE] rounded-md focus:border-[#8C2332] focus:outline-none tabular-nums"
                    />
                  </div>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {selectedItems.length > 0 && !orderRef && (
          <div className="p-6 border-t border-[#E5DEC9] bg-[#F5F1EA] space-y-4">
            <div className="flex items-center justify-between text-base font-semibold text-[#181615]">
              <span>{copy.drawer.subtotal}</span>
              <span className="text-lg text-[#8C2332] tabular-nums">{subtotal} DH</span>
            </div>
            <button
              type="submit"
              form="order-form"
              className="w-full py-3 px-5 text-sm font-semibold text-white bg-[#8C2332] hover:bg-[#731B28] rounded-md transition-colors"
            >
              {copy.drawer.confirmOrder}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
