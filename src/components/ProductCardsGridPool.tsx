import React from 'react';
import { useI18n } from '../i18n/I18nContext';

interface ProductCardsGridPoolProps {
  onNavigateToProduct?: (handle?: string) => void;
}

export const ProductCardsGridPool: React.FC<ProductCardsGridPoolProps> = ({ onNavigateToProduct }) => {
  const { currentLanguage, formatPrice } = useI18n();
  const isAr = currentLanguage.id === 'ar';

  return (
    <section className="py-6 sm:py-10 bg-white" dir={currentLanguage.direction}>
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Card 1: Série K */}
          <div
            onClick={() => onNavigateToProduct?.('robot-nettoyeur-de-piscine-sans-fil-igarden-serie-k')}
            className="relative bg-[#f2f3f5] rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden cursor-pointer group hover:shadow-md transition-shadow"
          >
            {/* Badge */}
            <span className="absolute top-4 right-4 rtl:right-auto rtl:left-4 sm:top-6 sm:right-6 rtl:sm:right-auto rtl:sm:left-6 px-2.5 py-1 rounded-sm bg-[#c6e8de]/60 text-[#00a65a] text-[11px] sm:text-[12px] font-bold uppercase tracking-wider">
              {isAr ? 'جديد' : 'New'}
            </span>

            {/* Header / Info */}
            <div className="space-y-3">
              <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold text-gray-900 leading-tight">
                {isAr ? (
                  <>روبوت تنظيف المسابح iGarden<br />فئة K Series</>
                ) : (
                  <>iGarden Pool Cleaner<br />K Series</>
                )}
              </h3>
              <p className="text-[13px] sm:text-[15px] text-gray-600 font-medium">
                {isAr ? 'شحنة واحدة تكفي أسبوعاً كاملاً.' : 'One charge lasts all week.'}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2.5 py-1 bg-black/5 rounded-sm text-[11px] sm:text-[12px] font-semibold text-gray-800">
                  {isAr ? 'تنظيف لاسلكي' : 'Cordless Cleaning'}
                </span>
                <span className="px-2.5 py-1 bg-black/5 rounded-sm text-[11px] sm:text-[12px] font-semibold text-gray-800">
                  {isAr ? 'توربو مضاعف 200%' : 'Turbo 200%'}
                </span>
                <span className="px-2.5 py-1 bg-black/5 rounded-sm text-[11px] sm:text-[12px] font-semibold text-gray-800">
                  {isAr ? 'حتى 8 ساعات بالجلسة' : '8H Max Per Session'}
                </span>
              </div>
            </div>

            {/* Image */}
            <div className="my-6 sm:my-8 flex items-center justify-center min-h-[160px] sm:min-h-[220px]">
              <img
                src="https://eu.store.igarden.ai/cdn/shop/files/65D8A0F6-EF9A-45A5-BCFE-B51F285C2A572_4.png?v=1782899669&width=600"
                alt={isAr ? "روبوت تنظيف المسابح فئة K" : "iGarden K Series Pool Cleaner"}
                className="max-h-[200px] sm:max-h-[260px] w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            {/* Footer */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-[22px] sm:text-[26px] font-extrabold text-gray-900">
                {formatPrice(799)}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigateToProduct?.('robot-nettoyeur-de-piscine-sans-fil-igarden-serie-k');
                }}
                className="px-5 py-2.5 bg-[#121212] text-white text-[13px] sm:text-[14px] font-bold rounded-lg hover:bg-black/80 transition-colors uppercase cursor-pointer border-none"
              >
                {isAr ? 'تسوق الآن' : 'Shop Now'}
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
                {isAr ? (
                  <>روبوت تنظيف المسابح iGarden<br />فئة KN Series</>
                ) : (
                  <>iGarden Pool Cleaner<br />KN Series</>
                )}
              </h3>
              <p className="text-[13px] sm:text-[15px] text-gray-600 font-medium">
                {isAr ? 'تصميم خفيف الوزن، وتنظيف فائق الفعالية.' : 'Lightweight design, high-powered cleaning.'}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2.5 py-1 bg-black/5 rounded-sm text-[11px] sm:text-[12px] font-semibold text-gray-800">
                  {isAr ? 'فرك رباعي 4x' : '4x Scrubbing'}
                </span>
                <span className="px-2.5 py-1 bg-black/5 rounded-sm text-[11px] sm:text-[12px] font-semibold text-gray-800">
                  {isAr ? 'ملاحة ثلاثية الأبعاد 3D' : '3D Path Planning'}
                </span>
                <span className="px-2.5 py-1 bg-black/5 rounded-sm text-[11px] sm:text-[12px] font-semibold text-gray-800">
                  {isAr ? 'شفط 18,000 لتر/س' : '18,000 LPH Suction'}
                </span>
              </div>
            </div>

            {/* Image */}
            <div className="my-6 sm:my-8 flex items-center justify-center min-h-[160px] sm:min-h-[220px]">
              <img
                src="https://eu.store.igarden.ai/cdn/shop/files/lQLPJx05WhemDjHNE4jNE4iw0Jd3Jfxte7MJ6RxRqHqwAA_5000_5000_1.png?v=1779694578&width=600"
                alt={isAr ? "روبوت تنظيف المسابح فئة KN" : "iGarden KN Series Pool Cleaner"}
                className="max-h-[200px] sm:max-h-[260px] w-auto object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>

            {/* Footer */}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-[22px] sm:text-[26px] font-extrabold text-gray-900">
                {formatPrice(599)}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onNavigateToProduct?.('igarden-robot-piscine-kn-series');
                }}
                className="px-5 py-2.5 bg-[#121212] text-white text-[13px] sm:text-[14px] font-bold rounded-lg hover:bg-black/80 transition-colors uppercase cursor-pointer border-none"
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

