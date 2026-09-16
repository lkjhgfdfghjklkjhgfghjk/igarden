import React from 'react';
import { useI18n } from '../i18n/I18nContext';
import { Globe, ArrowRight, Check, X, Shield, Truck } from 'lucide-react';
import { MARKETS, MARKET_IDS, LANGUAGES, LANGUAGE_IDS } from '../i18n/config';
import { MarketId, LanguageId } from '../i18n/types';

export const InitialMarketPopup: React.FC = () => {
  const {
    isInitialPopupOpen,
    currentMarket,
    currentLanguage,
    setMarket,
    setLanguage,
    confirmInitialPopup,
    closeInitialPopup,
    formatPrice,
    swimJetPrice,
    t
  } = useI18n();

  if (!isInitialPopupOpen) return null;

  const isAr = currentLanguage.id === 'ar';

  const marketPerks: Record<MarketId, { en: string; ar: string }> = {
    us: {
      en: 'Fast 2-Day US Express Shipping · Official 2-Year Warranty',
      ar: 'شحن سريع ومجاني داخل الولايات المتحدة · ضمان سنتين'
    },
    eu: {
      en: 'Fast European Delivery · VAT & Duties Included',
      ar: 'توصيل سريع لكافة دول أوروبا · شامل الضرائب والرسوم'
    },
    ae: {
      en: 'Express Delivery to Dubai & UAE · Full Local Warranty',
      ar: 'توصيل سريع إلى دبي وكافة الإمارات · ضمان محلي سنتين'
    },
    sa: {
      en: 'Express Shipping to Riyadh, Jeddah & all KSA · 2-Year Warranty',
      ar: 'شحن سريع إلى الرياض وجدة وكافة مدن المملكة · ضمان سنتين'
    }
  };

  const handleSelectMarket = (mktId: MarketId) => {
    setMarket(mktId);
  };

  const handleSelectLanguage = (langId: LanguageId) => {
    setLanguage(langId);
  };

  return (
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center p-3.5 sm:p-4 bg-black/65 backdrop-blur-sm animate-in fade-in duration-200 overflow-y-auto"
      onClick={closeInitialPopup}
      dir={currentLanguage.direction}
    >
      <div
        className="w-full max-w-[540px] my-auto bg-white rounded-2xl shadow-2xl p-5 sm:p-7 text-left rtl:text-right border border-gray-100 relative animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={closeInitialPopup}
          className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-1.5 rounded-full text-gray-400 hover:text-gray-900 hover:bg-gray-100 transition-colors cursor-pointer bg-transparent border-none"
          aria-label={t.common.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100 pr-8 rtl:pr-0 rtl:pl-8">
          <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0071E3] shrink-0">
            <Globe className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-[17px] sm:text-[19px] font-bold text-gray-900 leading-tight">
              {isAr ? 'اختر الدولة ولغة التصفح' : 'Choose your Country & Language'}
            </h2>
            <p className="text-[12px] sm:text-[13px] text-gray-500 mt-0.5">
              {isAr
                ? 'حدد وجهتك لعرض الأسعار وخيارات الشحن الدقيقة لموقعك'
                : 'Select your destination for local currency, pricing, and fast delivery options'}
            </p>
          </div>
        </div>

        {/* Language Selection Bar */}
        <div className="mb-4">
          <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
            {t.common.language}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {LANGUAGE_IDS.map((langId) => {
              const lang = LANGUAGES[langId];
              const isSelected = currentLanguage.id === langId;
              return (
                <button
                  key={langId}
                  type="button"
                  onClick={() => handleSelectLanguage(langId)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl border text-[13px] font-semibold transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#0071E3] bg-blue-50/70 text-[#0071E3] shadow-xs'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 bg-white'
                  }`}
                >
                  <span>{lang.nativeName}</span>
                  {isSelected && <Check className="w-4 h-4 text-[#0071E3] shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Country & Market Selection Grid */}
        <div className="mb-5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2">
            {t.common.region} / {t.common.currency}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {MARKET_IDS.map((mktId) => {
              const mkt = MARKETS[mktId];
              const isSelected = currentMarket.id === mktId;
              const perk = isAr ? marketPerks[mktId].ar : marketPerks[mktId].en;
              return (
                <button
                  key={mktId}
                  type="button"
                  onClick={() => handleSelectMarket(mktId)}
                  className={`flex flex-col justify-between p-3.5 rounded-xl border text-left rtl:text-right transition-all cursor-pointer ${
                    isSelected
                      ? 'border-[#0071E3] bg-blue-50/60 ring-2 ring-[#0071E3]/20 shadow-xs'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50/80 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl leading-none">{mkt.flag}</span>
                      <span className="font-bold text-[14px] text-gray-900 leading-tight">
                        {mkt.name}
                      </span>
                    </div>
                    {isSelected ? (
                      <div className="w-5 h-5 rounded-full bg-[#0071E3] flex items-center justify-center text-white shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full border border-gray-300 shrink-0" />
                    )}
                  </div>
                  <div className="flex items-center justify-between w-full mt-1 pt-1 border-t border-gray-100/80">
                    <span className="text-[12px] font-bold text-[#0071E3]">
                      {mkt.currency} ({mkt.symbol})
                    </span>
                    <span className="text-[11px] text-gray-500 line-clamp-1">
                      {isAr ? 'شحن سريع مجاني' : 'Free Shipping'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Active Preview Pill */}
        <div className="bg-[#F8F9FD] rounded-xl p-3 mb-4 border border-blue-100/60 flex items-center justify-between text-[12px] sm:text-[13px]">
          <div className="flex items-center gap-2 text-gray-700">
            <Truck className="w-4 h-4 text-[#0071E3] shrink-0" />
            <span>
              {isAr ? 'السباحة ضد التيار 1000W:' : 'Swim Jet 1,000 W:'}{' '}
              <strong className="text-gray-900 font-extrabold">{formatPrice(swimJetPrice.price)}</strong>
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-emerald-600 font-semibold">
            <Shield className="w-3.5 h-3.5 shrink-0" />
            <span>{t.trustBar.warranty}</span>
          </div>
        </div>

        {/* Confirm Action Button */}
        <button
          type="button"
          onClick={confirmInitialPopup}
          className="w-full h-12 rounded-xl bg-[#0071E3] hover:bg-blue-700 text-white font-bold text-[15px] shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer border-none"
        >
          <span>
            {isAr
              ? `متابعة التسوق (${currentMarket.name} · ${currentMarket.currency})`
              : `Continue to Store (${currentMarket.name} · ${currentMarket.currency})`}
          </span>
          <ArrowRight className={`w-4 h-4 shrink-0 ${isAr ? 'rotate-180' : ''}`} />
        </button>
      </div>
    </div>
  );
};

