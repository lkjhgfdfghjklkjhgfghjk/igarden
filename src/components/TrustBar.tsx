import React from 'react';
import { TRUST_BAR_ITEMS } from '../homeData';

export const TrustBar: React.FC = () => {
  return (
    <div className="bg-white border-b border-gray-100 py-3.5 sm:py-4">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 flex items-center justify-between flex-wrap gap-y-3">
        {TRUST_BAR_ITEMS.map((item, idx) => (
          <div key={idx} className="w-1/2 sm:w-auto flex items-center gap-2 pr-2">
            <img
              src={item.icon}
              alt={item.label}
              className="w-4 h-4 sm:w-5 sm:h-5 object-contain shrink-0"
              loading="lazy"
            />
            <span className="text-[12px] sm:text-[14px] font-semibold text-gray-900 tracking-tight">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
