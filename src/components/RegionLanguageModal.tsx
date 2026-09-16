import React from 'react';
import { X, Check, Globe } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { MARKETS, LANGUAGES, MARKET_IDS, LANGUAGE_IDS } from '../i18n/config';
import { MarketId, LanguageId } from '../i18n/types';

interface RegionLanguageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegionLanguageModal: React.FC<RegionLanguageModalProps> = ({
  isOpen,
  onClose
}) => {
  const {
    currentMarket,
    currentLanguage,
    setMarket,
    setLanguage,
    setMarketAndLanguage,
    t
  } = useI18n();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      dir={currentLanguage.direction}
    >
      <div
        className="w-full max-w-[480px] max-h-[90vh] bg-white rounded-2xl shadow-2xl p-6 sm:p-7 relative overflow-y-auto border border-gray-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-[#0071E3]" />
            <h2 className="text-[17px] sm:text-[19px] font-bold text-gray-900">
              {t.common.regionAndLanguage}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors cursor-pointer"
            aria-label={t.common.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Section 1: LANGUAGE */}
          <div>
            <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-2.5 px-1">
              {t.common.language}
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {LANGUAGE_IDS.map((langId) => {
                const lang = LANGUAGES[langId];
                const isSelected = currentLanguage.id === langId;
                return (
                  <button
                    key={langId}
                    type="button"
                    onClick={() => {
                      setLanguage(langId);
                    }}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#0071E3] bg-blue-50/60 text-[#0071E3] font-bold shadow-xs'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-800'
                    }`}
                  >
                    <span className="text-[14px]">{lang.nativeName}</span>
                    {isSelected && <Check className="w-4 h-4 text-[#0071E3] shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Section 2: REGION */}
          <div>
            <h3 className="text-[12px] font-bold text-gray-400 uppercase tracking-wider mb-2.5 px-1">
              {t.common.region}
            </h3>
            <div className="space-y-2">
              {MARKET_IDS.map((mktId) => {
                const mkt = MARKETS[mktId];
                const isSelected = currentMarket.id === mktId;
                return (
                  <button
                    key={mktId}
                    type="button"
                    onClick={() => {
                      setMarket(mktId);
                    }}
                    className={`w-full flex items-center justify-between p-3.5 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#0071E3] bg-blue-50/60 text-[#0071E3] font-bold shadow-xs'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{mkt.flag}</span>
                      <div className="text-left">
                        <div className="text-[14px] font-semibold text-gray-900">
                          {mkt.name}
                        </div>
                        <div className="text-[12px] text-gray-500 font-normal">
                          {mkt.currency} ({mkt.symbol})
                        </div>
                      </div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-[#0071E3] shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Done Button */}
          <button
            type="button"
            onClick={onClose}
            className="w-full h-11 rounded-xl bg-[#0071E3] hover:bg-blue-700 text-white font-bold text-[14px] transition-colors cursor-pointer mt-2"
          >
            {t.common.continue}
          </button>
        </div>
      </div>
    </div>
  );
};
