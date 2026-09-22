import React, { useState } from 'react';
import { X, Search, Package, CheckCircle2, Truck, Clock } from 'lucide-react';

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
    setOrderId('IG-FR-84920');
    setEmail('client.france@gmail.com');
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
                Suivi de livraison en temps réel
              </h3>
              <p className="text-[12px] text-gray-500">Service Express Officiel Colissimo / Chronopost / DHL</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-gray-400 hover:text-black hover:bg-gray-200 transition-colors cursor-pointer"
            aria-label="Fermer"
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
                Numéro de commande ou numéro de suivi
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ex : IG-FR-84920 ou 00340434..."
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-xl text-[14px] text-gray-900 focus:outline-none focus:border-[#0071E3]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[13px] font-bold text-gray-700 mb-1">
                Adresse e-mail utilisée pour la commande
              </label>
              <input
                type="email"
                placeholder="Ex : jean.dupont@email.fr"
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
                <span>{loading ? "Recherche en cours..." : "Suivre mon colis"}</span>
              </button>

              <button
                type="button"
                onClick={handleUseDemo}
                className="h-12 min-h-[44px] px-4 rounded-xl border border-gray-300 hover:bg-gray-50 active:scale-[0.99] text-gray-700 text-[13px] font-semibold whitespace-nowrap cursor-pointer uppercase text-center transition-all"
              >
                Exemple de suivi
              </button>
            </div>
          </form>

          {/* Tracking Results */}
          {searched && (
            <div className="p-4 sm:p-5 bg-[#F8FAFC] border border-gray-200 rounded-xl space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-200">
              {/* Order overview badge */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-gray-200">
                <div>
                  <span className="text-[12px] text-gray-500 font-semibold">Commande :</span>
                  <p className="font-extrabold text-[15px] text-gray-900">#IG-FR-84920</p>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-[11px] font-bold px-2.5 py-1 rounded-full">
                    <Truck className="w-3.5 h-3.5" /> En cours d'acheminement
                  </span>
                  <p className="text-[11px] text-gray-500 mt-0.5">Colissimo Express France & UE</p>
                </div>
              </div>

              {/* Product recap */}
              <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200">
                <img
                  src="https://eu.store.igarden.ai/cdn/shop/files/DE-X_12.png?v=1788838449"
                  alt="Swim Jet — 1 000 W"
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 object-cover rounded-lg bg-gray-50 border border-gray-200 shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-[13px] sm:text-[14px] text-gray-900 truncate">
                    Hydro-Propulseur Swim Jet — 1 000 W (Adaptable tout bassin)
                  </p>
                  <p className="text-[12px] text-gray-500">Quantité : 1 • 209,00 € • Livraison Express Offerte</p>
                </div>
              </div>

              {/* Timeline Steps */}
              <div className="space-y-4 pt-1">
                <h4 className="font-bold text-[13px] text-gray-900 uppercase tracking-wide">
                  Historique de livraison
                </h4>

                <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-blue-300">
                  {/* Step 1 */}
                  <div className="relative">
                    <div className="absolute -left-[29px] top-0.5 w-4 h-4 rounded-full bg-[#0071E3] border-2 border-white ring-2 ring-[#0071E3]/20 flex items-center justify-center text-white">
                      <div className="w-1.5 h-1.5 bg-white rounded-full" />
                    </div>
                    <p className="font-bold text-[13px] text-gray-900">En cours de traitement sur la plateforme logistique</p>
                    <p className="text-[12px] text-gray-500">Hub logistique régional</p>
                    <span className="text-[11px] text-gray-400">Aujourd'hui, 08:42</span>
                  </div>

                  {/* Step 2 */}
                  <div className="relative">
                    <div className="absolute -left-[29px] top-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <p className="font-bold text-[13px] text-gray-900">Colis remis au transporteur express</p>
                    <p className="text-[12px] text-gray-500">Centre d'expédition iGarden Europe</p>
                    <span className="text-[11px] text-gray-400">Hier, 16:15</span>
                  </div>

                  {/* Step 3 */}
                  <div className="relative">
                    <div className="absolute -left-[29px] top-0.5 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white flex items-center justify-center text-white">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <p className="font-bold text-[13px] text-gray-900">Commande emballée et prête pour expédition</p>
                    <p className="text-[12px] text-gray-500">Boutique Officielle iGarden</p>
                    <span className="text-[11px] text-gray-400">Hier, 14:02</span>
                  </div>
                </div>
              </div>

              {/* Delivery estimation */}
              <div className="p-3 bg-blue-50/80 rounded-sm border border-blue-200 text-[12px] sm:text-[13px] text-blue-900 flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-[#0071E3] shrink-0" />
                <span>Livraison estimée : <strong>sous 24 à 48 heures</strong> en main propre à votre domicile.</span>
              </div>
            </div>
          )}

          {/* Need help */}
          <div className="pt-2 border-t border-gray-100 text-center">
            <p className="text-[12px] text-gray-500">
              Une question sur votre commande ? Notre support francophone est à votre écoute sur{' '}
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
