import React from 'react';
import { X, Check } from 'lucide-react';
import { useI18n, SupportedCountry } from '../i18n';

interface CountryDialogProps {
  isOpen: boolean;
  onClose: () => void;
  currentCountry?: string;
  onSelectCountry?: (country: string) => void;
}

interface CountryOption {
  code: SupportedCountry;
  name: string;
  nativeName: string;
  langLabel: string;
  currencyLabel: string;
  flagUrl: string;
  region: 'europe' | 'northAmerica' | 'asiaPacific';
}

const COUNTRY_OPTIONS: CountryOption[] = [
  // Europe
  {
    code: 'FR',
    name: 'France',
    nativeName: 'France',
    langLabel: 'Français',
    currencyLabel: '€ EUR',
    flagUrl: 'https://cdn.shopify.com/s/files/1/0811/0728/8282/files/France.png?v=1777531419',
    region: 'europe'
  },
  {
    code: 'DE',
    name: 'Germany',
    nativeName: 'Deutschland',
    langLabel: 'Deutsch',
    currencyLabel: '€ EUR',
    flagUrl: 'https://cdn.shopify.com/s/files/1/0811/0728/8282/files/Deutschland.png?v=1777531737',
    region: 'europe'
  },
  {
    code: 'AT',
    name: 'Austria',
    nativeName: 'Österreich',
    langLabel: 'Deutsch',
    currencyLabel: '€ EUR',
    flagUrl: 'https://cdn.shopify.com/static/images/flags/at.svg',
    region: 'europe'
  },
  {
    code: 'CH',
    name: 'Switzerland',
    nativeName: 'Schweiz / Suisse',
    langLabel: 'Deutsch / Français',
    currencyLabel: 'CHF',
    flagUrl: 'https://cdn.shopify.com/static/images/flags/ch.svg',
    region: 'europe'
  },
  {
    code: 'ES',
    name: 'Spain',
    nativeName: 'España',
    langLabel: 'Español',
    currencyLabel: '€ EUR',
    flagUrl: 'https://cdn.shopify.com/s/files/1/0811/0728/8282/files/Espana.png?v=1777531419',
    region: 'europe'
  },
  {
    code: 'IT',
    name: 'Italy',
    nativeName: 'Italia',
    langLabel: 'Italiano',
    currencyLabel: '€ EUR',
    flagUrl: 'https://cdn.shopify.com/s/files/1/0811/0728/8282/files/Italy.png?v=1777531419',
    region: 'europe'
  },
  {
    code: 'PT',
    name: 'Portugal',
    nativeName: 'Portugal',
    langLabel: 'Português',
    currencyLabel: '€ EUR',
    flagUrl: 'https://cdn.shopify.com/static/images/flags/pt.svg',
    region: 'europe'
  },
  {
    code: 'NL',
    name: 'Netherlands',
    nativeName: 'Nederland',
    langLabel: 'Nederlands',
    currencyLabel: '€ EUR',
    flagUrl: 'https://cdn.shopify.com/static/images/flags/nl.svg',
    region: 'europe'
  },
  {
    code: 'BE',
    name: 'Belgium',
    nativeName: 'Belgique / België',
    langLabel: 'Français / Nederlands',
    currencyLabel: '€ EUR',
    flagUrl: 'https://cdn.shopify.com/static/images/flags/be.svg',
    region: 'europe'
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    nativeName: 'United Kingdom',
    langLabel: 'English',
    currencyLabel: '£ GBP',
    flagUrl: 'https://cdn.shopify.com/static/images/flags/gb.svg',
    region: 'europe'
  },
  {
    code: 'EU_EN',
    name: 'Europe (English)',
    nativeName: 'Europe',
    langLabel: 'English',
    currencyLabel: '€ EUR',
    flagUrl: 'https://cdn.shopify.com/s/files/1/0811/0728/8282/files/eu_ade130c2-a62d-4383-b1ea-f828162296b1.png?v=1775555541',
    region: 'europe'
  },
  // North America
  {
    code: 'US',
    name: 'United States',
    nativeName: 'United States',
    langLabel: 'English',
    currencyLabel: '$ USD',
    flagUrl: 'https://cdn.shopify.com/s/files/1/0811/0728/8282/files/us-flag.png?v=1774427824',
    region: 'northAmerica'
  },
  {
    code: 'CA',
    name: 'Canada',
    nativeName: 'Canada',
    langLabel: 'English',
    currencyLabel: 'CA$ CAD',
    flagUrl: 'https://cdn.shopify.com/static/images/flags/ca.svg',
    region: 'northAmerica'
  },
  // Asia Pacific
  {
    code: 'AU',
    name: 'Australia',
    nativeName: 'Australia',
    langLabel: 'English',
    currencyLabel: 'A$ AUD',
    flagUrl: 'https://cdn.shopify.com/s/files/1/0811/0728/8282/files/au-flag.png?v=1774427824',
    region: 'asiaPacific'
  }
];

