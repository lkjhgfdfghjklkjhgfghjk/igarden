import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, Truck, RotateCcw, ShoppingBag, Lock } from 'lucide-react';
import { CartItem } from '../types';
import { CHECKOUT_URL } from '../data';
import { redirectToCheckout } from '../utils/checkout';
import { trackTikTokInitiateCheckout } from '../utils/tiktokPixel';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onAddAccessory: (accId: string, variantId?: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem
}) => {
  if (!isOpen) return null;

  const totalOriginalPrice = items.reduce(
    (sum, item) => sum + (item.originalPrice || item.price) * item.quantity,
    0
  );
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalSavings = totalOriginalPrice - totalPrice;

  const itemWithCheckout = items.find((item) => item.checkoutUrl);
  const targetCheckoutUrl = itemWithCheckout?.checkoutUrl || CHECKOUT_URL;

  const handleProceedToCheckout = () => {
    const primaryItem = items[0];
    const totalQty = items.reduce((sum, item) => sum + item.quantity, 0);
    trackTikTokInitiateCheckout({
      id: primaryItem ? primaryItem.id : 'swim-jet-1000w',
      name: primaryItem ? primaryItem.title : 'Jet de natation portable iGarden Swim Jet — 1 000 W',
      price: totalPrice,
      quantity: totalQty || 1,
      currency: 'EUR',
      contents: items.map((item) => ({
        content_id: item.id,
        content_name: item.title,
        content_type: 'product',
        quantity: item.quantity,
        price: item.price
      }))
    });
    redirectToCheckout(targetCheckoutUrl);
  };

  return (
    <div className="fixed inset-0 z-[999999] flex justify-end bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="w-full max-w-[500px] h-full bg-white shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-gray-200 flex items-center justify-between bg-[#F8FAFC]">
          <div className="flex items-center gap-2">
            <h2 className="text-[18px] sm:text-[20px] font-bold text-gray-900">Mon Panier</h2>
            <span className="w-5 h-5 rounded-sm bg-[#0071E3] text-white text-[11px] font-bold flex items-center justify-center">
              {items.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-gray-500 hover:text-black hover:bg-gray-200 transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Contents */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-14 h-14 bg-blue-50 text-[#0071E3] rounded-xl flex items-center justify-center mx-auto">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <p className="text-[16px] sm:text-[17px] font-bold text-gray-900">Votre panier est actuellement vide</p>
              <p className="text-[13px] text-gray-500 max-w-xs mx-auto">
                Profitez dès maintenant du jet de natation portable Swim Jet (1 000 W) à 229,00 € avec la livraison offerte.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 min-h-[44px] bg-[#0071E3] text-white rounded-xl text-[13px] sm:text-[14px] font-bold hover:bg-blue-700 active:scale-[0.99] transition-all shadow-xs uppercase cursor-pointer"
              >
                Découvrir l'offre
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 p-3 rounded-xl border border-gray-200 bg-[#FAFAFA] relative group"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="w-18 h-18 object-cover rounded-lg bg-white border border-gray-200 shrink-0"
                  />
                  <div className="flex-1 min-w-0 pr-6">
                    <h3 className="text-[13px] sm:text-[14px] font-bold text-gray-900 leading-snug line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-[12px] text-gray-500 mt-0.5">{item.variantTitle}</p>

                    <div className="flex items-center justify-between mt-2.5">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-[15px] sm:text-[16px] font-extrabold text-gray-900">
                          {(item.price * item.quantity).toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €
                        </span>
                        {item.originalPrice && item.originalPrice > item.price && (
                          <span className="text-[11px] sm:text-[12px] text-gray-400 line-through">
                            {(item.originalPrice * item.quantity).toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €
                          </span>
                        )}
                      </div>

                      {/* Quantity Controller */}
                      <div className="flex items-center border border-gray-300 rounded-lg bg-white overflow-hidden">
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 text-gray-700 cursor-pointer"
                          aria-label="Diminuer la quantité"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-[12px] font-bold text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="w-7 h-7 flex items-center justify-center hover:bg-gray-100 text-gray-700 cursor-pointer"
                          aria-label="Augmenter la quantité"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => onRemoveItem(item.id)}
                      className="text-gray-400 hover:text-red-500 absolute top-3 right-3 p-1.5 rounded-md cursor-pointer"
                      title="Supprimer du panier"
                      aria-label="Supprimer du panier"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Checkout */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 bg-[#F8FAFC] border-t border-gray-200 shadow-xl space-y-3.5">
            <div className="flex items-center justify-between text-[11px] sm:text-[12px] text-gray-600 pb-2 border-b border-gray-200">
              <span className="flex items-center gap-1"><Truck className="w-3.5 h-3.5 text-[#0071E3]" /> Livraison Colissimo Offerte</span>
              <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-[#0071E3]" /> Garantie 2 ans</span>
            </div>

            <div className="flex items-baseline justify-between">
              <span className="text-[14px] sm:text-[15px] font-semibold text-gray-700">Total TTC</span>
              <div className="text-right">
                <span className="text-[22px] sm:text-[24px] font-extrabold text-gray-950">
                  {totalPrice.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} €
                </span>
                {totalSavings > 0 && (
                  <p className="text-[11px] sm:text-[12px] text-emerald-600 font-bold">
                    Vous économisez {totalSavings.toLocaleString('fr-FR', { minimumFractionDigits: 2 })} € (-50%)
                  </p>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleProceedToCheckout();
              }}
              className="w-full h-13 sm:h-14 rounded-xl bg-[#0071E3] hover:bg-[#0062c4] active:bg-[#004f9f] active:scale-[0.99] text-white font-extrabold text-[14px] sm:text-[15px] tracking-wide shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer uppercase text-center"
            >
              <Lock className="w-4 h-4 shrink-0" />
              <span>COMMANDER MAINTENANT</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </button>

            <p className="text-center text-[11px] text-gray-500">
              Paiement 100% sécurisé SSL • Redirection immédiate vers le checkout officiel
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
