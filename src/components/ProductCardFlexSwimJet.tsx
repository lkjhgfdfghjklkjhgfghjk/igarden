import React from 'react';

interface ProductCardFlexSwimJetProps {
  onNavigateToProduct?: () => void;
}

export const ProductCardFlexSwimJet: React.FC<ProductCardFlexSwimJetProps> = ({ onNavigateToProduct }) => {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
        <h2 className="text-[24px] sm:text-[32px] md:text-[36px] font-extrabold text-gray-900 mb-6 md:mb-8 leading-tight">
          Tragbare Gegenstromanlage
        </h2>

        {/* Full-width clickable banner */}
        <div
          onClick={onNavigateToProduct}
          className="relative w-full rounded-2xl overflow-hidden cursor-pointer shadow-sm group bg-[#f0f0f0] min-h-[290px] sm:min-h-[380px] md:min-h-[440px] flex items-center"
        >
          {/* PC Image */}
          <img
            src="https://eu.store.igarden.ai/cdn/shop/files/swim-jet-x-banner-home-with-awards-pc.png?v=1781753367&width=2000"
            alt="Tragbare Gegenstromanlage iGarden Swim Jet — 1.000 W"
            className="hidden sm:block absolute inset-0 w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-[1.01]"
            loading="lazy"
            decoding="async"
          />
          {/* Mobile Image */}
          <img
            src="https://eu.store.igarden.ai/cdn/shop/files/swim-jet-x-banner-home-with-awards-m.png?v=1781753366&width=800"
            alt="Tragbare Gegenstromanlage iGarden Swim Jet — 1.000 W"
            className="block sm:hidden absolute inset-0 w-full h-full object-cover object-bottom"
            loading="lazy"
            decoding="async"
          />

          {/* Banner Content */}
          <div className="relative z-10 p-6 sm:p-10 md:p-14 max-w-[580px] flex flex-col justify-center space-y-3 sm:space-y-4">
            <h3 className="text-[24px] sm:text-[32px] md:text-[38px] font-extrabold text-white leading-tight">
              Tragbare Gegenstromanlage iGarden Swim Jet — 1.000 W
            </h3>
            <p className="text-[14px] sm:text-[17px] text-white/95 font-medium leading-snug">
              1.000 W Spitzenleistung • 6 bis 10 Std. Akkulaufzeit • Für jeden Pool geeignet
            </p>
            <div className="pt-2 flex items-center gap-3">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigateToProduct?.();
                }}
                className="px-6 py-3 min-h-[44px] bg-white text-black font-bold text-[14px] sm:text-[15px] rounded-xl hover:bg-gray-100 active:scale-[0.99] transition-all shadow-md cursor-pointer uppercase"
              >
                Jetzt bestellen (209,00 €)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
