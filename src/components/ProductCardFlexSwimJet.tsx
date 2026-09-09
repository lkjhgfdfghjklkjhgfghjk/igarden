import React from 'react';
import { useI18n } from '../i18n/I18nContext';

interface ProductCardFlexSwimJetProps {
  onNavigateToProduct?: () => void;
}

export const ProductCardFlexSwimJet: React.FC<ProductCardFlexSwimJetProps> = ({ onNavigateToProduct }) => {
  const { t } = useI18n();

  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
        <h2 className="text-[24px] sm:text-[32px] md:text-[36px] font-extrabold text-gray-900 mb-6 md:mb-8 leading-tight">
          {t.home?.swimJetBanner?.sectionTitle || "Tragbare Gegenstromanlage"}
        </h2>

        {/* Full-width clickable banner */}
        <div
          onClick={onNavigateToProduct}
          className="relative w-full rounded-2xl overflow-hidden cursor-pointer shadow-sm group bg-[#f0f0f0] min-h-[290px] sm:min-h-[380px] md:min-h-[440px] flex items-center"
        >
          {/* PC Image */}
          <img referrerPolicy="no-referrer"
            src="https://eu.store.igarden.ai/cdn/shop/files/swim-jet-x-banner-home-with-awards-pc.png?v=1781753367&width=2000"
            alt={t.home?.swimJetBanner?.productTitle || "Tragbare Gegenstromanlage iGarden Swim Jet — 1.000 W"}
            className="hidden sm:block absolute inset-0 w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-[1.01]"
            loading="lazy"
          />
          {/* Mobile Image */}
          <img referrerPolicy="no-referrer"
            src="https://eu.store.igarden.ai/cdn/shop/files/swim-jet-x-banner-home-with-awards-m.png?v=1781753366&width=800"
            alt={t.home?.swimJetBanner?.productTitle || "Tragbare Gegenstromanlage iGarden Swim Jet — 1.000 W"}
            className="block sm:hidden absolute inset-0 w-full h-full object-cover object-bottom"
            loading="lazy"
          />

          {/* Banner Content */}
          <div className="relative z-10 p-6 sm:p-10 md:p-14 max-w-[580px] flex flex-col justify-center space-y-3 sm:space-y-4">
            <h3 className="text-[24px] sm:text-[32px] md:text-[38px] font-extrabold text-white leading-tight">
              {t.home?.swimJetBanner?.productTitle || "Tragbare Gegenstromanlage iGarden Swim Jet — 1.000 W"}
            </h3>
            <p className="text-[14px] sm:text-[17px] text-white/95 font-medium leading-snug">
              {t.home?.swimJetBanner?.productDesc || "1.000 W Leistung • 6 bis 10 h Akkulaufzeit bei voller Leistung • Kompatibel mit allen Pools"}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigateToProduct?.();
                }}
                className="px-6 py-3 bg-white text-black font-bold text-[14px] sm:text-[15px] rounded-sm hover:bg-gray-100 transition-colors shadow-md cursor-pointer uppercase"
              >
                {t.home?.swimJetBanner?.orderCta || "Bestellen (209,00 €)"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
