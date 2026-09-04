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
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-sm text-gray-400 hover:text-black hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-[18px] sm:text-[20px] font-bold text-center text-gray-900 pb-4 mb-5 border-b border-gray-200">
          Choisissez votre pays ou votre région
        </h2>

        <div className="space-y-5">
          {/* North America */}
          <div>
            <h3 className="text-[14px] font-bold text-gray-800 text-center mb-2.5 uppercase tracking-wide">
              North America
            </h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => { onSelectCountry("US"); onClose(); }}
                className="flex items-center justify-center gap-2.5 p-3 bg-[#F7F8F9] hover:bg-[#EFEFEF] rounded-sm transition-colors text-center w-full cursor-pointer"
              >
                <img
                  className="w-6 h-auto object-contain"
                  src="https://cdn.shopify.com/s/files/1/0811/0728/8282/files/us-flag.png?v=1774427824"
                  alt="United States"
                />
                <span className="font-semibold text-[13px] text-gray-900">United States</span>
                <span className="text-[13px] text-gray-500 font-normal">( English / $ USD )</span>
              </button>
            </div>
          </div>

          {/* Asia Pacific */}
          <div>
            <h3 className="text-[14px] font-bold text-gray-800 text-center mb-2.5 uppercase tracking-wide">
              Asia Pacific
            </h3>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => { onSelectCountry("AU"); onClose(); }}
                className="flex items-center justify-center gap-2.5 p-3 bg-[#F7F8F9] hover:bg-[#EFEFEF] rounded-sm transition-colors text-center w-full cursor-pointer"
              >
                <img
                  className="w-6 h-auto object-contain"
                  src="https://cdn.shopify.com/s/files/1/0811/0728/8282/files/au-flag.png?v=1774427824"
                  alt="Australia"
                />
                <span className="font-semibold text-[13px] text-gray-900">Australia</span>
                <span className="text-[13px] text-gray-500 font-normal">( English / $ AUD )</span>
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
                onClick={() => { onSelectCountry("EU_EN"); onClose(); }}
                className={`flex items-center justify-center gap-2.5 p-3 rounded-sm transition-colors text-center w-full cursor-pointer ${currentCountry === 'EU_EN' ? 'bg-blue-50 border border-blue-200 font-semibold' : 'bg-[#F7F8F9] hover:bg-[#EFEFEF]'}`}
              >
                <img
                  className="w-6 h-auto object-contain"
                  src="https://cdn.shopify.com/s/files/1/0811/0728/8282/files/eu_ade130c2-a62d-4383-b1ea-f828162296b1.png?v=1775555541"
                  alt="Europe"
                />
                <span className="font-semibold text-[13px] text-gray-900">Europe</span>
                <span className="text-[13px] text-gray-500 font-normal">( English / € EUR )</span>
              </button>

              <button
                onClick={() => { onSelectCountry("DE"); onClose(); }}
                className={`flex items-center justify-center gap-2.5 p-3 rounded-sm transition-colors text-center w-full cursor-pointer ${currentCountry === 'DE' ? 'bg-blue-50 border border-blue-200 font-semibold' : 'bg-[#F7F8F9] hover:bg-[#EFEFEF]'}`}
              >
                <img
                  className="w-6 h-auto object-contain"
                  src="https://cdn.shopify.com/s/files/1/0811/0728/8282/files/Deutschland.png?v=1777531737"
                  alt="Deutschland"
                />
                <span className="font-semibold text-[13px] text-gray-900">Deutschland</span>
                <span className="text-[13px] text-gray-500 font-normal">( Deutsch / € EUR )</span>
              </button>

              <button
                onClick={() => { onSelectCountry("FR"); onClose(); }}
                className={`flex items-center justify-center gap-2.5 p-3 rounded-sm transition-colors text-center w-full cursor-pointer ${currentCountry === 'FR' ? 'bg-blue-50 border border-blue-400 font-bold' : 'bg-[#F7F8F9] hover:bg-[#EFEFEF]'}`}
              >
                <img
                  className="w-6 h-auto object-contain"
                  src="https://cdn.shopify.com/s/files/1/0811/0728/8282/files/France.png?v=1777531419"
                  alt="France"
                />
                <span className="font-semibold text-[13px] text-gray-900">France</span>
                <span className="text-[13px] text-gray-500 font-normal">( Français / € EUR )</span>
              </button>

              <button
                onClick={() => { onSelectCountry("ES"); onClose(); }}
                className={`flex items-center justify-center gap-2.5 p-3 rounded-sm transition-colors text-center w-full cursor-pointer ${currentCountry === 'ES' ? 'bg-blue-50 border border-blue-200 font-semibold' : 'bg-[#F7F8F9] hover:bg-[#EFEFEF]'}`}
              >
                <img
                  className="w-6 h-auto object-contain"
                  src="https://cdn.shopify.com/s/files/1/0811/0728/8282/files/Espana.png?v=1777531419"
                  alt="España"
                />
                <span className="font-semibold text-[13px] text-gray-900">Español</span>
                <span className="text-[13px] text-gray-500 font-normal">( Español / € EUR )</span>
              </button>

              <button
                onClick={() => { onSelectCountry("IT"); onClose(); }}
                className={`flex items-center justify-center gap-2.5 p-3 rounded-sm transition-colors text-center w-full cursor-pointer ${currentCountry === 'IT' ? 'bg-blue-50 border border-blue-200 font-semibold' : 'bg-[#F7F8F9] hover:bg-[#EFEFEF]'}`}
              >
                <img
                  className="w-6 h-auto object-contain"
                  src="https://cdn.shopify.com/s/files/1/0811/0728/8282/files/Italy.png?v=1777531419"
                  alt="Italy"
                />
                <span className="font-semibold text-[13px] text-gray-900">Italiano</span>
                <span className="text-[13px] text-gray-500 font-normal">( Italiano / € EUR )</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
