import React from 'react';
import { getTrustBarItems } from '../homeData';
import { useI18n } from '../i18n/I18nContext';

export const TrustBar: React.FC = () => {
  const { t } = useI18n();
  const trustBarItems = getTrustBarItems(t);

  return (
    <div className="bg-white border-b border-gray-100 py-3.5 sm:py-4">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 flex items-center justify-between flex-wrap gap-y-3">
        {trustBarItems.map((item, idx) => (
          <div key={idx} className="w-1/2 sm:w-auto flex items-center gap-2 pr-2">
            <img referrerPolicy="no-referrer"
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
