import { FormEvent, useState } from 'react';
import { Calendar, CheckCircle2, Clock, ExternalLink, Instagram, MapPin, Phone, Users } from 'lucide-react';
import { CAFE_INFO, Language, UI_COPY } from '../data/cafeData';

interface ReservationContactSectionProps {
  lang: Language;
}

interface ReservationRecord {
  reference: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  zone: string;
}

const TIME_SLOTS = [
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:30',
  '14:00',
  '16:30',
  '18:00',
  '19:30',
  '21:00',
];

export function ReservationContactSection({ lang }: ReservationContactSectionProps) {
  const copy = UI_COPY[lang];

  const todayIso = new Date().toISOString().split('T')[0];

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState(todayIso);
  const [time, setTime] = useState('09:00');
  const [guests, setGuests] = useState('2');
  const [zone, setZone] = useState(copy.reservation.zones[0]);
  const [error, setError] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState<ReservationRecord | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !phone.trim() || !date) {
      setError(copy.reservation.errorRequired);
      return;
    }

    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 9) {
      setError(copy.reservation.errorPhone);
      return;
    }

    const refCode = `SP-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmed({
      reference: refCode,
      name: name.trim(),
      phone: phone.trim(),
      date,
      time,
      guests,
      zone,
    });
  };

  return (
    <section id="reservation" className="py-16 sm:py-20 border-t border-[#E5DEC9] bg-[#FAF8F5]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          <p className="text-xs sm:text-sm font-semibold tracking-wide text-[#8C2332] mb-2">
            {copy.reservation.eyebrow}
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-[#181615] text-balance mb-3">
            {copy.reservation.title}
          </h2>
          <p className="text-base text-[#4A433D] leading-relaxed">{copy.reservation.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Reservation Form or Confirmation Receipt */}
          <div className="lg:col-span-7 bg-[#F5F1EA] border border-[#E5DEC9] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            {confirmed ? (
              <div className="space-y-6 my-auto">
                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-7 h-7 text-[#1F5E3B] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-[#1F5E3B] tabular-nums mb-1">
                      Référence #{confirmed.reference}
                    </p>
                    <h3 className="font-serif text-2xl font-semibold text-[#181615]">
                      {copy.reservation.confirmedTitle}
                    </h3>
                  </div>
                </div>

                <div className="bg-[#FAF8F5] border border-[#E5DEC9] rounded-lg p-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="block text-xs text-[#70655B]">{copy.reservation.nameLabel}</span>
                    <span className="font-semibold text-[#181615]">{confirmed.name}</span>
                  </div>
                  <div>
                    <span className="block text-xs text-[#70655B]">{copy.reservation.phoneLabel}</span>
                    <span className="font-semibold text-[#181615] tabular-nums" dir="ltr">
                      {confirmed.phone}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs text-[#70655B]">{copy.reservation.dateLabel}</span>
                    <span className="font-semibold text-[#181615] tabular-nums">
                      {confirmed.date} · {confirmed.time}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs text-[#70655B]">{copy.reservation.zoneLabel}</span>
                    <span className="font-semibold text-[#181615]">
                      {confirmed.guests} pers. · {confirmed.zone}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-[#4A433D] leading-relaxed">
                  {copy.reservation.confirmedBody}
                </p>

                <button
                  type="button"
                  onClick={() => setConfirmed(null)}
                  className="px-5 py-2.5 text-sm font-semibold text-[#181615] bg-[#FAF8F5] border border-[#D8CEBE] hover:border-[#8C2332] rounded-md transition-colors"
                >
                  {copy.reservation.newReservation}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <h3 className="font-serif text-2xl font-semibold text-[#181615]">
                  {copy.reservation.formTitle}
                </h3>

                {error && (
                  <div
                    role="alert"
                    className="p-3.5 rounded-md bg-[#FDECEC] border border-[#F2B8B5] text-sm font-medium text-[#8C1D18]"
                  >
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="res-name"
                      className="block text-xs font-semibold text-[#4A433D] mb-1.5"
                    >
                      {copy.reservation.nameLabel}
                    </label>
                    <input
                      id="res-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={copy.reservation.namePlaceholder}
                      required
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] text-[#181615] border border-[#D8CEBE] rounded-md focus:border-[#8C2332] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="res-phone"
                      className="block text-xs font-semibold text-[#4A433D] mb-1.5"
                    >
                      {copy.reservation.phoneLabel}
                    </label>
                    <input
                      id="res-phone"
                      type="tel"
                      dir="ltr"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={copy.reservation.phonePlaceholder}
                      required
                      className="w-full px-3.5 py-2.5 text-sm bg-[#FAF8F5] text-[#181615] border border-[#D8CEBE] rounded-md focus:border-[#8C2332] focus:outline-none tabular-nums"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="res-date"
                      className="block text-xs font-semibold text-[#4A433D] mb-1.5"
                    >
                      {copy.reservation.dateLabel}
                    </label>
                    <div className="relative">
                      <Calendar
                        className="w-4 h-4 text-[#70655B] absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none"
                        aria-hidden="true"
                      />
                      <input
                        id="res-date"
                        type="date"
                        min={todayIso}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                        className="w-full ps-9 pe-3 py-2.5 text-sm bg-[#FAF8F5] text-[#181615] border border-[#D8CEBE] rounded-md focus:border-[#8C2332] focus:outline-none tabular-nums"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="res-time"
                      className="block text-xs font-semibold text-[#4A433D] mb-1.5"
                    >
                      {copy.reservation.timeLabel}
                    </label>
                    <div className="relative">
                      <Clock
                        className="w-4 h-4 text-[#70655B] absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none"
                        aria-hidden="true"
                      />
                      <select
                        id="res-time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        className="w-full ps-9 pe-3 py-2.5 text-sm bg-[#FAF8F5] text-[#181615] border border-[#D8CEBE] rounded-md focus:border-[#8C2332] focus:outline-none tabular-nums"
                      >
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="res-guests"
                      className="block text-xs font-semibold text-[#4A433D] mb-1.5"
                    >
                      {copy.reservation.guestsLabel}
                    </label>
                    <div className="relative">
                      <Users
                        className="w-4 h-4 text-[#70655B] absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none"
                        aria-hidden="true"
                      />
                      <select
                        id="res-guests"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full ps-9 pe-3 py-2.5 text-sm bg-[#FAF8F5] text-[#181615] border border-[#D8CEBE] rounded-md focus:border-[#8C2332] focus:outline-none tabular-nums"
                      >
                        {['1', '2', '3', '4', '5', '6', '8', '10+'].map((n) => (
                          <option key={n} value={n}>
                            {n}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-semibold text-[#4A433D] mb-2">
                    {copy.reservation.zoneLabel}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {copy.reservation.zones.map((z) => {
                      const active = zone === z;
                      return (
                        <button
                          key={z}
                          type="button"
                          onClick={() => setZone(z)}
                          className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md border transition-colors whitespace-nowrap shrink-0 ${
                            active
                              ? 'bg-[#181615] text-white border-[#181615]'
                              : 'bg-[#FAF8F5] text-[#4A433D] border-[#D8CEBE] hover:border-[#8C2332]'
                          }`}
                        >
                          {z}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-[#8C2332] hover:bg-[#731B28] rounded-md transition-colors duration-150"
                  >
                    {copy.reservation.submitButton}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right: Location & Direct Contact Card */}
          <div className="lg:col-span-5 bg-[#181615] text-[#FAF8F5] rounded-xl p-6 sm:p-8 flex flex-col justify-between gap-8">
            <div>
              <h3 className="font-serif text-2xl font-semibold text-white mb-6">
                {copy.reservation.visitTitle}
              </h3>

              <div className="space-y-5 text-sm">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[#D8A45D] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-[#B8AFA6] mb-0.5">{copy.strip.addressLabel}</p>
                    <p className="font-medium text-white leading-relaxed">
                      {lang === 'ar' ? CAFE_INFO.addressAr : CAFE_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Clock className="w-5 h-5 text-[#D8A45D] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-[#B8AFA6] mb-0.5">{copy.strip.hoursLabel}</p>
                    <p className="font-medium text-white tabular-nums">
                      {CAFE_INFO.daysDisplay[lang]} · {CAFE_INFO.hoursDisplay}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[#D8A45D] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-[#B8AFA6] mb-0.5">{copy.strip.phoneLabel}</p>
                    <a
                      href={CAFE_INFO.phoneHref}
                      dir="ltr"
                      className="font-semibold text-white hover:text-[#D8A45D] transition-colors tabular-nums"
                    >
                      {CAFE_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/15">
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between px-4 py-3 text-sm font-semibold text-[#181615] bg-[#FAF8F5] hover:bg-[#EFEAE1] rounded-md transition-colors"
              >
                <span>{copy.reservation.openMaps}</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={CAFE_INFO.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-white border border-white/25 hover:border-white rounded-md transition-colors"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>{copy.reservation.callDirectly}</span>
                </a>

                <a
                  href={CAFE_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-medium text-white border border-white/25 hover:border-white rounded-md transition-colors"
                >
                  <Instagram className="w-4 h-4" aria-hidden="true" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
