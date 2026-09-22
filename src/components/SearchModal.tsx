import React, { useState } from 'react';
import { Search, X, Flame, ArrowLeft } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToProduct?: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigateToProduct }) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const hotSearches = [
    { text: "Nage à contre-courant Swim Jet 1 000 W", hot: true },
    { text: "Installation sans perçage", hot: true },
    { text: "Batterie étanche IP68", hot: true },
    { text: "Accessoires & Sac de transport", hot: false }
  ];

  const recommendations = [
    {
      title: "Hydro-Propulseur Swim Jet Mobile — 1 000 W",
      price: "209,00 €",
      originalPrice: "418,00 €",
      image: "https://eu.store.igarden.ai/cdn/shop/files/1200_x_1200_1_549cfcd1-014d-4f4b-a0b7-589f37292f31.png?v=1776675064&width=320"
    },
    {
      title: "Robot Nettoyeur Piscine iGarden M1-AI",
      price: "489,00 €",
      image: "https://eu.store.igarden.ai/cdn/shop/files/adbd64503fcd5abaff264259d2f44cad.png?v=1781781288&width=320"
    },
    {
      title: "Robot Piscine iGarden Série K",
      price: "480,00 €",
      image: "https://eu.store.igarden.ai/cdn/shop/files/65D8A0F6-EF9A-45A5-BCFE-B51F285C2A572_4.png?v=1782899669&width=320"
    },
    {
      title: "Robot Piscine Sans Fil iGarden Série KN",
      price: "380,00 €",
      image: "https://eu.store.igarden.ai/cdn/shop/files/lQLPJx05WhemDjHNE4jNE4iw0Jd3Jfxte7MJ6RxRqHqwAA_5000_5000_1.png?v=1779694578&width=320"
    }
  ];

  const handleSelectProduct = () => {
    onClose();
    onNavigateToProduct?.();
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-start justify-center pt-0 sm:pt-16 bg-black/60 backdrop-blur-xs transition-all duration-300">
      <div 
        className="w-full max-w-[840px] bg-white rounded-none sm:rounded-sm shadow-2xl overflow-hidden border border-gray-200 min-h-screen sm:min-h-[440px] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top search bar */}
        <div className="p-4 sm:p-5 border-b border-gray-200 flex items-center gap-3">
          <button 
            type="button"
            onClick={onClose}
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-500 hover:text-black rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label="Fermer la recherche"
          >
            <ArrowLeft className="w-5 h-5 sm:hidden" />
            <X className="w-5 h-5 hidden sm:block" />
          </button>
          
          <div className="flex-1 relative flex items-center bg-[#F5F5F7] rounded-xl px-3.5 py-2.5">
            <Search className="w-4 h-4 text-gray-400 mr-2 shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Rechercher un produit, fiche technique, guide..."
              className="w-full bg-transparent border-none outline-none text-[14px] sm:text-[15px] text-gray-900 placeholder-gray-400"
              autoFocus
            />
            {searchTerm && (
              <button 
                type="button"
                onClick={() => setSearchTerm('')}
                className="text-gray-400 hover:text-gray-600 p-1 cursor-pointer"
                aria-label="Effacer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Modal content */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 max-h-[calc(100vh-120px)] sm:max-h-[480px]">
          {/* Hot Searches */}
          <div className="mb-6">
            <h3 className="text-[13px] sm:text-[14px] font-bold text-gray-800 uppercase tracking-wider mb-2.5">
              Recherches fréquentes
            </h3>
            <div className="flex flex-wrap gap-2">
              {hotSearches.map((item, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSearchTerm(item.text)}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F5F5F7] hover:bg-[#EAEAEA] active:scale-95 text-[12px] sm:text-[13px] text-gray-700 transition-all font-medium cursor-pointer"
                >
                  {item.hot && <Flame className="w-3.5 h-3.5 text-[#FF3D00] fill-[#FF3D00]" />}
                  <span>{item.text}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div>
            <h3 className="text-[13px] sm:text-[14px] font-bold text-gray-800 uppercase tracking-wider mb-2.5">
              Produits recommandés
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {recommendations.map((prod, idx) => (
                <div
                  key={idx}
                  onClick={handleSelectProduct}
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-gray-400 hover:shadow-xs bg-white cursor-pointer transition-all active:scale-[0.99]"
                >
                  <img
                    src={prod.image}
                    alt={prod.title}
                    loading="lazy"
                    decoding="async"
                    className="w-14 h-14 object-cover rounded-lg bg-gray-50 shrink-0 border border-gray-100"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-[13px] font-semibold text-gray-900 line-clamp-1 leading-snug">
                      {prod.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[14px] font-bold text-[#0071E3]">{prod.price}</span>
                      {prod.originalPrice && (
                        <span className="text-[12px] text-gray-400 line-through">{prod.originalPrice}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
