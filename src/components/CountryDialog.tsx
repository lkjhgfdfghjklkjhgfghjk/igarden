import React from 'react';
import { X } from 'lucide-react';

interface CountryDialogProps {
  isOpen: boolean;
  onClose: () => void;
  currentCountry: string;
  onSelectCountry: (country: string) => void;
}

export const CountryDialog: React.FC<CountryDialogProps> = ({
  isOpen,
  onClose,
  currentCountry,
  onSelectCountry
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[550px] max-h-[85vh] bg-white rounded-sm shadow-2xl p-6 sm:p-8 relative overflow-y-auto border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-gray-400 hover:text-black hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-[18px] sm:text-[20px] font-bold text-center text-gray-900 pb-4 mb-5 border-b border-gray-200">
          Sélectionnez votre pays ou région
        </h2>

        <div className="space-y-5">
          {/* North America */}
          <div>
            <h3 className="text-[14px] font-bold text-gray-800 text-center mb-2.5 uppercase tracking-wide">
              Amérique du Nord
            </h3>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => { onSelectCountry("US"); onClose(); }}
                className="flex items-center justify-center gap-2.5 p-3 min-h-[44px] bg-[#F7F8F9] hover:bg-[#EFEFEF] rounded-xl active:scale-[0.99] transition-all text-center w-full cursor-pointer"
              >
                <img
                  className="w-6 h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  src="https://cdn.shopify.com/s/files/1/0811/0728/8282/files/us-flag.png?v=1774427824"
                  alt="États-Unis"
                />
                <span className="font-semibold text-[13px] text-gray-900">États-Unis</span>
                <span className="text-[13px] text-gray-500 font-normal">( Anglais / $ USD )</span>
              </button>
            </div>
          </div>

          {/* Asia Pacific */}
          <div>
            <h3 className="text-[14px] font-bold text-gray-800 text-center mb-2.5 uppercase tracking-wide">
              Asie-Pacifique
            </h3>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => { onSelectCountry("AU"); onClose(); }}
                className="flex items-center justify-center gap-2.5 p-3 min-h-[44px] bg-[#F7F8F9] hover:bg-[#EFEFEF] rounded-xl active:scale-[0.99] transition-all text-center w-full cursor-pointer"
              >
                <img
                  className="w-6 h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  src="https://cdn.shopify.com/s/files/1/0811/0728/8282/files/au-flag.png?v=1774427824"
                  alt="Australie"
                />
                <span className="font-semibold text-[13px] text-gray-900">Australie</span>
                <span className="text-[13px] text-gray-500 font-normal">( Anglais / $ AUD )</span>
              </button>
            </div>
          </div>

          {/* Europe */}
          <div>
            <h3 className="text-[14px] font-bold text-gray-800 text-center mb-2.5 uppercase tracking-wide">
              Europe
            </h3>
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => { onSelectCountry("FR"); onClose(); }}
                className={`flex items-center justify-center gap-2.5 p-3 min-h-[44px] rounded-xl active:scale-[0.99] transition-all text-center w-full cursor-pointer ${currentCountry === 'FR' ? 'bg-blue-50 border border-blue-400 font-bold' : 'bg-[#F7F8F9] hover:bg-[#EFEFEF]'}`}
              >
                <img
                  className="w-6 h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  src="https://cdn.shopify.com/s/files/1/0811/0728/8282/files/France.png?v=1777531419"
                  alt="France"
                />
                <span className="font-semibold text-[13px] text-gray-900">France</span>
                <span className="text-[13px] text-gray-500 font-normal">( Français / € EUR )</span>
              </button>

              <button
                type="button"
                onClick={() => { onSelectCountry("DE"); onClose(); }}
                className={`flex items-center justify-center gap-2.5 p-3 min-h-[44px] rounded-xl active:scale-[0.99] transition-all text-center w-full cursor-pointer ${currentCountry === 'DE' ? 'bg-blue-50 border border-blue-200 font-semibold' : 'bg-[#F7F8F9] hover:bg-[#EFEFEF]'}`}
              >
                <img
                  className="w-6 h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  src="https://cdn.shopify.com/s/files/1/0811/0728/8282/files/Deutschland.png?v=1777531737"
                  alt="Allemagne"
                />
                <span className="font-semibold text-[13px] text-gray-900">Allemagne</span>
                <span className="text-[13px] text-gray-500 font-normal">( Allemand / € EUR )</span>
              </button>

              <button
                type="button"
                onClick={() => { onSelectCountry("EU_EN"); onClose(); }}
                className={`flex items-center justify-center gap-2.5 p-3 min-h-[44px] rounded-xl active:scale-[0.99] transition-all text-center w-full cursor-pointer ${currentCountry === 'EU_EN' ? 'bg-blue-50 border border-blue-200 font-semibold' : 'bg-[#F7F8F9] hover:bg-[#EFEFEF]'}`}
              >
                <img
                  className="w-6 h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  src="https://cdn.shopify.com/s/files/1/0811/0728/8282/files/eu_ade130c2-a62d-4383-b1ea-f828162296b1.png?v=1775555541"
                  alt="Europe"
                />
                <span className="font-semibold text-[13px] text-gray-900">Europe (International)</span>
                <span className="text-[13px] text-gray-500 font-normal">( Anglais / € EUR )</span>
              </button>

              <button
                type="button"
                onClick={() => { onSelectCountry("ES"); onClose(); }}
                className={`flex items-center justify-center gap-2.5 p-3 min-h-[44px] rounded-xl active:scale-[0.99] transition-all text-center w-full cursor-pointer ${currentCountry === 'ES' ? 'bg-blue-50 border border-blue-200 font-semibold' : 'bg-[#F7F8F9] hover:bg-[#EFEFEF]'}`}
              >
                <img
                  className="w-6 h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  src="https://cdn.shopify.com/s/files/1/0811/0728/8282/files/Espana.png?v=1777531419"
                  alt="Espagne"
                />
                <span className="font-semibold text-[13px] text-gray-900">Espagne</span>
                <span className="text-[13px] text-gray-500 font-normal">( Espagnol / € EUR )</span>
              </button>

              <button
                type="button"
                onClick={() => { onSelectCountry("IT"); onClose(); }}
                className={`flex items-center justify-center gap-2.5 p-3 min-h-[44px] rounded-xl active:scale-[0.99] transition-all text-center w-full cursor-pointer ${currentCountry === 'IT' ? 'bg-blue-50 border border-blue-200 font-semibold' : 'bg-[#F7F8F9] hover:bg-[#EFEFEF]'}`}
              >
                <img
                  className="w-6 h-auto object-contain"
                  loading="lazy"
                  decoding="async"
                  src="https://cdn.shopify.com/s/files/1/0811/0728/8282/files/Italy.png?v=1777531419"
                  alt="Italie"
                />
                <span className="font-semibold text-[13px] text-gray-900">Italie</span>
                <span className="text-[13px] text-gray-500 font-normal">( Italien / € EUR )</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
