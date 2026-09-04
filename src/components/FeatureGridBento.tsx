import React from 'react';
import { FEATURE_GRID_ITEMS } from '../homeData';

export const FeatureGridBento: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#f8f9fd]">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8">
        {/* Bento Grid Desktop (4 cols) / Mobile (2 cols) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {/* Card 0: Service VIP exclusif (Tall left on desktop) */}
          <div className="col-span-1 lg:col-span-1 lg:row-span-2 bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-shadow group text-center min-h-[220px] lg:min-h-[380px]">
            <div className="flex-1 flex items-center justify-center my-auto">
              <img
                src={FEATURE_GRID_ITEMS[0].image}
                alt={FEATURE_GRID_ITEMS[0].title}
                className="max-h-[140px] sm:max-h-[180px] w-auto object-contain group-hover:scale-105 transition-transform"
                loading="lazy"
              />
            </div>
            <h3 className="font-bold text-[15px] sm:text-[18px] text-gray-900 mt-3">
              {FEATURE_GRID_ITEMS[0].title}
            </h3>
          </div>

          {/* Card 1: Livraison gratuite et rapide */}
          <div className="col-span-1 bg-white rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-shadow group text-center min-h-[180px]">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-gray-900 mb-2">
              {FEATURE_GRID_ITEMS[1].title}
            </h3>
            <div className="flex-1 flex items-center justify-center">
              <img
                src={FEATURE_GRID_ITEMS[1].image}
                alt={FEATURE_GRID_ITEMS[1].title}
                className="max-h-[80px] sm:max-h-[100px] w-auto object-contain group-hover:scale-105 transition-transform"
                loading="lazy"
              />
            </div>
          </div>

          {/* Card 2: 2 ans+ de garantie */}
          <div className="col-span-1 bg-white rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-shadow group text-center min-h-[180px]">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-gray-900 mb-2">
              {FEATURE_GRID_ITEMS[2].title}
            </h3>
            <div className="flex-1 flex items-center justify-center">
              <img
                src={FEATURE_GRID_ITEMS[2].image}
                alt={FEATURE_GRID_ITEMS[2].title}
                className="max-h-[80px] sm:max-h-[100px] w-auto object-contain group-hover:scale-105 transition-transform"
                loading="lazy"
              />
            </div>
          </div>

          {/* Card 3: Méthodes de paiement sécurisées (Tall right on desktop) */}
          <div className="col-span-1 lg:col-span-1 lg:row-span-2 bg-white rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-shadow group text-center min-h-[220px] lg:min-h-[380px]">
            <h3 className="font-bold text-[15px] sm:text-[18px] text-gray-900 mb-3">
              {FEATURE_GRID_ITEMS[3].title}
            </h3>
            <div className="flex-1 flex items-center justify-center my-auto">
              <img
                src={FEATURE_GRID_ITEMS[3].image}
                alt={FEATURE_GRID_ITEMS[3].title}
                className="max-h-[140px] sm:max-h-[180px] w-auto object-contain group-hover:scale-105 transition-transform"
                loading="lazy"
              />
            </div>
          </div>

          {/* Card 4: Assistance 24h/24 et 7j/7 */}
          <div className="col-span-1 bg-white rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-shadow group text-center min-h-[180px]">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-gray-900 mb-2">
              {FEATURE_GRID_ITEMS[4].title}
            </h3>
            <div className="flex-1 flex items-center justify-center">
              <img
                src={FEATURE_GRID_ITEMS[4].image}
                alt={FEATURE_GRID_ITEMS[4].title}
                className="max-h-[80px] sm:max-h-[100px] w-auto object-contain group-hover:scale-105 transition-transform"
                loading="lazy"
              />
            </div>
          </div>

          {/* Card 5: Retours sous 30 jours */}
          <div className="col-span-1 bg-white rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-between shadow-xs hover:shadow-md transition-shadow group text-center min-h-[180px]">
            <h3 className="font-bold text-[14px] sm:text-[16px] text-gray-900 mb-2">
              {FEATURE_GRID_ITEMS[5].title}
            </h3>
            <div className="flex-1 flex items-center justify-center">
              <img
                src={FEATURE_GRID_ITEMS[5].image}
                alt={FEATURE_GRID_ITEMS[5].title}
                className="max-h-[80px] sm:max-h-[100px] w-auto object-contain group-hover:scale-105 transition-transform"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
