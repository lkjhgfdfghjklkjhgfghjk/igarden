import React from 'react';

interface ProductCardsGridPoolProps {
  onNavigateToProduct?: (handle?: string) => void;
}

export const ProductCardsGridPool: React.FC<ProductCardsGridPoolProps> = ({ onNavigateToProduct }) => {
  return (
    <section className="py-6 sm:py-10 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Card 1: Série K */}
          <div
            onClick={() => onNavigateToProduct?.('robot-nettoyeur-de-piscine-sans-fil-igarden-serie-k')}
            className="relative bg-[#f2f3f5] rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden cursor-pointer group hover:shadow-md transition-shadow"
          >
            {/* Badge */}
            <span className="absolute top-4 right-4 sm:top-6 sm:right-6 px-2.5 py-1 rounded-sm bg-[#c6e8de]/60 text-[#00a65a] text-[11px] sm:text-[12px] font-bold uppercase tracking-wider">
              Nouveau
            </span>

            {/* Header / Info */}
            <div className="space-y-3">
              <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold text-gray-900 leading-tight">
                Robot Piscine iGarden<br />Série K
              </h3>
              <p className="text-[13px] sm:text-[15px] text-gray-600 font-medium">
                Une seule charge pour toute la semaine.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2.5 py-1 bg-black/5 rounded-sm text-[11px] sm:text-[12px] font-semibold text-gray-800">
                  Nettoyage sans fil
                </span>
                <span className="px-2.5 py-1 bg-black/5 rounded-sm text-[11px] sm:text-[12px] font-semibold text-gray-800">
                  Mode Turbo 200%
                </span>
                <span className="px-2.5 py-1 bg-black/5 rounded-sm text-[11px] sm:text-[12px] font-semibold text-gray-800">
                  Jusqu'à 8h d'autonomie
                </span>
              </div>
            </div>

            {/* Image */}
            <div className="my-6 sm:my-8 flex items-center justify-center min-h-[160px] sm:min-h-[220px]">
              <img
                src="https://eu.store.igarden.ai/cdn/shop/files/65D8A0F6-EF9A-45A5-BCFE-B51F285C2A572_4.png?v=1782899669&width=600"
                alt="Robot Piscine iGarden Série K"
                className="max-h-[200px] sm:max-h-[260px] w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            {/* Footer */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-[22px] sm:text-[26px] font-extrabold text-gray-900">
                799,00 €
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigateToProduct?.('robot-nettoyeur-de-piscine-sans-fil-igarden-serie-k');
                }}
                className="px-5 py-2.5 bg-[#121212] text-white text-[13px] sm:text-[14px] font-bold rounded-sm hover:bg-black/80 transition-colors uppercase cursor-pointer"
              >
                Acheter maintenant
              </button>
            </div>
          </div>

          {/* Card 2: Série KN */}
          <div
            onClick={() => onNavigateToProduct?.('igarden-robot-piscine-kn-series')}
            className="relative bg-[#f2f3f5] rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden cursor-pointer group hover:shadow-md transition-shadow"
          >
            {/* Header / Info */}
            <div className="space-y-3">
              <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold text-gray-900 leading-tight">
                Robot Piscine iGarden<br />Série KN
              </h3>
              <p className="text-[13px] sm:text-[15px] text-gray-600 font-medium">
                Design ultra léger, puissance de filtration maximale.
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2.5 py-1 bg-black/5 rounded-sm text-[11px] sm:text-[12px] font-semibold text-gray-800">
                  Brossage 4x plus puissant
                </span>
                <span className="px-2.5 py-1 bg-black/5 rounded-sm text-[11px] sm:text-[12px] font-semibold text-gray-800">
                  Navigation 3D intelligente
                </span>
                <span className="px-2.5 py-1 bg-black/5 rounded-sm text-[11px] sm:text-[12px] font-semibold text-gray-800">
                  Aspiration 18 000 l/h
                </span>
              </div>
            </div>

            {/* Image */}
            <div className="my-6 sm:my-8 flex items-center justify-center min-h-[160px] sm:min-h-[220px]">
              <img
                src="https://eu.store.igarden.ai/cdn/shop/files/lQLPJx05WhemDjHNE4jNE4iw0Jd3Jfxte7MJ6RxRqHqwAA_5000_5000_1.png?v=1779694578&width=600"
                alt="Robot Piscine iGarden Série KN"
                className="max-h-[200px] sm:max-h-[260px] w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            {/* Footer */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-[22px] sm:text-[26px] font-extrabold text-gray-900">
                599,00 €
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigateToProduct?.('igarden-robot-piscine-kn-series');
                }}
                className="px-5 py-2.5 bg-[#121212] text-white text-[13px] sm:text-[14px] font-bold rounded-sm hover:bg-black/80 transition-colors uppercase cursor-pointer"
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
