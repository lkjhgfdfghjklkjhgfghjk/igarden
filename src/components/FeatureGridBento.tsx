import React, { useState } from 'react';
import { Crown, Truck, ShieldCheck, CreditCard, Headphones, RotateCcw } from 'lucide-react';
import { getFeatureGridItems } from '../homeData';
import { useI18n } from '../i18n/I18nContext';

export const FeatureGridBento: React.FC = () => {
  const { t } = useI18n();
  const items = getFeatureGridItems(t);
  const [imgErrors, setImgErrors] = useState<{ [key: number]: boolean }>({});

  const icons = [
    <Crown className="w-10 h-10 text-[#0071E3]" />,
    <Truck className="w-8 h-8 text-[#0071E3]" />,
    <ShieldCheck className="w-8 h-8 text-[#0071E3]" />,
    <CreditCard className="w-10 h-10 text-[#0071E3]" />,
    <Headphones className="w-8 h-8 text-[#0071E3]" />,
    <RotateCcw className="w-8 h-8 text-[#0071E3]" />
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#f8f9fd]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
        {/* Bento Grid Desktop (4 cols) / Mobile (2 cols) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Card 0: Service VIP exclusif (Tall left on desktop) */}
          <div className="col-span-1 lg:col-span-1 lg:row-span-2 bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-shadow group text-center min-h-[220px] lg:min-h-[380px] border border-gray-100">
            <div className="flex-1 flex items-center justify-center my-auto">
              {!imgErrors[0] ? (
                <img referrerPolicy="no-referrer"
                  src={items[0].image}
                  alt={items[0].title}
                  className="max-h-[140px] sm:max-h-[180px] w-auto object-contain rounded-xl group-hover:scale-105 transition-transform"
                  loading="lazy"
                  onError={() => setImgErrors(prev => ({ ...prev, 0: true }))}
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center">
                  {icons[0]}
                </div>
              )}
            </div>
            <h3 className="font-bold text-[15px] sm:text-[18px] text-gray-900 mt-3">
              {items[0].title}
            </h3>
          </div>

          {/* Card 1: Kostenloser & schneller Versand */}
          <div className="col-span-1 bg-white rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-shadow group text-center min-h-[180px] border border-gray-100">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-gray-900 mb-2">
              {items[1].title}
            </h3>
            <div className="flex-1 flex items-center justify-center">
              {!imgErrors[1] ? (
                <img referrerPolicy="no-referrer"
                  src={items[1].image}
                  alt={items[1].title}
                  className="max-h-[80px] sm:max-h-[100px] w-auto object-contain rounded-xl group-hover:scale-105 transition-transform"
                  loading="lazy"
                  onError={() => setImgErrors(prev => ({ ...prev, 1: true }))}
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                  {icons[1]}
                </div>
              )}
            </div>
          </div>

          {/* Card 2: 2+ Jahre Garantie */}
          <div className="col-span-1 bg-white rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-shadow group text-center min-h-[180px] border border-gray-100">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-gray-900 mb-2">
              {items[2].title}
            </h3>
            <div className="flex-1 flex items-center justify-center">
              {!imgErrors[2] ? (
                <img referrerPolicy="no-referrer"
                  src={items[2].image}
                  alt={items[2].title}
                  className="max-h-[80px] sm:max-h-[100px] w-auto object-contain rounded-xl group-hover:scale-105 transition-transform"
                  loading="lazy"
                  onError={() => setImgErrors(prev => ({ ...prev, 2: true }))}
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                  {icons[2]}
                </div>
              )}
            </div>
          </div>

          {/* Card 3: Sichere Zahlungsmethoden (Tall right on desktop) */}
          <div className="col-span-1 lg:col-span-1 lg:row-span-2 bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-shadow group text-center min-h-[220px] lg:min-h-[380px] border border-gray-100">
            <h3 className="font-bold text-[15px] sm:text-[18px] text-gray-900 mb-3">
              {items[3].title}
            </h3>
            <div className="flex-1 flex items-center justify-center my-auto">
              {!imgErrors[3] ? (
                <img referrerPolicy="no-referrer"
                  src={items[3].image}
                  alt={items[3].title}
                  className="max-h-[140px] sm:max-h-[180px] w-auto object-contain rounded-xl group-hover:scale-105 transition-transform"
                  loading="lazy"
                  onError={() => setImgErrors(prev => ({ ...prev, 3: true }))}
                />
              ) : (
                <div className="w-24 h-24 rounded-full bg-blue-50 flex items-center justify-center">
                  {icons[3]}
                </div>
              )}
            </div>
          </div>

          {/* Card 4: 24/7 Kundenservice */}
          <div className="col-span-1 bg-white rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-shadow group text-center min-h-[180px] border border-gray-100">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-gray-900 mb-2">
              {items[4].title}
            </h3>
            <div className="flex-1 flex items-center justify-center">
              {!imgErrors[4] ? (
                <img referrerPolicy="no-referrer"
                  src={items[4].image}
                  alt={items[4].title}
                  className="max-h-[80px] sm:max-h-[100px] w-auto object-contain rounded-xl group-hover:scale-105 transition-transform"
                  loading="lazy"
                  onError={() => setImgErrors(prev => ({ ...prev, 4: true }))}
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                  {icons[4]}
                </div>
              )}
            </div>
          </div>

          {/* Card 5: 30 Tage Rückgaberecht */}
          <div className="col-span-1 bg-white rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-shadow group text-center min-h-[180px] border border-gray-100">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-gray-900 mb-2">
              {items[5].title}
            </h3>
            <div className="flex-1 flex items-center justify-center">
              {!imgErrors[5] ? (
                <img referrerPolicy="no-referrer"
                  src={items[5].image}
                  alt={items[5].title}
                  className="max-h-[80px] sm:max-h-[100px] w-auto object-contain rounded-xl group-hover:scale-105 transition-transform"
                  loading="lazy"
                  onError={() => setImgErrors(prev => ({ ...prev, 5: true }))}
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                  {icons[5]}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
