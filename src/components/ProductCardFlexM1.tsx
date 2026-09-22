import React from 'react';

interface ProductCardFlexM1Props {
  onNavigateToProduct?: () => void;
}

export const ProductCardFlexM1: React.FC<ProductCardFlexM1Props> = ({ onNavigateToProduct }) => {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
        <h2 className="text-[24px] sm:text-[32px] md:text-[36px] font-extrabold text-gray-900 mb-6 md:mb-8 leading-tight">
          Robots Nettoyeurs de Piscine
        </h2>

        {/* Full-width clickable banner */}
        <div
          onClick={onNavigateToProduct}
          className="relative w-full rounded-2xl overflow-hidden cursor-pointer shadow-sm group bg-[#f0f0f0] min-h-[290px] sm:min-h-[380px] md:min-h-[440px] flex items-center"
        >
          {/* PC Image */}
          <img
            src="https://eu.store.igarden.ai/cdn/shop/files/banner_10.png?v=1782805510&width=2000"
            alt="Robot Nettoyeur de Piscine iGarden Série M1-AI"
            className="hidden sm:block absolute inset-0 w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-[1.01]"
            loading="lazy"
          />
          {/* Mobile Image */}
          <img
            src="https://eu.store.igarden.ai/cdn/shop/files/banner_9.png?v=1782805494&width=800"
            alt="Robot Nettoyeur de Piscine iGarden Série M1-AI"
            className="block sm:hidden absolute inset-0 w-full h-full object-cover object-bottom"
            loading="lazy"
          />

          {/* Banner Content */}
          <div className="relative z-10 p-6 sm:p-10 md:p-14 max-w-[540px] flex flex-col justify-center space-y-3 sm:space-y-4">
            <h3 className="text-[26px] sm:text-[34px] md:text-[40px] font-extrabold text-white leading-tight">
              Robot Piscine iGarden Série M1-AI
            </h3>
            <p className="text-[14px] sm:text-[18px] text-white/95 font-medium leading-snug">
              Propre en 20 minutes. 30 jours sans aucune intervention manuelle.
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-[22px] sm:text-[28px] font-bold text-white tracking-tight">
                1 199,00 €
              </span>
            </div>
            <div className="pt-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigateToProduct?.();
                }}
                className="px-6 py-3 bg-white text-black font-bold text-[14px] sm:text-[15px] rounded-sm hover:bg-gray-100 transition-colors shadow-md cursor-pointer uppercase"
              >
                Acheter maintenant
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
