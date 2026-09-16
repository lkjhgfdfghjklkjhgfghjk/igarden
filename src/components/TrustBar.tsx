import React from 'react';
import { useI18n } from '../i18n/I18nContext';

export const TrustBar: React.FC = () => {
  const { currentLanguage, t } = useI18n();

  const trustItems = [
    {
      icon: "https://eu.store.igarden.ai/cdn/shop/files/1_3e08f51a-d48e-491a-8e2b-f06b12fc1e60.svg?v=1772161678",
      label: t.trustBar.delivery,
    },
    {
      icon: "https://eu.store.igarden.ai/cdn/shop/files/2_4da1bcae-99f6-419b-a320-f1c65d6c8b9d.svg?v=1772161678",
      label: t.trustBar.warranty,
    },
    {
      icon: "https://eu.store.igarden.ai/cdn/shop/files/3_e6919a2e-4b68-45ec-9743-9bfa0fcde5e2.svg?v=1772161678",
      label: t.trustBar.returns,
    },
    {
      icon: "https://eu.store.igarden.ai/cdn/shop/files/4_f3152fc9-7685-455b-a78b-3e58dd2f0fa5.svg?v=1772161678",
      label: t.trustBar.securePayment,
    },
  ];

  return (
    <div className="bg-white border-b border-gray-100 py-3.5 sm:py-4" dir={currentLanguage.direction}>
      <div className="max-w-[1500px] mx-auto px-4 sm:px-8 flex items-center justify-between flex-wrap gap-y-3">
        {trustItems.map((item, idx) => (
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
