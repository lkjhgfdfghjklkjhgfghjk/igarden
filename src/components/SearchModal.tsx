import React, { useState } from 'react';
import { Search, X, Flame, ArrowLeft } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToProduct?: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigateToProduct }) => {
  const { currentLanguage, formatPrice, swimJetPrice, t } = useI18n();
  const isAr = currentLanguage.id === 'ar';
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const hotSearches = isAr ? [
    { text: "محرك السباحة Swim Jet 1,000 W", hot: true },
    { text: "تركيب بدون حفر أو أدوات", hot: true },
    { text: "بطارية ليثيوم مقاومة للماء IP68", hot: true },
    { text: "ملحقات وحقيبة ظهر مخصصة", hot: false }
  ] : [
    { text: "Swim Jet 1,000 W Counter-Current", hot: true },
    { text: "Tool-free clamp installation", hot: true },
    { text: "IP68 waterproof battery", hot: true },
    { text: "Accessories & Backpack", hot: false }
  ];

  const recommendations = [
    {
      title: isAr ? "جهاز السباحة ضد التيار المحمول — 1,000 واط" : "Portable Swim Jet Counter-Current — 1,000 W",
      price: formatPrice(swimJetPrice.price),
      originalPrice: formatPrice(swimJetPrice.originalPrice),
      image: "https://eu.store.igarden.ai/cdn/shop/files/1200_x_1200_1_549cfcd1-014d-4f4b-a0b7-589f37292f31.png?v=1776675064&width=320"
    },
    {
      title: isAr ? "روبوت تنظيف المسابح الذكي iGarden M1-AI" : "iGarden M1-AI Intelligent Pool Cleaner Robot",
      price: formatPrice(489),
      image: "https://eu.store.igarden.ai/cdn/shop/files/adbd64503fcd5abaff264259d2f44cad.png?v=1781781288&width=320"
    },
    {
      title: isAr ? "روبوت تنظيف المسابح فئة iGarden K Series" : "iGarden K Series Pool Cleaning Robot",
      price: formatPrice(480),
      image: "https://eu.store.igarden.ai/cdn/shop/files/65D8A0F6-EF9A-45A5-BCFE-B51F285C2A572_4.png?v=1782899669&width=320"
    },
    {
      title: isAr ? "روبوت تنظيف المسابح اللاسلكي KN Series" : "iGarden KN Series Cordless Pool Cleaner",
      price: formatPrice(380),
      image: "https://eu.store.igarden.ai/cdn/shop/files/lQLPJx05WhemDjHNE4jNE4iw0Jd3Jfxte7MJ6RxRqHqwAA_5000_5000_1.png?v=1779694578&width=320"
    }
  ];

  const handleSelectProduct = () => {
    onClose();
    onNavigateToProduct?.();
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-start justify-center pt-0 sm:pt-16 bg-black/60 backdrop-blur-xs transition-all duration-300" dir={currentLanguage.direction}>
      <div 
        className="w-full max-w-[840px] bg-white rounded-none sm:rounded-xl shadow-2xl overflow-hidden border border-gray-200 min-h-screen sm:min-h-[440px] flex flex-col animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top search bar */}
        <div className="p-4 sm:p-5 border-b border-gray-200 flex items-center gap-3">
          <button 
            onClick={onClose}
            className="p-1.5 text-gray-500 hover:text-black rounded-lg hover:bg-gray-100 transition-colors cursor-pointer bg-transparent border-none"
            aria-label="Close"
          >
            <ArrowLeft className={`w-5 h-5 sm:hidden ${isAr ? 'rotate-180' : ''}`} />
            <X className="w-5 h-5 hidden sm:block" />
          </button>
          
          <div className="flex-1 relative flex items-center bg-[#F5F5F7] rounded-lg px-3.5 py-2.5">
            <Search className="w-4 h-4 text-gray-400 mr-2 rtl:mr-0 rtl:ml-2 shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t.header.searchPlaceholder}
              className="w-full bg-transparent border-none outline-none text-[14px] sm:text-[15px] text-gray-900 placeholder-gray-400"
              autoFocus
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="text-gray-400 hover:text-gray-600 p-1 cursor-pointer bg-transparent border-none"
                aria-label="Clear"
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
              {isAr ? 'عمليات البحث الشائعة' : 'Popular Searches'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {hotSearches.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setSearchTerm(item.text)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5F5F7] hover:bg-[#EAEAEA] text-[12px] sm:text-[13px] text-gray-700 transition-colors font-medium cursor-pointer border-none"
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
              {isAr ? 'المنتجات المقترحة' : 'Recommended Products'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {recommendations.map((prod, idx) => (
                <div
                  key={idx}
                  onClick={handleSelectProduct}
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-blue-400 hover:shadow-xs bg-white cursor-pointer transition-all"
                >
                  <img
                    src={prod.image}
                    alt={prod.title}
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
