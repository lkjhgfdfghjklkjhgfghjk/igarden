import React, { useState } from 'react';
import { X, Search, Package, CheckCircle2, Truck, Clock, MapPin, AlertCircle, ArrowRight } from 'lucide-react';

interface OrderTrackingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderTrackingModal: React.FC<OrderTrackingModalProps> = ({
  isOpen,
  onClose
}) => {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId && !email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSearched(true);
    }, 600);
  };

  const handleUseDemo = () => {
    setOrderId('IG-DE-84920');
    setEmail('kunde.deutschland@gmail.com');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSearched(true);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full max-w-[560px] max-h-[90vh] bg-white rounded-sm shadow-2xl overflow-y-auto border border-gray-200 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-gray-200 flex items-center justify-between bg-[#F8FAFC]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-sm bg-[#0071E3]/10 text-[#0071E3] flex items-center justify-center">
              <Package className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-[16px] sm:text-[17px] text-gray-900 leading-tight">
                Sendungsverfolgung in Echtzeit
              </h3>
              <p className="text-[12px] text-gray-500">Offizieller DHL / DPD Express-Service</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-gray-400 hover:text-black hover:bg-gray-200 transition-colors cursor-pointer"
            aria-label="Schließen"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Form */}
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label className="block text-[13px] font-bold text-gray-700 mb-1">
                Bestellnummer oder Sendungsnummer
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Z. B.: IG-DE-84920 oder 00340434..."
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-[14px] text-gray-900 focus:outline-none focus:border-[#0071E3]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-bold text-gray-700 mb-1">
                E-Mail-Adresse der Bestellung
              </label>
              <input
                type="email"
                placeholder="Z. B.: max.mustermann@email.de"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-[14px] text-gray-900 focus:outline-none focus:border-[#0071E3]"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 h-12 min-h-[44px] rounded-xl bg-[#0071E3] hover:bg-blue-700 active:scale-[0.99] text-white font-bold text-[13px] sm:text-[14px] tracking-wide transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer uppercase disabled:opacity-50 text-center"
              >
                <Search className="w-4 h-4" />
                <span>{loading ? "Wird gesucht..." : "Paketstatus abrufen"}</span>
              </button>

              <button
                type="button"
                onClick={handleUseDemo}
                className="h-12 min-h-[44px] px-4 rounded-xl border border-gray-300 hover:bg-gray-50 active:scale-[0.99] text-gray-700 text-[13px] font-semibold whitespace-nowrap cursor-pointer uppercase text-center transition-all"
              >
                Muster-Sendung
              </button>
            </div>
          </form>

          {/* Tracking Results */}
          {searched && (
            <div className="p-4 sm:p-5 bg-[#F8FAFC] border border-gray-200 rounded-xl space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
              {/* Order overview badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-gray-200">
                <div>
                  <span className="text-[12px] text-gray-500 font-semibold">Bestellung:</span>
                  <p className="font-extrabold text-[15px] text-gray-900">#IG-DE-84920</p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-[11px] font-bold px-2.5 py-1 rounded-full">
                    <Truck className="w-3.5 h-3.5" /> Auf dem Versandweg
                  </span>
                  <p className="text-[11px] text-gray-500 mt-0.5">DHL Paket Deutschland</p>
                </div>
              </div>

              {/* Product recap */}
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200">
                <img
                  src="https://eu.store.igarden.ai/cdn/shop/files/DE-X_12.png?v=1788838449"
                  alt="Swim Jet — 1.000 W"
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 object-cover rounded-lg bg-gray-50 border border-gray-200 shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-[13px] sm:text-[14px] text-gray-900 truncate">
                    Swim Jet — 1.000 W (Passend für jeden Pool)
                  </p>
                  <p className="text-[12px] text-gray-500">Menge: 1 • 209,00 € • Kostenloser DHL-Versand</p>
                </div>
              </div>

              {/* Timeline Steps */}
              <div className="space-y-4 pt-1">
                <h4 className="font-bold text-[13px] text-gray-900 uppercase tracking-wide">
                  Sendungsverlauf
                </h4>

                <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-300">
                  {/* Step 1 */}
                  <div className="relative">
                    <div className="absolute -left-[29px] top-0.5 w-4 h-4 rounded-full bg-[#0071E3] border-2 border-white ring-2 ring-[#0071E3]/20 flex items-center justify-center text-white">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                    <p className="font-bold text-[13px] text-gray-900">In der Zustellbasis bearbeitet</p>
                    <p className="text-[12px] text-gray-500">DHL Paketzentrum – Region Frankfurt</p>
                    <span className="text-[11px] text-gray-400">Heute, 08:42 Uhr</span>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    <div className="absolute -left-[29px] top-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <p className="font-bold text-[13px] text-gray-900">Paket an Versanddienstleister übergeben</p>
                    <p className="text-[12px] text-gray-500">iGarden Versandzentrum</p>
                    <span className="text-[11px] text-gray-400">Gestern, 16:15 Uhr</span>
                  </div>

                  {/* Step 3 */}
                  <div className="relative">
                    <div className="absolute -left-[29px] top-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <p className="font-bold text-[13px] text-gray-900">Bestellung verpackt & versandbereit</p>
                    <p className="text-[12px] text-gray-500">Offizieller iGarden Store</p>
                    <span className="text-[11px] text-gray-400">Gestern, 14:02 Uhr</span>
                  </div>
                </div>
              </div>

              {/* Delivery estimation */}
              <div className="p-3 bg-blue-50/80 rounded-sm border border-blue-200 text-[12px] sm:text-[13px] text-blue-900 flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#0071E3] shrink-0" />
                <span>Voraussichtliche Zustellung: <strong>innerhalb von 24 bis 48 Std.</strong> direkt an Ihre Wunschadresse.</span>
              </div>
            </div>
          )}

          {/* Need help */}
          <div className="pt-2 border-t border-gray-100 text-center">
            <p className="text-[12px] text-gray-500">
              Fragen zu Ihrer Lieferung? Unser deutschsprachiges Support-Team hilft Ihnen unter{' '}
              <a href="mailto:support@igarden.ai" className="font-bold text-[#0071E3] hover:underline">
                support@igarden.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