export const CountryDialog: React.FC<CountryDialogProps> = ({
  isOpen,
  onClose,
  onSelectCountry
}) => {
  const { country: currentContextCountry, setCountry, t } = useI18n();

  if (!isOpen) return null;

  const handleSelect = (option: CountryOption) => {
    setCountry(option.code);
    if (onSelectCountry) {
      onSelectCountry(option.code);
    }
    onClose();
  };

  const europeCountries = COUNTRY_OPTIONS.filter((c) => c.region === 'europe');
  const northAmericaCountries = COUNTRY_OPTIONS.filter((c) => c.region === 'northAmerica');
  const asiaPacificCountries = COUNTRY_OPTIONS.filter((c) => c.region === 'asiaPacific');

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[620px] max-h-[88vh] bg-white rounded-md shadow-2xl p-6 sm:p-8 relative overflow-y-auto border border-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-black hover:bg-gray-100 transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-[19px] sm:text-[21px] font-bold text-center text-gray-900 pb-3 mb-1">
          {t.countryDialog.title}
        </h2>
        <p className="text-[13px] text-gray-500 text-center mb-6 max-w-md mx-auto">
          {t.countryDialog.selectPrompt}
        </p>

        <div className="space-y-6">
          {/* Europe */}
          <div>
            <h3 className="text-[12px] font-bold text-gray-700 mb-3 uppercase tracking-wider px-1">
              {t.countryDialog.europe}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {europeCountries.map((c) => {
                const isSelected = currentContextCountry === c.code;
                return (
                  <button
                    key={c.code}
                    onClick={() => handleSelect(c)}
                    className={`flex items-center justify-between p-3 rounded-md transition-all text-left w-full cursor-pointer border ${
                      isSelected
                        ? 'bg-blue-50/80 border-[#0071E3] text-[#0071E3] shadow-xs'
                        : 'bg-[#F9FAFB] hover:bg-[#F3F4F6] border-gray-200/80 text-gray-900'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img referrerPolicy="no-referrer"
                        className="w-5 h-3.5 object-cover rounded-xs shrink-0 shadow-2xs"
                        src={c.flagUrl}
                        alt={c.name}
                        loading="lazy"
                      />
                      <div className="truncate">
                        <span className="font-semibold text-[13px] block truncate">{c.nativeName}</span>
                        <span className="text-[11px] text-gray-500 block truncate">
                          {c.langLabel} • {c.currencyLabel}
                        </span>
                      </div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-[#0071E3] shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* North America */}
          <div>
            <h3 className="text-[12px] font-bold text-gray-700 mb-3 uppercase tracking-wider px-1">
              {t.countryDialog.northAmerica}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {northAmericaCountries.map((c) => {
                const isSelected = currentContextCountry === c.code;
                return (
                  <button
                    key={c.code}
                    onClick={() => handleSelect(c)}
                    className={`flex items-center justify-between p-3 rounded-md transition-all text-left w-full cursor-pointer border ${
                      isSelected
                        ? 'bg-blue-50/80 border-[#0071E3] text-[#0071E3] shadow-xs'
                        : 'bg-[#F9FAFB] hover:bg-[#F3F4F6] border-gray-200/80 text-gray-900'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img referrerPolicy="no-referrer"
                        className="w-5 h-3.5 object-cover rounded-xs shrink-0 shadow-2xs"
                        src={c.flagUrl}
                        alt={c.name}
                        loading="lazy"
                      />
                      <div className="truncate">
                        <span className="font-semibold text-[13px] block truncate">{c.nativeName}</span>
                        <span className="text-[11px] text-gray-500 block truncate">
                          {c.langLabel} • {c.currencyLabel}
                        </span>
                      </div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-[#0071E3] shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Asia Pacific */}
          <div>
            <h3 className="text-[12px] font-bold text-gray-700 mb-3 uppercase tracking-wider px-1">
              {t.countryDialog.asiaPacific}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {asiaPacificCountries.map((c) => {
                const isSelected = currentContextCountry === c.code;
                return (
                  <button
                    key={c.code}
                    onClick={() => handleSelect(c)}
                    className={`flex items-center justify-between p-3 rounded-md transition-all text-left w-full cursor-pointer border ${
                      isSelected
                        ? 'bg-blue-50/80 border-[#0071E3] text-[#0071E3] shadow-xs'
                        : 'bg-[#F9FAFB] hover:bg-[#F3F4F6] border-gray-200/80 text-gray-900'
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img referrerPolicy="no-referrer"
                        className="w-5 h-3.5 object-cover rounded-xs shrink-0 shadow-2xs"
                        src={c.flagUrl}
                        alt={c.name}
                        loading="lazy"
                      />
                      <div className="truncate">
                        <span className="font-semibold text-[13px] block truncate">{c.nativeName}</span>
                        <span className="text-[11px] text-gray-500 block truncate">
                          {c.langLabel} • {c.currencyLabel}
                        </span>
                      </div>
                    </div>
                    {isSelected && <Check className="w-4 h-4 text-[#0071E3] shrink-0 ml-2" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
