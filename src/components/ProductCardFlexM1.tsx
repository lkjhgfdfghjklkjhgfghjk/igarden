import React from 'react';
import { useI18n } from '../i18n/I18nContext';

interface ProductCardFlexM1Props {
  onNavigateToProduct?: () => void;
}

export const ProductCardFlexM1: React.FC<ProductCardFlexM1Props> = ({ onNavigateToProduct }) => {
  const { currentLanguage, formatPrice } = useI18n();
  const isAr = currentLanguage.id === 'ar';

  return (
    <section className="py-8 sm:py-12 bg-white" dir={currentLanguage.direction}>
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
        <h2 className="text-[24px] sm:text-[32px] md:text-[36px] font-extrabold text-gray-900 mb-6 md:mb-8 leading-tight">
          {isAr ? 'منظفات المسابح الذكية' : 'Pool Cleaners'}
        </h2>

        {/* Full-width clickable banner */}
        <div
          onClick={onNavigateToProduct}
          className="relative w-full rounded-2xl overflow-hidden cursor-pointer shadow-sm group bg-[#f0f0f0] min-h-[290px] sm:min-h-[380px] md:min-h-[440px] flex items-center"
        >
          {/* PC Image */}
          <img
            src="https://eu.store.igarden.ai/cdn/shop/files/banner_10.png?v=1782805510&width=2000"
            alt={isAr ? "روبوت تنظيف المسابح iGarden M1-AI" : "iGarden M1-AI Series Pool Cleaning Robot"}
            className="hidden sm:block absolute inset-0 w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-[1.01]"
            loading="lazy"
          />
          {/* Mobile Image */}
          <img
            src="https://eu.store.igarden.ai/cdn/shop/files/banner_9.png?v=1782805494&width=800"
            alt={isAr ? "روبوت تنظيف المسابح iGarden M1-AI" : "iGarden M1-AI Series Pool Cleaning Robot"}
            className="block sm:hidden absolute inset-0 w-full h-full object-cover object-bottom"
            loading="lazy"
          />

          {/* Banner Content */}
          <div className="relative z-10 p-6 sm:p-10 md:p-14 max-w-[540px] flex flex-col justify-center space-y-3 sm:space-y-4">
            <h3 className="text-[26px] sm:text-[34px] md:text-[40px] font-extrabold text-white leading-tight">
              {isAr ? 'روبوت تنظيف المسابح iGarden M1-AI' : 'iGarden M1-AI Series Pool Cleaning Robot'}
            </h3>
            <p className="text-[14px] sm:text-[18px] text-white/95 font-medium leading-snug">
              {isAr ? 'تنظيف كامل في 20 دقيقة. راحة بال تامة لمدة 30 يوماً.' : '20-minute clean. 30 days hands-free.'}
            </p>
            <div className="flex items-baseline gap-2">
              <span className="text-[22px] sm:text-[28px] font-bold text-white tracking-tight">
                {formatPrice(1199)}
              </span>
            </div>
            <div className="pt-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigateToProduct?.();
                }}
                className="px-6 py-3 bg-white text-black font-bold text-[14px] sm:text-[15px] rounded-lg hover:bg-gray-100 transition-colors shadow-md cursor-pointer uppercase border-none"
              >
                {isAr ? 'تسوق الآن' : 'Shop Now'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

